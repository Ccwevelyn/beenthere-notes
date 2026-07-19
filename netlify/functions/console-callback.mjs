import {
  allowedLogins,
  createSessionCookie,
  parseCookies,
  siteOrigin
} from "../lib/console-session.mjs";

export default async (req) => {
  const clientId = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;
  const url = new URL(req.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const cookies = parseCookies(req.headers.get("cookie"));
  const next = cookies.console_oauth_next
    ? decodeURIComponent(cookies.console_oauth_next)
    : "/zh/console/";

  const clearHeaders = () => {
    const headers = new Headers({ "Content-Type": "text/html; charset=utf-8" });
    headers.append(
      "Set-Cookie",
      "console_oauth_state=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0"
    );
    headers.append(
      "Set-Cookie",
      "console_oauth_next=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0"
    );
    return headers;
  };

  const fail = (message) => {
    const headers = clearHeaders();
    return new Response(
      `<!doctype html><html><body><p>${message}</p><p><a href="${next}">返回</a></p></body></html>`,
      { status: 401, headers }
    );
  };

  if (!clientId || !clientSecret) return fail("GitHub OAuth is not configured");
  if (!code || !state || state !== cookies.console_oauth_state) return fail("Invalid OAuth state");

  const redirectUri = `${siteOrigin(req)}/auth/console/callback`;
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
  if (!tokenResponse.ok || !tokenData.access_token) {
    return fail(tokenData.error_description || tokenData.error || "GitHub login failed");
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
    return fail("此 GitHub 账号无权访问浏览量面板。");
  }

  const headers = clearHeaders();
  headers.set("Location", next.startsWith("/") ? next : "/zh/console/");
  headers.append("Set-Cookie", createSessionCookie(user.login));
  return new Response(null, { status: 302, headers });
};

export const config = {
  path: "/auth/console/callback"
};
