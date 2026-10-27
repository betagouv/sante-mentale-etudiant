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
          Tu n’as pas faim ? Tu n’as pas envie de manger ? Tu es dégouté ? Tu penses sans cesse à ce
          que tu as mangé, à ce que tu devrais manger ou ne pas manger ? Tu as toujours envie de
          manger ? Tu ne peux pas manger ou tu ne peux pas t’empêcher de manger ? Tu ne peux pas
          t’arrêter de manger ? Tu sautes des repas ou tu évites de manger ? Tu ressens le “besoin
          de te remplir” ?
        </p>
        <p>
          Notre façon de manger varie naturellement selon les périodes. Mais lorsqu’on ne peut pas
          manger, que la nourriture prend trop de place dans la vie, qu’elle envahit les pensées au
          point qu’elles t’empêchent de réaliser tes projets, tes études, tes activités, cela mérite
          que tu t’en occupes.
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
      <>
        <p>
          Manger est inscrit au cœur de notre vie pour répondre à nos besoins, se faire plaisir et
          partager avec les autres (famille, amis, relations).
        </p>
        <p>
          Spontanément notre alimentation varie selon nos besoins, nos envies et selon le contexte
          (on peut manger davantage lors d’une période intense de révisions ou d’activité sportive
          par exemple), mais aussi en lien avec notre état de santé physique et psychique, nos
          émotions. Quand on a des problèmes dans la vie, des problèmes de santé, l’alimentation est
          souvent perturbée.
        </p>
        <p>
          La relation à la nourriture est aussi parfois liée à la façon dont on perçoit son corps,
          son poids. Les remarques de l’entourage, les comparaisons ou des injonctions à la minceur
          fréquentes dans notre société, le souhait de perdre du poids, peuvent inciter à contrôler
          son alimentation de manière excessive.
        </p>
        <p>
          Parfois, les perturbations de notre alimentation sont liées à des préoccupations sur la
          nourriture (elle doit être « healthy », respecter l’écologie, pas trop calorique, pas trop
          grasse...). Lorsque la nourriture ou l’alimentation prennent une place très importante
          dans les pensées ou dans le quotidien, il y a des solutions : manger ne doit pas être un
          problème quotidien.
        </p>
      </>
    ),
    items: [
      {
        question: "Quand manger passe au second plan ",
        answer: (
          <>
            <p>
              Entre les cours, les petits boulots, les soirées, les révisions et un budget serré,
              les repas passent parfois après tout le reste. Cela peut t'amener à sauter des repas,
              grignoter, manger des aliments rapides à préparer, faciles à manger et pas chers, de
              mauvaise qualité. Ces attitudes au long cours peuvent occasionner des problèmes de
              santé.
            </p>
            <p>
              Des repas insuffisants en quantité, peu variés, trop peu fréquents, peuvent entraîner
              une dénutrition générant de la fatigue et des baisses de concentration, et avoir des
              conséquences sur la santé sur la durée des problèmes de santé (maigreur, carences,
              anxiété, dépression, troubles du sommeil …). A l’inverse, une alimentation trop
              importante en quantité, et/ou trop riche et/ou comportant trop d’aliments ultra
              transformés ou de sodas peut aussi occasionner des problèmes de santé (surpoids, voire
              obésité, diabète, maladie cardio-vasculaires, etc.). Dans l’enquête Bien être Santé
              2024, un tiers des étudiants déclare avoir assez à manger en quantité mais pas
              toujours tous les aliments qu’ils souhaiteraient et 9 % déclarent parfois ne pas avoir
              assez à manger.
            </p>
            <p>
              Depuis mai 2026, le repas à 1 € est ouvert à tous les étudiants, boursiers ou non. Un
              plat et deux accompagnements, le midi, et le soir dans les restos U qui sont ouverts.
              En savoir plus sur{" "}
              <ExternalLink href="https://www.etudiant.gouv.fr/fr">etudiant.gouv.fr</ExternalLink>.
            </p>
          </>
        ),
      },
      {
        question: "Quand ton alimentation révèle un problème de santé",
        answer: (
          <>
            De nombreux problèmes de santé physiques ou psychiques interfèrent avec notre appétit.
            Une baisse d’appétit ou un excès durable non expliqués, d’autant plus s’ils sont
            associés à d’autres difficultés, nécessitent un avis d’un professionnel de santé.
          </>
        ),
      },
      {
        question: "Quand l’alimentation prend trop de place dans ta vie : signes d’alerte",
        answer: (
          <>
            <p>
              Faire attention à son alimentation fait partie d’une bonne hygiène de vie. Avoir de
              bons repères sur l’alimentation est important, dans un contexte où de multiples
              influenceurs proposent des conduites ou des régimes alimentaires non adaptés, voire
              dangereux pour la santé. On peut par exemple se laisser convaincre par des régimes
              miracles vantés sur les réseaux sociaux, sans fondement scientifique. Un conseil :
              n’oublie pas que tu peux te désabonner des comptes qui te font te sentir mal.
            </p>
            <div>
              Certaines règles que l’on s’impose deviennent parfois de plus en plus rigides et
              envahissantes dans le quotidien :
              <ul>
                <li>S’interdire certains aliments ;</li>
                <li>Classer les aliments entre « bons » et « mauvais » ;</li>
                <li>Se sentir obligé de faire du sport après avoir mangé ;</li>
                <li>Éviter de manger devant les autres ;</li>
                <li>Organiser sa journée entière autour des repas ou de son poids.</li>
              </ul>
            </div>
            <p>
              Plus ces règles se multiplient, plus il devient difficile de manger en fonction de ses
              besoins réels et de ses envies. La nourriture peut alors occuper une place
              envahissante dans les pensées et le quotidien. Parfois la restriction alimentaire est
              volontaire au début, puis elle devient permanente et peut conduire à l’anorexie
              mentale. A l’inverse parfois c’est la restriction qui cause une perte de contrôle qui
              se traduit par une surconsommation de nourriture. En effet, les restrictions
              alimentaires peuvent créer chez certaines personnes un cercle vicieux : plus on se
              restreint, plus le besoin de manger grandit, ce qui engendre un besoin irrépressible ,
              et on finit par craquer sans pouvoir se limiter. Il en résulte une culpabilité : « Je
              n'aurais pas dû. » « Je manque de contrôle. ». Alors on se prive à nouveau… C'est
              finalement la restriction qui déclenche les accès hyperphagiques aussi appelés crises
              de boulimie.
            </p>
            <p>
              Ces difficultés ne sont pas la traduction d’ un manque de volonté, c’est un mécanisme
              pathologique, et cela se soigne. En parler avec un professionnel de santé aide à s’en
              sortir.
            </p>
          </>
        ),
      },
      {
        question: "Quand l’alimentation est source de souffrance ou de malaise",
        answer: (
          <>
            <p>
              Parfois, les difficultés s’installent. Ton poids change beaucoup, les repas deviennent
              un cauchemar, les crises de boulimie ou la culpabilité sont fréquentes, ton corps
              fatigue. Dans certains cas, tu peux ressentir des malaises, vertiges, évanouissements,
              palpitations, une grande faiblesse.
            </p>
            <p>
              Dans ce cas, n’attends pas : il est important d’en parler rapidement avec un médecin,
              c’est lui qui pourra poser un diagnostic et évaluer ta situation.
            </p>
          </>
        ),
      },
      {
        question: "Comment cela peut se manifester concrètement ?",
        answer: (
          <>
            <ul>
              <li>Je n’ai plus envie de manger.</li>
              <li>J’ai envie de vomir à l’idée de manger ou dès que je mange.</li>
              <li>Je saute régulièrement des repas, volontairement ou sans m’en rendre compte.</li>
              <li>Je mange beaucoup lorsque je suis stressé, triste ou seul.</li>
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
              <li>Je perds ou je prends du poids régulièrement.</li>
              <li>Je ne ressens pas de problème mais les autres me disent que j’en ai.</li>
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
              les difficultés alimentaires se développent sans que l’on s’en aperçoive, pour
              certaines dans le secret et la honte. En parler permet de commencer à rompre cette
              boucle.
            </>
          ),
        },
        {
          title: "Un premier pas",
          desc: (
            <>
              choisis une personne avec laquelle tu te sens en sécurité. Tu peux aussi aller voir
              directement ton médecin : il évaluera avec toi ton état de santé global physique et
              psychique, et pourra t’orienter selon tes besoins vers un psychologue, un service de
              santé étudiante ou un professionnel de santé spécialisé.
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
              pendant quelques jours, essaie de repérer les moments compliqués en lien avec
              l’alimentation, la nourriture, ce qui te gêne voire les remarques des autres.
            </>
          ),
        },
        {
          title: "Un premier pas",
          desc: (
            <>
              note uniquement le contexte, ce qui s’est passé et ce que tu as ressenti : « Qu’est-ce
              qui s’est passé? Est-ce que je sais pourquoi ?» « Comment je me sentais ? » « Est-ce
              que j’avais faim, ou non ? ? ». Il ne s’agit pas de noter ce que tu as mangé, mais
              d’essayer de regarder comment tu te sentais dans ces moments où c’est compliqué pour
              toi.
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
              lorsque les repas deviennent très irréguliers du fait de ton emploi du temps, les
              signaux de faim et de satiété peuvent être plus difficiles à reconnaître.
            </>
          ),
        },
        {
          title: "Un premier pas",
          desc: (
            <>
              essaie de pas sauter de repas même s’ils sont rapides ou « sur le pouce » et choisis
              un seul repas ou une collation que tu essaieras de maintenir à une heure relativement
              régulière, sans chercher à rendre toute ton alimentation « parfaite ». Il ne s’agit
              pas de créer une nouvelle règle rigide, mais de redonner quelques repères à ton corps.
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
              quand tu sens que tu vas sauter un repas, manger non par faim mais pour calmer un mal
              être ou une émotion ou chercher à compenser une prise alimentaire, essaie de créer un
              petit temps d’arrêt.
            </>
          ),
        },
        {
          title: "Un premier pas",
          desc: (
            <>
              <p>
                pose-toi trois questions : Est-ce que j’ai faim physiquement ? Qu’est-ce que je
                ressens en ce moment ? De quoi aurais-je besoin, en plus ou à la place de manger ?
                Il n’y a pas de bonne ou de mauvaise réponse.
              </p>
              <p>
                L’objectif n’est pas de te forcer ou de t’empêcher de manger, mais de mieux
                comprendre ce qui se passe pour pouvoir choisir ce qui t’aiderait vraiment à cet
                instant.
              </p>
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
            Il est normal que l’appétit varie selon les périodes. Mais dès lors que ton rapport à la
            nourriture échappe à ton contrôle, retentit sur ta santé ou te fait souffrir, il mérite
            d’être pris au sérieux. Si la nourriture, ton poids ou ton corps occupent beaucoup tes
            pensées, si tu te prives, si tu perds régulièrement le contrôle ou cherches à compenser
            pour maigrir ou ne pas prendre de poids, il est important de chercher de l’aide.
          </b>
        </p>
        <p>
          Tu n’as pas besoin d’attendre que la situation soit « grave » ou qu’un diagnostic soit
          posé pour demander de l’aide. Ton médecin traitant est un bon premier contact. Tu peux
          aussi solliciter ton Service de santé étudiante, un psychologue ou un professionnel de
          santé spécialisé peuvent aussi t’accompagner.
        </p>
        <p>
          Si tu fais des malaises, des vertiges, le cœur qui s’emballe ou une grande faiblesse,
          consulte un médecin rapidement. En cas de malaise important, appelle le 15.
        </p>
        <p>
          Tu t'inquiètes pour quelqu'un ? → va voir la section{" "}
          <Link href="/aider-un-proche">Aider un proche</Link>
        </p>
      </>
    ),
  },
};
