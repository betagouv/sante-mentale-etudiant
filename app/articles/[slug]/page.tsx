import { notFound } from "next/navigation";
import { getAllArticleSlugs, getArticleBySlug } from "@/lib/articles";
import FullBleedSection from "@/components/wrapper/FullBleedSection";
import styles from "./Page.module.scss";
import Image from "next/image";
import ReadingTime from "@/components/articles/ReadingTime";

export async function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <FullBleedSection className={styles.section}>
      <article className={styles.container}>
        <h1>{article.title}</h1>
        <p className={styles.intro} dangerouslySetInnerHTML={{ __html: article.intro }} />
        <div className={styles.body}>
          <div className={styles.heroWrapper}>
            <Image
              src={article.heroImage}
              alt={article.title}
              fill
              sizes="100vw"
              style={{ objectFit: "cover" }}
              priority
            />
            <ReadingTime className={styles.heroBadge} time={4} />
          </div>
          <div
            className={styles.heroCredits}
            dangerouslySetInnerHTML={{ __html: article.heroCredits }}
          />
          <div className={styles.article} dangerouslySetInnerHTML={{ __html: article.html }} />
        </div>
      </article>
    </FullBleedSection>
  );
}
