export type SignCategory = {
  icon: string;
  title: string;
  subtitle: string;
  items: string[];
};

export const signCategories: SignCategory[] = [
  {
    icon: "https://www.systeme-de-design.gouv.fr/v1.14/storybook/img/placeholder.1x1.png",
    title: "Ce qu'elle ou il dit",
    subtitle: "Des phrases qui reviennent",
    items: [
      "« Je ne sers à rien »",
      "« Tout le monde s'en fout de moi »",
      "« Je suis épuisé en permanence »",
      "« Je n'arrive plus à rien »",
      "« Je ne sais plus pourquoi je continue »",
    ],
  },
  {
    icon: "https://www.systeme-de-design.gouv.fr/v1.14/storybook/img/placeholder.1x1.png",
    title: "Ce qu'elle ou il fait",
    subtitle: "Des changements d'humeur",
    items: [
      "Se replie, ne répond plus à ses amis.",
      "Sautes d'humeur.",
      "Dort beaucoup plus, ou moins.",
      "Néglige son apparence / hygiène.",
      "Augmente sa consommation d'alcool, d'écrans, de tabac.",
    ],
  },
  {
    icon: "https://www.systeme-de-design.gouv.fr/v1.14/storybook/img/placeholder.1x1.png",
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
