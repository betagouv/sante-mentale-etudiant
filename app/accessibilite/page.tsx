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
      <h1>Déclaration d'accessibilité</h1>
    </FullBleedSection>
  );
}
