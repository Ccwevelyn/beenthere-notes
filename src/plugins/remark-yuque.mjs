/**
 * Clean Yuque-exported Markdown so paste renders cleanly:
 * - keep yellow highlights as <mark>
 * - unwrap other font tags
 * - repair broken **bold** (spaces inside markers, **** nests)
 * - turn "1. **Section**" into headings for TOC
 * - compact Yuque H3–H6 outlines onto H2+
 * - restore outline numbers (1 / 1.1 / 1.1.1) Yuque shows but does not export
 *
 * Must re-parse after string cleanup: remark plugins run after the first parse,
 * so editing file.value alone would not change the rendered tree.
 */
import { fromMarkdown } from "mdast-util-from-markdown";
import { gfmFromMarkdown } from "mdast-util-gfm";
import { gfm } from "micromark-extension-gfm";
import { visit } from "unist-util-visit";

function unwrapFonts(md) {
  let prev;
  do {
    prev = md;
    md = md.replace(/<font([^>]*)>([\s\S]*?)<\/font>/gi, (_, attrs, inner) => {
      if (/background-color\s*:/i.test(attrs)) {
        return `<mark>${inner}</mark>`;
      }
      return inner;
    });
  } while (md !== prev);
  return md;
}

function repairBold(md) {
  // **a****b** → **ab**  (Yuque nests bold around each font span)
  while (md.includes("****")) {
    md = md.replace(/\*\*\*\*/g, "");
  }

  // **<mark>x</mark>** → <mark>**x**</mark>  (HTML inside ** breaks CommonMark emphasis)
  md = md.replace(/\*\*<mark>([\s\S]*?)<\/mark>\*\*/gi, "<mark>**$1**</mark>");

  // ** spaced content ** → **spaced content** (CommonMark forbids spaces at edges)
  // Keep edge spaces outside the markers: **Identify **and → **Identify** and
  // Also fixes: concern** how** → concern **how**
  md = md.replace(/\*\*([^*\n]+?)\*\*/g, (_, inner) => {
    const leading = inner.match(/^\s*/)?.[0] ?? "";
    const trailing = inner.match(/\s*$/)?.[0] ?? "";
    const trimmed = inner.trim();
    if (!trimmed) return `${leading}${trailing}`;
    return `${leading}**${trimmed}**${trailing}`;
  });

  // ）**指 → ）** 指  (closing ** after punctuation is not right-flanking when glued to a word)
  md = md.replace(/(\p{P})\*\*(?=[\p{L}\p{N}])/gu, "$1** ");

  // </mark>Determines → </mark> Determines
  md = md.replace(/(<\/mark>)(?=[\p{L}\p{N}])/gu, "$1 ");

  return md;
}

function cleanYuque(md) {
  md = md.replace(/<!--[\s\S]*?-->/g, "");
  md = unwrapFonts(md);
  md = md.replace(/<\/?(?:u|span)[^>]*>/gi, "");
  md = repairBold(md);
  // Numbered Yuque sections → headings at H3 (same band as typical Yuque chapters).
  // Only a single bold run on the line (e.g. `1. **Scope**`), not answer lists like
  // `1. **Market** **Demand**` or bullets that belong under a question heading.
  md = md.replace(/^(?:\d+)\.\s+\*\*([^*]+?)\*\*\s*$/gm, "### $1");
  md = md.replace(/[ \t]+\n/g, "\n");
  return md;
}

/** Map used heading levels onto consecutive H2… so Yuque H3–H6 outlines become readable. */
function normalizeHeadingDepths(tree) {
  const depths = [];
  visit(tree, "heading", (node) => {
    depths.push(node.depth);
  });
  if (!depths.length) return;

  const unique = [...new Set(depths)].sort((a, b) => a - b);
  const mapping = new Map();
  unique.forEach((depth, index) => {
    mapping.set(depth, Math.min(6, 2 + index));
  });

  visit(tree, "heading", (node) => {
    node.depth = mapping.get(node.depth) ?? node.depth;
  });
}

/** Unwrap emphasis wrappers that only add noise inside headings. */
function unwrapHeadingStrong(tree) {
  visit(tree, "heading", (node) => {
    let guard = 0;
    while (
      guard++ < 5 &&
      node.children?.length === 1 &&
      (node.children[0].type === "strong" || node.children[0].type === "emphasis")
    ) {
      node.children = node.children[0].children;
    }
  });
}

function headingPlainText(node) {
  let text = "";
  visit(node, "text", (child) => {
    text += child.value;
  });
  return text.trim();
}

/**
 * Yuque shows outline numbers (1 / 1.1 / 1.1.1) in the UI but does not export them.
 * Re-add from heading depth so page + TOC match the familiar outline.
 */
function numberHeadings(tree) {
  const counters = [0, 0, 0, 0, 0, 0, 0];

  visit(tree, "heading", (node) => {
    const depth = node.depth;
    if (depth < 2 || depth > 6) return;

    const existing = headingPlainText(node);
    if (/^\d+(?:\.\d+)*\.?\s/.test(existing)) return;

    counters[depth] += 1;
    for (let i = depth + 1; i <= 6; i += 1) counters[i] = 0;

    const parts = [];
    for (let i = 2; i <= depth; i += 1) parts.push(counters[i]);
    const label = parts.join(".");

    node.children.unshift(
      {
        type: "strong",
        children: [{ type: "text", value: label }]
      },
      { type: "text", value: " " }
    );
  });
}

export function remarkYuque() {
  return (tree, file) => {
    if (typeof file.value !== "string") return;

    const cleaned = cleanYuque(file.value);
    file.value = cleaned;

    const next = fromMarkdown(cleaned, {
      extensions: [gfm()],
      mdastExtensions: [gfmFromMarkdown()]
    });

    normalizeHeadingDepths(next);
    unwrapHeadingStrong(next);
    numberHeadings(next);
    tree.children = next.children;
  };
}
