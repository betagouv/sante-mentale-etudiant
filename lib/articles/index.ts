import fs from "fs/promises";
import path from "path";
import { remark } from "remark";
import html from "remark-html";
import { articles } from "./data";
import type { ArticleMeta, InternalArticleMeta } from "./types";

const DATA_DIR = path.join(process.cwd(), "data/articles");

export function getAllInternalArticleSlugs(): string[] {
  return articles.filter((a) => a.type === "internal").map((a) => a.slug);
}

export function getArticleMeta(slug: string): ArticleMeta | undefined {
  return articles.find((a) => a.slug === slug);
}

// returns an Internal Article
export async function getArticleBySlug(
  slug: string
): Promise<(InternalArticleMeta & { html: string }) | null> {
  const meta = getArticleMeta(slug) as InternalArticleMeta;
  if (!meta) return null;

  const filePath = path.join(DATA_DIR, meta.markdownFile);
  const raw = await fs.readFile(filePath, "utf-8");
  const processed = await remark().use(html, { sanitize: false }).process(raw);

  return {
    ...meta,
    html: processed.toString(),
  };
}

export async function getArticlesByFeeling(feelingSlug: string): Promise<ArticleMeta[]> {
  return articles.filter((a) => a.mainFeeling.slug === feelingSlug);
}
