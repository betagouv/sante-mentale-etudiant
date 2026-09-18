import {
  FORMAT_CAMPUS,
  FORMAT_CHOOSE,
  NEED_COUNSELING,
  NEED_PSY,
} from "@/components/orienteur/data/orienteurTree";
import { JSX, ReactNode } from "react";
import {
  CARD_3040,
  CARD_DEFAULT_BAPU,
  CARD_DEFAULT_SSE,
  CARD_DOCTOR,
  get_CARD_BAPU,
  get_CARD_SPE,
  get_CARD_SSE,
} from "./resultCards";
import { Coordinate } from "@/services/address";
import { fetchClosestBAPU, fetchClosestSSE } from "@/app/actions";

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
    label: "Je ne sais pas trop",
    value: I_NEED_DEFAULT,
    formatOptions: [],
  },
  [NEED_COUNSELING]: {
    label: "Être écouté rapidemment",
    value: NEED_COUNSELING,
    formatOptions: [],
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

export type Result = {
  title: string;
  cards: ReactNode[];
};

export const getResults = async (
  addressLabel: string,
  whatINeed: string,
  format: string,
  coordinates?: Coordinate
): Promise<Result[]> => {
  let CARD_SSE = null;
  let CARD_BAPU = null;
  if (coordinates) {
    const closestBAPU = await fetchClosestBAPU(coordinates);
    CARD_BAPU = closestBAPU ? get_CARD_BAPU(closestBAPU, addressLabel) : null;

    const closestSSE = await fetchClosestSSE(coordinates);
    CARD_SSE = closestSSE ? get_CARD_SSE(closestSSE, addressLabel) : null;
  } else {
    CARD_SSE = CARD_DEFAULT_SSE;
    CARD_BAPU = CARD_DEFAULT_BAPU;
  }
  const CARD_SPE = get_CARD_SPE(addressLabel, coordinates);
  const results = [] as Result[];

  if (!format) {
    format = FORMAT_ALL;
  }

  //first section
  let recommandations = [] as ReactNode[];
  if (whatINeed === NEED_COUNSELING) {
    recommandations = [CARD_3040];
  } else if (!whatINeed || whatINeed === I_NEED_DEFAULT) {
    recommandations = [CARD_DOCTOR, CARD_SSE, CARD_3040];
  } else {
    recommandations = [
      ...(!format || [FORMAT_CAMPUS, FORMAT_ALL].includes(format) ? [CARD_SSE, CARD_BAPU] : []),
      ...([FORMAT_CHOOSE, FORMAT_ALL].includes(format) ? [CARD_SPE] : []),
    ];
  }
  results.push({
    title: "D'après tes réponses, voici les professionnels de santé qu'on te recommande",
    cards: recommandations,
  });

  // second section
  let otherRecommandations;
  if (whatINeed === NEED_COUNSELING) {
    otherRecommandations = [CARD_SSE, CARD_DOCTOR];
  } else if (!whatINeed || whatINeed === I_NEED_DEFAULT) {
    otherRecommandations = [CARD_SPE, CARD_BAPU];
  } else {
    otherRecommandations = [
      ...(!format || [FORMAT_CAMPUS].includes(format) ? [CARD_SPE] : []),
      ...([FORMAT_CHOOSE].includes(format) ? [CARD_SSE, CARD_BAPU] : []),
    ];
  }
  results.push({
    title: "Également adaptés à ta situation",
    cards: otherRecommandations,
  });

  // third section
  let rest: (JSX.Element | null)[];
  if (whatINeed === NEED_COUNSELING) {
    rest = [CARD_SPE, CARD_BAPU];
  } else if (whatINeed === NEED_PSY) {
    rest = [CARD_3040, CARD_DOCTOR];
  } else {
    rest = [];
  }
  results.push({
    title: "Toutes les autres ressources disponibles",
    cards: rest,
  });

  return results;
};
