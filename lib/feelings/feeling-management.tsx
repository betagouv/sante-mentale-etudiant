import { Feeling } from "./types";

export const FEELING_MANAGEMENT: Feeling = {
  slug: "feeling-management",
  name: "Gestion des émotions",
  metadata: {
    title: "Ma gestion des émotions",
    description:
      "Colère, tristesse, émotions qui débordent : apprenez à mieux les comprendre et découvrez des ressources pour retrouver de l'équilibre.",
  },
  catch: {
    description: "J’ai du mal à gérer mes émotions",
    sentence: (
      <>
        <p>
          Tu as l’impression que tes émotions débordent et prennent toute la place : tu t’énerves
          facilement, tu pleures souvent… Ou, à l’inverse, tu as le sentiment de ne rien ressentir.
        </p>
        <p>
          Parfois, on aimerait pouvoir appuyer sur un bouton “pause” face à certaines émotions.
          Quand elles deviennent trop intenses, il peut être difficile de les gérer.
        </p>
        <p>
          Pourtant, les émotions ont une fonction : elles transmettent des informations. Apprendre à
          mieux les connaître et les comprendre peut nous aider à vivre mieux.
        </p>
        <p>
          Si elles deviennent trop intenses, se faire accompagner par un professionnel peut être un
          début de solution.
        </p>
      </>
    ),
  },
  videoKey: "feeling-management",
  recap: [
    "Les émotions ont, de manière générale, une fonction.",
    "Les accueillir est souvent plus efficace que de chercher à les repousser.",
    "Il est possible d'apprendre à mieux les comprendre et les réguler.",
    "Si cela te fait souffrir ou impacte ton quotidien, tu peux demander de l'aide.",
  ],
  faq: {
    title: "Comprendre ses émotions",
    intro: (
      <p>
        Les émotions sont des réactions naturelles et spontanées du corps et du cerveau, qui
        apparaissent en fonction de ce que l’on vit, et qui aident à s’adapter à son environnement.
        Plutôt que de vouloir les faire taire, il est plus utile d’apprendre à les écouter, les
        comprendre ou y répondre.
      </p>
    ),
    items: [
      {
        question: "Les émotions méritent d'être écoutées",
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
              Pourtant, ressentir de la tristesse, de la peur ou de la colère est normal : cela fait partie de la vie de chacun.
            </p>
            <p>
              Ces émotions ont une utilité : elles cherchent souvent à attirer ton attention sur
              quelque chose d'important, par exemple alerter lorsqu'une limite est dépassée.
            </p>
          </>
        ),
      },
      {
        question: "Derrière une émotion, il y a souvent un besoin",
        answer: (
          <>
            <p>Une émotion est souvent le signe qu'un besoin mérite ton attention.</p>
            <div>
              Par exemple :
              <ul>
                <li>la peur peut révéler un besoin de sécurité ;</li>
                <li>la colère peut signaler qu'une limite a été dépassée ;</li>
                <li>la tristesse peut traduire un besoin de soutien ou de réconfort.</li>
              </ul>
            </div>
            <p>
              Sur le moment, il est souvent difficile de prendre du recul : l'essentiel est de laisser passer l'émotion.
              Une fois que c'est plus calme, tu peux te demander : "De quoi avais-je besoin à ce moment-là ?".
              C'est parfois plus utile que de chercher à savoir pourquoi tu as ressenti cela.
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
        question: "Observer son corps pour comprendre ses émotions",
        answer: (
          <>
            <p>
              Une émotion influence nos pensées. Mais cela ne se passe pas uniquement dans notre
              tête.{" "}
            </p>
            <div>
              Elle peut aussi provoquer :
              <ul>
                <li>un cœur qui bat plus vite ;</li>
                <li>une respiration plus rapide ;</li>
                <li>une boule au ventre ;</li>
                <li>des tensions musculaires ;</li>
                <li>des mains moites ou des tremblements.</li>
              </ul>
            </div>
            <p>
              Elle influence également nos pensées ( "Je n'y arriverai jamais" ) et nos envies
              d'agir (partir, crier, s'isoler, demander de l'aide...).
            </p>
            <p>Observer ces réactions permet souvent de mieux comprendre ce que l'on ressent.</p>
          </>
        ),
      },
      {
        question: "Comment ça peut se manifester concrètement",
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
          title: "L’idée",
          desc: <>mettre un mot sur une émotion aide souvent à mieux la comprendre.</>,
        },
        {
          title: "Un premier pas",
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
          title: "L’idée",
          desc: <>prends quelques instants pour observer ton émotion avec curiosité.</>,
        },
        {
          title: "Un premier pas",
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
          title: "L’idée",
          desc: <>au lieu de lutter contre ton émotion, essaie de lui laisser un peu de place.</>,
        },
        {
          title: "Un premier pas",
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
          title: "L’idée",
          desc: (
            <>
              tu ne peux pas toujours choisir ce que tu ressens, mais tu peux progressivement
              apprendre à choisir comment tu réagis.
            </>
          ),
        },
        {
          title: "Un premier pas",
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
        <p>
          Si une émotion devient trop importante, n’hésite pas à contacter le 3040, numéro national
          gratuit, pour étudiant en mal-être. Un professionnel t’écoutera et t’orientera.
        </p>
      </>
    ),
  },
};
