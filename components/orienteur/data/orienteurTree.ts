import { OrienteurPictoName } from "../OrienteurQuestion";

export type OrienteurOption = {
  label: string;
  value: string;
  next: string;
  illustration: OrienteurPictoName;
  hint?: string;
};

export type OrienteurQuestionNode = {
  type: "question";
  id: string;
  image: string;
  legend: string;
  title: string;
  showMedicalDisclaimer?: boolean;
  skip?: {
    label: string;
    value: string;
    next: string;
  };
  options: OrienteurOption[];
};

export type OrienteurTerminalNode = {
  type: "terminal";
  id: string;
  image: string;
  // TODO modifier placeholder dès que plus d'infos
  component: "urgence" | "location" | "placeholder";
};

export type OrienteurNode = OrienteurQuestionNode | OrienteurTerminalNode;

export const ORIENTEUR_ROOT_ID = "risque-immediat";
export const WHAT_I_NEED_ID = "what-i-need";
export const FORMAT_ECHANGE_ID = "format-echange";
export const FORMAT_PSY_ID = "format-psy";

export const NEED_COUNSELING = "counseling";
export const NEED_PSY = "psy";
export const FORMAT_CAMPUS = "campus";
export const FORMAT_CHOOSE = "choose-myself";

const IMAGE_DEFAULT = "/images/illustrations/orienteur/image.svg";

export const orienteurTree: Record<string, OrienteurNode> = {
  [ORIENTEUR_ROOT_ID]: {
    type: "question",
    id: ORIENTEUR_ROOT_ID,
    image: IMAGE_DEFAULT,
    legend: "Ma situation",
    title:
      "Avant de commencer : as-tu des pensées suicidaires, ou crains-tu pour la sécurité d'un proche, là, maintenant ?",
    showMedicalDisclaimer: true,
    options: [
      {
        label: "Oui, j'ai besoin d'aide immédiatement",
        hint: "Pour moi ou pour aider une personne de mon entourage",
        value: "yes",
        next: "urgence",
        illustration: "Warning",
      },
      {
        label: "Non, mais je ne me sens pas bien en ce moment.",
        hint: "Je cherche du soutien, sans urgence vitale.",
        value: "no",
        next: "pour-qui",
        illustration: "Success",
      },
    ],
  },

  "pour-qui": {
    type: "question",
    id: "pour-qui",
    image: IMAGE_DEFAULT,
    legend: "Personne concernée",
    title: "Pour qui recherches-tu de l'aide ?",
    options: [
      { label: "Pour moi", value: "moi", next: WHAT_I_NEED_ID, illustration: "Avatar" },
      {
        label: "Pour un proche",
        value: "proche",
        next: "aide-proche",
        illustration: "Ecosystem",
        hint: "Par exemple, un ami ou un membre de ma famille",
      },
    ],
  },

  [WHAT_I_NEED_ID]: {
    type: "question",
    id: WHAT_I_NEED_ID,
    image: IMAGE_DEFAULT,
    legend: "Mon besoin",
    title: "Pour t'accompagner du mieux qu'on peut, qu'est-ce qui te correspond le plus ?",
    options: [
      {
        label:
          "Je souhaite trouver un accompagnement psychologique dans la durée, dès que possible",
        hint: "Je pense que c'est ce qu'il me faut et je sais que cela implique de prendre rendez-vous",
        illustration: "Calendar",
        value: NEED_PSY,
        next: FORMAT_PSY_ID,
      },
      {
        label: "Je ne sais pas trop ce qui me conviendrait",
        hint: "J'aimerais l'avis d'un professionnel pour m'orienter",
        illustration: "Search",
        value: "",
        next: "location",
      },
      {
        label: "J'aimerais être écouté rapidement sur ce que je traverse",
        hint: "Avoir quelqu'un au téléphone dans un premier temps me convient",
        illustration: "Community",
        value: NEED_COUNSELING,
        next: "location",
      },
    ],
  },

  "aide-proche": {
    type: "question",
    id: "aide-proche",
    image: IMAGE_DEFAULT,
    legend: "Mon besoin",
    title: "Pour un proche - Comment peut-on t'aider ?",
    options: [
      {
        label: "Je recherche des ressources ou des témoignages pour soutenir un proche",
        illustration: "SelfTraining",
        value: "ressources",
        next: "/aider-un-proche",
      },
      {
        label: "J'ai besoin de me confier maintenant",
        illustration: "Community",
        value: "confier",
        next: "location",
      },
    ],
  },

  [FORMAT_PSY_ID]: {
    type: "question",
    id: FORMAT_PSY_ID,
    image: IMAGE_DEFAULT,
    legend: "Soutien",
    title: "Pour ce suivi psy, tu préfères...",
    options: [
      {
        label: "Être suivi sur mon campus (ou tout près), par une équipe habituée aux étudiants",
        illustration: "CityHall",
        value: FORMAT_CAMPUS,
        next: "location",
      },
      {
        label:
          "Choisir moi-même mon psy : la spécialité, le lieu et les horaires qui me conviennent",
        illustration: "Search",
        value: FORMAT_CHOOSE,
        next: "location",
      },
      {
        label: "Les deux / je ne sais pas trop",
        illustration: "Information",
        value: "",
        next: "location",
      },
    ],
  },

  urgence: { type: "terminal", id: "urgence", image: IMAGE_DEFAULT, component: "urgence" },
  location: { type: "terminal", id: "location", image: IMAGE_DEFAULT, component: "location" },
};
