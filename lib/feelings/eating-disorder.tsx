import { FeelingLink } from ".";
import { Feeling } from "./types";

export const FEELING_EATING_DISORDER: Feeling = {
  slug: "eating-disorder",
  name: "Rapport compliqué à la nourriture",
  catch: {
    description: "J’ai un rapport compliqué à la nourriture",
    sentence: (
      <>
        <p>
          Certains jours, tu sautes des repas sans vraiment t’en rendre compte. D’autres fois, tu
          manges pour calmer ton stress, ta tristesse ou ton ennui, puis tu culpabilises. Tu penses
          beaucoup à ce que tu as mangé, à ce que tu « devrais » manger ou à l’apparence de ton
          corps.
        </p>
        <p>
          Notre façon de manger peut changer selon les périodes et les émotions que nous traversons.
          Mais lorsque la nourriture devient une source de contrôle, de honte, d’angoisse ou de
          souffrance, il est important de ne pas rester seul avec ça.
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
    "Nos émotions peuvent modifier notre appétit et notre façon de manger.",
    "Ce n’est pas ton poids ou ton apparence qui permet, à eux seuls, de savoir si tu as besoin d’aide.",
    "Plus la nourriture occupe tes pensées ou influence ton quotidien, plus il est utile d’en parler.",
    "Il ne faut pas attendre qu’un trouble soit installé pour demander de l’aide.",
  ],
  faq: {
    title: "Comprendre son rapport à la nourriture",
    intro: (
      <>
        Manger ne répond pas uniquement à un besoin physique. Notre alimentation est également
        influencée par nos émotions, nos habitudes, notre environnement, notre rapport au corps et
        les périodes que nous traversons. Une difficulté ponctuelle n’est pas forcément inquiétante,
        mais elle mérite de l’attention lorsqu’elle dure ou fait souffrir.
      </>
    ),
    items: [
      {
        question: "Manger, ce n’est pas seulement avoir faim",
        answer: (
          <>
            <p>
              La faim est un signal physique, mais elle n’est pas la seule chose qui influence notre
              alimentation.
            </p>
            <p>
              On peut aussi manger pour partager un moment, se réconforter, s’occuper, se calmer ou
              retrouver une sensation agréable. À l’inverse, le stress, la tristesse, l’anxiété ou
              l’épuisement peuvent couper l’appétit chez certaines personnes.
            </p>
            <p>
              Il n’existe donc pas une seule manière de réagir : une même émotion peut pousser une
              personne à manger davantage et une autre à ne presque plus manger.
            </p>
          </>
        ),
      },
      {
        question: "Les émotions peuvent modifier notre façon de manger",
        answer: (
          <>
            <p>
              Après une journée difficile, la nourriture peut devenir une manière de trouver
              rapidement du réconfort ou de faire baisser la tension. À d’autres moments, le corps
              peut sembler « noué » et rendre l’idée même de manger difficile.
            </p>
            <p>
              Ces réactions ne sont pas, à elles seules, le signe d’un trouble. Le problème apparaît
              surtout lorsqu’elles deviennent le principal moyen de gérer ses émotions, qu’elles se
              répètent ou qu’elles s’accompagnent d’une forte culpabilité.
            </p>
            <p>
              Cela peut alors créer une boucle :
              <ul>
                <li>Je ne vais pas bien</li>
                <li>Je mange beaucoup ou je me prive</li>
                <li>Je culpabilise ou je me juge</li>
                <li>Je me sens encore plus mal</li>
                <li>Mon rapport à la nourriture devient plus difficile</li>
              </ul>
            </p>
            <p>
              → Voir aussi la page <FeelingLink slug="feeling-management" />.
            </p>
          </>
        ),
      },
      {
        question: "Les règles alimentaires peuvent prendre beaucoup de place",
        answer: (
          <>
            <p>
              Faire attention à son alimentation n’est pas forcément problématique. Mais certaines
              règles deviennent parfois de plus en plus rigides :<ul></ul>
              <li>s’interdire certains aliments ;</li>
              <li>classer les aliments entre « bons » et « mauvais » ;</li>
              <li>sauter un repas pour « compenser » ;</li>
              <li>compter constamment les calories ;</li>
              <li>se sentir obligé de faire du sport après avoir mangé ;</li>
              <li>éviter de manger devant les autres ;</li>
              <li>organiser sa journée entière autour des repas ou de son po</li>ids.
            </p>
            <p>
              Plus ces règles se multiplient, plus il devient difficile de manger en fonction de ses
              besoins réels. La nourriture peut alors occuper une place envahissante dans les
              pensées et le quotidien.
            </p>
          </>
        ),
      },
      {
        question: "La culpabilité entretient souvent les difficultés",
        answer: (
          <>
            <p>
              Après avoir mangé, tu peux te dire :
              <ul>
                <li>« Je n’aurais pas dû. »</li>
                <li>« Je manque de contrôle. »</li>
                <li>« Il faut que je me rattrape demain. »</li>
              </ul>
            </p>
            <p>
              Ces pensées peuvent pousser à se restreindre davantage, puis rendre les épisodes de
              perte de contrôle plus probables. Ce n’est donc pas forcément une question de
              discipline : la restriction, la culpabilité et la perte de contrôle peuvent se
              renforcer mutuellement.
            </p>
            <p>
              Les crises de boulimie ou d’hyperphagie sont notamment caractérisées par une sensation
              de ne plus pouvoir maîtriser ce que l’on mange. Dans la boulimie, elles sont suivies
              de comportements destinés à compenser ; dans l’hyperphagie boulimique, ces
              compensations ne sont pas présentes. Ces situations nécessitent un accompagnement
              professionnel.
            </p>
          </>
        ),
      },
      {
        question: "Le rapport au corps peut aussi entrer en jeu",
        answer: (
          <>
            <p>
              La relation à la nourriture est souvent liée à la façon dont on perçoit son corps.
            </p>
            <p>
              Les remarques de l’entourage, les comparaisons, les injonctions à la minceur ou à la
              performance et les contenus vus sur les réseaux sociaux peuvent renforcer l’idée qu’il
              faudrait contrôler son alimentation pour avoir le « bon » corps.
            </p>
            <p>
              Pourtant, une souffrance alimentaire ne se voit pas toujours. On peut avoir besoin
              d’aide quel que soit son poids, son genre ou son apparence. Les troubles des conduites
              alimentaires ont des conséquences à la fois psychiques et physiques et peuvent
              concerner des profils très différents.
            </p>
          </>
        ),
      },
      {
        question: "Une difficulté fréquente chez les étudiants accompagnés",
        answer: (
          <>
            <p>
              Dans l’enquête réalisée auprès des bénéficiaires de Santé Psy Étudiant, les
              difficultés avec l’alimentation ou le rapport au corps représentent 6 % des ressentis
              exprimés au moment de consulter. Cela montre que ces difficultés ne sont ni rares ni
              honteuses, même si elles restent souvent difficiles à évoquer.
            </p>
          </>
        ),
      },
      {
        question: "Comment ça se manifeste concrètement",
        answer: (
          <>
            <ul>
              <li>Je saute régulièrement des repas, volontairement ou sans m’en rendre compte.</li>
              <li>Je mange davantage lorsque je suis stressé, triste ou seul.</li>
              <li>
                Il m’arrive de manger rapidement avec l’impression de ne plus pouvoir m’arrêter.
              </li>
              <li>Je culpabilise après avoir mangé.</li>
              <li>Je m’interdis certains aliments, même lorsque j’en ai envie.</li>
              <li>
                J’essaie de « compenser » un repas en mangeant moins ensuite ou en faisant du sport.
              </li>
              <li>Je pense beaucoup à la nourriture, à mon poids ou à mon apparence.</li>
              <li>
                Je vérifie souvent mon corps dans le miroir ou je préfère l’éviter complètement.
              </li>
              <li>Je refuse certaines sorties parce qu’elles impliquent de manger.</li>
              <li>Mon humeur dépend de ce que j’ai mangé ou du chiffre affiché sur la balance.</li>
              <li>J’ai l’impression que je devrais réussir à me contrôler davantage.</li>
              <li>Je cache certaines habitudes alimentaires à mon entourage.</li>
            </ul>
            <p>
              Ces signes ne permettent pas de poser seul un diagnostic. Ils peuvent cependant
              indiquer que ta relation à la nourriture mérite d’être prise au sérieux.
            </p>
          </>
        ),
      },
    ],
  },
  tips: [
    {
      title: "Observer sans compter ni te juger",
      items: [
        {
          title: "L’action",
          desc: (
            <>
              pendant quelques jours, essaie de repérer les moments où ton rapport à la nourriture
              devient plus difficile.
            </>
          ),
        },
        {
          title: "Commence petit",
          desc: (
            <>
              note uniquement le contexte et ton ressenti : « Qu’est-ce qui s’est passé ? » «
              Comment je me sentais ? » « Est-ce que j’avais faim, ou est-ce que je cherchais
              surtout à m’apaiser ? ». L’objectif n’est pas de noter les calories, les quantités ou
              ton poids, mais de comprendre progressivement ce qui déclenche ces moments.
            </>
          ),
        },
      ],
    },
    {
      title: "Remettre un peu de régularité",
      items: [
        {
          title: "L’action",
          desc: (
            <>
              lorsque les repas deviennent très irréguliers, les signaux de faim et de satiété
              peuvent être plus difficiles à reconnaître.
            </>
          ),
        },
        {
          title: "Commence petit",
          desc: (
            <>
              choisis un seul repas ou une collation que tu essaieras de maintenir à une heure
              relativement régulière, sans chercher à rendre toute ton alimentation « parfaite ». Il
              ne s’agit pas de créer une nouvelle règle rigide, mais de redonner quelques repères à
              ton corps.
            </>
          ),
        },
      ],
    },
    {
      title: "Faire une pause avant d’agir",
      items: [
        {
          title: "L’action",
          desc: (
            <>
              quand tu sens que tu vas sauter un repas, manger pour calmer une émotion ou chercher à
              compenser, essaie de créer un petit temps d’arrêt.
            </>
          ),
        },
        {
          title: "Commence petit",
          desc: (
            <>
              pose-toi trois questions : Est-ce que j’ai faim physiquement ? Qu’est-ce que je
              ressens en ce moment ? De quoi aurais-je besoin, en plus ou à la place de manger ? Il
              n’y a pas de bonne ou de mauvaise réponse. L’objectif n’est pas de t’empêcher de
              manger, mais de mieux comprendre ce qui se passe pour pouvoir choisir ce qui
              t’aiderait vraiment à cet instant.
            </>
          ),
        },
      ],
    },
    {
      title: "Ne pas garder ça pour toi",
      items: [
        {
          title: "L’action",
          desc: (
            <>
              les difficultés alimentaires se développent souvent dans le secret et la honte. En
              parler permet de commencer à rompre cette boucle.
            </>
          ),
        },
        {
          title: "Commence petit",
          desc: (
            <>
              choisis une personne avec laquelle tu te sens en sécurité. Tu peux aussi te tourner
              directement vers un médecin, un psychologue, un Service de santé étudiante ou un
              professionnel spécialisé.
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
            Il est normal que l’appétit varie selon les périodes. Mais si la nourriture, ton poids
            ou ton corps occupent beaucoup tes pensées, si tu te prives, perds régulièrement le
            contrôle ou cherches à compenser, il est important d’en parler.
          </b>
        </p>
        <p>
          Tu n’as pas besoin d’attendre que la situation soit « grave » ou d’avoir un diagnostic
          pour demander de l’aide. Un médecin, un psychologue, un Service de santé étudiante ou un
          professionnel spécialisé peut t’accompagner.
        </p>
        <p>
          Dès lors que ton rapport à la nourriture te fait souffrir, il mérite d’être pris au
          sérieux.
        </p>
      </>
    ),
  },
};
