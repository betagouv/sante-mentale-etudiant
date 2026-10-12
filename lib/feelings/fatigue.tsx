import Link from "next/link";
import { Feeling } from "./types";
import { FeelingLink } from ".";
import { transcriptionFatigue } from "@/data/videos/transcriptions/feelings/fatigue";

export const FEELING_FATIGUE: Feeling = {
  slug: "fatigue",
  name: "Épuisement",
  metadata: {
    title: "Je ressens de l’épuisement",
    description:
      "Fatigue constante, manque d'énergie, sentiment d'être à bout : comprenez ce qui se passe et découvrez des ressources pour trouver du soutien.",
  },
  catch: {
    description: "Je ressens de la fatigue",
    sentence: (
      <>
        <p>
          Tu dors, mais tu te réveilles épuisé. Tu relis trois fois la même page sans rien retenir.
          Tout te demande un effort, même répondre à un message.
        </p>
        <p>
          La fatigue qui dure n'est pas un manque de volonté. C'est un signal, et il y a des choses à faire.
        </p>
      </>
    ),
  },
  video: {
    key: "fatigue",
    videoUrl: "https://tube.numerique.gouv.fr/videos/embed/62xj5E1dsFjSurrmLAuRkG",
    previewUrl: "/videos/preview/feelings/fatigue.mp4",
    posterUrl: "/images/vignettes/feelings/fatigue.jpg",
    duration: 5,
    guest: {
      name: "Jérôme Lacinga",
      role: "Psychologue clinicien",
    },
    transcription: transcriptionFatigue,
  },
  recap: [
    "La fatigue ne se règle pas toujours en dormant plus.",
    "Un stress qui dure use le corps autant que la tête.",
    "Des leviers simples existent, à commencer par la régularité de tes horaires.",
    "Si ça ne passe pas, n'hésite pas à en parler à un médecin, un psy ou à un proche.",
  ],
  faq: {
    title: "Comprendre l'épuisement",
    intro: (
      <>
        La fatigue devient anormale quand elle persiste malgré le repos (
        <Link
          href="https://www.ameli.fr/assure/sante/themes/asthenie-fatigue/definition-symptomes-causes"
          target="_blank"
          rel="noopener noreferrer"
        >
          Assurance Maladie
        </Link>
        ). Elle n'a pas une cause unique : le manque de sommeil, la charge des études, l'anxiété, un
        état dépressif ou un problème physique peuvent tous produire la même sensation de vide.
        Comprendre laquelle te concerne change ce qu'il faut faire.
      </>
    ),
    items: [
      {
        question: "Un phénomène qui touche beaucoup d’étudiants",
        answer: (
          <>
            <p>
              Les 18-29 ans dorment en moyenne 7h48 par nuit, plus que le reste de la population (
              <Link
                href="https://www.santepubliquefrance.fr/sommeil/rapportsynthese/sommeil-temps-moyen-sur-24-heures-et-plainte-dinsomnie-barometre-de-sante-publique-france-resultats"
                target="_blank"
                rel="noopener noreferrer"
              >
                Santé publique France, Baromètre 2024
              </Link>
              ).
            </p>
            <p>
              Sauf que la moyenne cache tout le reste : 18,9 % des 18-29 ans dorment 6 heures ou
              moins, et 29 % déclarent des difficultés à s'endormir ou des réveils nocturnes (
              <Link
                href="https://www.santepubliquefrance.fr/sommeil/rapportsynthese/sommeil-temps-moyen-sur-24-heures-et-plainte-dinsomnie-barometre-de-sante-publique-france-resultats"
                target="_blank"
                rel="noopener noreferrer"
              >
                Santé publique France, Baromètre 2024
              </Link>
              ). Chez les étudiants, 21 % jugent leur sommeil mauvais ou très mauvais, et un tiers
              déclarent avoir rencontré des difficultés dans leurs études à cause de leur sommeil (
              <Link
                href="https://www.ove-national.education.fr/wp-content/uploads/2024/05/OVE-Reperes-Bien-etre-Sante-2024.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                OVE, enquête Bien-être et santé 2024
              </Link>
              ).
            </p>
            <p>
              Chez les étudiants qui consultent un psychologue via Santé Psy Étudiant, l'épuisement
              mental et le sentiment d'être à bout constituent le deuxième motif de consultation
              (18 % des réponses), et les troubles du sommeil sont un motif non négligeable de
              consultation (8 % - enquête auprès des bénéficiaires de Santé Psy Étudiant, juin 2026,
              1 416 répondants).
            </p>
          </>
        ),
      },
      {
        question: "Mais alors, d’où ça peut venir ?",
        answer: (
          <>
            <h5>1. Ton horloge interne tourne en décalé.</h5>{" "}
            <p>
              Nous avons tous une horloge interne. Le soir, elle déclenche la mélatonine, l'hormone
              qui donne le signal du sommeil. Jusqu'à une vingtaine d'années, ce signal arrive plus
              tard dans la soirée (
              <Link
                href="https://institut-sommeil-vigilance.org/wp-content/uploads/2020/02/INSV-Carnet-11-Sommeil-des-jeunes-15-25-ans.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                INSV
              </Link>
              ). Sauf que les cours, eux, commencent tôt. Les nuits de semaine sont écourtées, le
              week-end sert de rattrapage, et ce va-et-vient fatigue autant qu'une nuit trop courte.
            </p>{" "}
            <h5>2. Ce qu'il y a autour.</h5>
            <p>
              Le sommeil se dérègle aussi par ce qui l'entoure : les écrans tard le soir, la
              pression des études et le stress des partiels, une chambre mal isolée où le bruit
              fragmente les cycles de récupération, le café, la cigarette, et même le sport pratiqué
              juste avant de se coucher. Chacun mis bout à bout retarde l'endormissement. → Voir la
              page <FeelingLink slug="drugs" />.
            </p>
            <h5>3. La fatigue de l'anxiété.</h5>
            <p>
              Rester en alerte consomme énormément d'énergie. Les pensées qui tournent la nuit, la
              tension musculaire, l'anticipation : tout cela fatigue, même sans effort physique. →
              Voir la page <FeelingLink slug="anxiety" />.
            </p>
            <h5>4. Une fatigue qui cache autre chose.</h5>
            <p>
              Quand la fatigue s'accompagne d'une perte d'envie, d'un moral bas, d'un sentiment de
              vide qui dure plus de deux semaines, ce n'est plus seulement de la fatigue. Un tiers
              des étudiants présentent les signes d’une détresse psychologique et la moitié a vécu
              une période d’au moins deux semaines consécutives pendant laquelle ils se sont
              sentis tristes, déprimés, sans espoir, au cours des 12 derniers mois (
              <Link
                href="https://www.ove-national.education.fr/wp-content/uploads/2024/05/OVE-Reperes-Bien-etre-Sante-2024.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                OVE 2024
              </Link>
              ). Cette fatigue peut se soigner, il faut en parler.
            </p>
            <h5>5. Une cause physique.</h5>
            <p>
              La fatigue peut aussi venir du corps : anémie, trouble de la thyroïde, apnées du
              sommeil… Un médecin peut le vérifier avec un examen et, si besoin, une prise de sang ({" "}
              <Link
                href="https://www.ameli.fr/assure/sante/themes/asthenie-fatigue/consultation-medicale-traitement"
                target="_blank"
                rel="noopener noreferrer"
              >
                Assurance Maladie
              </Link>
              ). C'est une étape à ne pas sauter.
            </p>
          </>
        ),
      },
      {
        question: "Comment ça s'entretient",
        answer: (
          <>
            <p>
              L'épuisement fonctionne en boucle. Tu es fatigué, donc tu es moins efficace.
              Tu es moins efficace, donc tu travailles plus tard. Tu travailles plus tard, donc tu dors moins.
              Et la fatigue augmente.
              La fatigue peut aussi toucher ce qui te permettrait d'aller mieux : tu annules les sorties, tu vois moins de monde, tu bouges moins. L'isolement peut s'installer.
            </p>
            <p>→ Voir la page <FeelingLink slug="solitude" /></p>
          </>
        ),
      },
      {
        question: "Comment ça se manifeste concrètement",
        answer: (
          <div>
            <h5>Cognitif</h5>
            <ul>
              <li>Je peux relire le même paragraphe sans le comprendre.</li>
              <li>Je peux mettre deux heures à faire ce qui m'en prenait une.</li>
              <li>Je peux ne pas réfléchir comme d'habitude, perdre en capacité de raisonnement logique.</li>
            </ul>

            <h5>Physique</h5>
            <ul>
              <li>Je peux me réveiller déjà fatigué, même après une longue nuit.</li>
              <li>Je peux m'endormir en cours l'après-midi, mais impossible de dormir le soir.</li>
            </ul>

            <h5>Émotionnel</h5>
            <ul>
              <li>Je peux m'énerver pour rien, ou pleurer pour rien.</li>
              <li>Je peux me dévaloriser.</li>
            </ul>

            <h5>Comportemental</h5>
            <ul>
              <li>
                Je peux repousser des tâches simples pendant des jours : un mail, un rendez-vous, une
                inscription.
              </li>
              <li>Je peux carburer au café la semaine, je m'écroule le week-end.</li>
              <li>Je peux avoir moins envie de voir les gens.</li>
              <li>Je peux sauter des repas ou manger n'importe quoi sans y penser.</li>
            </ul>
          </div>
        ),
      },
    ],
  },
  tips: [
    {
      title: "Objectiver son temps de sommeil, comprendre quel dormeur on est, viser la qualité",
      items: [
        {
          title: "L’action",
          desc: (
            <>
              <p>Estimer quel dormeur tu es, quels sont tes besoins.</p>
              <p>
                Le recueil, via un agenda du sommeil, permet de savoir comment on dort, d'avoir un regard objectif sur son propre sommeil — une pratique dont l'usage en évaluation comportementale du sommeil est ancien et bien établi (Bootzin & Engle-Friedman, 1981). Attention à ne pas vouloir trop bien faire et le remplir la nuit, l'idée est de le remplir le matin au réveil, même si cela est approximatif. Cela peut aussi permettre de préparer une consultation à laquelle on amène l'agenda.{" "}
                <Link
                  href="https://www.reseau-morphee.fr/wp-content/uploads/2009/01/agenda_2p.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agenda du sommeil (Réseau Morphée)
                </Link>
              </p>
              <p>
                La qualité du sommeil ne tient pas nécessairement à la quantité : ne pas chercher à récupérer absolument, essayer de respecter son rythme, ne pas traîner au lit, ne pas rester trop longtemps dans le lit si on ne dort pas — un principe qui trouve son origine dans la thérapie de contrôle du stimulus, l'une des interventions comportementales les plus anciennes et les mieux validées contre les difficultés de sommeil (Bootzin, 1972).
              </p>
            </>
          ),
        },
        {
          title: "Commence petit",
          desc: (
            <>
              remplis{" "}
              <Link
                href="https://institut-sommeil-vigilance.org/wp-content/uploads/2020/02/ASTEN_depliant-sommeil_INSV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                ton agenda du sommeil
              </Link>
            </>
          ),
        },
      ],
    },
    {
      title: "Recaler son horloge interne",
      items: [
        {
          title: "L’action",
          desc: (
            <>
              Se lever à peu près à la même heure tous les jours même le lendemain d'une mauvaise
              nuit, y compris le week-end, avec une heure d'écart maximum/semaine, essayer d'éviter
              les siestes ou pas trop longues, prendre la lumière du matin.
            </>
          ),
        },
        {
          title: "Commence petit",
          desc: (
            <>
              descends un arrêt de bus plus tôt, prends ton café près de la fenêtre, révise dehors.
              Même par temps gris. Planifier des activités le matin peut aider à respecter l'heure
              de réveil.
            </>
          ),
        },
      ],
    },
    {
      title: "Attendre d'être somnolent pour aller au lit, et sortir du lit si on ne s'endort pas",
      items: [
        {
          title: "L’action",
          desc: (
            <>
              Guetter un signe de somnolence pour aller au lit. Cela diminue les chances de rester
              éveillé après être allé au lit (signes de somnolence : pensées décousues ou confuses,
              bâillements, difficultés à se concentrer ou à garder les yeux ouverts, agitation ou
              irritabilité — signes reconnus par les autorités de santé au travail comme
              indicateurs que le cerveau approche de l'endormissement).
            </>
          ),
        },
        {
          title: "L’action",
          desc: (
            <>
              Si on ne s'est pas endormi après avoir passé plus de 15 minutes au lit, sortir du lit
              et aller dans une autre pièce jusqu'à ce que vous vous sentiez somnolent. Répéter cela
              autant de fois que nécessaire pendant la nuit. Privilégier des activités relaxantes
              (lecture, musique, mots croisés) plutôt que des activités stimulantes.
            </>
          ),
        },
        {
          title: "Attention",
          desc: (
            <>
              Cela augmente certes la probabilité d'être fatigué le lendemain, mais aide à se
              recaler. (Bootzin, 1972)
            </>
          ),
        },
      ],
    },
    {
      title: "Pratiquer une activité physique",
      items: [
        {
          title: "L’action",
          desc: (
            <>
              une activité physique régulière, sans viser la performance. Bouger dans la journée
              améliore la qualité du sommeil et agit sur le moral.
            </>
          ),
        },
        {
          title: "Commence petit",
          desc: (
            <>
              pas besoin de salle de sport ni d'abonnement. Marcher jusqu'à la fac, prendre les
              escaliers, faire un trajet à vélo : ça compte. Et si le seul créneau possible est tard
              le soir, garde-le quand même. Bouger tard reste préférable à ne pas bouger du tout (
              <Link
                href="https://reseau-morphee.fr/sommeil-et-activite-physique"
                target="_blank"
                rel="noopener noreferrer"
              >
                Réseau Morphée
              </Link>
              ), et un exercice modéré une heure avant le coucher n'altère que légèrement le sommeil
              (
              <Link
                href="https://www.inserm.fr/actualite/un-exercice-physique-modere-avant-la-nuit-nempeche-pas-de-bien-dormir/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Inserm
              </Link>
              )
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
          <b>Il est normal d'être fatigué par périodes.</b>
        </p>
        <p>
          Mais si la fatigue dure, si elle touche tes études, tes relations ou ton moral, tu n'as
          pas à rester seul avec ça. Un tiers des étudiant·es présentent des signes de détresse
          psychologique, et parmi eux, la moitié n'a consulté aucun professionnel (OVE 2024).
        </p>
        <p>Demander de l'aide, c'est prendre soin de soi, c'est permis, et c'est même une bonne idée.</p>
        <p>
          <b>Les signaux qui doivent t'amener à consulter</b> (critères issus de l'Assurance
          Maladie, "Asthénie : que faire et quand consulter ?") :
        </p>
        <ul>
          <li>La fatigue persiste malgré le repos, ou dure depuis plus de quatre semaines.</li>
          <li>
            Elle s'accompagne d'autres symptômes physiques : fièvre, douleurs, perte d'appétit,
            essoufflement.
          </li>
          <li>Tu es triste, découragé ou sans envie de rien depuis plus de deux semaines.</li>
          <li>Elle t'empêche de suivre tes cours, de travailler, de voir des gens.</li>
          <li>
            Tu as des idées noires. → Dans ce cas, ne reste pas seul : voir la
            page <FeelingLink slug="suicidal-thought" />, et le 3114 est joignable 24h/24, gratuitement.
          </li>
        </ul>
        <p>L'épuisement est un signal. L'écouter, c'est déjà agir.</p>
      </>
    ),
  },
};
