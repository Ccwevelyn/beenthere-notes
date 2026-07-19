/**
 * Improve media in rendered Markdown:
 * - Yuque/CDN images often need referrerpolicy=no-referrer
 * - make images responsive-friendly
 */
export function rehypeMedia() {
  return (tree) => {
    walk(tree);
  };
}

function walk(node) {
  if (!node || typeof node !== "object") return;

  if (node.type === "element" && node.tagName === "img") {
    node.properties ??= {};
    node.properties.referrerPolicy = "no-referrer";
    node.properties.loading = node.properties.loading || "lazy";
    node.properties.decoding = "async";
    if (!node.properties.alt) node.properties.alt = "";
  }

  if (Array.isArray(node.children)) {
    for (const child of node.children) walk(child);
  }
}
