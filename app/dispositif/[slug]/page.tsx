import Dispositif from "@/components/dispositif/Dispositif";
import { getAllDispositifsSlugs, getDispositifBySlug } from "@/lib/dispositifs";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const dispositif = await getDispositifBySlug(slug);
  return { title: dispositif?.metadata.title, description: dispositif?.metadata.description };
  return {};
}

export async function generateStaticParams() {
  return getAllDispositifsSlugs().map((slug) => ({ slug }));
}

export default async function DispositifPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const dispositif = await getDispositifBySlug(slug);

  if (!dispositif) {
    notFound();
  }
  return <Dispositif dispositif={dispositif} />;
}
