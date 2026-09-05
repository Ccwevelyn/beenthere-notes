type DocxShell = HTMLElement & { dataset: DOMStringMap & { bound?: string; ready?: string; docxUrl?: string; errorText?: string } };

function absoluteDocxUrl(path: string) {
  try {
    return new URL(path, window.location.origin).href;
  } catch {
    return path;
  }
}

function officeEmbedUrl(docxUrl: string) {
  return `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(docxUrl)}`;
}

function showFailure(shell: DocxShell, status: HTMLElement | null, message: string) {
  if (status) {
    status.hidden = false;
    status.dataset.failed = "1";
    status.textContent = message;
  }
  const textFallback = document.querySelector<HTMLDetailsElement>("[data-docx-text-fallback]");
  if (textFallback) textFallback.open = true;
  shell.dataset.ready = "0";
}

function mountOfficeFallback(shell: DocxShell, canvas: HTMLElement, status: HTMLElement | null, docxPath: string) {
  const abs = absoluteDocxUrl(docxPath);
  // Office Online cannot reach localhost / private hosts.
  const host = window.location.hostname;
  const isLocal = host === "localhost" || host === "127.0.0.1" || host.endsWith(".local");
  if (isLocal) {
    showFailure(
      shell,
      status,
      shell.dataset.errorText || "Word 预览加载失败，请下载原文件或展开下方文本版。"
    );
    return;
  }

  canvas.innerHTML = "";
  const frame = document.createElement("iframe");
  frame.className = "word-office-frame";
  frame.title = "Word preview";
  frame.loading = "lazy";
  frame.referrerPolicy = "no-referrer";
  frame.src = officeEmbedUrl(abs);
  canvas.appendChild(frame);
  if (status) {
    status.hidden = true;
    status.removeAttribute("data-failed");
  }
  shell.dataset.ready = "1";
  shell.dataset.previewMode = "office";
}

async function renderWithDocxPreview(buffer: ArrayBuffer, canvas: HTMLElement) {
  const { renderAsync } = await import("docx-preview");
  canvas.innerHTML = "";
  await renderAsync(buffer, canvas, undefined, {
    className: "docx-preview-body",
    inWrapper: true,
    ignoreWidth: true,
    ignoreHeight: true,
    ignoreFonts: true,
    breakPages: false,
    renderHeaders: false,
    renderFooters: false,
    renderFootnotes: false,
    renderEndnotes: false,
    useBase64URL: true
  });
}

function withTimeout<T>(promise: Promise<T>, ms: number, label: string) {
  return new Promise<T>((resolve, reject) => {
    const timer = window.setTimeout(() => reject(new Error(`${label} timed out after ${ms}ms`)), ms);
    promise.then(
      (value) => {
        window.clearTimeout(timer);
        resolve(value);
      },
      (error) => {
        window.clearTimeout(timer);
        reject(error);
      }
    );
  });
}

export function bindDocxViewer() {
  const shells = [...document.querySelectorAll<HTMLElement>("[data-docx-viewer]")] as DocxShell[];

  for (const shell of shells) {
    if (shell.dataset.bound === "1") continue;
    shell.dataset.bound = "1";

    const url = shell.dataset.docxUrl;
    const canvas = shell.querySelector<HTMLElement>("[data-docx-canvas]");
    const status = shell.querySelector<HTMLElement>("[data-docx-status]");
    if (!url || !canvas) continue;

    void (async () => {
      try {
        if (status) {
          status.hidden = false;
          status.removeAttribute("data-failed");
          status.textContent = shell.dataset.loadingText || "正在加载 Word 预览…";
        }

        const response = await withTimeout(fetch(url), 20000, "fetch");
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const buffer = await withTimeout(response.arrayBuffer(), 20000, "arrayBuffer");

        if (status) status.textContent = shell.dataset.renderingText || "正在渲染 Word…";

        try {
          await withTimeout(renderWithDocxPreview(buffer, canvas), 15000, "renderAsync");
          if (status) {
            status.hidden = true;
            status.removeAttribute("data-failed");
          }
          shell.dataset.ready = "1";
          shell.dataset.previewMode = "docx-preview";
        } catch (renderError) {
          console.warn("[docx-viewer] local render failed, trying Office Online", renderError);
          mountOfficeFallback(shell, canvas, status, url);
        }
      } catch (error) {
        console.error("[docx-viewer]", error);
        try {
          mountOfficeFallback(shell, canvas, status, url);
        } catch (fallbackError) {
          console.error("[docx-viewer] fallback failed", fallbackError);
          showFailure(
            shell,
            status,
            shell.dataset.errorText || "Word 预览加载失败，请下载原文件或展开下方文本版。"
          );
        }
      }
    })();
  }
}
