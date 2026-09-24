import FullBleedSection from "@/components/wrapper/FullBleedSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibilité",
};

export default async function AccessibilityDeclaration() {
  return (
    <FullBleedSection>
      <h1>Déclaration d'accessibilité</h1>
    </FullBleedSection>
  );
}
