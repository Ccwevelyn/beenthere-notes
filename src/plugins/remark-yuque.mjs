/**
 * Make Yuque-exported Markdown paste-friendly:
 * - unwrap <font>/<u> tags
 * - turn "1. **Section title**" lines into ## headings (for left TOC)
 */
export function remarkYuque() {
  return (_tree, file) => {
    if (typeof file.value !== "string") return;

    let md = file.value;
    md = md.replace(/<!--[\s\S]*?-->/g, "");
    md = md.replace(/<\/?(?:font|u|span)[^>]*>/gi, "");
    md = md.replace(/^(?:\d+)\.\s+\*\*(.+?)\*\*\s*$/gm, "## $1");
    md = md.replace(/[ \t]+\n/g, "\n");
    file.value = md;
  };
}
