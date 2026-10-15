import ExternalLink from "@/components/link/ExternalLink";
import { ReactNode } from "react";

export type LienStep = {
  step: number;
  letter: string;
  title: string;
  description: string | ReactNode;
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
    description: (
      <>
        Écoute sans juger ni minimiser. Tu n'es pas là pour résoudre, juste pour comprendre.
        <br />
        Tu peux reformuler, pour montrer que tu entends, comprends. Pour ouvrir la conversation, tu
        peux partir de ce que tu as remarqué : « Je m'inquiète un peu pour toi. Tu as envie d'en
        parler ? ».
        <br />
        Tu peux ensuite poser des questions ouvertes : « Qu'est-ce qui est le plus lourd en ce
        moment ? ». Si tu t'inquiètes, n'hésite pas à demander directement : « Est-ce qu'il t'arrive
        de penser au suicide ? ».
        <br />
        Cette question est souvent plus difficile à poser qu'à entendre. Comme le rappelle le{" "}
        <ExternalLink href="https://3114.fr/je-minquiete-pour-quelquun/le-bon-moment-et-les-bons-mots/">
          3114
        </ExternalLink>
        , poser la question du suicide ne lui suggère pas l'idée : cela ouvre au contraire la porte à
        l'expression de la souffrance.
      </>
    ),
  },
  {
    step: 3,
    letter: "E",
    title: "Encourager l'aide",
    description:
      "Propose des pistes : ligne d'écoute, médecin, service de santé étudiants, psychologue. Tu peux l'aider à prendre rendez-vous si besoin.",
  },
  {
    step: 4,
    letter: "N",
    title: "Nourrir le lien",
    description:
      "Reprends des nouvelles régulièrement, même par un message court. Le lien compte autant que la conversation initiale.",
  },
];
