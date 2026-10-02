import { FeelingSlug } from "../feelings/data";

interface BaseArticleMeta {
  slug: string;
  title: string;
  intro: string;
  mainFeelingSlug: FeelingSlug;
  heroImage: string;
  readingTime?: number; // in minutes
}

export interface InternalArticleMeta extends BaseArticleMeta {
  type: "internal";
  author: string;
  publishedAt: string;
  updatedAt?: string;
  markdownFile: string; // filename inside content/articles/
  heroCredits?: string;
  podcastUrl?: string;
  transcription?: string;
}

export interface ExternalArticleMeta extends BaseArticleMeta {
  type: "external";
  url: string;
}

export type ArticleMeta = InternalArticleMeta | ExternalArticleMeta;
