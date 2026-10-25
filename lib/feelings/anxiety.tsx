import { Feeling } from "./types";
import { FeelingLink } from ".";

export const FEELING_ANXIETY: Feeling = {
  slug: "anxiety",
  name: "Anxiété",
  metadata: {
    title: "Je ressens de l’anxiété",
    description:
      "Inquiétudes, stress qui monte, pensées qui tournent en boucle : comprenez ce que vous vivez et découvrez des ressources pour vous apaiser et trouver du soutien.",
  },
  catch: {
    description: "Je ressens du stress, de l'anxiété",
    sentence: (
      <>
        <p>
          Tu te sens agité, tendu, fatigué, tu as des difficultés de concentration ou de mémoire ?
          Tu penses à tes cours, ton avenir, ton budget, à tout en même temps ?
        </p>
        <p>Connaître des épisodes de stress fait partie de la vie.</p>
        <p>
          Mais lorsque ce stress est de plus en plus fréquent, intense ou durable, qu'il s'accompagne d'une inquiétude face à ce qui pourrait arriver (proche ou lointain), et qu'il gêne ton quotidien, il peut s'agir d'une anxiété qui mérite d'en parler à un professionnel.
        </p>
        <p>Tu peux tester quelques outils pour essayer de retrouver un peu d'apaisement, en attendant ou en complément d'un échange avec un professionnel. Des accompagnements efficaces existent.</p>
      </>
    ),
  },
  videoKey: "anxiety",
  recap: [
    "Le stress est une réaction normale face à une difficulté",
    "L'anxiété est différente\u00A0: elle peut persister même sans danger immédiat",
    "Le stress et l’anxiété agissent autant sur le corps que sur le mental",
    "Quelques habitudes simples peuvent déjà aider à retrouver un équilibre",
  ],
  faq: {
    title: "Comprendre le stress et l'anxiété",
    intro: (
      <p>
        Le stress est la réaction normale de ton organisme face à une situation qui te met sous pression, comme un examen ou un oral. Il s'apaise en général quand la situation passe. L'anxiété, c'est l'inquiétude face à ce qui pourrait arriver, souvent avec des tensions dans le corps. Elle est aussi normale : tout le monde en ressent de temps en temps. Elle peut devenir difficile à vivre quand elle est fréquente, intense ou durable, et qu'elle gêne ton quotidien (sommeil, études, relations). Comprendre et accepter ce qui se passe dans ton corps et dans ton esprit aide souvent à mieux gérer ces sensations et ces pensées sans avoir à lutter contre ce que tu ressens.
        Si c'est trop difficile, un professionnel de santé mentale peut t'accompagner.
      </p>
    ),
    items: [
      {
        question: "Un phénomène qui touche beaucoup d’étudiants",
        answer: (
          <>
            <p>Le stress et l'anxiété sont loin d'être des situations isolées.</p>
            <p>
              Selon l'enquête Conditions de vie des étudiants de l'OVE (2023), 45% des étudiants déclarent se sentir nerveux souvent ou en permanence au cours des quatre dernières semaines ayant précédé l'enquête. Dans l'enquête Bien-être et santé de l'OVE (2024), 28% présentent des symptômes d'anxiété modérés à sévères au cours des deux dernières semaines (échelle GAD-7, seuil ≥ 10).
            </p>
            <p>
              Chez les bénéficiaires de Santé Psy Étudiant (enquête Juin 2026), le stress et
              l’anxiété sont le 1er motif de consultation (23%).
            </p>
          </>
        ),
      },
      {
        question: "Mais alors, d’où ça peut venir ?",
        answer: (
          <>
            <h4>1. Le stress est une réaction normale de l’organisme </h4>{" "}
            <p>
              Face à un examen, un oral, un conflit ou une situation nouvelle, ton cerveau déclenche
              une alerte pour permettre à ton corps de réagir vite : ton rythme cardiaque
              s’accélère, tes muscles se tendent.
            </p>
            <p>
              Bien dosé, le stress peut devenir un allié : la veille d’un oral, il t’aide à rester
              concentré. Beaucoup de musiciens, comédiens, sportifs ressentent du trac avant une
              performance.{" "}
            </p>
            <p>
              Sarah Bernhardt aurait même dit à une jeune comédienne qui se vantait de ne pas avoir
              de trac : « Ne vous en faites pas, le trac, cela viendra avec le talent ».
            </p>
            <p>
              Ce qui se complique, c’est quand cette alerte ne s’éteint plus ou qu’elle ne se
              contrôle plus. Il peut alors s’agir d’anxiété.
            </p>
            <h4>2. Au-delà des études : des sources multiples de stress et d’anxiété</h4>
            <p>
              Le stress ou l’anxiété ne viennent pas uniquement des cours, mais peuvent être la
              conséquence de plusieurs situations qui s’accumulent.
            </p>
            <div>
              Dans notre enquête Santé Psy Étudiant (Juin 2026), les étudiants évoquent
              principalement dans leurs motifs de consultation :
              <ul>
                <li>la pression des études, des examens ou de l'orientation ;</li>
                <li>les difficultés relationnelles, amicales ou amoureuses ;</li>
                <li>les difficultés familiales ;</li>
                <li>le contexte général (actualité, avenir, climat) ;</li>
                <li>les difficultés financières ;</li>
                <li>l’isolement ou la solitude ; </li>
                <li>un deuil, une séparation ou un autre événement de vie difficile.</li>
              </ul>
            </div>
            <p>
              L’anxiété prend, elle aussi, différentes formes : on peut être anxieux de manière
              générale (peur de l’avenir, éco-anxieux, etc.), ou nourrir des anxiétés spécifiques,
              comme l’anxiété sociale (peur du jugement de l’autre, peur de passer devant un amphi
              plein de monde). D’autres peurs relèvent de la phobie (voir une araignée, prendre
              l’avion).
            </p>
            <p>
              Certaines habitudes jouent aussi : l'alcool, le cannabis ou des horaires de sommeil
              très irréguliers peuvent renforcer des situations d'anxiété, même cela peut donner
              l’impression d’aider à se détendre sur le moment.{" "}
            </p>
            <h4>3. Les pensées qui tournent en boucle.</h4>
            <p>
              Quand on est stressé ou anxieux, il est fréquent de ressasser sans cesse les mêmes
              pensées, sans réussir à les arrêter : « Et si j'échoue ? », « Et si je déçois mes
              proches ? », « Et si quelque chose se passe mal ? ».{" "}
            </p>
            <p>
              On a parfois l'impression de se préparer à l'avenir. En réalité, ces pensées
              entretiennent souvent l'inquiétude et rendent le retour au calme plus difficile.
            </p>
            <p>
              Si elles s'installent depuis plusieurs semaines, deviennent très envahissantes ou
              t'empêchent de suivre tes cours, de dormir ou de voir tes proches, parles-en à un
              professionnel de santé. Lui seul peut évaluer ta situation et, si besoin, poser un
              diagnostic.
            </p>
            <h4>4. L'anxiété peut révéler autre chose</h4>
            <p>
              L'anxiété peut aussi parfois être le signe d’autres types de troubles, comme la
              dépression.
            </p>
            <p>
              → Voir la page <FeelingLink slug="fatigue" />
            </p>
            <p>
              Si ton anxiété dure depuis plusieurs semaines, devient très intense, impacte ton
              quotidien, il est important d'en parler avec un professionnel : c’est lui qui pourra
              évaluer ta situation.
            </p>
            <h4>5. L'anxiété peut parfois cacher autre chose.</h4>
            <p>
              L'anxiété peut apparaître seule, mais elle accompagne aussi parfois une dépression, un
              trouble anxieux ou certaines maladies physiques. Si elle dure plusieurs semaines,
              devient très intense ou t'empêche de vivre normalement, il est important d'en parler
              avec un professionnel.
            </p>
          </>
        ),
      },
      {
        question: "Comment ça peut se manifester concrètement",
        answer: (
          <ul>
            <li>Je pense constamment au pire.</li>
            <li>Mon cerveau ne s'arrête jamais.</li>
            <li>J'ai une boule au ventre avant les cours ou les examens.</li>
            <li>Mon cœur bat très vite sans raison apparente.</li>
            <li>J'ai du mal à respirer ou j'ai l'impression de manquer d'air.</li>
            <li>Je dors mal parce que je réfléchis encore en me couchant.</li>
            <li>Je suis tendu presque toute la journée.</li>
            <li>J'ai du mal à me concentrer.</li>
            <li>J'évite certaines situations parce qu'elles m'angoissent.</li>
            <li>Je me sens constamment "sur le qui-vive".</li>
          </ul>
        ),
      },
    ],
  },
  tips: [
    {
      title: "Repérer ce qui déclenche ton stress",
      items: [
        {
          title: "L’idée",
          desc: (
            <>
              pendant quelques jours, essaie d'identifier les moments où ton stress augmente : avant
              un cours, un examen, un appel, une prise de parole…
            </>
          ),
        },
        {
          title: "Un premier pas",
          desc: (
            <>
              note simplement dans ton téléphone ce qui s'est passé juste avant que ton stress
              augmente.
            </>
          ),
        },
      ],
    },
    {
      title: "Ramener ton attention au présent",
      items: [
        {
          title: "L’idée",
          desc: <>quand les pensées tournent en boucle, tu peux essayer de prendre du recul : une pensée n'est pas un fait, et tu peux choisir ce que tu fais maintenant.</>,
        },
        {
          title: "Un premier pas",
          desc: (
            <>
              quand une pensée revient, essaie de te dire "là, je me dis que,..." (là, je me dis que je vais échouer"). Puis reviens à ce que tu es en train de faire : la page que tu lis, ce que tu vois, ce que tu entends. Si une idée ne te convient pas, tu peux en essayer une autre.
            </>
          ),
        },
      ],
    },
    {
      title: "Faire redescendre la tension",
      items: [
        {
          title: "L’idée",
          desc: (
            <>
              le stress se vit aussi dans le corps. Bouger, marcher ou ralentir sa respiration aide
              progressivement ton organisme à sortir de l'état d'alerte.
            </>
          ),
        },
        {
          title: "Un premier pas",
          desc: (
            <>
              fais une marche de dix minutes ou prends une minute pour respirer lentement en
              allongeant légèrement l'expiration.
            </>
          ),
        },
      ],
    },
    {
      title: "En parler",
      items: [
        {
          title: "L’idée",
          desc: (
            <>
              partager ce que tu ressens permet souvent de prendre du recul et d'éviter que le
              stress ne s'installe durablement.
            </>
          ),
        },
        {
          title: "Un premier pas",
          desc: (
            <>
              envoie un message à une personne de confiance ou prends rendez-vous avec un
              professionnel si tu sens que cela devient difficile à gérer seul.
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
            Il est normal de traverser des périodes de stress, surtout pendant les études. En
            revanche, si ton anxiété dure plusieurs semaines, t'empêche de dormir, de suivre tes
            cours, de passer tes examens ou de profiter de ton quotidien, il est important de ne pas
            rester seul.
          </b>
        </p>
        <p>
          Les étudiants qui ont bénéficié de Santé Psy Étudiant témoignent des effets positifs d'un
          accompagnement. Parmi eux, 14 % déclarent mieux gérer leur stress et leurs émotions au
          quotidien, et plus de la moitié estiment que le dispositif a beaucoup contribué à
          améliorer leur santé mentale.
        </p>
        <p>
          Demander de l'aide n'est pas un aveu de faiblesse. C'est une façon de prendre soin de toi
          avant que la situation ne devienne plus difficile.
        </p>
      </>
    ),
  },
};
