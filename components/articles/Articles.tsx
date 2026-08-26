import { articles } from "@/lib/articles/data";
import FullBleedSection from "../wrapper/FullBleedSection";
import styles from "./Articles.module.scss";
import ArticlesSearch from "./ArticlesSearch";
import { feelings } from "@/lib/feelings/data";

export default function Articles() {
  return (
    <FullBleedSection className={styles.section} containerClassName={styles.pageContainer}>
      <h1 className={styles.title}>S’informer pour prendre soin de sa santé mentale</h1>
      <p className={styles.desc}>
        Des informations fiables pour t’accompagner : articles, vidéos, podcasts
      </p>
      <ArticlesSearch allArticles={articles} feelings={feelings} />
    </FullBleedSection>
  );
}
