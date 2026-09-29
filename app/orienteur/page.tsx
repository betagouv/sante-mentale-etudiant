import Orienteur from "@/components/orienteur/Orienteur";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quel soutien vous correspond ?",
  description:
    "Répondez à quelques questions pour identifier le type de soutien le plus adapté à votre situation et découvrir les ressources qui peuvent vous aider.",
};

export default function OrienteurPage() {
  return <Orienteur />;
}
