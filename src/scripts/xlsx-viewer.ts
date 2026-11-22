type XlsxShell = HTMLElement & {
  dataset: DOMStringMap & {
    bound?: string;
    ready?: string;
    xlsxUrl?: string;
    errorText?: string;
    loadingText?: string;
  };
};

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

function setStatus(status: HTMLElement | null, message: string, failed = false) {
  if (!status) return;
  status.hidden = false;
  status.textContent = message;
  if (failed) status.dataset.failed = "1";
  else status.removeAttribute("data-failed");
}

function paintSheet(canvas: HTMLElement, html: string) {
  canvas.innerHTML = html;
  const table = canvas.querySelector("table");
  if (table) table.classList.add("excel-grid");
}

export function bindXlsxViewer() {
  const shells = [...document.querySelectorAll<HTMLElement>("[data-xlsx-viewer]")] as XlsxShell[];

  for (const shell of shells) {
    if (shell.dataset.bound === "1") continue;
    shell.dataset.bound = "1";

    const url = shell.dataset.xlsxUrl;
    const canvas = shell.querySelector<HTMLElement>("[data-xlsx-canvas]");
    const tabs = shell.querySelector<HTMLElement>("[data-xlsx-tabs]");
    const status = shell.querySelector<HTMLElement>("[data-xlsx-status]");
    if (!url || !canvas) continue;

    void (async () => {
      try {
        setStatus(status, shell.dataset.loadingText || "正在加载 Excel 预览…");
        const response = await withTimeout(fetch(url), 20000, "fetch");
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const buffer = await withTimeout(response.arrayBuffer(), 20000, "arrayBuffer");
        const { read, utils } = await import("xlsx");
        const workbook = read(buffer, { type: "array", cellDates: true });
        const names = workbook.SheetNames.filter((name) => workbook.Sheets[name]);
        if (!names.length) throw new Error("empty workbook");

        const previewRows = 8; // header + No. 1–8
        const htmlBySheet = Object.fromEntries(
          names.map((name) => {
            const sheet = workbook.Sheets[name];
            const range = utils.decode_range(sheet["!ref"] || "A1");
            range.e.r = Math.min(range.e.r, previewRows);
            sheet["!ref"] = utils.encode_range(range);
            return [name, utils.sheet_to_html(sheet, { id: "", editable: false })];
          })
        );

        let active = names[0];
        const renderActive = () => {
          paintSheet(canvas, htmlBySheet[active]);
          if (!tabs) return;
          tabs.querySelectorAll<HTMLButtonElement>("[data-sheet]").forEach((button) => {
            button.classList.toggle("is-active", button.dataset.sheet === active);
          });
        };

        if (tabs) {
          tabs.innerHTML = "";
          tabs.hidden = names.length < 2;
          names.forEach((name) => {
            const button = document.createElement("button");
            button.type = "button";
            button.dataset.sheet = name;
            button.textContent = name;
            button.addEventListener("click", () => {
              active = name;
              renderActive();
            });
            tabs.appendChild(button);
          });
        }

        renderActive();
        if (status) status.hidden = true;
        shell.dataset.ready = "1";
      } catch (error) {
        console.error("[xlsx-viewer]", error);
        setStatus(
          status,
          shell.dataset.errorText || "Excel 预览加载失败，请点击右上角下载原文件。",
          true
        );
        shell.dataset.ready = "0";
      }
    })();
  }
}
