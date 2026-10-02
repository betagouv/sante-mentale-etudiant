import { transcriptionEatingDisorder } from "@/data/videos/transcriptions/feelings/eating-disorder";
import { Feeling } from "./types";
import Link from "next/link";

export const FEELING_EATING_DISORDER: Feeling = {
  slug: "eating-disorder",
  name: "Rapport compliqué à la nourriture",
  metadata: {
    title: "Mon rapport à la nourriture",
    description:
      "Comprendre son rapport à la nourriture : des pistes et des ressources pour y voir plus clair, sans jugement.",
  },
  catch: {
    description: "J’ai un rapport compliqué à la nourriture",
    sentence: (
      <>
        <p>
          Tu penses sans cesse à ce que tu as mangé / à ce que tu devrais manger ?
          Manger te fait culpabiliser ou génère des frustrations ? Il t’arrive de te priver de manger ou au contraire de ressentir
          le “besoin de te remplir” ?
        </p>
        <p>
          Notre façon de manger varie naturellement selon les périodes.
          Mais lorsque la nourriture prend trop de place dans ta vie, qu’elle empiète sur tes projets, tes études, tes activités,
          cela mérite qu’on s’en occupe.
        </p>
      </>
    ),
  },
  video: {
    key: "eating-disorder",
    videoUrl: "https://tube.numerique.gouv.fr/videos/embed/dBh8sEXhSAAUiBMRRdUK5k",
    previewUrl: "/videos/preview/feelings/eating-disorder.mp4",
    posterUrl: "/images/vignettes/feelings/eating-disorder.jpg",
    duration: 5,
    guest: {
      name: "Jérôme Lacinga",
      role: "Psychologue clinicien",
    },
    transcription: transcriptionEatingDisorder,
  },
  recap: [
    "Manger est d'abord une source de plaisir, de partage et d'habitudes.",
    "Le rapport à la nourriture peut changer lors des périodes difficiles.",
    "Un besoin de se priver ou de se remplir peut devenir un signal d'alerte.",
    "Quand la nourriture fait souffrir, en parler à un professionnel aide à comprendre ce qui se passe.",
  ],
  faq: {
    title: "Comprendre son rapport à la nourriture",
    intro: (
      <>
        Manger ne répond pas uniquement à un besoin physique. C’est aussi un moment de partage, de plaisir et de vie en société.
        Un changement passager dans notre rapport à la nourriture n’est pas forcément inquiétant (on peut manger davantage lors d’une période intense de révisions par exemple).
        Ce changement mérite de l’attention lorsque la nourriture prend une place trop importante dans les pensées ou dans le quotidien.
      </>
    ),
    items: [
      {
        question: "Manger n'est pas seulement une nécessité vitale",
        answer: (
          <>
            <p>
              C’est aussi une pratique sociale, familiale et culturelle qui permet à la personne de prendre place dans son environnement.
            </p>
            <p>
              Le rapport à l’alimentation évolue au fil de la vie : un déménagement, une période d'examens,
              un changement de rythme peuvent bousculer nos habitudes alimentaires.
              On mange plus, ou moins, ou à des heures inhabituelles. Souvent, ces perturbations sont passagères.
            </p>
          </>
        ),
      },
      {
        question: "Quand manger passe au second plan ",
        answer: (
          <>
            <p>
              Sauter un repas, grignoter, préférer les fast foods ou aliments ultra transformés & sodas
              aux aliments cuisinés soi-même…
            </p>
            <p>
              Entre les cours, les petits boulots, les soirées, les révisions et un budget serré, les repas passent souvent après tout le reste.
            </p>
            <p>
              Des repas peu variés et faiblement nutritifs peuvent favoriser la prise de poids et l’apparition de maladies chroniques
              (obésité, diabète, maladie cardio vasculaires, etc.). La fatigue et les baisses de concentration peuvent aussi
              s'installer plus vite.
            </p>
            <p>
              Ainsi, un tiers des étudiants déclare avoir assez à manger mais pas toujours tous les aliments qu’ils souhaiteraient
              et 9 % déclarent parfois ne pas avoir assez à manger (3 % manquent souvent de nourriture) - source :
              OVE Bien être Santé 2024.
            </p>
            <p>
              Depuis mai 2026, le repas à 1 € est ouvert à tous les étudiants, boursiers ou non. Un plat et deux accompagnements,
              le midi, et le soir dans les restos U qui sont ouverts. En savoir plus sur
              <Link
                href="https://www.etudiant.gouv.fr/fr"
                target="_blank"
                rel="noopener noreferrer"
              >
                etudiant.gouv.fr
              </Link>
            </p>
          </>
        ),
      },
      {
        question: "Quand les règles alimentaires prennent trop de place",
        answer: (
          <>
            <div>
              Faire attention à son alimentation n’est pas forcément problématique. Mais certaines
              règles deviennent parfois de plus en plus rigides :
              <ul>
                <li>s’interdire certains aliments ;</li>
                <li>classer les aliments entre « bons » et « mauvais » ;</li>
                <li>se sentir obligé de faire du sport après avoir mangé ;</li>
                <li>éviter de manger devant les autres ;</li>
                <li>organiser sa journée entière autour des repas ou de son poids</li>.
              </ul>
            </div>
            <p>
              Plus ces règles se multiplient, plus il devient difficile de manger en fonction de ses
              besoins réels. La nourriture peut alors occuper une place envahissante dans les
              pensées et le quotidien.
            </p>
          </>
        ),
      },
      {
        question: "La question de la relation au corps et de la culpabilité",
        answer: (
          <>
            <p>La relation à la nourriture est parfois liée à la façon dont on perçoit son corps.</p>
            <p>
              Les remarques de l’entourage, les comparaisons ou des injonctions à la minceur ou
              à la performance peuvent inciter à contrôler son alimentation de manière excessive.
            </p>
            <p>
              On peut par exemple se laisser convaincre par des régimes miracles vantés sur les réseaux sociaux, sans
              fondement scientifique, qui peuvent se révéler dangereux pour la santé à terme.
            </p>
            <p>
              Ces restrictions installent aussi souvent un cercle qui s'entretient tout seul. On se prive, l'envie de
              manger grandit (frustration), on finit par craquer. Puis vient la culpabilité :
              « Je n'aurais pas dû. » « Je manque de contrôle. » Alors on se prive à nouveau.
            </p>
            <p>
              C'est finalement la privation elle-même qui rend le craquage plus probable.
            </p>
            <p>
              Ce n’est pas un manque de volonté, c’est un mécanisme, et il se soigne.
            </p>
            <p>
              En parler avec un professionnel aide à s’en sortir.
            </p>
          </>
        ),
      },
      {
        question: "Quand mon rapport à la nourriture évolue en trouble des conduites alimentaires",
        answer: (
          <>
            <p>
              Parfois, les difficultés s'installent et deviennent un trouble des conduites alimentaires (TCA).
              Les plus connus sont l'anorexie mentale, la boulimie ou la frénésie alimentaire (anciennement appelée hyperphagie boulimique)
              ou même l’orthorexie.
            </p>
            <p>
              L'anorexie mentale se caractérise par une restriction alimentaire importante,
              associée à une peur intense de prendre du poids.
            </p>
            <p>
              La boulimie et la frénésie alimentaire se caractérisent par des crises, vécues
              avec une sensation de perte de contrôle. Dans la boulimie, ces crises sont suivies
              de comportements destinés à compenser.
            </p>
            <p>
              L’orthorexie est un trouble du comportement alimentaire caractérisé par une obsession pathologique de manger sainement.
            </p>
            <p>
              Ces troubles ont rarement une seule cause. Ils naissent d'un ensemble de facteurs biologiques, familiaux, psychologiques et sociaux.
              Ils s'accompagnent parfois d'autres difficultés, comme l'anxiété, la dépression ou des troubles du sommeil.
            </p>
            <p>
              Ces troubles ont des conséquences psychiques et physiques. Ils se soignent, et un accompagnement précoce favorise le rétablissement.
              Il est important d’en parler à un professionnel rapidement.
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
      title: "Ne pas garder ça pour toi",
      items: [
        {
          title: "L’action",
          desc: (
            <>
              les difficultés alimentaires se développent souvent dans le secret et la honte.
              En parler permet de commencer à rompre cette boucle.
            </>
          ),
        },
        {
          title: "Commence petit",
          desc: (
            <>
              choisis une personne avec laquelle tu te sens en sécurité. Tu peux aussi te tourner directement vers un médecin,
              un psychologue, un Service de santé étudiante ou un professionnel spécialisé.
            </>
          ),
        },
      ],
    },
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
