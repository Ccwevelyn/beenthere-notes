/**
 * Clean Yuque-exported Markdown so paste renders cleanly:
 * - keep yellow highlights as <mark>
 * - unwrap other font tags
 * - repair broken **bold** (spaces inside markers, **** nests)
 * - turn "1. **Section**" into ## headings for TOC
 *
 * Must re-parse after string cleanup: remark plugins run after the first parse,
 * so editing file.value alone would not change the rendered tree.
 */
import { fromMarkdown } from "mdast-util-from-markdown";
import { gfmFromMarkdown } from "mdast-util-gfm";
import { gfm } from "micromark-extension-gfm";

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
  md = md.replace(/^(?:\d+)\.\s+\*\*(.+?)\*\*\s*$/gm, "## $1");
  md = md.replace(/[ \t]+\n/g, "\n");
  return md;
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

    tree.children = next.children;
  };
}
