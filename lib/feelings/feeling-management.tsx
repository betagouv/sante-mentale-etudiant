import { Feeling } from "./types";

export const FEELING_FEELING_MANAGEMENT: Feeling = {
  slug: "feeling-management",
  name: "Gestion des émotions",
  picto: "System",
  catch: {
    description: "J’ai du mal à gérer mes émotions",
    sentence: (
      <>
        <p>
          Tu pleures sans vraiment comprendre pourquoi. Tu t'énerves pour des détails. Tu as
          l'impression que tes émotions prennent toute la place. Ou au contraire, tu as l'impression
          de ne plus rien ressentir.
        </p>
        <p>
          Face à certaines émotions, on aimerait parfois appuyer sur un bouton "pause". Pourtant,
          nos émotions ne sont pas un problème. Elles sont là pour nous transmettre une information.
          Mais lorsqu'elles deviennent trop intenses ou difficiles à gérer, elles peuvent finir par
          épuiser.
        </p>
        <p>
          Apprendre à mieux les comprendre, c'est souvent la première étape pour mieux les vivre et
          les accepter.
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
    "Toutes les émotions ont une fonction.",
    "Ressentir des émotions fortes ne signifie pas que tu es 'trop sensible'.",
    "Les accueillir est souvent plus efficace que de chercher à les repousser.",
    "Il est possible d'apprendre à mieux les comprendre et les réguler.",
  ],
  faq: {
    title: "Comprendre ses émotions",
    intro: (
      <>
        Les émotions font partie de notre quotidien. Elles apparaissent automatiquement en réaction
        à ce que nous vivons et nous aident à nous adapter à notre environnement. C’est une réaction
        chimique et spontanée du corps. Le problème n'est pas d'avoir des émotions, mais de ne pas
        toujours savoir comment les écouter, les comprendre ou y répondre.
      </>
    ),
    items: [
      {
        question: "Les émotions sont des messagères",
        answer: (
          <>
            <p>
              On parle souvent des émotions comme si certaines étaient positives (la joie) et
              d'autres négatives (la colère, la peur ou la tristesse).
            </p>
            <p>
              En réalité, toutes les émotions ont une utilité. Elles nous aident à comprendre ce qui
              se passe en nous et autour de nous. Elles peuvent nous protéger, nous alerter
              lorsqu'une limite est dépassée ou nous signaler qu'un besoin n'est pas satisfait.
            </p>
            <p>
              On peut les voir comme un GPS : elles ne décident pas à notre place, mais elles nous
              indiquent qu'il est peut-être temps de regarder ce qui se passe.
            </p>
          </>
        ),
      },
      {
        question: "Une émotion se vit dans tout le corps",
        answer: (
          <>
            <p>Une émotion ne se passe pas uniquement dans notre tête.</p>
            <p>
              Elle peut aussi provoquer :
              <ul>
                <li>un cœur qui bat plus vite ;</li>
                <li>une respiration plus rapide ;</li>
                <li>une boule au ventre ;</li>
                <li>des tensions musculaires ;</li>
                <li>des mains moites ou des tremblements.</li>
              </ul>
            </p>
            <p>
              Elle influence également nos pensées ( "Je n'y arriverai jamais" ) et nos envies
              d'agir (partir, crier, s'isoler, demander de l'aide...).
            </p>
            <p>Observer ces réactions permet souvent de mieux comprendre ce que l'on ressent.</p>
          </>
        ),
      },
      {
        question: "Toutes les émotions méritent d'être écoutées",
        answer: (
          <>
            <p>
              Tu as peut être déjà entendu : "Ne pleure pas." "Ce n'est pas grave." "Calme-toi."
            </p>
            <p>
              Petit à petit, on peut apprendre à cacher certaines émotions ou à penser qu'elles sont
              "anormales".
            </p>
            <p>
              Pourtant, ressentir de la tristesse, de la peur ou de la colère ne fait pas de toi une
              personne faible ou "trop sensible".
            </p>
            <p>
              Ces émotions cherchent souvent à attirer ton attention sur quelque chose d'important
            </p>
          </>
        ),
      },
      {
        question: "Accueillir une émotion ne signifie pas s'y résigner",
        answer: (
          <>
            <p>
              Quand une émotion est désagréable, notre premier réflexe est souvent de vouloir la
              faire disparaître.
            </p>
            <p>
              Pourtant, lutter contre une émotion ou la repousser ne la fait pas toujours
              disparaître.
            </p>
            <p>
              À l'inverse, prendre quelques instants pour reconnaître sa présence, sans se juger,
              peut l'aider à s'apaiser progressivement.
            </p>
            <p>
              Accueillir une émotion ne signifie pas qu'elle va durer éternellement ou que tu es
              d'accord avec ce qui t'arrive.
            </p>
            <p>Cela signifie simplement reconnaître qu'elle est là.</p>
          </>
        ),
      },
      {
        question: "Les émotions peuvent aussi révéler nos besoins",
        answer: (
          <>
            <p>Une émotion est souvent le signe qu'un besoin mérite ton attention.</p>
            <p>
              Par exemple :
              <ul>
                <li>la peur peut révéler un besoin de sécurité ;</li>
                <li>la colère peut signaler qu'une limite a été dépassée ;</li>
                <li>la tristesse peut traduire un besoin de soutien ou de réconfort.</li>
              </ul>
            </p>
            <p>
              Te poser la question : "De quoi ai-je besoin en ce moment ?" peut parfois être plus
              utile que de te demander : "Pourquoi est-ce que je ressens ça ?"
            </p>
          </>
        ),
      },
      {
        question: "Comment ça se manifeste concrètement",
        answer: (
          <ul>
            <li>Je pleure facilement.</li>
            <li>Je m'énerve puis je culpabilise.</li>
            <li>Je garde tout pour moi jusqu'à exploser.</li>
            <li>J'ai du mal à mettre des mots sur ce que je ressens.</li>
            <li>Je ne comprends pas toujours mes réactions.</li>
            <li>Je me juge parce que je ressens certaines émotions.</li>
            <li>J'évite les situations qui me font ressentir des émotions désagréables.</li>
            <li>J'ai l'impression que mes émotions prennent toute la place.</li>
          </ul>
        ),
      },
    ],
  },
  tips: [
    {
      title: "Nommer ce que tu ressens",
      items: [
        {
          title: "L’action",
          desc: <>mettre un mot sur une émotion aide souvent à mieux la comprendre.</>,
        },
        {
          title: "Commence petit",
          desc: (
            <>
              demande-toi : "Qu'est-ce que je ressens exactement ?". Tu peux t'aider d'une roue des
              émotions si tu as du mal à trouver les mots.
            </>
          ),
        },
      ],
    },
    {
      title: "Observer ton émotion",
      items: [
        {
          title: "L’action",
          desc: <>prends quelques instants pour observer ton émotion avec curiosité.</>,
        },
        {
          title: "Commence petit",
          desc: (
            <>
              demande-toi : Que se passe-t-il dans mon corps ? Quelles pensées me viennent ?
              Qu'est-ce que cette émotion me donne envie de faire ? Cet exercice permet souvent de
              prendre un peu de recul.
            </>
          ),
        },
      ],
    },
    {
      title: "Laisser l'émotion passer",
      items: [
        {
          title: "L’action",
          desc: <>au lieu de lutter contre ton émotion, essaie de lui laisser un peu de place.</>,
        },
        {
          title: "Commence petit",
          desc: (
            <>
              respire quelques instants et rappelle-toi : "Je peux ressentir cette émotion sans
              qu'elle me définisse." Les émotions sont temporaires : elles évoluent naturellement
              lorsqu'on leur laisse la possibilité de s'exprimer.
            </>
          ),
        },
      ],
    },
    {
      title: "Choisir comment y répondre",
      items: [
        {
          title: "L’action",
          desc: (
            <>
              tu ne peux pas toujours choisir ce que tu ressens, mais tu peux progressivement
              apprendre à choisir comment tu réagis.
            </>
          ),
        },
        {
          title: "Commence petit",
          desc: (
            <>
              demande-toi : "Quelle serait la réponse la plus aidante pour moi, maintenant ?".
              Parfois, ce sera parler à quelqu'un. D'autres fois, faire une pause, marcher quelques
              minutes ou simplement te reposer.
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
          <b>Ressentir des émotions fortes est normal.</b>
        </p>
        <p>
          En revanche, si elles deviennent si envahissantes qu'elles t'empêchent d'étudier, de
          dormir, de maintenir tes relations ou qu'elles te poussent à te faire du mal ou à adopter
          des comportements qui te mettent en difficulté, il est important de ne pas rester seul.
        </p>
        <p>
          Parler avec un proche ou un professionnel peut t'aider à mieux comprendre ce que tu
          traverses et à développer des stratégies pour réguler tes émotions.
        </p>
      </>
    ),
  },
};
