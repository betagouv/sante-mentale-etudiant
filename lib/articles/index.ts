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

function shuffle<T>(items: T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function getFeaturedArticlesByFeeling(
  feelingSlug: string,
  limit = 3,
): ArticleMeta[] {
  return articles.filter((a) => a.mainFeelingSlug === feelingSlug && a.featured).slice(0, limit);
}

export function getAllArticlesShuffledFeaturedFirst(feelingSlug?: string): ArticleMeta[] {
  const pool = feelingSlug ? articles.filter((a) => a.mainFeelingSlug === feelingSlug) : articles;

  return [
    ...shuffle(pool.filter((a) => a.featured)),
    ...shuffle(pool.filter((a) => !a.featured)),
  ];
}
