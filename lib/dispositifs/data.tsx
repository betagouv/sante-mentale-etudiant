import { DISPOSITIF_3040 } from "./3040";
import { DISPOSITIF_3114 } from "./3114";
import { DISPOSITIF_NIGHTLINE } from "./nightline";
import { DISPOSITIF_SPE } from "./sante-psy-etudiant";

export const DISPOSITIFS_SLUGS = ["3114", "3040", "SPE", "nightline"] as const;

export type DispositifSlug = (typeof DISPOSITIFS_SLUGS)[number];

export const dispositifs = [DISPOSITIF_3114, DISPOSITIF_3040, DISPOSITIF_SPE, DISPOSITIF_NIGHTLINE];
