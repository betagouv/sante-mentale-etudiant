import AboutUs from "@/components/about-us";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Qui sommes-nous",
  description:
    "Découvrez l'équipe et la mission de Santé Mentale Étudiant : un site créé pour informer, soutenir et orienter les étudiants sur les questions de santé mentale.",
};

export default function AboutUsPage() {
  return <AboutUs />;
}
