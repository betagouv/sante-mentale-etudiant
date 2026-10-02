import { InternalArticleMeta } from "@/lib/articles/types";
import FullBleedSection from "../../wrapper/FullBleedSection";
import ArticleInfo from "./ArticleInfo";
import ArticleHeroImage from "./ArticleHeroImage";
import styles from "./Article.module.scss";

type Props = {
  article: InternalArticleMeta & { html: string };
};
export default function Article({ article }: Props) {
  const { title, intro, html, podcastUrl, heroCredits } = article;

  return (
    <FullBleedSection innerContainerClassName={styles.pageContainer} bgColor="grey">
      <article className={styles.container}>
        <div className={styles.header}>
          <h1>{title}</h1>
          <p className={styles.intro} dangerouslySetInnerHTML={{ __html: intro }} />
          <ArticleInfo article={article} />
        </div>

        {!podcastUrl && <ArticleHeroImage article={article} />}

        <div className={styles.body}>
          {!podcastUrl && heroCredits && (
            <div
              className={styles.heroCredits}
              dangerouslySetInnerHTML={{ __html: heroCredits }}
            />
          )}
          {podcastUrl &&
            <iframe
              src={podcastUrl}
              width="100%"
              height="200px"
              title={title}
            />
          }
          <div className={styles.article} dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </article>
    </FullBleedSection>
  );
}
