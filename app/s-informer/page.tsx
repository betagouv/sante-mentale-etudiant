import Articles from "@/components/articles/Articles";
import { FeelingSlug } from "@/lib/feelings/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "S’informer",
  description:
    "Articles, podcasts et contenus clairs pour mieux comprendre la santé mentale, pensés pour les étudiants et rédigés avec des sources fiables.",
};

type SearchParams = { [key: string]: string | string[] | undefined };

export default async function ArticlesPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;
  const defaultFeelingSlug = (params.feeling as FeelingSlug) ?? "";
  return <Articles defaultFeelingSlug={defaultFeelingSlug} />;
}
