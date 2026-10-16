import { articles } from "@/lib/articles/data";
import FullBleedSection from "../wrapper/FullBleedSection";
import styles from "./Articles.module.scss";
import ArticlesSearch from "./ArticlesSearch";
import { feelings, FeelingSlug } from "@/lib/feelings/data";

type Props = {
  defaultFeelingSlug?: FeelingSlug;
};
export default function Articles({ defaultFeelingSlug }: Props) {
  return (
    <FullBleedSection bgColor="grey">
      <div className={styles.pageContainer}>
        <h1 className={styles.title}>S’informer pour prendre soin de sa santé mentale</h1>
        <p className={styles.desc}>
          Des informations et des témoignages pour t’accompagner&nbsp;:
          <br />
          sites, articles, vidéos
        </p>
        <ArticlesSearch
          allArticles={articles}
          feelings={feelings}
          defaultFeelingSlug={defaultFeelingSlug}
        />
      </div>
    </FullBleedSection>
  );
}
