import { Badge } from "@codegouvfr/react-dsfr/Badge";
import styles from "./Badges.module.scss";

export const BADGE_DAY = (
  <Badge className={styles.day} key="de-jour">
    De jour
  </Badge>
);
export const BADGE_NIGHT = (
  <Badge key="de-nuit" className={styles.night}>
    De nuit
  </Badge>
);
export const BADGE_PROFESSIONELS = (
  <Badge key="professionels" className={styles.pro}>
    Professionels
  </Badge>
);
export const BADGE_PROFESSIONELLES = (
  <Badge key="professionelles" className={styles.pro}>
    Professionelles
  </Badge>
);
export const BADGE_ETUDIANTS_BENEVOLES = (
  <Badge key="etudiants-benevoles" className={styles.student}>
    ETUDIANTS BENEVOLES
  </Badge>
);
export const BADGE_H24 = (
  <Badge key="24-24" className={styles.h24}>
    24h/24
  </Badge>
);

export const LightPinkBadge = ({ children }: { children: string }) => (
  <Badge className={styles.lightPink}>{children}</Badge>
);

export const PinkBadge = ({ children }: { children: string }) => (
  <Badge className={styles.pink}>{children}</Badge>
);
export const BADGE_DEAFS = (
  <Badge key="deafs" className={styles.mustard}>
    sourds et malentendants
  </Badge>
);
