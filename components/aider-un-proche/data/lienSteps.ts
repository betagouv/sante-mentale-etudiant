export type LienStep = {
  step: number;
  letter: string;
  title: string;
  description: string;
};

export const lienSteps: LienStep[] = [
  {
    step: 1,
    letter: "L",
    title: "Lancer la conversation",
    description:
      "Choisis un moment calme, sans détour, mais sans pression. Une simple question ouverte suffit souvent : « Ça va, en ce moment ? »",
  },
  {
    step: 2,
    letter: "I",
    title: "Inviter à parler",
    description:
      "Écoute sans juger ni minimiser. Tu n'es pas là pour résoudre — juste pour comprendre. Reformule parfois pour montrer que tu entends.",
  },
  {
    step: 3,
    letter: "E",
    title: "Encourager l'aide",
    description:
      "Propose ensemble des pistes : ligne d'écoute, médecin, service de santé étudiants, psychologue. Tu peux l'aider à prendre rendez-vous si besoin.",
  },
  {
    step: 4,
    letter: "N",
    title: "Nourrir le lien",
    description: "Reprends des nouvelles régulièrement, même par un message court. Le lien compte autant que la conversation initiale.",
  },
];
