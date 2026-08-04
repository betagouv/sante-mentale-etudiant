import Link from "next/link";
import { Feeling } from "./types";

export const FEELING_ANXIETY: Feeling = {
  slug: "anxiety",
  name: "Anxiété",
  catch: {
    description: "Je ressens de l'épuisement",
    sentence:
      "Tu dors, mais tu te réveilles épuisé. Tu relis trois fois la même page sans rien retenir. Tout te demande un effort, même répondre à un message.<br>La fatigue ou l’épuisement qui durent n'est pas un manque de volonté. C'est un signal, et il y a des choses à faire.",
  },
  video: {
    duration: 5,
    guest: {
      name: "Jérôme Lacinga",
      role: "Psychologue clinicien",
    },
  },
  recap: [
    "Un stress qui dure use le corps autant que la tête.",
    "Une fatigue qui ne passe pas malgré le repos mérite un avis médical.",
    "Des leviers simples existent, à commencer par la régularité de tes horaires.",
    "Si ça ne passe pas, n’hésite pas à en parler à un médecin, un psy ou à un proche",
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
              Et l'épuisement est loin d'être un cas isolé : chez les étudiants qui consultent un
              psychologue via Santé Psy Étudiant, l'épuisement mental et le sentiment d'être à bout
              constituent le deuxième motif de consultation (18 % des réponses), et les troubles du
              sommeil sont un motif non négligeable de consultation (8 %) - enquête auprès des
              bénéficiaires de Santé Psy Étudiant, juin 2026, 1 416 répondants.
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
                href="https://institut-sommeil-vigilance.org/le-sommeil-des-adolescents/"
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
              juste avant de se coucher. Chacun mis bout à bout retarde l'endormissement. → *Voir la
              page "J'ai un rapport compliqué à certaines substances".
            </p>
            <h5>3. La fatigue de l'anxiété.</h5>
            <p>
              Rester en alerte consomme énormément d'énergie. Les pensées qui tournent la nuit, la
              tension musculaire, l'anticipation : tout cela fatigue, même sans effort physique. →
              *Voir la page "Je me sens stressé, anxieux".
            </p>
            <h5>4. Une fatigue qui cache autre chose.</h5>
            <p>
              Quand la fatigue s'accompagne d'une perte d'envie, d'un moral bas, d'un sentiment de
              vide qui dure plus de deux semaines, ce n'est plus seulement de la fatigue. Un tiers
              des étudiant·es présentent les signes d’une détresse psychologique et la moitié a vécu
              une période d’au moins deux semaines consécutives pendant laquelle ils se sont
              senti·es tristes, déprimé·es, sans espoir, au cours des 12 derniers mois (
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
        question: "Comment ça se manifeste concrètement",
        answer: (
          <ul>
            <li>Je me réveille déjà fatigué, même après une longue nuit.</li>
            <li>Je m'endors en cours l'après-midi, mais impossible de dormir le soir.</li>
            <li>Je relis le même paragraphe sans le comprendre.</li>
            <li>Je mets deux heures à faire ce qui m'en prenait une.</li>
            <li>
              Je repousse des tâches simples pendant des jours : un mail, un rendez-vous, une
              inscription.
            </li>
            <li>Je carbure au café la semaine, je m'écroule le week-end.</li>
            <li>Je m'énerve pour rien, ou je pleure pour rien.</li>
            <li>Je n'ai plus envie de voir personne, même les gens que j'aime.</li>
            <li>Je mange n'importe quoi, ou je saute des repas sans y penser.</li>
            <li>Je me dis "je suis nul" alors que je suis surtout épuisé.</li>
          </ul>
        ),
      },
    ],
  },
  tips: [
    {
      title: "S’observer pour connaître ses besoins",
      items: [
        {
          title: "L’action",
          desc: (
            <>
              essaye d’estimer quel dormeur tu es, quels sont tes besoins. Pour déterminer ton
              chronotype, la période idéale est celle des vacances : après 8 à 10 jours de repos, il
              est possible d’évaluer son besoin réel de sommeil en observant la durée du sommeil, la
              régularité des horaires et la satisfaction ressentie au réveil (source INSV)
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
      title: "Recale ton horloge interne",
      items: [
        {
          title: "L’action",
          desc: (
            <>
              Lève-toi à peu près à la même heure tous les jours, y compris le week-end, avec une
              heure d'écart maximum et prends la lumière du matin
            </>
          ),
        },
        {
          title: "Commence petit",
          desc: (
            <>
              descends un arrêt de bus plus tôt, prends ton café près de la fenêtre, révise dehors.
              Même par temps gris.
            </>
          ),
        },
      ],
    },
    {
      title: "Evite les écrans",
      items: [
        {
          title: "L’action",
          desc: (
            <>
              Coupe les écrans dans la demi-heure qui précède le coucher, ou au moins arrête de
              réviser sur écran au lit. La lumière des écrans repousse le signal du sommeil. S'y
              ajoute le contenu lui-même : le scroll, les notifications et les messages maintiennent
              le cerveau en éveil au moment où il devrait ralentir.
            </>
          ),
        },
        {
          title: "Commence petit",
          desc: (
            <>
              charge ton téléphone loin du lit, hors de portée de main, passe l'appareil en mode
              sombre et baisse la luminosité au minimum.
            </>
          ),
        },
      ],
    },
    {
      title: "Pratique une activité physique",
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
              Pas besoin de salle de sport ni d'abonnement. Marcher jusqu'à la fac, prendre les
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
};

export const feelings = [FEELING_ANXIETY];
