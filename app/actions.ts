"use server";

import { getClosestBAPU } from "@/lib/bapu";
import { getClosestSSE } from "@/lib/sse";
import { Coordinate } from "@/services/address";

export async function fetchClosestSSE(c: Coordinate) {
  return getClosestSSE(c);
}

export async function fetchClosestBAPU(c: Coordinate) {
  return getClosestBAPU(c);
}
