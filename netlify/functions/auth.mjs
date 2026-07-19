import crypto from "node:crypto";

function siteOrigin(req) {
  const proto = req.headers.get("x-forwarded-proto") || "https";
  const host = req.headers.get("x-forwarded-host") || req.headers.get("host");
  return `${proto}://${host}`.replace(/\/$/, "");
}

export default async (req) => {
  const clientId = process.env.GITHUB_CLIENT_ID;
  if (!clientId) {
    return new Response(JSON.stringify({ error: "GITHUB_CLIENT_ID is not configured" }), {
      status: 503,
      headers: { "Content-Type": "application/json; charset=utf-8" }
    });
  }

  const origin = siteOrigin(req);
  const redirectUri = `${origin}/auth/callback`;
  const state = crypto.randomBytes(24).toString("hex");
  const authorizeUrl = new URL("https://github.com/login/oauth/authorize");
  authorizeUrl.searchParams.set("client_id", clientId);
  authorizeUrl.searchParams.set("redirect_uri", redirectUri);
  authorizeUrl.searchParams.set("scope", "repo,user");
  authorizeUrl.searchParams.set("state", state);

  return new Response(null, {
    status: 302,
    headers: {
      Location: authorizeUrl.toString(),
      "Set-Cookie": `oauth_state=${state}; Path=/auth; HttpOnly; Secure; SameSite=Lax; Max-Age=600`
    }
  });
};
