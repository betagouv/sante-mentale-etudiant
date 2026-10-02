import { Dispositif } from "./types";

export const DISPOSITIF_SPE: Dispositif = {
  slug: "SPE",
  catchPhrase: "12 séances gratuites avec un psychologue",
  metadata: {
    title: "Santé Psy Etudiant",
    description:
      "Étudiant en souffrance psychique ? Santé Psy Étudiant propose jusqu'à 12 séances gratuites chez un psychologue partenaire. Découvrez comment en bénéficier.",
  },
  button: {
    text: "Trouver un psychologue",
  },
  audience: {
    title: "À qui s'adresse Santé Psy Étudiant ?",
    items: [
      {
        title: "Quand quelque chose devient difficile à gérer",
        desc: (
          <>
            Stress, anxiété, épuisement, solitude, problèmes familiaux ou relationnels, difficultés
            dans tes études… Tu peux consulter dès que tu ressens le besoin de parler.
          </>
        ),
      },
      {
        title: "Quand tu traverses une période difficile",
        desc: (
          <>
            Rupture, deuil, changement de vie, violences, problèmes financiers, perte de motivation…
            Un psychologue peut t'aider à mettre des mots sur ce que tu traverses.
          </>
        ),
      },
      {
        title: "Quand tu ne sais pas vraiment ce qui ne va pas",
        desc: (
          <>
            Tu n'as pas besoin d'avoir un diagnostic ou de savoir exactement ce qui t'arrive pour
            prendre rendez-vous. Le premier échange peut justement permettre d'y voir plus clair.
          </>
        ),
      },
    ],
  },
  contact: {
    title: "Comment bénéficier de Santé Psy Étudiant ?",
    tiles: [
      {
        title: "Crée ton espace étudiant",
        desc: (
          <>
            Renseigne tes informations et ton justificatif de scolarité pour vérifier ton
            éligibilité.
          </>
        ),
        badge: "01",
        picto: "SelfTraining",
      },
      {
        title: "Choisis ton psychologue",
        badge: "02",
        desc: (
          <>
            Recherche un professionnel partenaire selon ta localisation, sa spécialité ou la
            possibilité de consulter à distance.
          </>
        ),
        picto: "Ecosystem",
      },
      {
        title: "Prends rendez-vous",
        badge: "03",
        desc: (
          <>
            Contacte directement le psychologue de ton choix et commence ton accompagnement. Tu n'as
            rien à payer ni à avancer.
          </>
        ),
        picto: "Calendar",
      },
    ],
  },
  whatIsIt: {
    title: "Qu'est-ce que Santé Psy Étudiant ?",
    desc: (
      <>
        <p>
          <b>
            Santé Psy Étudiant est un dispositif national d'accompagnement psychologique destiné aux
            étudiants.
          </b>
        </p>
        <p>
          Il te permet de bénéficier de 12 séances avec un psychologue partenaire au cours de
          l'année universitaire, entièrement prises en charge et sans avance de frais. Les séances
          sont renouvelées chaque nouvelle année universitaire si tu es toujours étudiant.
        </p>
        <p>
          Tu peux choisir directement ton psychologue parmi les professionnels partenaires du
          dispositif et prendre rendez-vous sans passer au préalable par un médecin.
        </p>
      </>
    ),
    items: [
      { title: "Gratuit", desc: <>Sans avance de frais</> },
      { title: "12 séances par an", desc: <>Renouvelées chaque année universitaire</> },
      {
        title: "Sans ordonnance",
        desc: <>Pas besoin de passer par un médecin avant de prendre rendez-vous</>,
      },
      {
        title: "+ de 1 600 psychologues",
        desc: <>Des professionnels partenaires partout en France </>,
      },
      {
        title: "Présentiel ou à distance",
        desc: <>De nombreux psychologues proposent également la téléconsultation</>,
      },
    ],
  },
};
