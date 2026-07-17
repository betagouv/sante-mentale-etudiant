"use server";

import { getClosestSSE } from "@/lib/sse";
import { Coordinate } from "@/services/address";

export async function fetchClosestSSE(c: Coordinate) {
  return getClosestSSE(c);
}
