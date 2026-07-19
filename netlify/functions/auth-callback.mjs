function siteOrigin(req) {
  const proto = req.headers.get("x-forwarded-proto") || "https";
  const host = req.headers.get("x-forwarded-host") || req.headers.get("host");
  return `${proto}://${host}`.replace(/\/$/, "");
}

function parseCookies(header) {
  return Object.fromEntries(
    (header || "")
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

export default async (req) => {
  const clientId = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;
  const url = new URL(req.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const cookies = parseCookies(req.headers.get("cookie"));
  const clearCookie = "oauth_state=; Path=/auth; HttpOnly; Secure; SameSite=Lax; Max-Age=0";

  if (!clientId || !clientSecret) {
    return new Response(renderOAuthResult("error", { message: "GitHub OAuth is not configured" }), {
      status: 503,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Set-Cookie": clearCookie
      }
    });
  }

  if (!code || !state || state !== cookies.oauth_state) {
    return new Response(renderOAuthResult("error", { message: "Invalid OAuth state" }), {
      status: 400,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Set-Cookie": clearCookie
      }
    });
  }

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
  const tokenData = await tokenResponse.json();
  const success = tokenResponse.ok && tokenData.access_token;

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
        "Set-Cookie": clearCookie
      }
    }
  );
};
