import CustomCard from "@/components/common/CustomCard";
import { Button } from "@codegouvfr/react-dsfr/Button";
import logo_3040 from "@/public/images/logos/3040.png";
import logo_nightline from "@/public/images/logos/nightline.png";
import logo_3919 from "@/public/images/logos/3919.png";
import logo_3018 from "@/public/images/logos/3018.png";
import logo_spe from "@/public/images/logos/SPE.png";
import {
  BADGE_DAY,
  BADGE_ETUDIANTS_BENEVOLES,
  BADGE_H24,
  BADGE_NIGHT,
  BADGE_PROFESSIONELLES,
  BADGE_PROFESSIONELS,
} from "@/components/common/Badges";

const REMOTE_TEXT = "À distance";

export const CARD_3040 = (
  <CustomCard
    title="Appelle le 3040"
    subtitle="Le numéro pour la santé mentale des étudiants"
    description="Des psychologues et travailleurs sociaux à ton écoute pour t'informer et t'orienter vers les services adaptés."
    image={logo_3040}
    button={<Button priority="secondary">Appeler le 3040</Button>}
    badges={[BADGE_PROFESSIONELS, BADGE_DAY]}
    location="A distance"
    openingHours="7j/7 • 9h-23h"
  />
);

export const CARD_SPE = (
  <CustomCard
    title="Consulte un psychologue libéral"
    subtitle="Consultations gratuites avec le psy de ton choix"
    description="12 séances gratuites avec un psychologue de ton choix parmi plus de 1500 partout en France, en présentiel ou à distance"
    image={logo_spe}
    button={<Button priority="secondary">Trouver un psychologue</Button>}
    badges={[BADGE_PROFESSIONELS, BADGE_DAY]}
    location="Près de Nice"
  />
);

export const CARD_3018 = (
  <CustomCard
    title="Appelle le 3018"
    subtitle="Aide contre le harcèlement"
    description="Des psychologues, juristes, experts du numérique te conseillent et t'orientent face au harcèlement, à l'école ou en ligne."
    image={logo_3018}
    button={<Button priority="secondary">Appeler le 3018 </Button>}
    badges={[BADGE_PROFESSIONELS, BADGE_DAY]}
    location={REMOTE_TEXT}
    openingHours="7j/7 • 9h-23h"
  />
);
export const CARD_3919 = (
  <CustomCard
    title="Appelle le 3919"
    subtitle="Violences sexistes et sexuelles"
    description="Des professionnelles à l'écoute, pour t'informer et t'orienter en cas de violences conjugales, sexuelles ou sexistes."
    image={logo_3919}
    button={<Button priority="secondary">Appeler le 3919</Button>}
    badges={[BADGE_PROFESSIONELLES, BADGE_H24]}
    location={REMOTE_TEXT}
    openingHours="7j/7 • 24h/24"
  />
);

export const CARD_NIGHTLINE_CALL = (
  <CustomCard
    title="Appelle Nightline"
    subtitle="Service d'écoute entre étudiants la nuit 🌙"
    description="Des étudiants bénévoles formés à l'écoute active, disponibles la nuit pendant l'année universitaire."
    image={logo_nightline}
    button={<Button priority="secondary">Appeler Nightline</Button>}
    badges={[BADGE_ETUDIANTS_BENEVOLES, BADGE_NIGHT]}
    location={REMOTE_TEXT}
    openingHours="De 21h00 à 2h30"
  />
);

export const CARD_NIGHTLINE_CHAT = (
  <CustomCard
    title="Contacte Nightline par tchat"
    subtitle="Service d'écoute entre étudiants la nuit 🌙"
    description="Des étudiants bénévoles formés à l'écoute active, disponibles la nuit par tchat pendant l'année universitaire."
    button={<Button priority="secondary">Ouvrir le tchat</Button>}
    badges={[BADGE_ETUDIANTS_BENEVOLES, BADGE_NIGHT]}
    location={REMOTE_TEXT}
    openingHours="De 21h00 à 2h30"
  />
);

export const CARD_DOCTOR = (
  <CustomCard
    title="Parles-en à ton médecin généraliste"
    subtitle="Il peut t'écouter et t'orienter"
    description="Aucun dispositif ne te convient ? Tu as du mal à trouver des disponibilités ? Ne reste pas seul."
    badges={[BADGE_PROFESSIONELS, BADGE_DAY]}
  />
);

export const CARD_SSE = (
  <CustomCard
    title="Contacte le SSE de Nice"
    subtitle="Service de santé de l'université la plus proche"
    description="Consultations avec des psychologue et psychiatres, sans limite de séances, en présentiel dans ton académie."
    button={<Button priority="secondary">Infos et contacts</Button>}
    badges={[BADGE_PROFESSIONELS, BADGE_DAY]}
    location="Près de Nice"
  />
);

export const CARD_BAPU = (
  <CustomCard
    title="Contacte le BAPU Nice"
    subtitle="Bureau d'aide psychologique universitaire"
    description="Consultations gratuites avec des psychologues et psychiatres, sans limite de séances, prises en charge à 100% par la Sécu."
    button={<Button priority="secondary">Infos et contacts</Button>}
    badges={[BADGE_PROFESSIONELS, BADGE_DAY]}
    location="Près de Nice"
  />
);
