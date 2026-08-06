import FullBleedSection from "@/components/wrapper/FullBleedSection"
import Link from "next/link";

export default function LegalNotices() {
  return (
    <FullBleedSection>
      <section>
        <h1>Mentions légales</h1>

        <section>
          <h2>Éditeur du Site</h2>
          <p>
            Ministère de l'Enseignement supérieur, de la Recherche et de l'Espace<br />
            Pavillon Boncourt<br />
            21 rue Descartes<br />
            75005 Paris<br />
            France
          </p>
          <p>
            Téléphone : 01 55 55 10 10
          </p>
        </section>

        <section>
          <h2>Directeur de la publication</h2>
          <p>Monsieur Philippe BAPTISTE</p>
        </section>

        <section>
          <h2>Hébergement du Site</h2>
          <p>
            Scalingo SAS<br />
            13 rue Jacques Peirotes<br />
            67000 Strasbourg<br />
            France<br />
            <Link
              href="mailto:support@scalingo.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              support@scalingo.com
            </Link>
          </p>
        </section>
      </section>
    </FullBleedSection>
  );
}
