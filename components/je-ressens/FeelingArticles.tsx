import { getFeaturedArticlesByFeeling } from "@/lib/articles";
import FullBleedSection from "../wrapper/FullBleedSection";
import styles from "./FeelingArticles.module.scss";
import { Feeling as FeelingType } from "@/lib/feelings/types";
import { Button } from "@codegouvfr/react-dsfr/Button";
import { ArticlesList } from "../common/ArticlesList";

type Props = {
  feeling: FeelingType;
};

export default function FeelingArticles({ feeling }: Props) {
  const articles = getFeaturedArticlesByFeeling(feeling.slug);

  if (articles.length === 0) return null;

  return (
    <FullBleedSection bgColor="grey">
      <div className={styles.innerContainer}>
        <h2>Pour aller plus loin</h2>
        <ArticlesList articles={articles} />
        <div className={styles.buttonWrapper}>
          <Button
            className={styles.button}
            priority="tertiary"
            linkProps={{
              href: `/s-informer?feeling=${feeling.slug}`,
              "aria-label": "Consulter des articles sur ce thème",
            }}
          >
            Plus d’articles
          </Button>
        </div>
      </div>
    </FullBleedSection >
  );
}
