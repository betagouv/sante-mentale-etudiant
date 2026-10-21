import { FeelingLink } from ".";
import { Feeling } from "./types";

export const FEELING_SUICIDE: Feeling = {
  slug: "suicidal-thought",
  name: "Idées suicidaires",
  metadata: {
    title: "J’ai des idées suicidaires",
    description:
      "Vous pensez au suicide ? Vous n'êtes pas seul(e). Le 3114 est joignable 24h/24 et gratuitement. Découvrez aussi d'autres ressources pour être aidé(e).",
  },
  catch: {
    description: "J’ai des idées suicidaires",
    sentence: (
      <>
        <p>
          Depuis quelque temps, tu as l'impression que tout est devenu trop lourd. Tu te surprends à
          penser que ce serait plus simple si tu n'étais plus là, tu n'arrives plus à imaginer que
          les choses puissent s'améliorer, ou tu as parfois des pensées plus précises sur le fait de
          mettre fin à ta vie.
        </p>
        <p>
          Avoir des idées suicidaires peut faire très peur. Ces idées sont à prendre au sérieux : elles sont souvent
          le signe d'une souffrance devenue trop difficile à porter seul.
        </p>
        <p>Tu n'as pas à traverser ça sans aide.</p>
      </>
    ),
  },
  videoKey: "suicidal-thoughts",
  recap: [
    "Les idées suicidaires sont le signe d'une souffrance.",
    "Elles peuvent concerner beaucoup plus de personnes qu'on ne l'imagine.",
    "Avoir des idées suicidaires ne veut pas forcément dire que tu veux mourir.",
    "Si tu te sens en danger, demande de l'aide immédiatement.",
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
              L'enquête Bien-être et santé 2024 de l'OVE le montre : 16 % des étudiantes et
              étudiants déclarent avoir pensé à se suicider au cours des douze derniers mois
              précédant l’enquête, un chiffre qui rappelle que la souffrance psychique peut toucher
              n'importe qui.
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
              ou un autre événement de vie. La consommation d’alcool ou d’autres produits peut
              également déclencher ou intensifier cette souffrance. Chaque situation est différente :
              ta souffrance est légitime, même si tu ne te retrouves dans aucun des exemples.
            </p>
            <p>
              → Voir aussi les pages <FeelingLink slug="painful-event" />,{" "}
              <FeelingLink slug="solitude" />, <FeelingLink slug="fatigue" />,{" "}
              <FeelingLink slug="drugs" />.
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
              Les professionnels qui accompagnent ces situations sont formés pour écouter sans te
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
              perspectives, même lorsque l'on a aujourd'hui l'impression qu'il n'en existe aucune.
            </p>
            <p>
              Certaines choses peuvent aider à tenir, par exemple des liens avec des personnes en
              qui tu as confiance, l’accès à des soins, le sentiment d’appartenir à un groupe, ce
              qui compte pour toi.
            </p>
            <p>Le plus important est de ne pas rester seul avec cette souffrance.</p>
          </>
        ),
      },
      {
        question: "Comment ça peut se manifester concrètement",
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
            <li>J’ai envie de dire au revoir.</li>
          </ul>
        ),
      },
    ],
  },
  tips: [
    {
      title: "Si tu te sens en danger / si tu as des idées suicidaires",
      items: [
        {
          title: "L’action",
          desc: (
            <>
              si tu ne te sens plus en sécurité, n'attends pas, appelle le <b>15</b> (ou envoie un
              SMS au 114 - pour les malentendants). Si tu as des idées suicidaires ou que tu as
              besoin de parler, appelle le 3114.
            </>
          ),
        },
      ],
    },
    {
      title: "Chercher une aide professionnelle",
      items: [
        {
          title: "L’action",
          desc: (
            <>
              <p>Demander de l'aide est une démarche de protection.</p>
              <p>
                Commence petit&nbsp;: enregistre dans ton téléphone les ressources qui pourront
                t'aider si tu en ressens le besoin&nbsp;:
              </p>
              <ul>
                <li>
                  Pour parler maintenant, de jour comme de nuit&nbsp;: le 3114 &nbsp;: gratuit,
                  24h/24, 7j/7. Des professionnels formés à la prévention du suicide te répondent.
                </li>
                <li>
                  Pour être accompagné, orienté&nbsp;:
                  <ul>
                    <li>le Service de santé étudiante de ton établissement&nbsp;;</li>
                    <li>le 3040, ligne d’écoute dédiée aux étudiants en mal-être&nbsp;;</li>
                    <li>
                      Santé Psy Étudiant, pour des séances gratuites avec un psychologue&nbsp;;
                    </li>
                    <li>ton médecin traitant.</li>
                  </ul>
                </li>
              </ul>
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
          desc: <>lorsque la souffrance devient très intense, on peut avoir tendance à s’isoler.</>,
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
        <p>Tu n'as pas à porter cette souffrance seul.</p>
      </>
    ),
  },
};
