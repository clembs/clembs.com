// @ts-check
import node from "@astrojs/node";
import { defineConfig } from "astro/config";
import remarkBreaks from "remark-breaks";

// https://astro.build/config
export default defineConfig({
  site: "https://clembs.com",
  trailingSlash: "never",

  adapter: node({
    mode: "standalone",
  }),

  markdown: {
    remarkPlugins: [remarkBreaks],
  },
});
