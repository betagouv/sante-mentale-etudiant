import Articles from "@/components/articles/Articles";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "S’informer",
  description:
    "Articles, podcasts et contenus clairs pour mieux comprendre la santé mentale, pensés pour les étudiants et rédigés avec des sources fiables.",
};

export default function ArticlesPage() {
  return <Articles />;
}
