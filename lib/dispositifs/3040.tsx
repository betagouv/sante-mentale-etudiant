import { Dispositif } from "./types";

export const DISPOSITIF_3040: Dispositif = {
  slug: "3040",
  catchPhrase:
    "Le numéro dédié aux étudiantes et aux étudiants en difficulté ou en situation de mal-être",
  menuPhrase: "ligne d’écoute pour étudiants en mal-être",
  metadata: {
    title: "3040",
    description:
      "Le 3040, numéro d'écoute pour les étudiants : parlez à un professionnel en cas de mal-être, stress ou isolement. Un soutien accessible et confidentiel.",
  },
  videoKey: "3040",
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
        badge: "Du lundi au samedi",
        picto: "Smartphone",
        linkProps: {
          href: "tel:3040",
          "aria-label": "Appeler le 3040",
        },
      },
      {
        title: "Par e-mail",
        badge: "Réponse sous 24h (jours ouvrés)",
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
          professionnels du travail social et de juristes est là pour t’écouter, t’apporter du
          soutien répondre à tes questions et t’aider à trouver la solution adaptée à ta situation.
        </p>
        <p>
          Le 3040 permet également de signaler des situations de discrimination, de harcèlement ou
          de violences sexistes et sexuelles. Pour rappel, un signalement représente un fait
          pénalement répréhensible (violence sexiste et sexuelle, harcèlement, ...).
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
