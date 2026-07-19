import { clearSessionCookie, readSession } from "../lib/console-session.mjs";

function json(status, body, cookie) {
  const headers = new Headers({
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store"
  });
  if (cookie) headers.append("Set-Cookie", cookie);
  return new Response(JSON.stringify(body), { status, headers });
}

export default async (req) => {
  if (req.method === "DELETE") {
    return json(200, { ok: true }, clearSessionCookie());
  }

  if (req.method !== "GET") {
    return json(405, { error: "Method not allowed" });
  }

  const session = readSession(req);
  if (!session) return json(401, { ok: false });
  return json(200, { ok: true, user: session.login });
};

export const config = {
  path: "/api/console-session"
};
