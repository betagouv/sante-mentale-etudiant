import {
  FORMAT_CAMPUS,
  FORMAT_CHOOSE,
  FORMAT_TALK,
  FORMAT_WRITE,
  NEED_COUNSELING,
  NEED_PSY,
} from "@/components/orienteur/data/orienteurTree";
import { ReactNode } from "react";
import {
  CARD_3018,
  CARD_3040,
  CARD_3919,
  CARD_NIGHTLINE_CALL,
  CARD_NIGHTLINE_CHAT,
  CARD_SPE,
} from "./resultCards";

type OPTION = {
  label: string;
  value: string;
};

type MAIN_OPTION = OPTION & {
  formatOptions: OPTION[];
};

type MAIN_OPTIONS = {
  [key: string]: MAIN_OPTION;
};

export const OPTIONS_I_NEED: MAIN_OPTIONS = {
  whatever: {
    label: "Peu importe",
    value: "whatever",
    formatOptions: [],
  },
  [NEED_COUNSELING]: {
    label: "Me confier et être orienté",
    value: NEED_COUNSELING,
    formatOptions: [
      {
        label: "Tous",
        value: "all",
      },
      {
        label: "A l'écrit",
        value: FORMAT_WRITE,
      },
      {
        label: "A l'oral / en personne",
        value: FORMAT_TALK,
      },
    ],
  },
  [NEED_PSY]: {
    label: "Un suivi psy gratuit",
    value: NEED_PSY,
    formatOptions: [
      {
        label: "Tous",
        value: "all",
      },
      {
        label: "Suivi sur un campus",
        value: FORMAT_CAMPUS,
      },
      {
        label: "Choisir moi-même mon praticien",
        value: FORMAT_CHOOSE,
      },
    ],
  },
};

type Result = {
  title: string;
  cards: ReactNode[];
};

export const getResults = (postcode: string, whatINeed: string, format: string) => {
  return [
    {
      title: "Pouvoir te confier et être orienté",
      cards: [CARD_3040, CARD_NIGHTLINE_CALL, CARD_NIGHTLINE_CHAT, CARD_3018, CARD_3919],
    },
    {
      title: "Consulter un professionnel de la santé mentale",
      cards: [CARD_SPE],
    },
  ] as Result[];
};
