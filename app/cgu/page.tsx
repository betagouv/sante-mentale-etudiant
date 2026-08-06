"use client";
import FullBleedSection from "@/components/wrapper/FullBleedSection";
import Link from "next/link";

export default function Gcu() {
  return (
    <FullBleedSection>
      <section>
        <h1>Conditions Générales d’Utilisation</h1>
        <p>En vigueur à partir du 08/10/2026</p>

        <section>
          <h2>Article 1 - Champ d’application</h2>
          <p>
            Les présentes conditions générales d’utilisation (ci-après “CGU”) précisent le cadre juridique du service « Santé Mentale Étudiant » (ci-après le “Site”) et définissent les conditions d’accès et d’utilisation du Site par les Etudiants.
          </p>
          <p>
            Le Site est un service public numérique, sous la responsabilité du ministère de l’Enseignement supérieur et de la Recherche et de l’Espace (MESRE), à destination des étudiants.
          </p>
        </section>

        <section>
          <h2>Article 2 - Objet de la Plateforme</h2>
          <p>
            « Santé Mentale Étudiant » a pour objet d'informer les étudiants sur les enjeux de santé mentale et de les aider à s'orienter vers les dispositifs d'accompagnement psychologique existants (bureaux d'aide psychologique universitaire, services de santé universitaires, lignes d'écoute, etc.).
          </p>
          <p>
            Le Site propose notamment des contenus informatifs et un outil d'orientation permettant à l'étudiant, à partir de quelques questions, d'identifier les dispositifs les plus adaptés à sa situation.
          </p>
          <p>
            Le Site ne propose aucune consultation, aucune mise en relation directe avec un professionnel de santé, et ne permet ni la prise de rendez-vous ni la gestion de séances ou de facturation. Il oriente l'étudiant vers des dispositifs tiers, dont les modalités d'accès et de fonctionnement relèvent de chacun de ces dispositifs.
          </p>
          <p>
            Le Site est accessible librement, gratuitement, et sans création de compte.
          </p>
        </section>

        <section>
          <h2>Article 3 – Définitions</h2>
          <ul>
            <li>
              <strong>“Éditeur”</strong> désigne la personne morale qui met à la disposition du public le Site, à savoir le MESRE.
            </li>
            <li>
              <strong>« Site »</strong> désigne le service numérique d'information et d'orientation décrit à l'article 2.
            </li>
            <li>
              <strong>« Étudiant » ou « Utilisateur »</strong> désigne toute personne consultant le Site.
            </li>
            <li>
              <strong>« Dispositifs partenaires »</strong> désigne les structures ou services d'accompagnement psychologique (BAPU, SSU, associations, numéros d'écoute, etc.) vers lesquels le Site peut orienter l'Utilisateur, sans lien contractuel direct entre celui-ci et l'Éditeur.
            </li>
          </ul>
        </section>

        <section>
          <h2>Article 4 - Accès et utilisation du Site</h2>
          <section>
            <h3>4.1 Accès libre</h3>
            <p>
              Le Site est accessible à tout étudiant, sans inscription ni création de compte. Aucune donnée d'identification n'est requise pour consulter les contenus ou utiliser l'outil d'orientation.
            </p>
          </section>
          <section>
            <h3>4.2 Outil d’orientation</h3>
            <p>
              L'Utilisateur peut répondre à une série de questions afin d'être orienté vers un ou plusieurs dispositifs adaptés à sa situation. Les réponses ne sont ni enregistrées ni transmises à un tiers ; elles servent uniquement, au fil de la navigation, à afficher un résultat d'orientation.
            </p>
            <p>
              Ce résultat a une valeur indicative et ne constitue ni un diagnostic ni un avis médical.
            </p>
          </section>
          <section>
            <h3>4.3 Contenus informatifs</h3>
            <p>
              Le Site met à disposition des contenus (articles, fiches pratiques, ressources) relatifs à la santé mentale des étudiants. Ces contenus sont fournis à titre informatif et ne remplacent pas une consultation auprès d'un professionnel de santé.
            </p>
          </section>
        </section>

        <section>
          <h2>Article 5 - Responsabilités</h2>
          <section>
            <h3>5.1 L'Éditeur du Site</h3>
            <p>
              Les informations diffusées sur le Site sont réputées fiables, mais l'Éditeur ne garantit pas qu'elles soient exemptes d'erreurs ou d'omissions, notamment s'agissant des informations relatives aux dispositifs partenaires (horaires, coordonnées, conditions d'accès), qui peuvent évoluer indépendamment du Site.
            </p>
            <p>
              Le Site ne se substitue pas à un avis médical ou psychologique. En cas de détresse immédiate ou de risque suicidaire, l'Utilisateur est invité à contacter sans délai le 3114 (numéro national de prévention du suicide, gratuit, 24h/24 et 7j/7) ou les services d'urgence (15 ou 112).
            </p>
            <p>
              L'Éditeur n'est pas responsable des services rendus par les dispositifs partenaires vers lesquels le Site oriente l'Utilisateur, ces derniers relevant de leur propre responsabilité.
            </p>
            <p>
              L'Éditeur s'engage à sécuriser le Site et à ne collecter aucune donnée personnelle identifiante dans le cadre de sa navigation standard.
            </p>
            <p>
              L'Éditeur se réserve la liberté de faire évoluer, modifier ou suspendre, sans préavis, le Site pour des raisons de maintenance ou tout autre motif jugé nécessaire.
            </p>
          </section>
          <section>
            <h3>5.2 L’Utilisateur</h3>
            <p>
              L'Utilisateur s'engage à faire un usage du Site conforme à sa destination et à ne pas tenter d'en détourner les fonctionnalités.
            </p>
          </section>
        </section>

        <section>
          <h2>Article 6 - Mise à jour des conditions générales d’utilisation</h2>
          <p>
            Les termes des présentes CGU peuvent être amendés à tout moment, sans préavis, en fonction des modifications apportées au Site, de l’évolution de la législation ou pour tout autre motif jugé nécessaire.
          </p>
        </section>

        <section>
          <h2>Article 7 – Contact</h2>
          <p>
            En cas de problème avec le dispositif, envoyez-nous un email à{" "}
            <Link
              href="mailto:support-santepsyetudiant@beta.gouv.fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              support-santepsyetudiant@beta.gouv.fr
            </Link>{" "}
            ou contactez-nous sur{" "}
            <Link
              href="https://santepsy.etudiant.gouv.fr/contact"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://santepsy.etudiant.gouv.fr/contact
            </Link>
          </p>
        </section>
      </section>
    </FullBleedSection>
  );
}
