import { Dispositif } from "./types";

export const DISPOSITIF_BAPU: Dispositif = {
  slug: "BAPU",
  catchPhrase: "Un accompagnement psychologique dédié aux étudiants",
  button: {
    text: "Trouver mon BAPU",
  },
  audience: {
    title: "À qui s'adresse un BAPU ?",
    items: [
      {
        title: "J'ai besoin de parler à un professionnel",
        desc: (
          <>
            Anxiété, mal-être, difficultés relationnelles ou familiales, solitude, difficultés dans
            tes études… Tu peux consulter dès lors que ce que tu traverses te fait souffrir ou
            devient difficile à gérer.
          </>
        ),
      },
      {
        title: "J'ai besoin d'un accompagnement dans la durée",
        desc: (
          <>
            Certaines difficultés nécessitent plus que quelques rendez-vous. En BAPU, le nombre de
            séances n'est pas prédéfini : le suivi peut se poursuivre en fonction de tes besoins.
          </>
        ),
      },
      {
        title: "J'ai besoin de consulter",
        desc: (
          <>
            Un problème de santé ou besoin d'un suivi ? Certains SSE proposent directement des
            consultations et des soins de premier recours et peuvent aussi t'orienter vers le
            professionnel adapté.
          </>
        ),
      },
    ],
  },
  contact: {
    title: "Comment bénéficier d'un accompagnement en BAPU ?",
    tiles: [
      {
        title: "Trouve le BAPU le plus proche",
        desc: (
          <>
            Les BAPU sont implantés dans différentes villes universitaires. Tu peux rechercher ici
            (lien page SME) celui qui se trouve à proximité de ton lieu d'études ou de résidence.
          </>
        ),
        badge: "01",
        picto: "Map",
      },
      {
        title: "Contacte directement le BAPU",
        desc: (
          <>
            Prends contact avec le centre pour connaître ses modalités d'accueil et demander un
            premier rendez-vous. Les modalités et délais peuvent varier d'un BAPU à l'autre.
          </>
        ),
        badge: "02",
        picto: "Calendar",
      },
      {
        title: "Rencontre un professionnel",
        desc: (
          <>
            Lors des premiers échanges, l'équipe évalue avec toi tes besoins afin de te proposer
            l'accompagnement le plus adapté.
          </>
        ),
        badge: "03",
        picto: "Community",
      },
    ],
  },
  whatIsIt: {
    title: "Qu'est-ce qu'un BAPU ?",
    desc: (
      <>
        <p>
          <b>
            Les Bureaux d'aide psychologique universitaires (BAPU) sont des centres de consultation
            dédiés aux étudiants qui souhaitent bénéficier d'un accompagnement psychologique.
          </b>
        </p>
        <p>
          Tu peux y rencontrer des professionnels de la santé mentale, notamment des psychologues et
          des psychiatres, pour parler de ce que tu traverses et bénéficier d'un suivi adapté à tes
          besoins.
        </p>
        <p>
          Contrairement à Santé Psy Étudiant proposant un nombre déterminé de consultations, le
          suivi en BAPU n'est pas limité à un nombre prédéfini de séances : sa durée est déterminée
          en fonction de ta situation et de tes besoins. Les consultations sont prises en charge à
          100 %, sans avance de frais, mais tu auras besoin de ta carte vitale.
        </p>
      </>
    ),
    items: [
      {
        title: "Gratuit",
        desc: (
          <>
            Sans avance de frais.
            <br />
            Apporte ta carte vitale
          </>
        ),
      },
      {
        title: "Un suivi dans la durée",
        desc: <>Pas de nombre de séances prédéfini</>,
      },
      {
        title: "Des professionnels spécialisés",
        desc: <>Notamment des psychiatres et psychologues</>,
      },
      {
        title: "Dédié aux étudiants",
        desc: <>Un accompagnement pensé pour les problématiques rencontrées pendant les études</>,
      },
      {
        title: "Confidentiel",
        desc: <>Les échanges avec les professionnels sont confidentiels</>,
      },
    ],
  },
};
