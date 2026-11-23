import ExcelJS from "exceljs";
import path from "node:path";

const contactAoA = [
  ["编号", "教师姓名", "身份", "课程", "教授邮箱", "状态", "推荐数目", "推荐信撰写", "老师意向", "目前进度"],
  [1, "", "", "", "", "", "", "", "", ""],
  [2, "", "", "", "", "", "", "", "", ""],
  [3, "", "", "", "", "", "", "", "", ""]
];

const planAoA = [
  ["学校", "Program", "推荐人1\n确定", "推荐人1\n完成", "推荐人2\n确定", "推荐人2\n完成", "推荐人3\n确定", "推荐人3\n完成"],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""]
];

const thin = { style: "thin", color: { argb: "FF1F2925" } };
const border = { top: thin, left: thin, bottom: thin, right: thin };
const bodyFont = { name: "Times New Roman", size: 11, color: { argb: "FF1F2925" } };
const headFont = { name: "Times New Roman", size: 11, bold: true, color: { argb: "FF1F2925" } };

async function writeOne(sheetName, aoa, widths, filename) {
  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet(sheetName, {
    views: [{ state: "frozen", ySplit: 1 }]
  });
  sheet.columns = widths.map((width) => ({ width }));

  const colCount = aoa[0].length;
  aoa.forEach((row) => {
    sheet.addRow(row);
  });

  for (let r = 1; r <= aoa.length; r++) {
    const excelRow = sheet.getRow(r);
    excelRow.height = r === 1 ? 28 : 20;
    for (let c = 1; c <= colCount; c++) {
      const cell = excelRow.getCell(c);
      if (cell.value == null) cell.value = "";
      cell.font = r === 1 ? headFont : bodyFont;
      cell.border = border;
      cell.alignment = {
        vertical: "middle",
        horizontal: "left",
        wrapText: true
      };
    }
  }

  const out = path.resolve("public/uploads", filename);
  await workbook.xlsx.writeFile(out);
  console.log("wrote", out);
}

await writeOne(
  "推荐人信息",
  contactAoA,
  [8, 12, 22, 12, 18, 32, 14, 14, 12, 12],
  "application-recommenders-info.xlsx"
);

await writeOne(
  "推荐信安排",
  planAoA,
  [22, 54, 12, 12, 12, 12, 12, 12],
  "application-recommenders-plan.xlsx"
);
