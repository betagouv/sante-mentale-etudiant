import FullBleedSection from "@/components/wrapper/FullBleedSection";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Données personnelles",
  description:
    "Découvrez comment vos données sont collectées, utilisées et protégées sur Santé Mentale Étudiant, et comment exercer vos droits.",
};

export default function PersonalData() {
  return (
    <FullBleedSection>
      <section className="static-page">
        <h1>Politique de confidentialité</h1>

        <section>
          <h2>Qui sommes-nous ?</h2>
          <p>
            Santé Mentale Étudiant est un service numérique porté par le ministère chargé de
            l'Enseignement supérieur et de la Recherche et de l’Espace (MESRE). Il vise à informer
            les étudiants sur les enjeux de santé mentale et à les aider à s'orienter vers les
            dispositifs d’écoute ou d'accompagnement psychologique existants.
          </p>
        </section>

        <section>
          <h2>Pourquoi traitons-nous des données à caractère personnel ?</h2>
          <p>
            Santé Mentale Étudiante traite des données à caractère personnel dans le cadre de la
            réponse aux demandes de contact et de l'envoi d'actualités aux personnes ayant renseigné
            leur adresse courriel.
          </p>
          <p>
            Le Site ne nécessite aucune création de compte et ne collecte aucune donnée
            d'identification pour la consultation des contenus ou l'utilisation de l'outil
            d'orientation.
          </p>
        </section>

        <section>
          <h2>Quelles sont les données à caractère personnel que nous traitons ?</h2>
          <p>
            Inscription aux actualités : adresse courriel. Cette adresse constitue une donnée à
            caractère personnel, y compris lorsqu'elle ne contient pas explicitement de nom ou de
            prénom.
          </p>
          <p>
            Sollicitations par courriel : adresse courriel de l'expéditeur, ainsi que les
            informations que vous choisissez de nous communiquer dans votre message (par exemple
            votre nom ou votre prénom).
          </p>
          <p>
            Nous vous invitons à ne pas communiquer de données de santé ou d'informations sensibles
            dans vos messages.
          </p>
        </section>

        <section>
          <h2>Qu’est-ce qui nous autorise à traiter des données à caractère personnel ?</h2>
          <p>
            Nous traitons des données à caractère personnel selon la base légale de la mission
            d'intérêt public conformément à l'article 6-1 e) du RGPD.
          </p>
          <p>
            Cette mission d’intérêt public se traduit en pratique par le décret n° 2025-12 du 8
            janvier 2025 relatif aux attributions du ministre auprès de la ministre d’Etat, ministre
            de l’éducation nationale, de l’enseignement supérieur et de la recherche, chargé de
            l’enseignement supérieur et de la recherche.
          </p>
        </section>

        <section>
          <h2>Pendant combien de temps conservons-nous vos données ?</h2>
          <ul>
            <li>
              Données relatives aux sollicitations par courriel : 12 mois à compter de la réception
              du message
            </li>
            <li>
              Données relatives aux personnes qui souhaitent être tenues au courant des actualités
              de Santé Mentale Étudiant : à partir de la désinscription par l'utilisateur
            </li>
          </ul>
        </section>

        <section>
          <h2>Quels sont vos droits ?</h2>
          <p>Vous disposez des droits suivants concernant vos données à caractère personnel :</p>
          <ul>
            <li>Droit d’information et droit d’accès aux données ;</li>
            <li>Droit de rectification ;</li>
            <li>Droit d’opposition ;</li>
            <li>Droit à la limitation du traitement de vos données.</li>
          </ul>
          <p>
            Vous pouvez prendre attache avec le délégué à la protection des données à l’adresse
            suivante :
            <Link href="mailto:dpd@education.gouv.fr" target="_blank" rel="noopener noreferrer">
              dpd@education.gouv.fr
            </Link>{" "}
          </p>
          <p>
            Ou écrire par voie postale à :
            <br />
            Ministère de l’Enseignement supérieur et de la Recherche
            <br />
            Délégué à la protection des données (DPD)
            <br />
            1 rue Descartes
            <br />
            75231 Paris Cedex 5
          </p>
          <p>
            En raison de l’obligation de sécurité et de confidentialité dans le traitement des
            données à caractère personnel qui incombe au responsable de traitement, votre demande ne
            sera traitée que si vous apportez la preuve de votre identité. Pour vous aider dans
            votre démarche, vous trouverez ici un modèle de courrier élaboré par la CNIL.
          </p>
          <p>
            Le responsable de traitement s’engage à répondre dans un délai raisonnable qui ne
            saurait dépasser 1 mois à compter de la réception de votre demande.
          </p>
        </section>

        <section>
          <h2>Qui va avoir accès à vos données ?</h2>
          <p>
            Le responsable de traitement s'engage à ce que les données à caractère personnel soient
            traitées par les seules personnes autorisées, à savoir les membres de l'équipe Santé
            Mentale Étudiant et les agents de la DGESIP pour les messages reçus, et les membres de
            l'équipe Santé Mentale Étudiant pour les adresses courriel des personnes inscrites aux
            actualités.
          </p>
        </section>

        <section>
          <h2>Qui nous aide à traiter vos données à caractère personnel ?</h2>
          <p>
            Certaines données peuvent être traitées par des sous-traitants pour la mise à
            disposition du Site. Le responsable de traitement s'est assuré de la mise en œuvre par
            ses sous-traitants de garanties adéquates et du respect de conditions strictes de
            confidentialité, d'usage et de protection des données.
          </p>
          <ul>
            <li>
              Scalingo - France - hébergement -{" "}
              <Link
                href="https://scalingo.com/fr/contrat-gestion-traitements-donnees-personnelles"
                key="scalingo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Garanties
              </Link>
            </li>
            <li>
              Brevo - France - infolettre -{" "}
              <Link
                href="https://www.brevo.com/fr/legal/termsofuse/#accord-sur-le-traitement-des-donnees-a-caractere-personnel-dpa"
                key="crisp"
                target="_blank"
                rel="noopener noreferrer"
              >
                Garanties
              </Link>
            </li>
          </ul>
        </section>
        <section>
          <h2>Témoins de connexion et traceurs</h2>
          <p>
            Nous utilisons l’outil de mesure d’audience Matomo, configuré en mode “exempté” et ne
            nécessitant pas le recueil de votre consentement conformément aux recommandations de la
            CNIL.
          </p>
          <p>
            Pour en savoir plus, vous pouvez consulter les fiches suivantes proposées par la CNIL :
          </p>
          <ul>
            <li>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies-et-traceurs-que-dit-la-loi"
              >
                Cookies et traceurs : que dit la loi ?
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.cnil.fr/fr/cookies-et-autres-traceurs/outils/maitriser-vos-cookies"
              >
                Cookies : les outils pour les maîtriser
              </Link>
            </li>
          </ul>
        </section>
      </section>
    </FullBleedSection>
  );
}
