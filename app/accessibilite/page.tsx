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
        <h1>Déclaration d&apos;accessibilité</h1>
        <p>Établie le 29 septembre 2026.</p>
        <p>
          Le Ministère de l&apos;Enseignement supérieur, de la Recherche et de l&apos;Espace
          s&apos;engage à rendre son service accessible, conformément à l&apos;article 47 de la loi
          n° 2005-102 du 11 février 2005.
        </p>
        <p>
          Cette déclaration d&apos;accessibilité s&apos;applique à Santé Mentale Étudiant (
          <a href="https://www.santementale.etudiant.gouv.fr">
            https://www.santementale.etudiant.gouv.fr
          </a>
          ).
        </p>

        <h2>État de conformité</h2>
        <p>
          Santé Mentale Étudiant est <b>non conforme </b>avec le RGAA. Le site n&apos;a encore pas
          été audité.
        </p>

        <h2>Amélioration et contact</h2>
        <p>
          Si vous n&apos;arrivez pas à accéder à un contenu ou à un service, vous pouvez contacter
          le responsable de Santé Mentale Étudiant pour être orienté vers une alternative accessible
          ou obtenir le contenu sous une autre forme.
        </p>
        <ul>
          <li>
            E-mail :{" "}
            <a href="mailto:contact@santementale.etudiant.gouv.fr">
              contact@santementale.etudiant.gouv.fr
            </a>
          </li>
        </ul>

        <h2>Voie de recours</h2>
        <p>
          Cette procédure est à utiliser dans le cas suivant : vous avez signalé au responsable du
          site internet un défaut d&apos;accessibilité qui vous empêche d&apos;accéder à un contenu
          ou à un des services du portail et vous n&apos;avez pas obtenu de réponse satisfaisante.
        </p>
        <p>Vous pouvez :</p>
        <ul>
          <li>
            Écrire un message au{" "}
            <ExternalLink
              href="https://formulaire.defenseurdesdroits.fr/"
            >
              Défenseur des droits (nouvelle fenêtre)
            </ExternalLink>
          </li>
          <li>
            Contacter{" "}
            <ExternalLink
              href="https://www.defenseurdesdroits.fr/saisir/delegues"
            >
              le délégué du Défenseur des droits dans votre région (nouvelle fenêtre)
            </ExternalLink>
          </li>
          <li>
            Envoyer un courrier par la poste (gratuit, ne pas mettre de timbre) :
            <address>
              Défenseur des droits
              <br />
              Libre réponse 71120
              <br />
              75342 Paris CEDEX 07
            </address>
          </li>
        </ul>

        <p>
          Cette déclaration d&apos;accessibilité a été créée le 10 septembre 2026 grâce au{" "}
          <ExternalLink
            href="https://betagouv.github.io/a11y-generateur-declaration/#create"
          >
            Générateur de Déclaration d&apos;Accessibilité (nouvelle fenêtre)
          </ExternalLink>
          .
        </p>
      </section>
    </FullBleedSection>
  );
}
