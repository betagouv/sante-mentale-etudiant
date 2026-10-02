import { Dispositif } from "./types";

export const DISPOSITIF_NIGHTLINE: Dispositif = {
  slug: "nightline",
  catchPhrase: "Le service d'écoute nocturne par et pour les étudiants",
  button: {
    text: "Contacter Nighline",
  },
  audience: {
    title: "À qui s’adresse Nightline ?",
    items: [
      {
        title: "Quand tu as besoin de parler",
        desc: (
          <>
            Tu traverses une période difficile, tu te sens stressé, anxieux, triste ou tu as
            simplement besoin de vider ton sac ? Tu peux parler librement de ce que tu ressens.
          </>
        ),
      },
      {
        title: "Quand tu te sens seul",
        desc: (
          <>
            Parfois, ce dont on a besoin, c’est simplement de quelqu’un avec qui parler. Nightline
            t’offre un espace d’écoute, sans jugement et sans avoir à te justifier.
          </>
        ),
      },
      {
        title: "Quand tu ne sais pas vraiment ce qui ne va pas",
        desc: (
          <>
            Tu n’as pas besoin d’avoir un « gros problème », de savoir exactement ce que tu ressens
            ou de trouver les bons mots pour contacter Nightline.
          </>
        ),
      },
    ],
  },
  contact: {
    title: "Comment contacter Nightline ?",
    tiles: [
      {
        title: "Par téléphone",
        desc: (
          <>
            Compose le 0 809 104 104. La ligne francophone est ouverte tous les soirs de 21h à 2h30.
            <br />
            Une ligne anglophone est disponible au 0 809 104 105.
          </>
        ),
        badge: "24h/24 - 7j/7",
        picto: "Smartphone",
      },
      {
        title: "Par Tchat",
        badge: "24h/24 - 7j/7",
        desc: (
          <>
            Le tchat Nightline est également accessible tous les soirs de 21h à 2h30 via leur site
            internet.
          </>
        ),
        picto: "Smartphone",
      },
    ],
  },
  whatIsIt: {
    title: "Qu’est-ce que Nightline ?",
    desc: (
      <>
        <p>
          <b>Nightline est un service d’écoute tenu par des étudiants, pour des étudiants.</b>
        </p>
        <p>
          Tous les soirs, des étudiants bénévoles formés à l’écoute active sont disponibles pour
          t’écouter, par téléphone ou par tchat. L’échange est gratuit, anonyme, confidentiel et
          sans jugement.
        </p>
        <p>
          Tu peux parler de ce que tu veux, à ton rythme. L’écoutant n’est pas là pour remplacer un
          professionnel de santé : il t’écoute et t’aide à mettre des mots sur ce que tu traverses.
          Si tu le souhaites, il peut également t’orienter vers d’autres ressources adaptées.
        </p>
      </>
    ),
    items: [
      { title: "Gratuit", desc: <></> },
      { title: "Anonyme", desc: <>Tu n’as pas à donner ton identité</> },
      {
        title: "Confidentiel",
        desc: <>Tu peux parler librement de ce que tu traverses</>,
      },
      {
        title: "Entre étudiants",
        desc: <>Des bénévoles étudiants formés à l’écoute active</>,
      },
      {
        title: "Tous les soirs",
        desc: <>De 21h à 2h30, par téléphone ou par tchat</>,
      },
    ],
  },
};
