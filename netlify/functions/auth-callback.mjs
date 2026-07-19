import {
  allowedLogins,
  createSessionCookie,
  parseCookies,
  siteOrigin
} from "../lib/console-session.mjs";

function renderOAuthResult(status, payload) {
  const message = JSON.stringify(`authorization:github:${status}:${JSON.stringify(payload)}`);
  return `<!doctype html>
<html><head><meta charset="utf-8"><title>BeenThere Notes login</title></head>
<body><p>正在返回编辑器…</p>
<script>
  const receiveMessage = (event) => {
    window.opener.postMessage(${message}, event.origin);
    window.removeEventListener("message", receiveMessage, false);
  };
  window.addEventListener("message", receiveMessage, false);
  window.opener.postMessage("authorizing:github", "*");
</script></body></html>`;
}

function clearConsoleCookies(headers) {
  headers.append(
    "Set-Cookie",
    "console_oauth_state=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0"
  );
  headers.append(
    "Set-Cookie",
    "console_oauth_next=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0"
  );
}

async function exchangeCode(req, code) {
  const clientId = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;
  const redirectUri = `${siteOrigin(req)}/auth/callback`;
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
  return tokenResponse.json();
}

export default async (req) => {
  const clientId = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;
  const url = new URL(req.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const cookies = parseCookies(req.headers.get("cookie"));
  const isConsole = Boolean(state && state === cookies.console_oauth_state);
  const isCms = Boolean(state && state === cookies.oauth_state);

  if (!clientId || !clientSecret) {
    if (isConsole) {
      const headers = new Headers({ "Content-Type": "text/html; charset=utf-8" });
      clearConsoleCookies(headers);
      return new Response("<p>GitHub OAuth is not configured</p>", { status: 503, headers });
    }
    return new Response(renderOAuthResult("error", { message: "GitHub OAuth is not configured" }), {
      status: 503,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Set-Cookie": "oauth_state=; Path=/auth; HttpOnly; Secure; SameSite=Lax; Max-Age=0"
      }
    });
  }

  if (!code || !state || (!isConsole && !isCms)) {
    if (cookies.console_oauth_state) {
      const headers = new Headers({ "Content-Type": "text/html; charset=utf-8" });
      clearConsoleCookies(headers);
      return new Response("<p>Invalid OAuth state</p><p><a href='/zh/console/'>返回</a></p>", {
        status: 400,
        headers
      });
    }
    return new Response(renderOAuthResult("error", { message: "Invalid OAuth state" }), {
      status: 400,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Set-Cookie": "oauth_state=; Path=/auth; HttpOnly; Secure; SameSite=Lax; Max-Age=0"
      }
    });
  }

  const tokenData = await exchangeCode(req, code);

  if (isConsole) {
    const next = cookies.console_oauth_next
      ? decodeURIComponent(cookies.console_oauth_next)
      : "/zh/console/";
    const headers = new Headers();
    clearConsoleCookies(headers);

    if (!tokenData.access_token) {
      headers.set("Content-Type", "text/html; charset=utf-8");
      return new Response(
        `<p>${tokenData.error_description || tokenData.error || "GitHub login failed"}</p><p><a href="${next}">返回</a></p>`,
        { status: 401, headers }
      );
    }

    const userResponse = await fetch("https://api.github.com/user", {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${tokenData.access_token}`,
        "User-Agent": "BeenThere-Notes"
      }
    });
    const user = await userResponse.json();
    const login = String(user.login || "").toLowerCase();
    if (!userResponse.ok || !login || !allowedLogins().includes(login)) {
      headers.set("Content-Type", "text/html; charset=utf-8");
      return new Response(
        `<p>此 GitHub 账号无权访问浏览量面板。</p><p><a href="${next}">返回</a></p>`,
        { status: 401, headers }
      );
    }

    headers.set("Location", next.startsWith("/") ? next : "/zh/console/");
    headers.append("Set-Cookie", createSessionCookie(user.login));
    return new Response(null, { status: 302, headers });
  }

  const success = Boolean(tokenData.access_token);
  return new Response(
    renderOAuthResult(
      success ? "success" : "error",
      success
        ? { token: tokenData.access_token, provider: "github" }
        : { message: tokenData.error_description || tokenData.error || "GitHub login failed" }
    ),
    {
      status: success ? 200 : 401,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Set-Cookie": "oauth_state=; Path=/auth; HttpOnly; Secure; SameSite=Lax; Max-Age=0"
      }
    }
  );
};
