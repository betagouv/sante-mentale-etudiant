import { Feeling } from "../feelings/types";

interface BaseArticleMeta {
  slug: string;
  title: string;
  intro: string;
  readingTime: number; // in minutes
  mainFeeling: Feeling;
  heroImage: string;
}

export interface InternalArticleMeta extends BaseArticleMeta {
  type: "internal";
  author: string;
  publishedAt: string;
  updatedAt?: string;
  markdownFile: string; // filename inside content/articles/
  heroCredits: string;
}

export interface ExternalArticleMeta extends BaseArticleMeta {
  type: "external";
  url: string;
}

export type ArticleMeta = InternalArticleMeta | ExternalArticleMeta;
