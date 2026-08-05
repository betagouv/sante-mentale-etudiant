"use client";
import FullBleedSection from "@/components/wrapper/FullBleedSection";
import { Table } from "@codegouvfr/react-dsfr/Table";

export default function DonneesPersonnelles() {
  return (
    <FullBleedSection>
      <section>
        <h1>Politique de confidentialité</h1>

        <section>
          <h2>Qui sommes-nous ?</h2>
          <p>
            Santé Mentale Étudiant est un service numérique porté par le ministère chargé de l'Enseignement supérieur et de la Recherche (MESR).
            Il vise à informer les étudiants sur les enjeux de santé mentale et à les aider à s'orienter vers les dispositifs d'accompagnement psychologique existants.
          </p>
        </section>

        <section>
          <h2>Pourquoi traitons-nous des données à caractère personnel ?</h2>
          <p>
            Santé Mentale Étudiant traite de données à caractère personnel, dans le cadre de :
          </p>
          <ul>
            <li>La mesure d'audience anonyme, afin d'améliorer la qualité et la pertinence du Site ;</li>
            <li>La réponse aux demandes de contact, le cas échéant.</li>
          </ul>
          <p>
            Le Site ne nécessite aucune création de compte et ne collecte aucune donnée d'identification pour la consultation des contenus ou l'utilisation de l'outil d'orientation.
            Les réponses apportées à l'outil d'orientation ne sont ni enregistrées ni transmises à un tiers.
          </p>
        </section>

        <section>
          <h2>Quelles sont les données à caractère personnel que nous traitons ?</h2>
          <p>
            Données relatives au formulaire de contact (le cas échéant) : nom, prénom, adresse courriel, champs libres.
          </p>
        </section>

        <section>
          <h2>Qu’est-ce qui nous autorise à traiter des données à caractère personnel ?</h2>
          <p>
            Nous traitons des données à caractère personnel selon la base légale de la mission d'intérêt public conformément à l'article 6-1 e) du RGPD.
          </p>
          <p>
            Cette mission d’intérêt public se traduit en pratique par le décret n° 2025-12 du 8 janvier 2025 relatif aux attributions du ministre auprès de la ministre d’Etat, ministre de l’éducation nationale, de l’enseignement supérieur et de la recherche, chargé de l’enseignement supérieur et de la recherche.
          </p>
        </section>

        <section>
          <h2>Pendant combien de temps conservons-nous vos données ?</h2>
          <Table
            headers={["Catégories de données", "Durée de conservation"]}
            data={[
              ["Données relatives au formulaire de contact", "6 mois à compter de la réception du message"],
            ]}
          />
        </section>

        <section>
          <h2>Quels sont vos droits ?</h2>
          <p>
            Vous disposez des droits suivants concernant vos données à caractère personnel :
          </p>
          <ul>
            <li>Droit d’information et droit d’accès aux données ;</li>
            <li>Droit de rectification ;</li>
            <li>Droit d’opposition ;</li>
            <li>Droit à la limitation du traitement de vos données.</li>
          </ul>
          <p>
            Par voie électronique : envoyez-nous un courriel à{" "}
            <a href="mailto:support-santepsyetudiant@beta.gouv" >
              support-santepsyetudiant@beta.gouv
            </a>{" "}
            ou contactez-nous sur{" "}
            <a href="https://santepsy.etudiant.gouv.fr/contact/formulaire" >
              santepsy.etudiant.gouv.fr/contact/formulaire
            </a>
          </p>
          <p>
            Vous pouvez prendre attache avec le délégué à la protection des données à l’adresse suivante :{" "}
            <a href="mailto:dpd@education.gouv.fr">
              dpd@education.gouv.fr
            </a>
          </p>
          <p>
            Via le formulaire de saisine en ligne :{" "}
            <a href="https://www.enseignementsup-recherche.gouv.fr/fr/nous-contacter-49937#dpd" >
              https://www.enseignementsup-recherche.gouv.fr/fr/nous-contacter-49937#dpd
            </a>
          </p>
          <p>
            Ou par voie postale :
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
            En raison de l’obligation de sécurité et de confidentialité dans le traitement des données à caractère personnel qui incombe au responsable de traitement, votre demande ne sera traitée que si vous apportez la preuve de votre identité.
            Pour vous aider dans votre démarche, vous trouverez <a href="https://www.cnil.fr/fr/modele/courrier/exercer-son-droit-dacces">ici</a> un modèle de courrier élaboré par la CNIL.
          </p>
          <p>
            Le responsable de traitement s’engage à répondre dans un délai raisonnable qui ne saurait dépasser 1 mois à compter de la réception de votre demande.
          </p>
        </section>

        <section>
          <h2>Qui va avoir accès à vos données ?</h2>
          <p>
            Le responsable de traitement s'engage à ce que les données à caractère personnel soient traitées par les seules personnes autorisées, à savoir les membres habilités de l'équipe de Santé Mentale Étudiant.
          </p>
        </section>

        <section>
          <h2>Qui nous aide à traiter vos données à caractère personnel ?</h2>
          <p>
            Certaines données peuvent être traitées par des sous-traitants pour la mise à disposition du Site. Le responsable de traitement s'est assuré de la mise en œuvre par ses sous-traitants de garanties adéquates et du respect de conditions strictes de confidentialité, d'usage et de protection des données.
          </p>
          <Table
            headers={["Partenaire", "Pays", "Traitement réalisé", "Garanties"]}
            data={[
              [
                "Scalingo",
                "France",
                "Hébergeur",
                <a href="https://scalingo.com/fr/contrat-gestion-traitements-donnees-personnelles" key="scalingo">
                  Lien
                </a>,
              ],
              [
                "Crisp",
                "France",
                "Outil de support et de chat",
                <a href="https://help.crisp.chat/en/article/how-to-sign-my-gdpr-data-processing-agreement-dpa-1wfmngo" key="crisp">
                  Lien
                </a>,
              ],
            ]}
          />
        </section>

        <section>
          <h2>Sécurité et confidentialité des données</h2>
          <p>
            Le responsable de traitement prend les mesures techniques et opérationnelles nécessaires afin d'assurer la sécurité et la confidentialité des données, telles que le chiffrement et le cloisonnement des accès. Des audits et analyses de code sont également effectués.
          </p>
        </section>

        <section>
          <h2>Témoins de connexion et traceurs</h2>
          <p>
            Un témoin de connexion est un fichier déposé sur votre terminal lors de la visite d’un site. Il a pour but de collecter des informations relatives à votre navigation et de vous adresser des services adaptés à votre terminal (ordinateur, mobile ou tablette).
            Santé Mentale Étudiant dépose des témoins de connexion, notamment pour la mesure d’audience sur son service. Le dépôt s’effectue uniquement lorsque l’utilisateur a consenti via le bandeau prévu à cet effet. L’utilisateur peut à tout moment revenir sur son choix.
          </p>
          <p>
            Témoins de connexion déposés :
          </p>
          <Table
            headers={["Cookies", "Traitement réalisé", "Base juridique", "Garanties"]}
            data={[
              [
                "Google Ads",
                "Outil de gestion de balises permettant de suivre et mesurer les publicités. Il mesure l’efficacité des campagnes sponsorisées.",
                "Consentement",
                <a href="https://www.google.com/analytics/terms/dpa/dataprocessingamendment_20200816.html" key="google">
                  Lien vers le DPA
                </a>,
              ],
              [
                "Facebook Cookie Pixel",
                "Outil de gestion de balises permettant de suivre et mesurer les publicités. Il identifie les visiteurs en provenance de publications Facebook.",
                "Consentement",
                <a href="https://www.facebook.com/legal/terms/dataprocessing" key="facebook">
                  Lien vers le DPA
                </a>,
              ],
            ]}
          />
          <p>
            Nous utilisons également l’outil de mesure d’audience Matomo, configuré en mode “exempté” et ne nécessitant pas le recueil de votre consentement conformément aux recommandations de la CNIL.
          </p>
          <p>
            Pour aller plus loin, vous pouvez consulter les fiches proposées par la Commission Nationale de l’Informatique et des Libertés (CNIL) :
          </p>
          <ul>
            <li>
              <a href="https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies-et-traceurs-que-dit-la-loi" >
                Cookies et traceurs : que dit la loi ?
              </a>
            </li>
            <li>
              <a href="https://www.cnil.fr/fr/cookies-et-autres-traceurs/outils/maitriser-vos-cookies" >
                Cookies : les outils pour les maîtriser
              </a>
            </li>
          </ul>
        </section>
      </section>
    </FullBleedSection>
  );
}
