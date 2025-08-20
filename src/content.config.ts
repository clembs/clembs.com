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

// the friends thing is hosted on a separate private repository
// thats then merged to the source before building

// huge props to gérald & gpt-5 (lol)
const friends = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/friends/posts/",
  }),
  schema: z.object({
    createdAt: z.coerce.date(),
  }),
});

export const collections = { blog, friends };

export type BlogData = CollectionEntry<"blog">["data"];
