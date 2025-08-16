// @ts-check
import node from "@astrojs/node";
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

const baseUrl = "https://clembs.com";

// https://astro.build/config
export default defineConfig({
  site: baseUrl,
  trailingSlash: "never",

  adapter: node({
    mode: "standalone",
  }),

  integrations: [
    mdx(),
    sitemap({
      filter: (page) =>
        !["/disabled-redirect"].find((u) => `${baseUrl}${u}` === page),
    }),
  ],
});
