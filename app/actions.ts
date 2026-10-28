"use server";

import { getClosestBAPUs } from "@/lib/bapu";
import { getClosestSSEs } from "@/lib/sse";
import { Coordinate } from "@/services/address";

export async function fetchClosestSSEs(c: Coordinate) {
  return getClosestSSEs(c);
}

export async function fetchClosestBAPUs(c: Coordinate) {
  return getClosestBAPUs(c);
}
