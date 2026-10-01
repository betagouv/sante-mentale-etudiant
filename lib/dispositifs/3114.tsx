import { Dispositif } from "./types";

export const DISPOSITIF_3114: Dispositif = {
  slug: "3114",
  catchPhrase: "Le numéro national de prévention du suicide",
  button: {
    text: "Contacter le 3114",
  },
  audience: {
    title: "À qui s’adresse le 3114 ?",
    items: [
      {
        title: "Aux personnes en souffrance",
        desc: <>Pensées suicidaires, mal- être, angoisses, crise ou tout autre besoin de parler.</>,
      },
      {
        title: "À l’entourage inquiet",
        desc: <>Famille, amis, collègues... si tu es préoccupé par une personne proche.</>,
      },
      {
        title: "Aux professionnels",
        desc: <>Pour échanger sur une situation et obtenir des conseils ou une orientation.</>,
      },
    ],
  },
  contact: {
    title: "Comment contacter le 3114 ?",
    tiles: [
      {
        title: "Par téléphone",
        desc: (
          <>
            Compose le 3114 depuis toute la France (métropolitaine et les départements d’outre-mer).
          </>
        ),
        badge: "24h/24 - 7j/7",
        picto: "Smartphone",
        linkProps: {
          href: "tel:3114",
          "aria-label": "Appeler le 3114, numéro national de prévention du suicide",
        },
      },
      {
        title: "Par e-mail",
        badge: "Réponse sous 24h",
        desc: <>Écris via un formulaire de contact sur le site www.3114.fr</>,
        picto: "MainSend",
        linkProps: {
          href: "tel:3114",
          "aria-label": "Appeler le 3114, numéro national de prévention du suicide",
        },
      },
    ],
  },
};
