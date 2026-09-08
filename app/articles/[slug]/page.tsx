import { notFound } from "next/navigation";
import { getAllInteralArticleSlugs, getArticleBySlug } from "@/lib/articles";
import Article from "@/components/articles/article/Article";

export async function generateStaticParams() {
  return getAllInteralArticleSlugs().map((slug) => ({ slug }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return <Article article={article} />;
}
