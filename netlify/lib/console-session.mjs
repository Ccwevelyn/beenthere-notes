import crypto from "node:crypto";

const COOKIE = "console_session";
const MAX_AGE = 60 * 60 * 24 * 7;

export function siteOrigin(req) {
  const proto = req.headers.get("x-forwarded-proto") || "https";
  const host = req.headers.get("x-forwarded-host") || req.headers.get("host");
  return `${proto}://${host}`.replace(/\/$/, "");
}

export function parseCookies(header) {
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

function secret() {
  return process.env.CONSOLE_SESSION_SECRET || process.env.GITHUB_CLIENT_SECRET || "";
}

function sign(payload) {
  return crypto.createHmac("sha256", secret()).update(payload).digest("base64url");
}

export function allowedLogins() {
  const raw = process.env.CONSOLE_GITHUB_USERS || process.env.GITHUB_OWNER || "Ccwevelyn";
  return raw
    .split(",")
    .map((item) => item.trim().toLowerCase())
    .filter(Boolean);
}

export function createSessionCookie(login) {
  const body = Buffer.from(
    JSON.stringify({ u: login, exp: Date.now() + MAX_AGE * 1000 }),
    "utf8"
  ).toString("base64url");
  const value = `${body}.${sign(body)}`;
  return `${COOKIE}=${value}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${MAX_AGE}`;
}

export function clearSessionCookie() {
  return `${COOKIE}=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0`;
}

export function readSession(req) {
  if (!secret()) return null;
  const cookies = parseCookies(req.headers.get("cookie"));
  const raw = cookies[COOKIE];
  if (!raw) return null;
  const [body, signature] = raw.split(".");
  if (!body || !signature || sign(body) !== signature) return null;
  try {
    const data = JSON.parse(Buffer.from(body, "base64url").toString("utf8"));
    if (!data?.u || !data?.exp || Date.now() > Number(data.exp)) return null;
    const login = String(data.u).toLowerCase();
    if (!allowedLogins().includes(login)) return null;
    return { login: data.u };
  } catch {
    return null;
  }
}
