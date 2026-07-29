import { Feeling } from "../feelings/types";

export interface ArticleMeta {
  slug: string;
  title: string;
  intro: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  markdownFile: string; // filename inside content/articles/
  heroImage: string;
  heroCredits: string;
  readingTime: number; // in minutes
  mainFeeling: Feeling;
}
