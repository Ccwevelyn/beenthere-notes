import { getStore } from "@netlify/blobs";
import { readSession } from "../lib/console-session.mjs";

function json(status, body) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store"
    }
  });
}

export default async (req) => {
  if (req.method === "OPTIONS") {
    return json(204, {});
  }
  if (req.method !== "GET") {
    return json(405, { error: "Method not allowed" });
  }

  if (!readSession(req)) {
    return json(401, { error: "Unauthorized" });
  }

  const store = getStore("article-views");
  const listed = await store.list();
  const views = {};

  for (const blob of listed.blobs || []) {
    const value = await store.get(blob.key);
    views[blob.key] = Number(value || 0);
  }

  return json(200, { views });
};

export const config = {
  path: "/api/stats"
};
