import ExternalLink from "@/components/link/ExternalLink";
import FullBleedSection from "@/components/wrapper/FullBleedSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibilité",
  description:
    "Résultats de l'audit RGAA du site Santé Mentale Étudiant : taux de conformité, points à améliorer et moyen de nous signaler une difficulté d'accès.",
};

export default async function AccessibilityDeclaration() {
  return (
    <FullBleedSection>
      <section className="static-page">
        <h1>Déclaration de non-conformité pour absence d&apos;audit</h1>

        <h2>Déclaration d&apos;accessibilité</h2>
        <p>
          Le Ministère de l&apos;Enseignement supérieur, de la Recherche et de l&apos;Espace
          s&apos;engage à rendre ses sites internet accessibles conformément à l&apos;article 47 de
          la loi n° 2005-102 du 11 février 2005.
        </p>
        <p>
          À cette fin, un audit d&apos;accessibilité selon le référentiel général d&apos;amélioration
          de l&apos;accessibilité (RGAA) est en cours. Les travaux de mise en conformité seront
          menés au fur et à mesure afin d&apos;améliorer progressivement l&apos;accessibilité du
          site.
        </p>
        <p>
          Les documents PDF et les autres contenus accessibles via des liens vers des sites tiers
          (notamment les brochures hébergées sur{" "}
          <ExternalLink href="http://santepsyjeunes.fr/">santepsyjeunes.fr</ExternalLink>) sont des
          contenus tiers, non produits ni financés par Santé Mentale Étudiant.
        </p>
        <p>
          La présente déclaration d&apos;accessibilité s&apos;applique au site Santé Mentale
          Étudiant.
        </p>

        <h2>État de conformité</h2>
        <p>
          Le site Santé Mentale Étudiant (santementale.etudiant.gouv.fr) est non
          conforme avec le référentiel général d&apos;amélioration de
          l&apos;accessibilité,{" "}
          <ExternalLink href="https://www.numerique.gouv.fr/publications/rgaa-accessibilite/">
            RGAA version 4.1
          </ExternalLink>
          , en raison de l&apos;absence d&apos;audit.
        </p>
        <p>Un audit est en cours de réalisation.</p>

        <h2>Établissement de cette déclaration d&apos;accessibilité</h2>
        <p>Cette déclaration a été établie le 15/10/2026.</p>

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
          Santé Mentale Étudiant s&apos;engage à prendre les moyens nécessaires afin de donner
          accès, dans un délai raisonnable, aux informations et fonctionnalités recherchées par la
          personne handicapée, que le contenu fasse l&apos;objet d&apos;une dérogation ou non.
        </p>
        <p>
          Santé Mentale Étudiant invite les personnes qui rencontreraient des difficultés à la
          contacter [
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
          <li>
            la{" "}
            <ExternalLink
              href="http://www.defenseurdesdroits.fr/office/"
            >
              liste du ou des délégués de votre région
            </ExternalLink>{" "}
            avec leurs informations de contact direct ;
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
