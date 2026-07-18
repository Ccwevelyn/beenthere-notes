import http from "node:http";
import crypto from "node:crypto";
import { Pool } from "pg";

const port = Number(process.env.PORT || 8787);
const databaseUrl = process.env.DATABASE_URL;
const allowedOrigins = (process.env.ALLOWED_ORIGINS || "http://localhost:4321")
  .split(",")
  .map((value) => value.trim().replace(/\/$/, ""));
const pool = databaseUrl
  ? new Pool({
      connectionString: databaseUrl,
      ssl: databaseUrl.includes("localhost") ? false : { rejectUnauthorized: false }
    })
  : null;

let schemaReady = false;

async function ensureSchema() {
  if (!pool) throw new Error("DATABASE_URL is not configured");
  if (schemaReady) return;
  await pool.query(`
    CREATE TABLE IF NOT EXISTS article_views (
      slug TEXT PRIMARY KEY,
      views BIGINT NOT NULL DEFAULT 0,
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `);
  schemaReady = true;
}

function corsHeaders(req) {
  const origin = req.headers.origin;
  const allowed = origin && allowedOrigins.includes(origin) ? origin : allowedOrigins[0];
  return {
    "Access-Control-Allow-Origin": allowed,
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Vary": "Origin"
  };
}

function sendJson(req, res, status, body) {
  res.writeHead(status, {
    ...corsHeaders(req),
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store"
  });
  res.end(JSON.stringify(body));
}

function parseCookies(req) {
  return Object.fromEntries(
    (req.headers.cookie || "")
      .split(";")
      .filter(Boolean)
      .map((item) => {
        const [key, ...rest] = item.trim().split("=");
        return [key, decodeURIComponent(rest.join("="))];
      })
  );
}

function renderOAuthResult(status, payload) {
  const message = JSON.stringify(`authorization:github:${status}:${JSON.stringify(payload)}`);
  return `<!doctype html>
<html><head><meta charset="utf-8"><title>BeenThere Notes login</title></head>
<body><p>正在返回 BeenThere Notes 控制台…</p>
<script>
  const receiveMessage = (event) => {
    window.opener.postMessage(${message}, event.origin);
    window.removeEventListener("message", receiveMessage, false);
  };
  window.addEventListener("message", receiveMessage, false);
  window.opener.postMessage("authorizing:github", "*");
</script></body></html>`;
}

async function handleOAuth(req, res, url) {
  const clientId = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;
  const apiBaseUrl = (process.env.API_BASE_URL || `http://localhost:${port}`).replace(/\/$/, "");
  const redirectUri = `${apiBaseUrl}/auth/callback`;

  if (!clientId || !clientSecret) {
    sendJson(req, res, 503, { error: "GitHub OAuth is not configured" });
    return;
  }

  if (url.pathname === "/auth") {
    const state = crypto.randomBytes(24).toString("hex");
    const authorizeUrl = new URL("https://github.com/login/oauth/authorize");
    authorizeUrl.searchParams.set("client_id", clientId);
    authorizeUrl.searchParams.set("redirect_uri", redirectUri);
    authorizeUrl.searchParams.set("scope", "repo,user");
    authorizeUrl.searchParams.set("state", state);
    res.writeHead(302, {
      Location: authorizeUrl.toString(),
      "Set-Cookie": `oauth_state=${state}; Path=/auth; HttpOnly; Secure; SameSite=Lax; Max-Age=600`
    });
    res.end();
    return;
  }

  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const cookies = parseCookies(req);
  if (!code || !state || state !== cookies.oauth_state) {
    res.writeHead(400, { "Content-Type": "text/html; charset=utf-8" });
    res.end(renderOAuthResult("error", { message: "Invalid OAuth state" }));
    return;
  }

  const tokenResponse = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "User-Agent": "BeenThere-Notes"
    },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: clientSecret,
      code,
      redirect_uri: redirectUri
    })
  });
  const tokenData = await tokenResponse.json();
  const success = tokenResponse.ok && tokenData.access_token;
  res.writeHead(success ? 200 : 401, {
    "Content-Type": "text/html; charset=utf-8",
    "Set-Cookie": "oauth_state=; Path=/auth; HttpOnly; Secure; SameSite=Lax; Max-Age=0"
  });
  res.end(
    renderOAuthResult(
      success ? "success" : "error",
      success
        ? { token: tokenData.access_token, provider: "github" }
        : { message: tokenData.error_description || "GitHub login failed" }
    )
  );
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url || "/", `http://${req.headers.host}`);

  if (req.method === "OPTIONS") {
    res.writeHead(204, corsHeaders(req));
    res.end();
    return;
  }

  try {
    if (url.pathname === "/health") {
      sendJson(req, res, 200, { ok: true });
      return;
    }

    if (url.pathname === "/auth" || url.pathname === "/auth/callback") {
      await handleOAuth(req, res, url);
      return;
    }

    if (url.pathname === "/api/stats" && req.method === "GET") {
      await ensureSchema();
      const result = await pool.query("SELECT slug, views FROM article_views ORDER BY views DESC");
      const views = Object.fromEntries(result.rows.map((row) => [row.slug, Number(row.views)]));
      sendJson(req, res, 200, { views });
      return;
    }

    if (url.pathname.startsWith("/api/views/") && ["GET", "POST"].includes(req.method)) {
      const slug = decodeURIComponent(url.pathname.slice("/api/views/".length));
      if (!slug || slug.length > 300) {
        sendJson(req, res, 400, { error: "Invalid article slug" });
        return;
      }
      await ensureSchema();
      const result = req.method === "POST"
        ? await pool.query(
            `INSERT INTO article_views (slug, views) VALUES ($1, 1)
             ON CONFLICT (slug) DO UPDATE
             SET views = article_views.views + 1, updated_at = NOW()
             RETURNING views`,
            [slug]
          )
        : await pool.query("SELECT views FROM article_views WHERE slug = $1", [slug]);
      sendJson(req, res, 200, { slug, views: Number(result.rows[0]?.views || 0) });
      return;
    }

    sendJson(req, res, 404, { error: "Not found" });
  } catch (error) {
    console.error(error);
    sendJson(req, res, 500, { error: "Internal server error" });
  }
});

server.listen(port, () => {
  console.log(`BeenThere Notes API listening on ${port}`);
});
