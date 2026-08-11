import { ArticleMeta } from "@/lib/articles/types";
import FullBleedSection from "../../wrapper/FullBleedSection";
import ArticleInfo from "./ArticleInfo";
import ArticleHeroImage from "./ArticleHeroImage";
import styles from "./Article.module.scss";

type Props = {
  article: ArticleMeta & { html: string };
};
export default function Article({ article }: Props) {
  return (
    <FullBleedSection className={styles.section} containerClassName={styles.pageContainer}>
      <article className={styles.container}>
        <div className={styles.header}>
          <h1>{article.title}</h1>
          <p className={styles.intro} dangerouslySetInnerHTML={{ __html: article.intro }} />
          <ArticleInfo article={article} />
        </div>
        <ArticleHeroImage article={article} />
        <div className={styles.body}>
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
