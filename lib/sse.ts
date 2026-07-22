import { Coordinate } from "@/services/address";
import { getDistanceKm } from "@/utils/distance";
import fs from "fs/promises";
import path from "path";

const filePath = path.join(process.cwd(), "data/sse.json");

export type SSE = {
  universityId: string;
  name: string;
  universityName: string;
  city: string;
  phone: string;
  email: string;
  latitude: number;
  longitude: number;
};

async function getSSEs(): Promise<SSE[]> {
  const raw = await fs.readFile(filePath, "utf-8");
  return JSON.parse(raw);
}

export async function getClosestSSE(c: Coordinate): Promise<SSE | null> {
  const sses = await getSSEs();
  if (sses.length === 0) return null;

  const closest = sses
    .map((sse) => ({
      sse,
      distance: getDistanceKm(c, { latitude: sse.latitude, longitude: sse.longitude }),
    }))
    .sort((a, b) => a.distance - b.distance)[0];

  return closest.sse;
}
