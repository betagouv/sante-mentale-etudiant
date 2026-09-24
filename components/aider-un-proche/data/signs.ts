export type SignCategory = {
  icon: string;
  title: string;
  subtitle: string;
  items: string[];
};

export const signCategories: SignCategory[] = [
  {
    icon: "/images/pictograms/suicidal-thought.svg",
    title: "Ce qu'elle ou il dit",
    subtitle: "Des phrases qui reviennent",
    items: [
      "«\u00A0Je ne sers à rien\u00A0»",
      "«\u00A0Tout le monde s'en fout de moi\u00A0»",
      "«\u00A0Je suis épuisé en permanence\u00A0»",
      "«\u00A0Je n'arrive plus à rien\u00A0»",
      "«\u00A0Je ne sais plus pourquoi je continue\u00A0»",
      "«\u00A0Je voudrais ne plus être là\u00A0»",
      "«\u00A0Ça serait plus simple si je n’étais plus là\u00A0»",
    ],
  },
  {
    icon: "/images/pictograms/substances.svg",
    title: "Ce qu'elle ou il fait",
    subtitle: "Des changements d'humeur",
    items: [
      "Change brutalement de comportement, d’habitudes ou de routine.",
      "Se replie, ne répond plus à ses amis.",
      "Saute des cours.",
      "Dort beaucoup plus, ou moins.",
      "Néglige son apparence / hygiène.",
      "Augmente sa consommation d'alcool, d'écrans, de tabac.",
    ],
  },
  {
    icon: "/images/pictograms/solitude.svg",
    title: "Ce qu'elle ou il vit",
    subtitle: "Un contexte qui pèse",
    items: [
      "Rupture, deuil, conflit familial.",
      "Échec à un examen, redoublement.",
      "Isolement (changement de ville).",
      "Difficultés financières, précarité.",
      "Antécédents de troubles psychiatriques.",
    ],
  },
];
