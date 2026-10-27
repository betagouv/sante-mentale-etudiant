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
    title="Appelle le 3114 (numéro national de prévention du suicide)"
    titleAs="h2"
    desc="Reste en ligne, un professionnel te répondra dès que possible. En cas d'urgence ou d'impossibilité d'attendre, appelle le 15."
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
    title="Appelle le 15 (Samu)"
    titleAs="h2"
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
    title="Contacte le 114"
    titleAs="h2"
    desc="Numéro d'urgence accessible par SMS, tchat ou visio."
    noIcon
    linkProps={{
      href: "tel:114",
      "aria-label": "Appeler le 114",
    }}
  />
);
