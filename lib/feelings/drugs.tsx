import { FeelingLink } from ".";
import { Feeling } from "./types";

export const FEELING_DRUGS: Feeling = {
  slug: "substances",
  name: "Substances",
  catch: {
    description: "Je m'interroge sur mon rapport à certaines substances",
    sentence: (
      <>
        <p>
          Tu bois plus souvent qu'avant pour te détendre. Tu fumes un joint pour réussir à dormir.
          Tu as l'impression que les cigarettes, les boissons énergisantes ou une autre substance
          t'aident à tenir le coup.
        </p>
        <p>
          Il est normal de se poser des questions sur sa consommation. Le plus important n'est pas
          uniquement ce que tu consommes, mais la place que cela prend dans ta vie et les raisons
          qui te poussent à y avoir recours.
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
    "Consommer une substance ne signifie pas forcément être dépendant.",
    "Ne pas réussir à s'arrêter seul de consommer n'est pas un signe de faiblesse",
    "Utiliser une substance de manière 'thérapeutique' (pour dormir, se calmer, prendre la parole ...) est un des déterminant d'un trouble addictif et justifie d'en parler et d'être aidé",
    "Parler de ses consommations est le premier pas pour en sortir. Il est possible de demander de l'aide sans être jugé.",
  ],
  faq: {
    title: "Comprendre sa consommation",
    intro: (
      <>
        Nous consommons parfois certaines substances pour faire la fête, nous détendre, mieux dormir
        ou calmer une émotion difficile (mieux contrôler ma colère, ne plus avoir peur, fuir la
        tristesse, ne pas être déstabilisé par des moments de joie). Le problème n'est pas toujours
        la substance elle-même, mais la place qu'elle prend progressivement dans notre quotidien et
        le rôle qu'on lui fait jouer.
      </>
    ),
    items: [
      {
        question: "Pourquoi consomme-t-on ?",
        answer: (
          <>
            <p>
              Les raisons sont nombreuses. Certaines personnes consomment pour partager un moment
              avec leurs amis. D'autres cherchent à se détendre, à mieux dormir, à oublier une
              période difficile, à se sentir plus à l'aise avec les autres ou à améliorer leurs
              performances.
            </p>
            <p>
              La consommation répond souvent à un besoin. Comprendre ce besoin est une première
              étape pour retrouver d'autres façons d'y répondre.
            </p>
            <p>
              → Voir aussi les pages <FeelingLink slug="drugs" />, <FeelingLink slug="fatigue" /> et{" "}
              <FeelingLink slug="feeling-management" />.
            </p>
          </>
        ),
      },
      {
        question: "Quand la consommation prend trop de place",
        answer: (
          <>
            <p>
              Une consommation devient préoccupante lorsqu'elle n'est plus seulement un choix, mais
              qu'elle semble progressivement devenir une nécessité.
            </p>
            <p>
              On peut notamment se référer aux symptômes (DSM 5) de la perte de contrôle :
              <ul>
                <li>je consomme plus ou plus longtemps que ce que j'avais prévu.</li>
                <li>
                  je ne réussi pas à réduire ou arrêter malgré mes efforts ou mon souhait d'y
                  parvenir
                </li>
                <li>
                  je passe de plus en plus de temps à consommer la substance ou à me remettre de ses
                  effets
                </li>
              </ul>
            </p>
            <p>
              Tu peux avoir l'impression de ne plus réussir à :
              <ul>
                <li>te détendre sans consommer</li>
                <li>t'endormir sans une substance</li>
                <li>sortir avec tes amis sans boire</li>
                <li>faire face à une émotion difficile autrement</li>
              </ul>
            </p>
            <p>
              Plus une substance devient la seule réponse à un problème, plus le risque qu'elle
              prenne une place importante augmente.
            </p>
          </>
        ),
      },
      {
        question: "Ce n'est pas qu’une question de volonté",
        answer: (
          <>
            <p>
              On entend souvent qu'il suffirait "d'arrêter". En réalité, une consommation qui
              s'installe est souvent influencée par plusieurs facteurs : le stress, les émotions,
              les habitudes, le contexte social, la recherche de soulagement ou encore certaines
              vulnérabilités personnelles.
            </p>
            <p>
              Attention à l'incitation par l'environnement : la présence fréquente de substances (en
              soirée publique ou privée) n'est pas synonyme d'une normalisation des consommations.
            </p>
            <p>
              Se faire aider ne signifie pas que l'on est faible. C'est reconnaître que la situation
              est devenue difficile à gérer seul.
            </p>
          </>
        ),
      },
      {
        question: "Demander de l'aide tôt, c'est souvent plus simple",
        answer: (
          <>
            <p>
              On imagine parfois qu'il faut attendre d'être dépendant pour consulter. Ce n'est pas
              le cas, avoir un avis extérieur permet souvent de faire un point objectif sur ses
              consommations et nous aider à nous situer et à trouver des solutions pour éviter que
              la consommation devienne addiction
            </p>
            <p>
              Il est souvent plus facile de parler de sa consommation lorsqu'elle commence à poser
              question, plutôt que lorsqu'elle est déjà installée depuis plusieurs années.
            </p>
          </>
        ),
      },
      {
        question: "Comment ça se manifeste concrètement",
        answer: (
          <ul>
            <li>
              Ma consommation prend de plus en plus de place dans mon quotidien : j'ai déjà été en
              retard un lendemain de consommation (j'ai oublié de me réveiller), je n'ai pas
              respecté une obligation suite à des consommations, mes consommations me coûtent de
              plus en plus cher
            </li>
            <li>Je cache parfois ma consommation à mes proches.</li>
            <li>Je continue à consommer alors que cela me pose déjà des problèmes.</li>
            <li>Je me dis souvent : « Ce sera la dernière fois. »</li>
            <li>J'ai l'impression de perdre un peu le contrôle. </li>
            <li>Mes consommations sont responsables de disputes/ conflit avec mes proches </li>
            <li>Mes proches s'inquiètent de mes consommations</li>
          </ul>
        ),
      },
    ],
  },
  tips: [
    {
      title: "Observer sa consommation",
      items: [
        {
          title: "L’action",
          desc: (
            <>
              avant de vouloir changer tes habitudes, essaie simplement de mieux comprendre ta
              consommation.
            </>
          ),
        },
        {
          title: "Commence petit",
          desc: (
            <>
              pendant quelques jours, demande-toi : À quel moment est-ce que je consomme ? Dans quel
              état d'esprit suis-je ? Qu'est-ce que cette consommation m'apporte sur le moment ?
              Observer sans se juger permet souvent de mieux comprendre ce qui se joue.
            </>
          ),
        },
      ],
    },
    {
      title: "Identifier le besoin derrière",
      items: [
        {
          title: "L’action",
          desc: <>la consommation répond souvent à un besoin.</>,
        },
        {
          title: "Commence petit",
          desc: (
            <>
              pose-toi cette question : Est ce que je pourrai faire autre chose pour obtenir le même
              effet (aller faire du sport / écouter de la musique / lire / discuter avec un.e
              ami.e). Comprendre ce besoin est une première étape pour trouver d'autres façons d'y
              répondre.
            </>
          ),
        },
      ],
    },
    {
      title: "Découvrir d'autres façons de s'apaiser",
      items: [
        {
          title: "L’action",
          desc: <>une seule solution ne répond pas toujours à tous les besoins.</>,
        },
        {
          title: "Commence petit",
          desc: (
            <>
              choisis une situation où tu consommes habituellement et demande-toi : "Qu'est-ce que
              je pourrais essayer d'autre, juste cette fois ?". Il ne s'agit pas de tout changer
              d'un coup, mais d'élargir progressivement tes ressources.
            </>
          ),
        },
      ],
    },
    {
      title: "En parler sans attendre",
      items: [
        {
          title: "L’action",
          desc: (
            <>
              il est souvent plus facile de demander de l'aide lorsque les difficultés commencent,
              plutôt que lorsqu'elles sont déjà bien installées.
            </>
          ),
        },
        {
          title: "Commence petit",
          desc: (
            <>
              parle-en à une personne de confiance ou à un professionnel, même si tu ne te
              considères pas comme dépendant. Tu n'as pas besoin d'attendre que la situation
              devienne grave pour être accompagné.
            </>
          ),
        },
      ],
    },
  ],
  whatIf: {
    content: <></>,
  },
};
