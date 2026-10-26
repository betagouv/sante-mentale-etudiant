import ExternalLink from "@/components/link/ExternalLink";
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
          Tu n'as pas faim ? Tu n'as pas envie de manger ? Tu es dégouté ? Tu penses sans cesse à ce que tu as mangé / à ce que tu devrais manger ou ne pas manger ? Tu as toujours envie de manger ? Tu ne peux pas manger ou tu ne peux pas t'empêcher de manger ? Tu ne peux pas t'arrêter de manger ? Tu sautes des repas ou tu évites de manger ? Tu ressens le "besoin de te remplir" ?
        </p>
        <p>
          Notre façon de manger varie naturellement selon les périodes. Mais lorsqu'on ne peut pas manger, que la nourriture
          prend trop de place dans ta vie, qu’elle enavhit les pensées au point qu'elles t'empêchent de réaliser tes projets, tes études, tes
          activités, cela mérite que tu t’en occupes.
        </p>
      </>
    ),
  },
  videoKey: "eating-disorder",
  recap: [
    "Manger est d'abord une source de plaisir, de partage et d'habitudes.",
    "Le rapport à la nourriture peut changer lors des périodes difficiles.",
    "Un besoin de se priver ou de se remplir peut devenir un signal d'alerte.",
    "Quand la nourriture fait souffrir, en parler à un professionnel aide à comprendre ce qui se passe.",
  ],
  faq: {
    title: "Comprendre son rapport à la nourriture",
    intro: (
      <p>
        Manger ne répond pas uniquement à un besoin physique. C’est aussi un moment de partage, de
        plaisir et de vie en société. Un changement passager dans notre rapport à la nourriture
        n’est pas forcément inquiétant (on peut manger davantage lors d’une période intense de
        révisions par exemple). Ce changement mérite de l’attention lorsque la nourriture prend une
        place trop importante dans les pensées ou dans le quotidien.
      </p>
    ),
    items: [
      {
        question: "Quand manger passe au second plan ",
        answer: (
          <>
            <p>Sauter un repas, grignoter, manger des aliments ultra transformés & sodas…</p>
            <p>
              Entre les cours, les petits boulots, les soirées, les révisions et un budget serré,
              les repas passent souvent après tout le reste.
            </p>
            <p>
              Des repas peu variés, espacés ou faiblement nutritifs peuvent entraîner de la fatigue
              et des baisses de concentration, et avoir des conséquences sur la santé sur la durée,
              par exemple des maladies chroniques (obésité, diabète, maladie cardio vasculaires,
              etc.).
            </p>
            <p>
              Dans l’enquête Bien être Santé 2024, un tiers des étudiants déclare avoir assez à
              manger mais pas toujours tous les aliments qu’ils souhaiteraient et 9 % déclarent
              parfois ne pas avoir assez à manger.
            </p>
            <p>
              Depuis mai 2026, le repas à 1 € est ouvert à tous les étudiants, boursiers ou non. Un
              plat et deux accompagnements, le midi, et le soir dans les restos U qui sont ouverts.
              En savoir plus sur{" "}
              <ExternalLink
                href="https://www.etudiant.gouv.fr/fr"
              >
                etudiant.gouv.fr
              </ExternalLink>
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
                <li>organiser sa journée entière autour des repas ou de son poids.</li>
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
            <p>
              La relation à la nourriture est parfois liée à la façon dont on perçoit son corps.
            </p>
            <p>
              Les remarques de l’entourage, les comparaisons ou des injonctions à la minceur ou à la
              performance peuvent inciter à contrôler son alimentation de manière excessive.
            </p>
            <p>
              On peut par exemple se laisser convaincre par des régimes miracles vantés sur les
              réseaux sociaux, sans fondement scientifique, qui peuvent se révéler dangereux pour la
              santé à terme. Tu as le droit de te désabonner des comptes qui te font te sentir mal.
            </p>
            <p>
              Ces restrictions installent aussi souvent un cercle qui s'entretient tout seul. On se
              prive, l'envie de manger grandit, ce qui engendre de la frustration, et on finit par
              craquer. Puis vient la culpabilité : « Je n'aurais pas dû. » « Je manque de contrôle.
              » Alors on se prive à nouveau.
            </p>
            <p>C'est finalement la privation elle-même qui rend le craquage plus probable.</p>
            <p>Ce n’est pas un manque de volonté, c’est un mécanisme, et il se soigne.</p>
            <p>En parler avec un professionnel aide à s’en sortir.</p>
          </>
        ),
      },
      {
        question: "Quand ça devient plus difficile",
        answer: (
          <>
            <p>
              Parfois, les difficultés s’installent. Ton poids change beaucoup, les repas deviennent
              un combat, les crises ou la culpabilité reviennent souvent, ton corps fatigue. Dans
              certains cas, tu peux ressentir des malaises, vertiges, évanouissements, palpitations,
              une grande faiblesse.
            </p>
            <p>
              Dans ce cas, n’attends pas : il est important d’en parler rapidement avec un médecin,
              c’est lui qui pourra poser un diagnostic et évaluer ta situation.
            </p>
          </>
        ),
      },
      {
        question: "Comment ça peut se manifester concrètement",
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
          title: "L’idée",
          desc: (
            <>
              les difficultés alimentaires se développent souvent dans le secret et la honte. En
              parler permet de commencer à rompre cette boucle.
            </>
          ),
        },
        {
          title: "Un premier pas",
          desc: (
            <>
              choisis une personne avec laquelle tu te sens en sécurité. Tu peux aussi aller voir
              directement ton médecin : il vérifiera que ton corps va bien, et pourra t’orienter.
              Cela peut également être un psychologue, un service de santé étudiante ou un
              professionnel spécialisé.
            </>
          ),
        },
      ],
    },
    {
      title: "Observer sans compter ni te juger",
      items: [
        {
          title: "L’idée",
          desc: (
            <>
              pendant quelques jours, essaie de repérer les moments où ton rapport à la nourriture
              devient plus difficile.
            </>
          ),
        },
        {
          title: "Un premier pas",
          desc: (
            <>
              note uniquement le contexte et ton ressenti : « Qu’est-ce qui s’est passé ? » «
              Comment je me sentais ? » « Est-ce que j’avais faim, ou est-ce que je cherchais
              surtout à m’apaiser ? ». Il ne s’agit pas de noter ce que tu as mangé, mais d’essayer
              de regarder comment tu te sentais dans ces moments où ton rapport devient plus
              difficile.
            </>
          ),
        },
      ],
    },
    {
      title: "Remettre un peu de régularité",
      items: [
        {
          title: "L’idée",
          desc: (
            <>
              lorsque les repas deviennent très irréguliers, les signaux de faim et de satiété
              peuvent être plus difficiles à reconnaître.
            </>
          ),
        },
        {
          title: "Un premier pas",
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
          title: "L’idée",
          desc: (
            <>
              quand tu sens que tu vas sauter un repas, manger pour calmer une émotion ou chercher à
              compenser, essaie de créer un petit temps d’arrêt.
            </>
          ),
        },
        {
          title: "Un premier pas",
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
          pour demander de l’aide. Ton médecin est un bon premier contact. Un psychologue, ton
          Service de santé étudiante ou un professionnel spécialisé peuvent aussi t’accompagner.
        </p>
        <p>
          Si tu as des malaises, des vertiges, le cœur qui s’emballe ou une grande faiblesse,
          consulte un médecin rapidement. En cas de malaise important, appelle le 15.
        </p>
        <p>
          Dès lors que ton rapport à la nourriture te fait souffrir, il mérite d’être pris au
          sérieux.
        </p>
        <p>
          Tu t'inqiètes pour quelqu'un ? → Voir la page{" "}
          <Link href="/aider-un-proche">Aider un proche</Link>
        </p>
      </>
    ),
  },
};
