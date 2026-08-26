import { getArticlesByFeeling } from "@/lib/articles";
import FullBleedSection from "../wrapper/FullBleedSection";
import styles from "./FeelingArticles.module.scss";
import { Feeling as FeelingType } from "@/lib/feelings/types";
import { Button } from "@codegouvfr/react-dsfr/Button";
import { ArticlesList } from "../common/ArticlesList";

type Props = {
  feeling: FeelingType;
};
export default async function FeelingArticles({ feeling }: Props) {
  const moreArticles = await getArticlesByFeeling(feeling.slug);
  return (
    <FullBleedSection className={styles.section} containerClassName={styles.container}>
      <h2>Pour aller plus loin</h2>
      <ArticlesList articles={moreArticles.slice(0, 3)} />
      <div className={styles.buttonWrapper}>
        <Button className={styles.button} priority="tertiary">
          Plus d’articles
        </Button>
      </div>
    </FullBleedSection>
  );
}
