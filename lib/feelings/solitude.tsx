import { Feeling } from "./types";

export const FEELING_SOLITUDE: Feeling = {
  slug: "solitude",
  name: "Solitude",
  catch: {
    description: "Je me sens seul / isolé",
    sentence: (
      <>
        <p>
          Tu es entouré de monde en cours, mais tu as l'impression de n'avoir personne à qui parler
          vraiment. Tu regardes les autres rire ensemble et tu te demandes pourquoi tu n'y arrives
          pas. Tu as parfois l'impression que tout le monde a trouvé sa place… sauf toi.
        </p>
        <p>
          Se sentir seul ne veut pas forcément dire être seul. C'est un ressenti que beaucoup
          d'étudiants connaissent, surtout lors des périodes de changement. Et il est possible d'en
          sortir.
        </p>
      </>
    ),
  },
  video: {
    key: "solitude",
    videoUrl: "https://tube.numerique.gouv.fr/videos/embed/9qy5gDdpGJw2AMTLcHi7YG",
    previewUrl: "/videos/tmp/preview.mp4",
    posterUrl: "/images/tmp/tmp_homepage_video.jpg",
    duration: 5,
    guest: {
      name: "Jérôme Lacinga",
      role: "Psychologue clinicien",
    },
  },
  recap: [
    "On peut se sentir seul même lorsqu'on est entouré",
    "La solitude est un ressenti, pas un nombre d'amis",
    "Ce sentiment est fréquent pendant les études et les périodes de transition",
    "La solitude peut s'installer progressivement, mais il est possible de recréer du lien",
  ],
  faq: {
    title: "Comprendre le sentiment de solitude",
    intro: (
      <>
        Le sentiment de solitude est une émotion que chacun peut ressentir à un moment de sa vie.
        Elle apparaît lorsque les liens que nous avons avec les autres ne répondent plus à notre
        besoin de nous sentir compris, soutenu ou à notre place. Être entouré ne protège pas
        toujours du sentiment de solitude.
      </>
    ),
    items: [
      {
        question: "Être seul ne veut pas dire se sentir seul",
        answer: (
          <>
            <p>
              Il est tout à fait possible d'apprécier des moments de solitude. À l'inverse, on peut
              être entouré de sa promotion, vivre en colocation ou sortir régulièrement… et
              ressentir malgré tout un profond sentiment d'isolement. La solitude ne dépend donc pas
              du nombre de personnes autour de toi, mais de la qualité des liens que tu ressens avec
              elles.
            </p>
          </>
        ),
      },
      {
        question: "Pourquoi ce sentiment apparaît-il ?",
        answer: (
          <>
            <p>Les études sont souvent synonymes de changements.</p>
            <p>
              Entrer dans une nouvelle ville, quitter sa famille, perdre ses repères, changer de
              promotion, vivre une rupture ou avoir l'impression de ne pas trouver sa place… toutes
              ces situations peuvent fragiliser les liens sociaux.
            </p>
            <p>
              Les réseaux sociaux peuvent également accentuer ce sentiment. En voyant les autres
              partager leurs sorties, leurs réussites ou leurs amitiés, il est facile d'avoir
              l'impression d'être le seul à vivre cette solitude.
            </p>
            <p>
              Pourtant, cette impression est souvent trompeuse : chacun montre surtout les moments
              qu'il choisit de partager.
            </p>
          </>
        ),
      },
      {
        question: "La solitude peut s'installer progressivement",
        answer: (
          <>
            <p>
              On ne devient pas isolé du jour au lendemain. Parfois, on refuse une invitation parce
              qu'on est fatigué, puis une deuxième, puis on répond moins aux messages. On se dit
              qu'on recontactera les autres plus tard.
            </p>
            <p>
              Petit à petit, les liens se distendent, et reprendre contact peut sembler de plus en
              plus difficile. Ce cercle peut entretenir la solitude.
            </p>
          </>
        ),
      },
      {
        question: "La solitude influence aussi notre santé mentale",
        answer: (
          <>
            <p>
              Lorsque l'on se sent seul pendant longtemps, il est fréquent de perdre confiance en
              soi ou de commencer à se demander si l'on est "intéressant", "aimable" ou "à sa
              place".
            </p>
            <p>
              La solitude peut également favoriser le stress, l'anxiété, la tristesse ou
              l'épuisement.
            </p>
            <p>
              Voir aussi les pages "Je me sens stressé / anxieux", "Je suis épuisé / fatigué" et
              "J'ai du mal à gérer mes émotions".
            </p>
          </>
        ),
      },
      {
        question: "Recréer du lien demande du temps",
        answer: (
          <>
            <p>
              Lorsqu'on se sent isolé, on peut avoir envie que tout change rapidement. En réalité,
              retrouver un sentiment d'appartenance se construit souvent petit à petit. Une
              discussion, un message, une activité ou une rencontre ne changent pas tout d'un coup.
              Mais ces petits pas permettent progressivement de recréer des liens.
            </p>
            <p>
              Il n'est pas nécessaire d'avoir beaucoup d'amis pour se sentir moins seul. Une seule
              relation de confiance peut parfois faire une grande différence.
            </p>
          </>
        ),
      },
      {
        question: "Un phénomène qui touche beaucoup de jeunes",
        answer: (
          <>
            <p>Le sentiment de solitude est loin d'être rare.</p>
            <p>
              En France, 62 % des 18-24 ans déclarent se sentir régulièrement seuls, selon une étude
              de l'IFOP publiée en 2024 et relayée par Le Monde .
            </p>
            <p>
              Les données de Santé Psy Étudiant montrent également que les difficultés
              relationnelles, familiales ou amoureuses représentent 18 % des raisons évoquées par
              les étudiants au moment de consulter. Elles font ainsi partie des difficultés les plus
              fréquemment exprimées par les bénéficiaires du dispositif.
            </p>
            <p>
              Le sentiment de solitude est fréquent chez les étudiants, notamment lors des périodes
              de transition comme l'entrée dans les études supérieures, un déménagement, une rupture
              ou un changement de repères.
            </p>
          </>
        ),
      },
      {
        question: "Comment ça se manifeste concrètement",
        answer: (
          <ul>
            <li>Je me sens seul, même quand je suis entouré.</li>
            <li>J'ai l'impression que tout le monde a trouvé sa place sauf moi.</li>
            <li>Je n'ose pas proposer de voir des gens.</li>
            <li>Je réponds de moins en moins aux messages.</li>
            <li>Je refuse souvent les invitations.</li>
            <li>Je passe beaucoup de temps seul alors que je n'en ai pas vraiment envie.</li>
            <li>Je me compare souvent aux autres.</li>
            <li>J'ai le sentiment de ne pas être compris.</li>
            <li>Je me demande parfois si le problème vient de moi.</li>
            <li>J'ai l'impression d'être invisible.</li>
          </ul>
        ),
      },
    ],
  },
  tips: [
    {
      title: "Faire la différence entre être seul et se sentir seul",
      items: [
        {
          title: "L’action",
          desc: (
            <>
              la solitude ne dépend pas seulement du nombre de personnes autour de toi. Essaie
              d'identifier ce qui te manque le plus aujourd'hui.
            </>
          ),
        },
        {
          title: "Commence petit",
          desc: (
            <>
              demande-toi : Est-ce que j'aimerais avoir quelqu'un à qui parler ? Est-ce que
              j'aimerais me sentir davantage compris ? Est-ce que j'aimerais partager plus de
              moments avec d'autres ? Est-ce que j'aimerais simplement me sentir à ma place ? Mettre
              des mots sur ce manque permet souvent de mieux comprendre ce dont tu as besoin pour te
              sentir moins seul.
            </>
          ),
        },
      ],
    },
    {
      title: "Faire un premier pas",
      items: [
        {
          title: "L’action",
          desc: <>lorsqu'on se sent isolé, on attend souvent que les autres viennent vers nous.</>,
        },
        {
          title: "Commence petit",
          desc: (
            <>
              envoie un message à une personne que tu apprécies, propose un café après les cours ou
              réponds à une invitation que tu aurais peut-être refusée auparavant. Il ne s'agit pas
              de multiplier les rencontres, mais de rouvrir progressivement la porte aux autres.
            </>
          ),
        },
      ],
    },
    {
      title: "Limiter les comparaisons",
      items: [
        {
          title: "L’action",
          desc: (
            <>
              rappelle-toi que les réseaux sociaux montrent rarement les moments de solitude, de
              doute ou de rejet.
            </>
          ),
        },
        {
          title: "Commence petit",
          desc: (
            <>
              lorsque tu te surprends à penser « tout le monde a une vie sociale parfaite »,
              demande-toi : « Est-ce que je vois vraiment toute leur réalité ? ». Cette question
              aide souvent à prendre du recul.
            </>
          ),
        },
      ],
    },
    {
      title: "Trouver un espace où parler",
      items: [
        {
          title: "L’action",
          desc: <>la solitude devient souvent moins lourde lorsqu'elle peut être partagée.</>,
        },
        {
          title: "Commence petit",
          desc: (
            <>
              parle de ce que tu ressens à une personne de confiance. Dire simplement « je me sens
              seul en ce moment » est déjà une manière de recréer du lien.
            </>
          ),
        },
      ],
    },
  ],
  whatIf: {
    content: (
      <>
        <p>
          Il est normal de traverser des périodes où l'on se sent plus seul, notamment lorsqu'on
          change de ville, de formation ou que l'on vit un événement difficile. Il est important de
          ne pas rester seul avec ce que tu ressens. Parler à un proche peut t'aider à comprendre ce
          qui se passe et à retrouver progressivement des liens qui te font du bien.
        </p>
        <p>
          En revanche, si ce sentiment dure, t'amène à t'isoler de plus en plus, affecte ton moral
          ou te donne l'impression de perdre espoir, il est important de prendre contact avec un
          professionnel (médecin ou psychologue). Ils pourront t'aider à te sentir mieux.
        </p>
        <p>
          La solitude n'est pas une faiblesse. C'est un signal que ton besoin de lien mérite d'être
          entendu.
        </p>
      </>
    ),
  },
};
