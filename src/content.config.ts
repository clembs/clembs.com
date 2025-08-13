import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import type { CollectionEntry } from "astro:content";

const blog = defineCollection({
  loader: glob({
    pattern: "**/*.mdx",
    base: "./src/content/blog/",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      createdAt: z.coerce.date(),
      lastEditedAt: z.coerce.date().optional(),
      category: z.string(),
      bannerPath: image().optional(),
      bannerThumbnailPath: z.string().optional(),
      bannerAlt: z.string().optional(),
      projectUrl: z.string().optional(),
      clientText: z.string().optional(),
    }),
});

export const collections = { blog };

export type BlogData = CollectionEntry<"blog">["data"];
