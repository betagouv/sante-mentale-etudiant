import ExternalLink from "@/components/link/ExternalLink";
import FullBleedSection from "@/components/wrapper/FullBleedSection";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Accessibilité",
  description:
    "Résultats de l'audit RGAA du site Santé Mentale Étudiant : taux de conformité, points à améliorer et moyen de nous signaler une difficulté d'accès.",
};

const nonConformities = [
  "[2.2] Le titre d'un cadre au moins (iframe) n'est pas pertinent.",
  "[4.2] La transcription textuelle ou l'audiodescription d'un contenu multimédia au moins n'est pas pertinente.",
  "[6.1] Un lien au moins a un intitulé qui n'est pas pertinent.",
  "[7.1] Une fonctionnalité JavaScript au moins n'est pas compatible avec les technologies d’assistance ou fait un usage inapproprié de propriétés ARIA.",
  "[7.3] Une fonctionnalité JavaScript au moins n'est pas contrôlable par le clavier ou tout autre dispositif de pointage.",
  "[7.5] Un message de statut au moins n'est pas restitué par les technologies d’assistance.",
  "[8.9] Une balise au moins est utilisée à des fins de présentation (par exemple des paragraphes vides et/ou des textes non structurés dans des balises de paragraphes).",
  "[9.1] La hiérarchie des titres d'une page au moins n'est pas pertinente.",
  "[9.2] La structure du document d'une page au moins n'est pas cohérente.",
  "[9.3] Une liste au moins n'est pas correctement structurée.",
  "[9.4] Une citation au moins n'est pas identifiée.",
  "[10.2] Une information insérée en CSS au moins n'est pas restituée par les technologies d’assistance.",
  "[10.3] Un contenu au moins ne se présente pas dans un ordre logique dans le code source.",
  "[10.11] Un contenu au moins ne peut être présenté sans défilement horizontal et/ou présente des pertes d’informations lorsque le texte est agrandi à 400%.",
  "[10.12] Un contenu au moins présente des pertes d’information et de lisibilité lorsque des propriétés d'espacement sont appliquées.",
  "[11.11] Un message d'erreur au moins ne présente pas de suggestions facilitant la correction des erreurs de saisie, ou présente des suggestions non pertinentes.",
  "[13.10] Une fonctionnalité au moins, utilisable au moyen d'un geste complexe, n'a pas d'alternative au moyen d'un geste simple.",
];

const testedSetups = [
  "Firefox 158 et NVDA 2026.2",
  "Firefox 158 et JAWS 2026",
  "Safari 27 et VoiceOver (macOS 26.7.1)",
  "Safari 27 et VoiceOver (iOS 27)",
  "Chrome 156 et TalkBack (Android 17)",
];

const auditedPages = [
  { label: "Page d'accueil", href: "/" },
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Données personnelles (Politique de confidentialité)", href: "/donnees-personnelles" },
  { label: "Accessibilité", href: "/accessibilite" },
  { label: "Plan du site", href: "/plan-du-site" },
  { label: "Je ressens de l'anxiété", href: "/je-ressens/anxiety" },
  { label: "Qui sommes-nous", href: "/qui-sommes-nous" },
  { label: "Aider un proche", href: "/aider-un-proche" },
  { label: "S'informer", href: "/s-informer" },
  { label: "Trouver du soutien", href: "/trouver-du-soutien" },
  { label: "Orienteur", href: "/orienteur" },
  { label: "Dispositif 3114", href: "/dispositif/3114" },
];

