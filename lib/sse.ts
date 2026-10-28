import { Coordinate } from "@/services/address";
import { getClosestItems } from "@/utils/distance";
import fs from "fs/promises";
import path from "path";

const filePath = path.join(process.cwd(), "data/sse.json");

export type SSE = {
  displayName: string;
  displayUniversityName: string;
  address: string;
  phone: string;
  email?: string;
  website?: string;
  instagram?: string;
  latitude: number;
  longitude: number;
  moreInfo?: string;
};

async function getSSEs(): Promise<SSE[]> {
  const raw = await fs.readFile(filePath, "utf-8");
  return JSON.parse(raw);
}

export async function getClosestSSEs(c: Coordinate): Promise<SSE[] | null> {
  const sses = await getSSEs();
  if (sses.length === 0) return null;

  return getClosestItems(c, sses);
}
