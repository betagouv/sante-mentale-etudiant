import { FeelingSlug } from "../feelings/data";

interface BaseArticleMeta {
  slug: string;
  title: string;
  heroImage: string;
  mainFeelingSlug?: FeelingSlug;
  readingTime?: number; // in minutes
  featured?: boolean;
  tag?: string;
}

export interface InternalArticleMeta extends BaseArticleMeta {
  type: "internal";
  author: string;
  intro: string;
  publishedAt: string;
  markdownFile: string; // filename inside content/articles/
  updatedAt?: string;
  heroCredits: string;
}

export type ExternalContentFormat = "article" | "podcast";

export interface ExternalArticleMeta extends BaseArticleMeta {
  type: "external";
  url: string;
  pdfWeight?: number;
  format?: ExternalContentFormat;
}

export type ArticleMeta = InternalArticleMeta | ExternalArticleMeta;

export const TAG_LABELS: Record<string, string> = {
  podcast: "Podcast",
  "mental-health": "Santé mentale",
};