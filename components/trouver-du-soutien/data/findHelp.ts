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
  CARD_DOCTOR,
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

const I_NEED_DEFAULT = "whatever";
const FORMAT_ALL = "all";

export const OPTIONS_I_NEED: MAIN_OPTIONS = {
  [I_NEED_DEFAULT]: {
    label: "Peu importe",
    value: I_NEED_DEFAULT,
    formatOptions: [],
  },
  [NEED_COUNSELING]: {
    label: "Me confier et être orienté",
    value: NEED_COUNSELING,
    formatOptions: [
      {
        label: "Tous",
        value: FORMAT_ALL,
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
        value: FORMAT_ALL,
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

export const getResults = (postcode: string, whatINeed: string, format: string): Result[] => {
  if (!whatINeed || whatINeed === I_NEED_DEFAULT) {
    return [
      {
        title: "Pouvoir te confier et être orienté",
        cards: [CARD_3040, CARD_NIGHTLINE_CALL, CARD_NIGHTLINE_CHAT, CARD_3018, CARD_3919],
      },
      {
        title: "Consulter un professionnel de la santé mentale",
        cards: [CARD_SPE, CARD_DOCTOR],
      },
    ];
  }
  const results = [] as Result[];

  //first section
  let recommandations = [] as ReactNode[];
  if (whatINeed === NEED_COUNSELING) {
    recommandations = [
      ...([FORMAT_WRITE, FORMAT_ALL].includes(format) ? [CARD_NIGHTLINE_CHAT] : []),
      ...([FORMAT_TALK, FORMAT_ALL].includes(format)
        ? [CARD_3040, CARD_NIGHTLINE_CALL, CARD_3018, CARD_3919]
        : []),
    ];
  } else {
    recommandations = [
      ...([FORMAT_CAMPUS, FORMAT_ALL].includes(format) ? [] : []),
      ...([FORMAT_CHOOSE, FORMAT_ALL].includes(format) ? [CARD_SPE] : []),
    ];
  }
  results.push({
    title: "D'après tes réponses, voici ce qu'on te recommande",
    cards: recommandations,
  });

  // second section
  let otherRecommandations;
  if (whatINeed === NEED_COUNSELING) {
    otherRecommandations = [
      ...([FORMAT_WRITE].includes(format)
        ? [CARD_3040, CARD_NIGHTLINE_CALL, CARD_3018, CARD_3919]
        : []),
      ...([FORMAT_TALK].includes(format) ? [CARD_NIGHTLINE_CHAT] : []),
    ];
  } else {
    otherRecommandations = [
      ...([FORMAT_CAMPUS].includes(format) ? [CARD_SPE] : []),
      ...([FORMAT_CHOOSE].includes(format) ? [] : []),
    ];
  }
  results.push({
    title: "Également adaptés à ta situation",
    cards: otherRecommandations,
  });

  // third section
  let rest;
  if (whatINeed === NEED_COUNSELING) {
    rest = [CARD_SPE, CARD_DOCTOR];
  } else {
    rest = [CARD_3040, CARD_NIGHTLINE_CALL, CARD_3919, CARD_3018, CARD_NIGHTLINE_CHAT, CARD_DOCTOR];
  }
  results.push({
    title: "Toutes les autres ressources disponibles",
    cards: rest,
  });

  return results;
};
