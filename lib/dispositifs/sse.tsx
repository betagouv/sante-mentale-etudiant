import { Dispositif } from "./types";

export const DISPOSITIF_SSE: Dispositif = {
  slug: "SSE",
  catchPhrase: "Le service de santé dédié aux étudiants",
  metadata: {
    title: "SSE",
    description:
      "Le Service de Santé Étudiante (SSE) accompagne les étudiants : consultations médicales, soutien psychologique et prévention, sur votre campus et gratuitement.",
  },
  button: {
    text: "Trouver mon SSE",
  },
  audience: {
    title: "À qui s'adressent les SSE ?",
    items: [
      {
        title: "Je ne me sens pas bien",
        desc: (
          <>
            Stress, anxiété, fatigue, tristesse, mal-être… Les SSE peuvent proposer une écoute et un
            accompagnement en santé mentale, avec des psychologues ou d'autres professionnels selon
            les établissements.
          </>
        ),
      },
      {
        title: "J'ai une question sur ma santé",
        desc: (
          <>
            Contraception, dépistage, vaccination, alimentation, sommeil, consommation d'alcool ou
            d'autres substances… Tu peux t'adresser à ton SSE pour obtenir des informations et des
            conseils adaptés.
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
    title: "Comment contacter mon SSE ?",
    tiles: [
      {
        title: "Trouve le SSE dont tu dépends",
        desc: (
          <>
            Les coordonnées de ton Service de santé étudiante sont disponibles auprès de ton
            établissement ou juste ici (lien page SME).
          </>
        ),
        badge: "01",
        picto: "Map",
      },
      {
        title: "Prends rendez-vous",
        desc: (
          <>
            Les modalités de rendez-vous et les consultations proposées varient selon les SSE.
            Consulte la page de ton service pour connaître son offre et prendre contact.
          </>
        ),
        badge: "02",
        picto: "Calendar",
      },
      {
        title: "Rencontre le bon professionnel",
        desc: (
          <>
            Selon ta situation et l'offre de ton SSE, tu pourras rencontrer un médecin, un
            infirmier, un psychologue, un psychiatre, une sage-femme, un diététicien ou encore un
            assistant de service social.
          </>
        ),
        badge: "03",
        picto: "Community",
      },
    ],
  },
  whatIsIt: {
    title: "Qu'est-ce qu'un Service de santé étudiante ?",
    desc: (
      <>
        <p>
          <b>
            Les Services de santé étudiante (SSE) sont là pour répondre aux besoins de santé des
            étudiants, qu'ils soient médicaux, psychologiques ou sociaux.
          </b>
        </p>
        <p>
          Tu peux y rencontrer différents professionnels de santé, être écouté, obtenir des
          conseils, bénéficier d'actions de prévention et, selon les services proposés par ton SSE,
          accéder directement à des consultations et des soins.
        </p>
        <p>
          Santé mentale, santé sexuelle, addictions, nutrition, sommeil, vaccination, sport-santé…
          Les équipes peuvent t'accompagner sur de nombreux sujets et t'orienter vers d'autres
          professionnels ou dispositifs lorsque c'est nécessaire.
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
            Pas besoin de carte vitale
          </>
        ),
      },
      {
        title: "Des professionnels de santé",
        desc: <>Médecins, infirmiers, psychologues, sages-femmes, psychiatres… selon les SSE</>,
      },
      {
        title: "Confidentiel",
        desc: <>Les consultations avec les professionnels sont confidentielles</>,
      },
      {
        title: "Proche de toi",
        desc: <>Un service pensé pour la santé des étudiants au sein de ton université</>,
      },
      {
        title: "Une approche globale",
        desc: <>Santé physique, mentale, sexuelle et sociale</>,
      },
    ],
  },
};
