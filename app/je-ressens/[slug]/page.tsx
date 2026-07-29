import Feeling from "@/components/je-ressens/Feeling";
import { getFeelingBySlug } from "@/lib/feelings";
import { notFound } from "next/navigation";

export default async function FeelingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const feeling = await getFeelingBySlug(slug);

  if (!feeling) {
    notFound();
  }
  return <Feeling feeling={feeling} />;
}
