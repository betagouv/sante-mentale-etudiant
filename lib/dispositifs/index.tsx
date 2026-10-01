import { dispositifs, DispositifSlug } from "./data";
import { Dispositif } from "./types";

export function getAllDispositifsSlugs(): DispositifSlug[] {
  return dispositifs.map((d) => d.slug);
}

export function getDispositifBySlug(slug: string): Dispositif | undefined {
  return dispositifs.find((d) => d.slug === slug);
}
