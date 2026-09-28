import { ArticleMeta } from "@/lib/articles/types";
import styles from "./ArticlesList.module.scss";
import { ArticleCard } from "./ArticleCard";

type Props = {
  articles: ArticleMeta[];
  titleAs?: "h3" | "h2" | "h4" | "h5" | "h6" | undefined;
};

export const ArticlesList = ({ articles, titleAs }: Props) => {
  return (
    <div className={styles.cardsList}>
      {articles.map((article: ArticleMeta) => (
        <ArticleCard key={article.slug} article={article} titleAs={titleAs} />
      ))}
    </div>
  );
};
