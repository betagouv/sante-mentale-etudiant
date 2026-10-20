import { FeelingLink } from ".";
import { Feeling } from "./types";

export const FEELING_DRUGS: Feeling = {
  slug: "drugs",
  name: "Substances",
  metadata: {
    title: "Mon rapport aux substances",
    description:
      "Comprendre son rapport aux substances, ce qui l'influence et ses effets : des pistes et des ressources pour y voir plus clair, sans jugement.",
  },
  catch: {
    description: "Je m'interroge sur mon rapport aux substances",
    sentence: (
      <>
        <p>
          Tu bois plus souvent qu’avant pour te détendre. Tu comptes sur le cannabis pour t’endormir. Tu as l'impression que certains produits t’aident à tenir le coup…
        </p>
        <p>S’interroger sur sa consommation, c’est aussi être attentif à soi.</p>
        <p>
          Ce qui compte, c’est aussi la place que prennent les consommations dans ta vie et ce que
          tu en attends.
        </p>
      </>
    ),
  },
  videoKey: "drugs",
  recap: [
    "Consommer une substance ne signifie pas forcément être dépendant.",
    "Ne pas réussir à s’arrêter seul est fréquent. Ce n’est pas une faiblesse.",
    "Utiliser une substance de manière “thérapeutique” (pour dormir, se calmer, …) est un signal d’alerte.",
    "En parler, c’est déjà prendre soin de soi. Tu peux demander de l’aide, sans jugement et à ton rythme.",
  ],
  faq: {
    title: "Comprendre sa consommation",
    intro: (
      <>
        <p>
          Certaines substances (alcool, cannabis, protoxyde d'azote, autres drogues, mais aussi certains médicaments détournés de leur usage) sont facilement accessibles et peuvent être présentes en soirée. Il
          peut aussi arriver d’en consommer pour se détendre, pimenter sa sexualité, mieux dormir ou
          gérer ses émotions : apaiser sa colère, diminuer son stress, ne pas ressentir la tristesse
          ou retrouver son calme.
        </p>
        <p>
          Au-delà de la substance elle-même, il peut être intéressant de s’interroger sur la place
          qu’elle prend peu à peu dans le quotidien et sur ce qu’elle apporte ou permet de gérer.
        </p>
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
              → Voir aussi les pages <FeelingLink slug="anxiety" />, <FeelingLink slug="fatigue" />{" "}
              et <FeelingLink slug="feeling-management" />.
            </p>
          </>
        ),
      },
      {
        question: "Qu’est-ce qu’une consommation qui prend trop de place ?",
        answer: (
          <>
            <p>Une consommation devient préoccupante lorsqu'elle n'est plus seulement un choix :</p>
            <div>
              <ul>
                <li>je consomme plus ou plus longtemps que ce que j'avais prévu.</li>
                <li>
                  je ne réussis pas à réduire ou arrêter malgré mes efforts ou mon souhait d'y
                  parvenir.
                </li>
                <li>
                  je passe de plus en plus de temps à consommer la substance ou à me remettre de ses
                  effets.
                </li>
              </ul>
            </div>
            <div>
              Tu peux avoir l'impression de ne plus réussir à :
              <ul>
                <li>te détendre sans consommer (ou sans produit) ;</li>
                <li>t'endormir sans une substance ;</li>
                <li>
                  sortir avec tes amis sans consommer (ou faire la fête sans utiliser alcool et/ou
                  drogue) ;
                </li>
                <li>gérer tes émotions autrement qu’avec des produits ;</li>
                <li>à avoir des rapports sexuels sans produit ;</li>
                <li>à te stimuler sans le boost d'un dopant.</li>
              </ul>
            </div>
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
              Parler de ses consommations et demander de l’aide, c’est faire preuve de courage.
              Chacun peut choisir d’être accompagné, à son rythme.
            </p>
          </>
        ),
      },
      {
        question: "Demander de l'aide tôt, c'est souvent plus simple",
        answer: (
          <>
            <p>
              On imagine parfois qu'il faut attendre d'être dépendant pour consulter. Avoir un avis
              extérieur permet d’aider à se situer et à trouver des solutions pour éviter que la
              consommation devienne une addiction.
            </p>
            <p>S’interroger tôt sur sa consommation permet de préserver sa liberté de choix.</p>
          </>
        ),
      },
      {
        question: "Comment ça peut se manifester concrètement",
        answer: (
          <ul>
            <li>J’ai besoin d’une substance pour me détendre.</li>
            <li>Je consomme plus qu'avant.</li>
            <li>J'ai essayé de réduire, mais c'est difficile.</li>
            <li>Je bois ou je fume pour gérer mon stress ou mes émotions.</li>
            <li>Je culpabilise après avoir consommé.</li>
            <li>J'ai déjà été en retard un lendemain de consommation.</li>
            <li>Mes consommations me coûtent de plus en plus cher.</li>
            <li>Je cache parfois ma consommation à mes proches.</li>
            <li>Je continue à consommer alors que cela me pose déjà des problèmes.</li>
            <li>Je me dis souvent : « Ce sera la dernière fois. ».</li>
            <li>Mes consommations sont responsables de disputes/ conflits avec mes proches.</li>
            <li>Mes proches m’ont fait des remarques.</li>
          </ul>
        ),
      },
    ],
  },
  tips: [
    {
      title: "Observer ta consommation",
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
              état d'esprit suis-je ? Qu'est-ce que m’apporte cette consommation ? Observer sans se
              juger permet souvent de mieux comprendre ce que l’on recherche.
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
              Une question simple : Qu’est-ce que je pourrais faire pour obtenir le même effet
              (faire du sport / écouter de la musique / lire / discuter avec un ami) ? Comprendre ce
              besoin peut ouvrir la possibilité d’explorer d’autres façons d’y répondre.
            </>
          ),
        },
      ],
    },
    {
      title: "Découvrir d’autres façons de t’apaiser",
      items: [
        {
          title: "L’action",
          desc: <>une seule solution ne répond pas toujours à tous les besoins.</>,
        },
        {
          title: "Commence petit",
          desc: (
            <>
              dans une situation où tu consommes habituellement tu peux te demander : "Qu'est-ce que
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
              parles-en à une personne de confiance ou à un professionnel, même si tu ne te
              considères pas comme addict. Il n’est jamais trop tôt pour en parler ou se faire
              accompagner.
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
          <b>Il est normal de s'interroger sur sa consommation.</b>
        </p>
        <p>
          En revanche, si tu as l'impression qu'une substance devient indispensable pour gérer tes
          émotions, ton stress, ton sommeil ou ton quotidien, ou si tu n'arrives plus à réduire
          malgré tes efforts, il est important d'en parler.
        </p>
        <p>
          Un médecin, un psychologue, un Service de santé étudiante ou une structure spécialisée
          peuvent t'accompagner sans jugement.
        </p>
        <p>
          Demander de l'aide ne signifie pas que tu as échoué. C'est faire preuve de courage : oser
          en parler pour choisir, à ton rythme, ce qui te convient le mieux.
        </p>
      </>
    ),
  },
};
