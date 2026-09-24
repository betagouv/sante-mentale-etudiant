import { notFound } from "next/navigation";
import { getAllInternalArticleSlugs, getArticleBySlug } from "@/lib/articles";
import Article from "@/components/articles/article/Article";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  return { title: article?.title };
}

export async function generateStaticParams() {
  return getAllInternalArticleSlugs().map((slug) => ({ slug }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return <Article article={article} />;
}
