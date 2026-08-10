import { ArticleMeta } from "@/lib/articles/types";
import styles from "./ArticlesList.module.scss";
import { ArticleCard } from "./ArticleCard";

type Props = {
  articles: ArticleMeta[];
};

export const ArticlesList = ({ articles }: Props) => {
  return (
    <div className={styles.cardsList}>
      {articles.map((article: ArticleMeta) => (
        <ArticleCard key={article.slug} article={article} />
      ))}
    </div>
  );
};
