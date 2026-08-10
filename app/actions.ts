"use server";

import { searchArticles } from "@/lib/articles";
import { getClosestBAPU } from "@/lib/bapu";
import { getClosestSSE } from "@/lib/sse";
import { Coordinate } from "@/services/address";

export async function fetchClosestSSE(c: Coordinate) {
  return getClosestSSE(c);
}

export async function fetchClosestBAPU(c: Coordinate) {
  return getClosestBAPU(c);
}

export async function fetchSearchArticles(feelingSlugs: string[], textSearch: string) {
  return searchArticles(feelingSlugs, textSearch);
}
