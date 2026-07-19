/**
 * Clean Yuque-exported Markdown so paste renders cleanly:
 * - keep yellow highlights as <mark>
 * - unwrap other font tags
 * - repair **** left by nested Yuque bold/HTML
 * - turn "1. **Section**" into ## headings for TOC
 */
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

  // broken paste: animation** on click  ** → animation **on click**
  md = md.replace(/([^*\s\n]+)\*\*(\s+)([^*\n]+?)\s*\*\*(?=[\s\n]|$)/g, "$1$2**$3**");

  return md;
}

export function remarkYuque() {
  return (_tree, file) => {
    if (typeof file.value !== "string") return;

    let md = file.value;
    md = md.replace(/<!--[\s\S]*?-->/g, "");
    md = unwrapFonts(md);
    md = md.replace(/<\/?(?:u|span)[^>]*>/gi, "");
    md = repairBold(md);
    md = md.replace(/^(?:\d+)\.\s+\*\*(.+?)\*\*\s*$/gm, "## $1");
    md = md.replace(/[ \t]+\n/g, "\n");
    file.value = md;
  };
}
