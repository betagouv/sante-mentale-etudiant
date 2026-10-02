import { FeelingSlug } from "../feelings/data";

interface BaseArticleMeta {
  slug: string;
  title: string;
  mainFeelingSlug: FeelingSlug;
  heroImage: string;
  readingTime?: number; // in minutes
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

export interface ExternalArticleMeta extends BaseArticleMeta {
  type: "external";
  url: string;
  intro: string;
}

export interface PodcastArticleMeta extends BaseArticleMeta {
  type: "podcast";
  podcastUrl: string;
  transcription: string;
  publishedAt: string;
  markdownFile: string; // filename inside content/articles/
}

export type ArticleMeta = InternalArticleMeta | ExternalArticleMeta | PodcastArticleMeta;
