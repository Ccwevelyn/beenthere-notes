import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const notes = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/notes" }),
  schema: z.object({
    title: z.string(),
    description: z.string().default(""),
    type: z.enum(["note", "tip"]).default("note"),
    grade: z.enum(["year-1", "year-2", "year-3", "year-4"]),
    semester: z.enum(["fall", "spring"]),
    course: z.string(),
    date: z.coerce.date().default(() => new Date()),
    published: z.boolean().default(true),
    attachments: z
      .array(z.object({ label: z.string(), file: z.string() }))
      .default([])
  })
});

export const collections = { notes };
