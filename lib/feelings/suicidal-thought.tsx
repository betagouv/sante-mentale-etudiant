import { FeelingLink } from ".";
import { Feeling } from "./types";

export const FEELING_SUICIDE: Feeling = {
  slug: "suicidal-thought",
  name: "Idées suicidaires",
  picto: "Warning",
  catch: {
    description: "J’ai des idées suicidaires",
    sentence: (
      <>
        <p>
          Depuis quelque temps, tu as parfois l'impression que tout est devenu trop lourd. Tu te
          surprends à penser que ce serait plus simple si tu n'étais plus là, ou tu n'arrives plus à
          imaginer que les choses puissent s'améliorer.
        </p>
        <p>
          Avoir des idées suicidaires peut faire très peur. Pourtant, elles ne signifient pas que tu
          es "fou", "faible" ou que tu veux forcément mourir. Elles sont souvent le signe d'une
          souffrance devenue trop difficile à porter seul.
        </p>
        <p>Tu n'as pas à traverser ça sans aide.</p>
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
    "Les idées suicidaires sont le signe d'une souffrance, pas d'une faiblesse.",
    "Elles peuvent concerner beaucoup plus de personnes qu'on ne l'imagine.",
    "Avoir des idées suicidaires ne veut pas forcément dire que tu veux mourir.",
    "Il existe des professionnels formés pour t'écouter et t'aider, sans te juger.",
  ],
  faq: {
    title: "Comprendre les idées suicidaires",
    intro: (
      <>
        Les idées suicidaires apparaissent souvent lorsqu'une personne a le sentiment que sa
        souffrance est devenue insupportable ou qu'elle ne voit plus d'issue. Elles ne définissent
        pas qui tu es et ne signifient pas que cette situation est irréversible. Plus on en parle
        tôt, plus il est possible d'être accompagné.
      </>
    ),
    items: [
      {
        question: "Tu n'es pas seul à vivre cela",
        answer: (
          <>
            <p>
              Les idées suicidaires sont plus fréquentes qu'on ne le pense, notamment chez les
              jeunes.
            </p>
            <p>
              Selon le Baromètre Santé publique France 2024, 8,6 % des 18-29 ans déclarent avoir eu
              des pensées suicidaires au cours des douze derniers mois, ce qui en fait la tranche
              d'âge la plus concernée.
            </p>
            <p>
              L'enquête Bien-être et santé 2024 de l'OVE montre également que les pensées
              suicidaires font partie des difficultés rapportées par les étudiants, rappelant que la
              souffrance psychique peut toucher n'importe qui.
            </p>
            <p>
              Parler de ces pensées est donc essentiel. Tu n'es pas le seul à vivre cela, même si tu
              peux avoir cette impression.
            </p>
          </>
        ),
      },
      {
        question: "Les idées suicidaires sont le signe d'une souffrance",
        answer: (
          <>
            <p>
              Contrairement à une idée reçue, les idées suicidaires ne traduisent pas forcément une
              envie de mourir. Elles reflètent souvent un désir que la souffrance s'arrête.
            </p>
            <p>
              Cette souffrance peut être liée à de nombreux facteurs : une dépression, un deuil, une
              rupture, un stress intense, une accumulation de difficultés, un sentiment de solitude
              ou un autre événement de vie.
            </p>
            <p>
              → Voir aussi les pages <FeelingLink slug="painful-event" />,{" "}
              <FeelingLink slug="solitude" />, <FeelingLink slug="fatigue" />.
            </p>
          </>
        ),
      },
      {
        question: "En parler ne donne pas des idées",
        answer: (
          <>
            <p>
              Beaucoup de personnes n'osent pas parler de leurs pensées suicidaires par peur d'être
              jugées ou d'inquiéter leurs proches. Certaines craignent aussi que le fait d'en parler
              aggrave la situation.
            </p>
            <p>
              En réalité, mettre des mots sur ce que l'on traverse permet souvent de rompre
              l'isolement et d'accéder plus rapidement à une aide adaptée.
            </p>
            <p>
              Les professionnels qui accompagnent ces situations sont formés pour écouter sans
              juger.
            </p>
          </>
        ),
      },
      {
        question: "Les idées suicidaires peuvent évoluer",
        answer: (
          <>
            <p>
              Ces pensées peuvent être passagères ou revenir par périodes, elles ne sont pas une
              fatalité.
            </p>
            <p>
              Avec un accompagnement adapté, il est possible de retrouver progressivement des
              solutions, même lorsque l'on a aujourd'hui l'impression qu'il n'en existe aucune.
            </p>
            <p>Le plus important est de ne pas rester seul avec cette souffrance.</p>
          </>
        ),
      },
      {
        question: "Comment ça se manifeste concrètement",
        answer: (
          <ul>
            <li>J'ai parfois l'impression que la vie n'a plus de sens.</li>
            <li>Je me dis que les autres seraient mieux sans moi.</li>
            <li>J'aimerais simplement que tout s'arrête.</li>
            <li>J'ai l'impression qu'il n'y a plus d'issue.</li>
            <li>Je me sens submergé par ma souffrance.</li>
            <li>Je n'arrive plus à imaginer un avenir.</li>
            <li>Je me replie de plus en plus sur moi-même.</li>
            <li>J'ai du mal à demander de l'aide.</li>
            <li>Je cache ce que je ressens à mon entourage.</li>
            <li>Je me sens seul face à mes pensées.</li>
          </ul>
        ),
      },
    ],
  },
  tips: [
    {
      title: "Mettre des mots sur ce que tu ressens",
      items: [
        {
          title: "L’action",
          desc: <>les pensées suicidaires s'accompagnent souvent d'une grande solitude.</>,
        },
        {
          title: "Commence petit",
          desc: (
            <>
              si tu t'en sens capable, essaie d'écrire ce que tu ressens ou de le dire à une
              personne de confiance, même avec une phrase très simple : "En ce moment, ça ne va
              vraiment pas." Tu n'es pas obligé de tout expliquer d'un coup.
            </>
          ),
        },
      ],
    },
    {
      title: "Ne pas rester seul",
      items: [
        {
          title: "L’action",
          desc: (
            <>lorsque la souffrance devient très intense, notre cerveau a tendance à nous isoler.</>
          ),
        },
        {
          title: "Commence petit",
          desc: (
            <>
              identifie une personne que tu pourrais contacter aujourd'hui : un proche, un ami, un
              membre de ta famille, un enseignant ou un professionnel. Tu n'as pas besoin d'attendre
              que la situation soit "assez grave".
            </>
          ),
        },
      ],
    },
    {
      title: "Chercher une aide professionnelle ",
      items: [
        {
          title: "L’action",
          desc: <>demander de l'aide est une démarche de protection, pas un échec.</>,
        },
        {
          title: "Commence petit",
          desc: (
            <>
              enregistre dans ton téléphone les ressources qui pourront t'aider si tu en ressens le
              besoin :
              <ul>
                <li>
                  le <b>3114</b>, disponible 24h/24 et 7j/7 ;
                </li>
                <li>le Service de santé étudiante ;</li>
                <li>Santé Psy Étudiant ;</li>
                <li>ton médecin.</li>
              </ul>
              <p>Le jour où tu en auras besoin, tu n'auras pas à les chercher.</p>
            </>
          ),
        },
      ],
    },
    {
      title: "Si tu te sens en danger",
      items: [
        {
          title: "L’action",
          desc: (
            <>
              si tu penses que tu pourrais passer à l'acte ou que tu ne te sens plus en sécurité,
              n'attends pas.
            </>
          ),
        },
        {
          title: "Commence petit",
          desc: (
            <>
              appelle immédiatement le <b>3114</b>, parle à une personne de confiance ou rends-toi
              aux urgences les plus proches. Tu mérites d'être aidé.
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
            Si ces pensées reviennent souvent, deviennent plus envahissantes ou que tu as
            l'impression de ne plus pouvoir assurer ta sécurité, il est essentiel de demander de
            l'aide immédiatement.
          </b>
        </p>
        <p>
          Le 3114 est joignable 24h/24, 7j/7, gratuitement, partout en France. Des professionnels
          formés peuvent t'écouter, t'accompagner et t'aider à trouver des solutions adaptées. En
          cas de danger immédiat, appelle les services d'urgence ou rends-toi aux urgences les plus
          proches.
        </p>
        <p>
          Tu n'as pas à porter cette souffrance seul. Même si aujourd'hui tu ne vois plus d'issue,
          il existe des personnes formées pour t'aider à traverser cette période.
        </p>
      </>
    ),
  },
};
