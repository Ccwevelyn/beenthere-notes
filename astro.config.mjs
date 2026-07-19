import { defineConfig } from "astro/config";
import { remarkYuque } from "./src/plugins/remark-yuque.mjs";

export default defineConfig({
  site: process.env.SITE_URL || "http://localhost:4321",
  output: "static",
  markdown: {
    remarkPlugins: [remarkYuque]
  },
  i18n: {
    defaultLocale: "zh",
    locales: ["zh", "en"],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true
    }
  }
});
