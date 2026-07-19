import fs from "node:fs";
import path from "node:path";

const site = (process.env.URL || process.env.SITE_URL || "http://localhost:4321").replace(/\/$/, "");
const configPath = path.resolve("public/admin/config.yml");
const original = fs.readFileSync(configPath, "utf8");
const updated = original.replace(/^(\s*base_url:\s*).+$/m, `$1${site}`);

if (updated === original) {
  console.warn("write-admin-base-url: base_url not found, skipping");
} else {
  fs.writeFileSync(configPath, updated);
  console.log(`write-admin-base-url: base_url -> ${site}`);
}
