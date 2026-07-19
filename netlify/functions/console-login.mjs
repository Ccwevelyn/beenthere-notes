import crypto from "node:crypto";
import { siteOrigin } from "../lib/console-session.mjs";

export default async (req) => {
  const clientId = process.env.GITHUB_CLIENT_ID;
  if (!clientId) {
    return new Response("GITHUB_CLIENT_ID is not configured", { status: 503 });
  }

  const url = new URL(req.url);
  const next = url.searchParams.get("next") || "/zh/console/";
  const origin = siteOrigin(req);
  const redirectUri = `${origin}/auth/callback`;
  const state = crypto.randomBytes(24).toString("hex");
  const authorizeUrl = new URL("https://github.com/login/oauth/authorize");
  authorizeUrl.searchParams.set("client_id", clientId);
  authorizeUrl.searchParams.set("redirect_uri", redirectUri);
  authorizeUrl.searchParams.set("scope", "read:user");
  authorizeUrl.searchParams.set("state", state);

  const headers = new Headers({ Location: authorizeUrl.toString() });
  headers.append(
    "Set-Cookie",
    `console_oauth_state=${state}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=600`
  );
  headers.append(
    "Set-Cookie",
    `console_oauth_next=${encodeURIComponent(next)}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=600`
  );

  return new Response(null, { status: 302, headers });
};

export const config = {
  path: "/auth/console"
};