export default async function AccessibilityDeclaration() {
  return (
    <FullBleedSection>
      <section className="static-page">
        <h1>Déclaration d&apos;accessibilité</h1>

        <p>
          Le Ministère de l&apos;Enseignement Supérieur, de la Recherche et de l&apos;Espace
          s&apos;engage à rendre ses sites internet accessibles conformément à l&apos;article 47 de
          la loi n° 2005-102 du 11 février 2005.
        </p>
        <p>
          À cette fin, un audit d&apos;accessibilité selon le référentiel général d&apos;amélioration
          de l&apos;accessibilité (RGAA) a été réalisé. Les travaux de mise en conformité sont menés
          au fur et à mesure afin d&apos;améliorer progressivement l&apos;accessibilité du site.
        </p>
        <p>
          La présente déclaration d&apos;accessibilité s&apos;applique au site « Santé Mentale
          Étudiant ».
        </p>

        <h2>État de conformité</h2>
        <p>
          Le site « Santé Mentale Étudiant » (https://santementale.etudiant.gouv.fr) est
          partiellement conforme avec le référentiel général d&apos;amélioration de
          l&apos;accessibilité,{" "}
          <ExternalLink href="https://www.numerique.gouv.fr/publications/rgaa-accessibilite/">
            RGAA version 4.1
          </ExternalLink>
          , en raison des non-conformités énumérées dans la section « Résultats des tests ».
        </p>

        <h2>Résultats des tests</h2>
        <p>
          L&apos;audit de conformité réalisé par la société Access42 révèle que le site est conforme
          à 74,63% au RGAA version 4.1.
        </p>

        <h3>Contenus inaccessibles</h3>
        <p>Les contenus listés ci-dessous ne sont pas accessibles pour les raisons suivantes.</p>
        <h4>Non-conformités</h4>
        <ul>
          {nonConformities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h4>Dérogations pour charge disproportionnée</h4>
        <p>Aucune dérogation identifiée.</p>

        <h4>Contenus non soumis à l&apos;obligation d&apos;accessibilité</h4>
        <p>Exemples :</p>
        <ul>
          <li>Santé Psy Jeunes</li>
          <li>Haute Autorité de Santé</li>
        </ul>

        <h2>Établissement de cette déclaration d&apos;accessibilité</h2>
        <p>Cette déclaration a été établie le 23 octobre 2026.</p>

        <h3>Technologies utilisées pour la réalisation du site</h3>
        <ul>
          <li>HTML5</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>

        <h3>
          Agents utilisateurs, technologies d&apos;assistance et outils utilisés pour vérifier
          l&apos;accessibilité
        </h3>
        <p>
          Les tests des pages web ont été effectués avec les combinaisons de navigateurs web et
          lecteurs d&apos;écran suivants :
        </p>
        <ul>
          {testedSetups.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>
          La vérification de l&apos;accessibilité est le résultat de tests manuels, assistés par des
          outils (feuilles CSS dédiées, extensions HeadingsMaps et WebDeveloper Toolbar, Color
          Contrast Analyser).
        </p>

        <h3>Pages du site ayant fait l&apos;objet de la vérification de conformité</h3>
        <ul>
          {auditedPages.map((page) => (
            <li key={page.href}>
              <Link href={page.href}>{page.label}</Link>
            </li>
          ))}
        </ul>

        <h2>Retour d&apos;information et contact</h2>
        <p>
          Il est important de rappeler qu&apos;en vertu de l&apos;article 11 de la loi de février
          2005 :
        </p>
        <p>
          « la personne handicapée a droit à la compensation des conséquences de son handicap, quels
          que soient l&apos;origine et la nature de sa déficience, son âge ou son mode de vie. »
        </p>
        <p>
          Le Ministère de l&apos;Enseignement Supérieur, de la Recherche et de l&apos;Espace
          s&apos;engage à prendre les moyens nécessaires afin de donner accès, dans un délai
          raisonnable, aux informations et fonctionnalités recherchées par la personne handicapée,
          que le contenu fasse l&apos;objet d&apos;une dérogation ou non.
        </p>
        <p>
          Le Ministère de l'Enseignement Supérieur, de la Recherche et de l'Espace invite les personnes
          qui rencontreraient des difficultés à le contacter [
          <a href="mailto:santementale.etudiant@enseignementsup.gouv.fr">
            santementale.etudiant@enseignementsup.gouv.fr
          </a>
          ] afin qu&apos;une assistance puisse être apportée (alternative accessible, information
          et contenu donnés sous une autre forme).
        </p>

        <h2>Voies de recours</h2>
        <p>
          Si vous constatez un défaut d&apos;accessibilité vous empêchant d&apos;accéder à un
          contenu ou une fonctionnalité du site, que vous nous le signalez et que vous ne parvenez
          pas à obtenir une réponse de notre part, vous êtes en droit de faire parvenir vos
          doléances ou une demande de saisine au Défenseur des droits.
        </p>
        <p>Plusieurs moyens sont à votre disposition :</p>
        <ul>
          <li>
            un{" "}
            <ExternalLink
              href="https://formulaire.defenseurdesdroits.fr/formulaire_saisine/"
            >
              formulaire de contact
            </ExternalLink>{" "}
            ;
          </li>
          <li>un numéro de téléphone : 09 69 39 00 00 ;</li>
          <li>
            une adresse postale (courrier gratuit, sans affranchissement) : Le Défenseur des droits
            - Libre réponse 71120 - 75342 Paris CEDEX 07.
          </li>
        </ul>
      </section>
    </FullBleedSection>
  );
}
