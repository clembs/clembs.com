import { defineCollection, z, type ImageFunction } from "astro:content";
import { glob } from "astro/loaders";

export const BlogSchema = (image: ImageFunction) =>
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
  });

const blog = defineCollection({
  loader: glob({
    pattern: "**/*.mdx",
    base: "./src/content/blog/",
  }),
  schema: ({ image }) => BlogSchema(image),
});

export const collections = { blog };
