import { transcriptionSolitude } from "@/data/videos/transcriptions/feelings/solitude";
import { FeelingLink } from ".";
import { Feeling } from "./types";
import Link from "next/link";

export const FEELING_SOLITUDE: Feeling = {
  slug: "solitude",
  name: "Solitude",
  metadata: {
    title: "Je ressens de la solitude",
    description:
      "Se sentir seul ou isolé pendant ses études est plus fréquent qu'on ne le croit : découvrez des ressources et des pistes pour créer du lien et trouver du soutien.",
  },
  catch: {
    description: "Je ressens de la solitude, de l'isolement",
    sentence: (
      <>
        <p>
          Tu es entouré de monde en cours, mais tu as l'impression de n'avoir personne à qui parler
          vraiment. Tu regardes les autres rire ensemble et tu te demandes pourquoi tu n'y arrives
          pas. Tu as parfois l'impression que tout le monde a trouvé sa place… sauf toi.
        </p>
        <p>
          Se sentir seul ne veut pas forcément dire être seul.
          C'est un ressenti que beaucoup d'étudiants connaissent, surtout lors des périodes de changement.
          Et avec les bons appuis, il est possible d’en sortir progressivement.
        </p>
      </>
    ),
  },
  video: {
    key: "solitude",
    videoUrl: "https://tube.numerique.gouv.fr/videos/embed/mb2XUWbAqrDcxWMbxBwuEN",
    previewUrl: "/videos/preview/feelings/solitude.mp4",
    posterUrl: "/images/vignettes/feelings/solitude.jpg",
    duration: 5,
    guest: {
      name: "Jérôme Lacinga",
      role: "Psychologue clinicien",
    },
    transcription: transcriptionSolitude,
  },
  recap: [
    "On peut se sentir seul au milieu des autres, sans forcément être isolé",
    "Quand on se sent seul, on a tendance à moins voir les autres, et on finit par s'isoler vraiment",
    "Examens, deuil, période difficile : certains moments de vie peuvent créer un décalage avec les autres",
    "Si le sentiment de solitude dure ou devient trop douloureux, il est important d'en parler",

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
            <p>L’entrée dans l’enseignement supérieur correspond souvent à une phase de transition. </p>
            <p>
              C’est souvent un moment où on quitte son foyer familial, on change d’environnement, de rythme.
              En 2023, deux tiers des étudiants vivent hors du domicile familial (ESR, 2023).
            </p>
            <p>
              Entrer dans une nouvelle ville, quitter sa famille, perdre ses repères, changer de promotion,
              vivre une rupture ou avoir l'impression de ne pas trouver sa place…
              Toutes ces situations peuvent fragiliser les liens sociaux.
            </p>
            <p>
              Les réseaux sociaux peuvent également accentuer ce sentiment. En voyant les autres partager leurs sorties,
              leurs “réussites” ou leurs “amitiés”, on a parfois  l'impression d'être le seul à vivre cette solitude.
              Pourtant, cette impression est souvent trompeuse : chacun montre surtout les moments qu'il choisit de partager.
            </p>
            <p>
              Paradoxalement, les jeunes n’ont jamais été aussi connectés,
              et ils ne se sont jamais sentis aussi seuls (voir page jeunes, mais hyper connectés).
            </p>
            <p>
              Certaines situations peuvent aussi renforcer le sentiment de solitude (accompagné ou non d'un isolement réel) : venir d'un autre pays, vivre avec un handicap, faire partie d’une minorité de genre. Ce sont souvent les obstacles rencontrés, comme la barrière de la langue, la peur d'être jugé, l’éloignement du cercle familial, qui rendent les liens plus difficiles à créer.
            </p>
          </>
        ),
      },
      {
        question: "Du sentiment de solitude à l’isolement réel",
        answer: (
          <>
            <p>
              Quand on ressent de la solitude (sans forcément être isolé), on peut créer un cercle qui va s’auto entretenir : au début, on va en cours, on voit du monde, mais on commence à ressentir un décalage entre “les autres” et ce que l’on vit (une anxiété liée aux partiels, un évènement douloureux qu’on tente de cacher… les causes racines peuvent être multiples).
            </p>
            <p>
              Ce décalage donne moins envie de partager, on a l’impression qu’on les “autres” n’écoutent pas, alors à quoi bon parler ?
            </p>
            <p>
              Au fur et à mesure, les liens se distendent. Et plus le temps passe, plus il est compliqué d’aller vers les autres. On finit par s’isoler vraiment.
            </p>
          </>
        ),
      },
      {
        question: "La solitude influence aussi notre santé mentale",
        answer: (
          <>
            <p>
              Quand on se sent seul, on a 2,5 fois plus de risques de souffrir de détresse psychologique (
              <Link
                href="https://etude-mentalo.fr/diplemeo/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Etude participative Mentalo
              </Link>
              sur la santé mentale des jeunes de 11 à 24 ans).
            </p>
            <p>
              La solitude peut également favoriser le stress, l'anxiété, la tristesse ou
              l'épuisement.
            </p>
            <p>
              Voir aussi les pages <FeelingLink slug="anxiety" />, <FeelingLink slug="fatigue" /> et{" "}
              <FeelingLink slug="feeling-management" />.
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
              En France, 62 % des 18-24 ans déclarent se sentir régulièrement seuls, selon une
              <Link
                href="https://www.ifopgroup.com/article/limpact-de-la-solitude-sur-la-vie-des-francais/"
                target="_blank"
                rel="noopener noreferrer"
              >
                étude de l'IFOP en 2024
              </Link>
              .
            </p>
            <p>
              Chez Santé Psy Etudiant, le sentiment de solitude / l’isolement est le 5e motif de consultation
              (après l’anxiété, l’épuisement, la tristesse, l’envie de mieux se comprendre) - Source : enquête SPE Juin 2024.
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
          desc: <>lorsqu'on se sent isolé, on attend souvent que les autres viennent vers nous. On peut perdre confiance en soi, l’envie de voir les autres, l’envie de bouger. </>,
        },
        {
          title: "Commence petit",
          desc: (
            <>
              envoie un message à une personne que tu apprécies, propose un café après les cours ou
              réponds à une invitation à laquelle tu aurais dit “non” auparavant.
              Tu peux aussi changer de place en amphi, rejoindre une asso, t’inscrire à une activité
              (regarde celle proposée par ta fac ou ton école)… l’idée n’est pas de multiplier les rencontres,
              mais de sortir un peu de ta routine et de t’ouvrir progressivement aux autres.
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
          ou te donne l'impression de perdre espoir, il est important de ne pas rester seul avec ce que tu ressens..
        </p>
        <p>
          Parler à un proche ou à un professionnel peut t'aider à comprendre ce qui se passe et à retrouver progressivement des liens qui te font du bien.
        </p>
        <p>
          Des lignes d’écoute existent, comme le 3040 (tu seras reçu par un professionnel - psychologue,
          travailleur social, juriste - qui saura t’orienter), Nightline
          (où des étudiants écoutent d’autres étudiants en situation de mal être, la nuit), ou le 3114
          (en cas de pensées suicidaires). N’hésite pas à les contacter.
        </p>
      </>
    ),
  },
};
