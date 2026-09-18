import { Tile } from "@codegouvfr/react-dsfr/Tile";
import { BADGE_DEAFS, BADGE_SUICIDAL_THOUGHTS } from "./Badges";
import { Badge } from "@codegouvfr/react-dsfr/Badge";
import Hospital from "@codegouvfr/react-dsfr/picto/Hospital";
import Community from "@codegouvfr/react-dsfr/picto/Community";
import EarOff from "@codegouvfr/react-dsfr/picto/EarOff";

export const TILE_3114 = (
  <Tile
    pictogram={<Community color="blue-ecume" />}
    orientation="horizontal"
    start={BADGE_SUICIDAL_THOUGHTS}
    title="Appelle le 3114"
    titleAs="h3"
    desc="Temps d'attente possible. Reste en ligne, un professionnel te répond dès que possible."
    noIcon
    linkProps={{
      href: "tel:3114",
      "aria-label": "Appeler le 3114, numéro national de prévention du suicide",
    }}
  />
);

export const TILE_SAMU = (
  <Tile
    pictogram={<Hospital color="blue-ecume" />}
    orientation="horizontal"
    start={
      <Badge severity="error" noIcon>
        en cas d'urgence vitale
      </Badge>
    }
    title="Appeler le 15 (Samu)"
    titleAs="h3"
    desc="Mise en relation rapide avec un soignant."
    noIcon
    linkProps={{
      href: "tel:15",
      "aria-label": "Appeler le SAMU",
    }}
  />
);

export const TILE_114 = (
  <Tile
    pictogram={<EarOff color="blue-ecume" />}
    orientation="horizontal"
    start={BADGE_DEAFS}
    title="Appelle le 114"
    titleAs="h3"
    desc="Disponible également par SMS."
    noIcon
    linkProps={{
      href: "tel:114",
      "aria-label": "Appeler le 114",
    }}
  />
);
