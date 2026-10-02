import { Dispositif } from "./types";

export const DISPOSITIF_3040: Dispositif = {
  slug: "3040",
  catchPhrase: "Le numéro dédié au bien-être des étudiants",
  metadata: {
    title: "3040",
    description:
      "Le 3040, numéro d'écoute pour les étudiants : parlez à un professionnel en cas de mal-être, stress ou isolement. Un soutien accessible et confidentiel.",
  },
  button: {
    text: "Contacter le 3040",
  },
  audience: {
    title: "À qui s’adresse le 3040 ?",
    items: [
      {
        title: "Je traverse une période difficile",
        desc: (
          <>
            Mal-être, anxiété, isolement, difficultés personnelles ou étudiantes… Tu ressens le
            besoin de parler.
          </>
        ),
      },
      {
        title: "Je vis une situation de violence ou de discrimination",
        desc: (
          <>
            Violences sexistes ou sexuelles, harcèlement, discrimination… Tu peux être écouté,
            conseillé et accompagné dans tes démarches.
          </>
        ),
      },
      {
        title: "J’ai besoin d’être orienté",
        desc: (
          <>
            Tu cherches un psychologue, une structure ou simplement le bon interlocuteur ? Le 3040
            peut t’aider à identifier la solution adaptée à ta situation.
          </>
        ),
      },
    ],
  },
  contact: {
    title: "Comment contacter le 3040 ?",
    tiles: [
      {
        title: "Par téléphone",
        desc: (
          <>
            Compose le 3040.
            <br />
            Du lundi au vendredi : 10h - 21h - Le samedi : 10h - 14h
          </>
        ),
        badge: "24h/24 - 7j/7",
        picto: "Smartphone",
        linkProps: {
          href: "tel:3040",
          "aria-label": "Appeler le 3040",
        },
      },
      {
        title: "Par e-mail",
        badge: "Réponse sous 24h",
        desc: (
          <>Écris à 3040@enseignementsup.gouv.fr pour expliquer ta situation et être accompagné.</>
        ),
        picto: "MainSend",
        linkProps: {
          href: "tel:3114",
          "aria-label": "Appeler le 3114, numéro national de prévention du suicide",
        },
      },
    ],
  },
  whatIsIt: {
    title: "Qu’est ce que le 3040 ?",
    desc: (
      <>
        <p>
          <b>
            Le 3040 est un service national d’écoute, d’information, d’accompagnement et de
            signalement dédié aux étudiants.
          </b>
        </p>
        <p>
          Au bout du fil, une équipe pluridisciplinaire composée notamment de psychologues, de
          professionnels du travail social et de juristes est là pour t’écouter, répondre à tes
          questions et t’aider à trouver la solution adaptée à ta situation.
        </p>
        <p>
          Selon tes besoins, tu peux être orienté vers Santé Psy Étudiant, un Service de santé
          étudiante (SSE), un Centre médico-psychologique (CMP), un BAPU ou une association
          spécialisée.
        </p>
      </>
    ),
    items: [
      { title: "Gratuit", desc: <></> },
      {
        title: "Disponible",
        desc: <>du lundi au vendredi de 10h à 21h et le samedi de 10h à 14h</>,
      },
      { title: "Confidentiel", desc: <> Tu peux parler librement de ta situation</> },
      {
        title: "Des professionnels",
        desc: <>Psychologues, professionnels du travail social et juristes.</>,
      },
      {
        title: "Pour tous les étudiants",
        desc: <>Quel que soit ton établissement ou ta situation</>,
      },
    ],
  },
};
