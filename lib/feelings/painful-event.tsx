import { FeelingLink } from ".";
import { Feeling } from "./types";

export const FEELING_PAINFUL_EVENT: Feeling = {
  slug: "painful-event",
  name: "Évènement douloureux",
  picto: "Error",
  catch: {
    description: "Je traverse un événement douloureux",
    sentence: (
      <>
        <p>
          Tu as perdu un proche. Tu vis une rupture. Tu as été confronté à un accident, une maladie
          ou un autre événement qui a bouleversé ton quotidien.
        </p>
        <p>
          Depuis, tu as parfois l'impression que rien n'est plus comme avant. Tu dors mal, tu
          pleures plus facilement, tu n'arrives plus à te concentrer… ou au contraire, tu ne ressens
          presque plus rien.
        </p>
        <p>
          Face à un événement douloureux, il n'existe pas de réaction "normale". Chacun avance à son
          rythme. Et lorsque la souffrance devient trop lourde, il est possible de se faire
          accompagner.
        </p>
      </>
    ),
  },
  video: {
    duration: 5,
    guest: {
      name: "Jérôme Lacinga",
      role: "Psychologue clinicien",
    },
  },
  recap: [
    "Chacun réagit différemment à un événement difficile.",
    "Il n'existe pas de calendrier ni de 'bonne façon' de vivre un deuil, une rupture ou un traumatisme.",
    "Les émotions peuvent évoluer d'un jour à l'autre.",
    "Le temps aide, mais il ne suffit pas toujours.",
    "Si la souffrance dure ou devient trop envahissante, il est important d'en parler.",
  ],
  faq: {
    title: "??",
    intro: (
      <>
        Un événement douloureux peut bouleverser notre équilibre. Il est fréquent qu'il affecte nos
        émotions, notre sommeil, notre concentration ou notre énergie. Ces réactions sont souvent
        normales : elles traduisent l'effort que notre cerveau et notre corps fournissent pour
        s'adapter à ce qui s'est passé.
      </>
    ),
    items: [
      {
        question: "Un événement douloureux ne se résume pas à un deuil",
        answer: (
          <>
            <p>Lorsqu'on parle de souffrance, on pense souvent à la perte d'un proche.</p>
            <p>
              Mais d'autres événements peuvent être tout aussi bouleversants :
              <ul>
                <li>une rupture amoureuse</li>
                <li>le divorce de ses parents</li>
                <li>une maladie</li>
                <li>un accident</li>
                <li>une agression</li>
                <li>un échec important</li>
                <li>la perte de son logement ou de son emploi </li>
                <li>ou toute autre situation qui vient bouleverser tes repères</li>
              </ul>
            </p>
            <p>
              Ce qui compte, ce n'est pas seulement l'événement lui-même, mais la manière dont tu le
              vis.
            </p>
          </>
        ),
      },
      {
        question: "Il n'existe pas de bonne façon de réagir",
        answer: (
          <>
            <p>
              Certaines personnes pleurent beaucoup, d'autres ressentent de la colère, certaines ont
              besoin d'en parler sans arrêt et d'autres préfèrent rester silencieuses.
            </p>
            <p>
              Il arrive aussi de ne rien ressentir pendant plusieurs jours ou plusieurs semaines.
              Toutes ces réactions peuvent être normales. Les émotions évoluent souvent avec le
              temps et ne suivent pas un ordre précis.
            </p>
            <p>
              Tu peux te sentir mieux un jour puis très mal le lendemain. Cela ne signifie pas que
              tu "recules".
            </p>
          </>
        ),
      },
      {
        question: "Le corps réagit lui aussi",
        answer: (
          <>
            <p>
              Après un événement difficile, il est fréquent de constater :
              <ul>
                <li>des difficultés à dormir</li>
                <li>une grande fatigue</li>
                <li>des difficultés à se concentrer</li>
                <li>une perte ou une augmentation de l'appétit</li>
                <li>une sensation d'être "à côté de soi"</li>
                <li>des tensions physiques ou des douleurs</li>
              </ul>
            </p>
            <p>
              Ces réactions sont fréquentes. Elles reflètent le fait que ton organisme mobilise
              beaucoup d'énergie pour faire face à cette épreuve.
            </p>
            <p>
              → Voir aussi les pages <FeelingLink slug="fatigue" /> et{" "}
              <FeelingLink slug="feeling_management" />.
            </p>
          </>
        ),
      },
      {
        question: "Le temps aide mais ne fait pas tout",
        answer: (
          <>
            <p>
              On entend souvent : "Le temps arrangera les choses." Le temps peut effectivement
              permettre à la souffrance de s'apaiser progressivement. Mais parfois, elle reste très
              présente ou semble même s'intensifier.
            </p>
            <p>
              Dans ce cas, demander de l'aide n'est pas le signe que tu n'arrives pas à "tourner la
              page". C'est prendre soin de toi lorsque cette épreuve devient trop difficile à
              traverser seul.
            </p>
          </>
        ),
      },
      {
        question: "Se reconstruire ne veut pas dire oublier",
        answer: (
          <>
            <p>
              Après un événement douloureux, beaucoup de personnes ont peur de ne jamais aller
              mieux. Pourtant, avancer ne signifie pas oublier ce qui s'est passé.
            </p>
            <p>
              Il est possible de continuer à vivre avec cette expérience, tout en retrouvant
              progressivement des moments de plaisir, des projets et un nouvel équilibre.
            </p>
          </>
        ),
      },
      {
        question: "Comment ça se manifeste concrètement",
        answer: (
          <ul>
            <li> pense souvent à ce qui s'est passé.</li>
            <li> pleure plus facilement.</li>
            <li>J'ai du mal à me concentrer.</li>
            <li> dors moins bien ou beaucoup plus qu'avant.</li>
            <li> me sens vidé.</li>
            <li> me mets facilement en colère.</li>
            <li> culpabilise.</li>
            <li>J'ai l'impression que personne ne peut comprendre ce que je ressens.</li>
            <li> n'ai plus envie de voir du monde.</li>
            <li>J'ai parfois l'impression d'être "déconnecté" de moi-</li>même.
          </ul>
        ),
      },
    ],
  },
  tips: [
    {
      title: "Accueillir ce que tu ressens",
      items: [
        {
          title: "L’action",
          desc: (
            <>
              autorise-toi à ressentir ce qui est présent aujourd'hui, sans chercher immédiatement à
              le faire disparaître.
            </>
          ),
        },
        {
          title: "Commence petit",
          desc: (
            <>
              prends quelques minutes pour te demander : "Qu'est-ce que je ressens en ce moment ?".
              Il n'y a pas de bonne ou de mauvaise émotion.
            </>
          ),
        },
      ],
    },
    {
      title: "Respecter ton rythme",
      items: [
        {
          title: "L’action",
          desc: (
            <>évite de te comparer à la manière dont les autres vivent une situation similaire.</>
          ),
        },
        {
          title: "Commence petit",
          desc: (
            <>
              lorsque tu te surprends à penser : "Je devrais déjà aller mieux." essaie de remplacer
              cette pensée par : "J'avance à mon rythme."
            </>
          ),
        },
      ],
    },
    {
      title: "Continuer à prendre soin de toi",
      items: [
        {
          title: "L’action",
          desc: <>même lorsque l'on souffre, les gestes du quotidien restent importants.</>,
        },
        {
          title: "Commence petit",
          desc: (
            <>
              essaie aujourd'hui de faire une seule chose qui te fait du bien : marcher quelques
              minutes, prendre une douche, cuisiner un repas ou appeler une personne de confiance.
              Tu n'as pas besoin de retrouver toute ton énergie d'un coup.
            </>
          ),
        },
      ],
    },
    {
      title: "T'appuyer sur les autres",
      items: [
        {
          title: "L’action",
          desc: <>traverser une épreuve ne signifie pas devoir tout porter seul.</>,
        },
        {
          title: "Commence petit",
          desc: (
            <>
              choisis une personne de confiance et dis-lui simplement : "En ce moment, je traverse
              une période difficile." Tu n'es pas obligé d'en dire plus si tu n'en as pas envie.
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
          <b>
            Il est normal qu'un événement difficile continue de t'affecter pendant un certain temps.
          </b>
        </p>
        <p>
          En revanche, si la souffrance reste très intense, s'aggrave avec le temps ou t'empêche de
          suivre tes études, de dormir, de voir tes proches ou de vivre ton quotidien, il est
          important d'en parler.
        </p>
        <p>
          Un proche, un psychologue, un médecin ou un Service de santé étudiante peut t'accompagner
          dans cette période.
        </p>
        <p>
          Tu n'as pas à traverser cette épreuve seul. Demander de l'aide n'efface pas ce que tu as
          vécu, mais peut t'aider à retrouver progressivement un nouvel équilibre.
        </p>
      </>
    ),
  },
};
