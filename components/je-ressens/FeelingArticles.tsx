import { getArticlesByFeeling } from "@/lib/articles";
import FullBleedSection from "../wrapper/FullBleedSection";
import styles from "./FeelingArticles.module.scss";
import { Feeling as FeelingType } from "@/lib/feelings/types";
import { ArticleCard } from "../common/ArticleCard";
import { ArticleMeta } from "@/lib/articles/types";
import { Button } from "@codegouvfr/react-dsfr/Button";

type Props = {
  feeling: FeelingType;
};
export default async function FeelingArticles({ feeling }: Props) {
  const moreArticles = await getArticlesByFeeling(feeling.slug);
  return (
    <FullBleedSection className={styles.section} containerClassName={styles.container}>
      <h2>Pour aller plus loin</h2>
      <div className={styles.cardsList}>
        {moreArticles.slice(0, 3).map((article: ArticleMeta) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
      <div className={styles.buttonWrapper}>
        <Button className={styles.button} priority="tertiary">
          Plus d’articles
        </Button>
      </div>
    </FullBleedSection>
  );
}
