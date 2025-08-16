// @ts-check
import node from "@astrojs/node";
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://clembs.com",
  trailingSlash: "never",

  adapter: node({
    mode: "standalone",
  }),

  integrations: [mdx(), sitemap()],
});
