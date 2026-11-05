import { Disclaimer, Disclaimer_End1 } from "./helper";
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
          Tu as parfois l'impression que tes émotions débordent et prennent toute la place : tu
          t'énerves facilement, tu pleures souvent, tu as du mal à te calmer. À d’autres moments, tu
          as le sentiment de ne plus rien ressentir. Les deux peuvent aussi se succéder.
        </p>
        <p>
          On aimerait parfois pouvoir appuyer sur « pause » ou « retour en arrière ». Quand les
          émotions sont très intenses, ou quand elles semblent s'éteindre, cela peut être difficile
          à vivre.
        </p>
        <p>
          Pourtant, les émotions ont une fonction : elles nous préparent à agir, nous indiquent
          comment nous vivons une situation et peuvent aider les autres à nous comprendre. Elles
          dépendent à la fois de ce que ressent le corps, de la situation et de nos expériences
          passées. Apprendre à mieux les reconnaître et les nommer peut aider à comprendre ce
          qu'elles indiquent et à avoir plus de choix pour y répondre.
        </p>
        <p>
          Si ces difficultés sont fréquentes, intenses ou durables, ou si elles gênent ton
          quotidien, en parler à un médecin ou à un psychologue peut t'aider.
        </p>
      </>
    ),
  },
  videoKey: "feeling-management",
  recap: [
    "Les émotions nous renseignent sur ce que l’on vit et nous préparent à agir.",
    "Une émotion forte n’est pas figée : en général, elle finit par retomber.",
    "Nommer ses émotions plutôt que les éviter donne plus de choix pour y répondre.",
    "Si elles durent, sont intenses ou gênent ton quotidien, demande de l’aide.",
  ],
  faq: {
    title: "Comprendre ses émotions",
    intro: (
      <p>
        Les émotions sont des réponses naturelles du corps et de l’esprit à ce que l’on vit. Elles
        aident en général à s’adapter à son environnement. Plutôt que d’essayer de les faire taire
        ou de les éviter, il peut être utile d’apprendre à les nommer, les reconnaître et les
        comprendre, pour avoir ensuite plus de façons d’y répondre.
      </p>
    ),
    items: [
      {
        question: "Les émotions désagréables font partie de la vie",
        answer: (
          <>
            <p>
              Tu as peut être déjà entendu, ou pensé : "Ne pleure pas." "Ce n'est pas grave."
              "Calme-toi."
            </p>
            <p>
              Ces phrases sont souvent dites avec de bonnes intentions mais petit à petit, on peut
              apprendre à cacher ou à repousser certaines émotions, ou à penser qu'elles sont «
              anormales ».
            </p>
            <p>
              Pourtant, ressentir de la tristesse, de la peur ou de la colère n'a rien d'anormal en
              soi : tout le monde en ressent un jour ou l'autre. C'est quand elles sont très
              intenses, fréquentes ou durables, et qu'elles gênent le quotidien, qu'elles peuvent
              devenir difficiles à vivre.
            </p>
            <p>
              Ces émotions désagréables ont aussi une fonction : elles peuvent attirer ton attention
              sur ce qui se passe, par exemple quand une situation te met en danger ou quand une
              limite est dépassée.
            </p>
          </>
        ),
      },
      {
        question: "Derrière une émotion, il peut y avoir un besoin",
        answer: (
          <>
            <p>
              Une émotion désagréable peut signaler qu'un besoin est en jeu. Le repérer ne permet
              pas toujours d'y répondre tout de suite, mais aide à choisir comment s'ajuster.
            </p>
            <div>
              Par exemple :
              <ul>
                <li>la peur peut révéler un besoin de sécurité ;</li>
                <li>la colère peut signaler qu'une limite a été dépassée ;</li>
                <li>la tristesse peut traduire un besoin de soutien ou de réconfort.</li>
              </ul>
            </div>
            <p>
              Sur le moment, il est parfois difficile de prendre du recul. Quand l'émotion est très
              forte, il peut être plus facile d'attendre qu'elle retombe un peu avant d'y réfléchir.
            </p>
            <p>
              Une fois que c'est plus calme, tu peux te demander : « De quoi avais-je besoin à ce
              moment-là ? ». C'est parfois plus utile que de se demander en boucle pourquoi tu as
              ressenti cela.
            </p>
          </>
        ),
      },
      {
        question: "Reconnaître une émotion ne veut pas dire renoncer à agir",
        answer: (
          <>
            <p>
              Quand une émotion est désagréable, le premier réflexe est souvent de vouloir la faire
              disparaître. Pourtant, lutter pour repousser une émotion ou chercher à l'éviter ne la
              fait pas toujours disparaître durablement.
            </p>
            <p>
              Prendre quelques instants pour nommer et reconnaître ce que l'on ressent, sans se
              juger, peut aider à mieux traverser cette émotion et se donner la possibilité de
              choisir comment y répondre.
            </p>
            <p>
              Reconnaître une émotion ne signifie pas qu’elle va durer, ni que tu es d’accord avec
              ce qui t’arrive. Si une situation te met en danger ou te fait souffrir, ce que tu
              ressens est un signal à prendre en compte : tu peux en parler à quelqu’un et demander
              de l’aide.
            </p>
          </>
        ),
      },
      {
        question: "Observer son corps peut aider à repérer ses émotions",
        answer: (
          <>
            <p>
              Une émotion ne se vit pas seulement dans la tête. Elle s'accompagne aussi de
              sensations dans le corps, de pensées et d'envies d'agir.
            </p>
            <div>
              Selon les personnes et les situations, elle va souvent de pair avec des sensations
              comme :
              <ul>
                <li>un cœur qui bat plus vite ;</li>
                <li>une respiration plus rapide ;</li>
                <li>une boule au ventre ;</li>
                <li>des tensions musculaires ou une agitation ;</li>
                <li>des mains moites ou des tremblements ;</li>
                <li>avoir la gorge nouée ;</li>
                <li>une impression de lourdeur ou de chaleur ;</li>
                <li>un engourdissement, ou l'impression de ne plus rien ressentir.</li>
              </ul>
            </div>
            <p>
              Être attentif à ces sensations peut parfois aider à mettre des mots sur ce que l'on
              ressent.
            </p>
            <p>
              Mais une même sensation peut être interprétée différemment selon la situation : un
              cœur qui bat vite peut accompagner la peur comme l’excitation. Si porter attention à
              ton corps rend les choses plus difficiles, tu n’as pas à continuer.
            </p>
          </>
        ),
      },
      {
        question: "Comment ça peut se manifester concrètement",
        answer: (
          <>
            <Disclaimer />
            <h4>Dans la tête</h4>
            <ul>
              <li>Je ne comprends pas toujours mes réactions.</li>
              <li>J'ai du mal à mettre des mots sur ce que je ressens.</li>
              <li>Je me reproche de ressentir certaines émotions.</li>
              <li>J'ai l'impression que mes émotions prennent toute la place.</li>
            </ul>
            <h4>Dans les comportements et les émotions</h4>
            <ul>
              <li>Je pleure plus facilement que d'habitude.</li>
              <li>Je m'énerve facilement, puis je culpabilise.</li>
              <li>J'ai du mal à me calmer une fois que l'émotion est là.</li>
              <li>Je garde beaucoup de choses pour moi, jusqu'à exploser.</li>
              <li>
                J'évite des situations parce qu'elles me font ressentir des émotions désagréables.
              </li>
              <li>Il m'arrive de ne plus rien ressentir</li>
            </ul>
            <Disclaimer_End1 />
          </>
        ),
      },
    ],
  },
  tips: [
    {
      title: "Mettre des mots sur ce que tu ressens",
      items: [
        {
          title: "L’idée",
          desc: (
            <>
              mettre des mots sur une émotion peut aider à lui donner des contours, mieux la définir
              et la repérer.
            </>
          ),
        },
        {
          title: "Un premier pas",
          desc: (
            <>
              demande-toi : demande-toi : « Qu'est-ce qui ressemble le plus à ce que je ressens ? »
              Un mot approximatif suffit. Tu peux t'aider d'une liste ou d'une roue des émotions si
              tu as du mal à trouver les mots.
            </>
          ),
        },
      ],
    },
    {
      title: "Faire le point sur ce que tu ressens",
      items: [
        {
          title: "L’idée",
          desc: (
            <>
              prendre un moment pour faire le point sur ce qui se passe en toi peut t’aider à y voir
              plus clair et à prendre un peu de recul.
            </>
          ),
        },
        {
          title: "Un premier pas",
          desc: (
            <>
              demande-toi : demande-toi : « Que se passe-t-il dans mon corps ? Quelles pensées me
              viennent ? Qu'est-ce que cette émotion me donne envie de faire ? » Un peu d'inconfort
              est normal. Si c'est trop difficile à supporter, fais une pause et reprends plus tard,
              ou avec l'aide d'un professionnel.
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
          desc: (
            <>
              une émotion forte n'est pas figée, elle finit en général par retomber à un rythme qui
              dépend de la situation et de ce que l'on en fait. Plutôt que de chercher à la faire
              disparaître tout de suite, tu peux lui laisser un peu de temps avant de décider quoi
              faire.
            </>
          ),
        },
        {
          title: "Un premier pas",
          desc: (
            <>
              quand l'émotion est très forte, accorde-toi quelques minutes avant de réagir. Tu peux
              ralentir ta respiration si cela t'aide, ou te dire : « Je peux ressentir cette émotion
              sans qu'elle me définisse. ». Puis reviens à ce qui s'est passé, avec toi-même ou une
              personne de confiance. Si c'est difficile, un professionnel peut t'aider.
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
              tu ne peux pas toujours choisir ce que tu ressens, mais tu peux apprendre petit à
              petit à avoir plus de choix dans la façon d'y répondre.
            </>
          ),
        },
        {
          title: "Un premier pas",
          desc: (
            <>
              demande-toi : « Qu'est-ce qui pourrait m'aider, maintenant et aussi plus tard ? ».
              Selon la situation, ce sera parfois parler à quelqu'un, faire une pause, marcher
              quelques minutes, te reposer si tu en as besoin, ou essayer d’agir sur ce qui te pose
              problème, par exemple en posant une limite ou en exprimant ce dont tu as besoin.
            </>
          ),
        },
      ],
    },
  ],
  whatIf: {
    content: (
      <>
        <p>Ressentir des émotions fortes et parfois désagréables est normal.</p>
        <p>
          Mais si elles sont très intenses, fréquentes ou durables, et qu'elles gênent tes études,
          ton sommeil ou tes relations, tu n'as pas à traverser cela sans aide.
        </p>
        <p>
          Parler avec un proche, un médecin ou un psychologue peut t'aider à mieux comprendre ce que
          tu traverses et à apprendre à y répondre autrement. Des accompagnements efficaces
          existent.
        </p>
        <p>
          Tu peux appeler le 3040, le numéro national gratuit et confidentiel pour les étudiants :
          des professionnels t'écoutent et t'orientent, y compris en cas de harcèlement ou de
          violences. Si tu as des idées noires ou que tu penses à te faire du mal, appelle le 3114
          (numéro national de prévention du suicide), gratuit et joignable à tout moment. En cas de
          danger immédiat, appelle le 15.
        </p>
      </>
    ),
  },
};
