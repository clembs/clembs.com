import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

export const BlogSchema = z.object({
  slug: z.string(),
  title: z.string(),
  summary: z.string(),
  createdAt: z.coerce.date(),
  category: z.string(),
  bannerPath: z.string().optional(),
  bannerThumbnailPath: z.string().optional(),
  bannerAlt: z.string().optional(),
  projectUrl: z.string().optional(),
  brandName: z.string().optional(),
});

const blog = defineCollection({
  loader: glob({
    pattern: "**/blog/**/*.md",
    base: "./src/pages/",
  }),
  schema: BlogSchema,
});

export const collections = { blog };
