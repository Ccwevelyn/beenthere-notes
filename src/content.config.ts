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
    /** Smaller number appears first in course lists. */
    order: z.coerce.number().int().default(100),
    published: z.boolean().default(true),
    attachments: z
      .array(
        z.object({
          label: z.string().optional().default("PDF"),
          file: z.string().optional()
        })
      )
      .default([])
      .transform((items) =>
        items
          .filter((item): item is { label: string; file: string } => Boolean(item.file))
          .map((item) => ({ label: item.label || "PDF", file: item.file }))
      )
  })
});

export const collections = { notes };
