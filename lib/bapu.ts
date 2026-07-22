import { Coordinate } from "@/services/address";
import { getDistanceKm } from "@/utils/distance";
import fs from "fs/promises";
import path from "path";

const filePath = path.join(process.cwd(), "data/bapu.json");

export type BAPU = {
  name: string;
  city: string;
  address: string;
  openingHours: string;
  eligibility: string;
  phone: string;
  email: string;
  website: string;
  latitude: number;
  longitude: number;
};

async function getBAPUs(): Promise<BAPU[]> {
  const raw = await fs.readFile(filePath, "utf-8");
  return JSON.parse(raw);
}

export async function getClosestBAPU(c: Coordinate): Promise<BAPU | null> {
  const bapus = await getBAPUs();
  if (bapus.length === 0) return null;

  const closest = bapus
    .map((bapu) => ({
      bapu,
      distance: getDistanceKm(c, { latitude: bapu.latitude, longitude: bapu.longitude }),
    }))
    .sort((a, b) => a.distance - b.distance)[0];

  return closest.bapu;
}
