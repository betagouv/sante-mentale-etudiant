import { feelings } from "./data";
import { Feeling } from "./types";

export function getAllFeelingsSlugs(): string[] {
  return feelings.map((t) => t.slug);
}

export function getFeelingBySlug(slug: string): Feeling | undefined {
  return feelings.find((t) => t.slug === slug);
}
