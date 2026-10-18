import { getStore } from "@netlify/blobs";

function json(status, body) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS"
    }
  });
}

export default async (req, context) => {
  if (req.method === "OPTIONS") {
    return json(204, {});
  }

  const slug = decodeURIComponent(context.params?.slug || "").trim();
  if (!slug || slug.length > 300) {
    return json(400, { error: "Invalid article slug" });
  }

  const store = getStore({ name: "article-views", consistency: "strong" });

  if (req.method === "GET") {
    const views = Number((await store.get(slug)) || 0);
    return json(200, { slug, views });
  }

  if (req.method === "POST") {
    let delta = 1;
    const contentType = req.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      try {
        const body = await req.json();
        const requested = Number(body?.delta);
        if (Number.isFinite(requested)) {
          delta = Math.max(1, Math.min(80, Math.floor(requested)));
        }
      } catch {
        delta = 1;
      }
    }
    const current = Number((await store.get(slug)) || 0);
    const views = current + delta;
    await store.set(slug, String(views));
    return json(200, { slug, views });
  }

  return json(405, { error: "Method not allowed" });
};

export const config = {
  path: "/api/views/:slug"
};
