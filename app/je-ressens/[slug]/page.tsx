import Feeling from "@/components/je-ressens/Feeling";
import { getAllFeelingsSlugs, getFeelingBySlug } from "@/lib/feelings";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const feeling = await getFeelingBySlug(slug);
  return { title: feeling?.catch.description };
}

export async function generateStaticParams() {
  return getAllFeelingsSlugs().map((slug) => ({ slug }));
}

export default async function FeelingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const feeling = await getFeelingBySlug(slug);

  if (!feeling) {
    notFound();
  }
  return <Feeling feeling={feeling} />;
}
