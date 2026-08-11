import fs from "fs/promises";
import path from "path";
import { remark } from "remark";
import html from "remark-html";
import { articles } from "./data";
import type { ArticleMeta } from "./types";

const DATA_DIR = path.join(process.cwd(), "data/articles");

export function getAllArticleSlugs(): string[] {
  return articles.map((a) => a.slug);
}

export function getArticleMeta(slug: string): ArticleMeta | undefined {
  return articles.find((a) => a.slug === slug);
}

export async function getArticleBySlug(
  slug: string
): Promise<(ArticleMeta & { html: string }) | null> {
  const meta = getArticleMeta(slug);
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
