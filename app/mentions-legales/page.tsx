import FullBleedSection from "@/components/wrapper/FullBleedSection";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Informations légales du site Santé Mentale Étudiant : éditeur, hébergeur, directeur de publication.",
};

export default function LegalNotices() {
  return (
    <FullBleedSection>
      <section className="static-page">
        <h1>Mentions légales</h1>

        <p>
          Santé Mentale Étudiant est destiné au grand public et diffuse des informations dans le
          domaine de la santé mentale. Aucune donnée sensible ou donnée de santé n’est collectée.
          Les contenus diffusés ont vocation à sensibiliser les personnes sur les enjeux de la santé
          mentale ou les rediriger vers les organismes compétents. Santé Mentale Étudiant ne se
          substitue en aucun cas aux professionnels de santé.
        </p>

        <section>
          <h2>Éditeur du Site</h2>
          <p>
            Ministère de l'Enseignement supérieur, de la Recherche et de l'Espace
            <br />
            Pavillon Boncourt
            <br />
            21 rue Descartes
            <br />
            75005 Paris
            <br />
            France
          </p>
          <p>Téléphone : 01 55 55 10 10</p>
        </section>

        <section>
          <h2>Directeur de la publication</h2>
          <p>Monsieur Philippe BAPTISTE</p>
        </section>

        <section>
          <h2>Hébergement du Site</h2>
          <p>
            Scalingo SAS
            <br />
            13 rue Jacques Peirotes
            <br />
            67000 Strasbourg
            <br />
            France
            <br />
            <Link href="mailto:support@scalingo.com" target="_blank" rel="noopener noreferrer">
              support@scalingo.com
            </Link>
          </p>
        </section>
      </section>
    </FullBleedSection>
  );
}
