import { renderAsync } from "docx-preview";

export function bindDocxViewer() {
  const shells = [...document.querySelectorAll<HTMLElement>("[data-docx-viewer]")];
  for (const shell of shells) {
    if (shell.dataset.bound === "1") continue;
    shell.dataset.bound = "1";

    const url = shell.dataset.docxUrl;
    const canvas = shell.querySelector<HTMLElement>("[data-docx-canvas]");
    const status = shell.querySelector<HTMLElement>("[data-docx-status]");
    const textFallback = document.querySelector<HTMLDetailsElement>("[data-docx-text-fallback]");
    if (!url || !canvas) continue;

    void (async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const buffer = await response.arrayBuffer();
        canvas.innerHTML = "";
        await renderAsync(buffer, canvas, undefined, {
          className: "docx-preview-body",
          inWrapper: true,
          ignoreWidth: true,
          breakPages: true,
          renderHeaders: true,
          renderFooters: true,
          useBase64URL: true
        });
        if (status) {
          status.hidden = true;
          status.removeAttribute("data-failed");
        }
        shell.dataset.ready = "1";
      } catch {
        if (status) {
          status.hidden = false;
          status.dataset.failed = "1";
          status.textContent =
            shell.dataset.errorText ||
            "Word 预览加载失败，请下载原文件或展开下方文本版。";
        }
        if (textFallback) textFallback.open = true;
        shell.dataset.ready = "0";
      }
    })();
  }
}
