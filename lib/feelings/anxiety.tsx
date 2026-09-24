import { Feeling } from "./types";

export const FEELING_ANXIETY: Feeling = {
  slug: "anxiety",
  name: "Anxiété",
  catch: {
    description: "Je ressens du stress, de l'anxiété",
    sentence: (
      <>
        <p>
          Tu as l'impression que ton cerveau ne s'arrête jamais. Tu penses à tes cours, à ton
          avenir, à ton budget, à tout en même temps. Tu dors mal, ton cœur s'emballe parfois sans
          raison et tu te sens tendu presque toute la journée.Le stress fait partie de la vie.
        </p>
        <p>
          Mais lorsqu'il dure ou prend toute la place, il mérite d'être écouté. Il existe des
          solutions pour retrouver un peu d'apaisement.
        </p>
      </>
    ),
  },
  video: {
    key: "anxiety",
    videoUrl: "https://tube.numerique.gouv.fr/videos/embed/9qy5gDdpGJw2AMTLcHi7YG",
    previewUrl: "/videos/tmp/preview.mp4",
    posterUrl: "/images/tmp/tmp_homepage_video.jpg",
    duration: 5,
    guest: {
      name: "Jérôme Lacinga",
      role: "Psychologue clinicien",
    },
  },
  recap: [
    "Le stress est une réaction normale face à une difficulté",
    "L'anxiété est différente: elle peut persister même sans danger immédiat",
    "Le stress agit autant sur le corps que sur le mental",
    "Quelques habitudes simples peuvent déjà aider à retrouver un équilibre",
  ],
  faq: {
    title: "Comprendre le stress et l'anxiété",
    intro: (
      <>
        Le stress est une réaction normale de notre organisme face à une difficulté ou à une menace.
        Il devient plus difficile à vivre lorsqu'il dure dans le temps ou qu'il apparaît sans raison
        apparente. Comprendre ce qui se passe dans ton corps permet souvent de moins en avoir peur.
      </>
    ),
    items: [
      {
        question: "Un phénomène qui touche beaucoup d’étudiants",
        answer: (
          <>
            <p>Le stress et l'anxiété sont loin d'être des situations isolées.</p>
            <p>
              Selon l'enquête Bien-être et santé de l'OVE (2024), un tiers des étudiants présentent
              des signes de détresse psychologique. Les difficultés liées au stress, à l'anxiété et
              à la charge mentale sont parmi les raisons les plus fréquentes qui conduisent à
              consulter.
            </p>
            <p>
              Les données de Santé Psy Étudiant vont dans le même sens : chez les étudiants qui
              consultent un psychologue via Santé Psy Étudiant, l'anxiété, le stress et les
              angoisses constituent le premier motif de consultation (23%) - enquête auprès des
              bénéficiaires de Santé Psy Étudiant, juin 2026, 1 416 répondants.
            </p>
          </>
        ),
      },
      {
        question: "Mais alors, d’où ça peut venir ?",
        answer: (
          <>
            <h5>1. Ton cerveau cherche à te protéger.</h5>{" "}
            <p>
              Le stress est une réaction normale de ton organisme. Face à un examen, un oral, un
              conflit ou une situation nouvelle, ton cerveau déclenche une alerte. Il libère des
              hormones qui préparent ton corps à réagir rapidement.
            </p>
            <p>Cette réaction est utile… tant qu'elle reste ponctuelle.</p>
            <h5>2. Les études... mais pas seulement.</h5>
            <p>Le stress ne vient pas uniquement des cours.</p>
            <p>
              Dans notre enquête Santé Psy Étudiant, les étudiants évoquent principalement :
              <ul>
                <li>la pression des études, des examens ou de l'orientation ;</li>
                <li>les difficultés relationnelles, amicales ou amoureuses ;</li>
                <li>les difficultés familiales ;</li>
                <li>le contexte général (actualité, avenir, climat) ;</li>
                <li>un deuil, une séparation ou un autre événement de vie difficile.</li>
              </ul>
            </p>
            <p>
              Le plus souvent, ce n'est pas une seule difficulté qui explique ton mal-être, mais
              plusieurs qui s'accumulent.
            </p>
            <h5>3. Les pensées qui tournent en boucle.</h5>
            <p>Quand on est anxieux, le cerveau essaie de prévoir tous les scénarios possibles.</p>
            <ul>
              <li>"Et si j'échoue ?"</li>
              <li>"Et si je déçois mes proches ?"</li>
              <li>"Et si quelque chose se passe mal?"</li>
            </ul>
            <p>
              Ces pensées donnent parfois l'impression de préparer l'avenir. En réalité, elles
              entretiennent souvent l'inquiétude et rendent plus difficile le retour au calme.
            </p>
            <h5>4. Le corps reste en état d'alerte.</h5>
            <p>
              Lorsque le stress dure, ton organisme continue à fonctionner comme s'il devait faire
              face à un danger.
            </p>
            <p>
              Le cœur bat plus vite, les muscles restent contractés, la respiration devient plus
              courte, le sommeil est moins réparateur et la fatigue finit par s'installer. *Voir la
              page "Je suis épuisé / fatigué".
            </p>
            <h5>5. L'anxiété peut parfois cacher autre chose.</h5>
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
        question: "Comment ça se manifeste concrètement",
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
          title: "L’action",
          desc: (
            <>
              pendant quelques jours, essaie d'identifier les moments où ton stress augmente : avant
              un cours, un examen, un appel, une prise de parole…
            </>
          ),
        },
        {
          title: "Commence petit",
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
          title: "L’action",
          desc: <>quand les pensées tournent en boucle, essaie de revenir à ce qui t'entoure.</>,
        },
        {
          title: "Commence petit",
          desc: (
            <>
              observe cinq choses que tu vois, quatre que tu peux toucher, trois que tu entends,
              deux que tu peux sentir et une que tu peux goûter.
            </>
          ),
        },
      ],
    },
    {
      title: "Faire redescendre la tension",
      items: [
        {
          title: "L’action",
          desc: (
            <>
              le stress se vit aussi dans le corps. Bouger, marcher ou ralentir sa respiration aide
              progressivement ton organisme à sortir de l'état d'alerte.
            </>
          ),
        },
        {
          title: "Commence petit",
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
          title: "L’action",
          desc: (
            <>
              partager ce que tu ressens permet souvent de prendre du recul et d'éviter que le
              stress ne s'installe durablement.
            </>
          ),
        },
        {
          title: "Commence petit",
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
            Il est normal d'être fatigué par périodes. Mais si la fatigue dure, si elle touche tes
            études, tes relations ou ton moral, tu n'as pas à rester seul avec ça.
          </b>
        </p>
        <p>
          Un tiers des étudiants présentent des signes de détresse psychologique, et parmi eux, la
          moitié n'a consulté aucun professionnel (OVE 2024). Demander de l'aide n'est pas un aveu
          de faiblesse.
        </p>
      </>
    ),
  },
};
