"use client";
import FullBleedSection from "../wrapper/FullBleedSection";
import styles from "./Articles.module.scss";
import { ArticlesList } from "../common/ArticlesList";
import { Input } from "@codegouvfr/react-dsfr/Input";
import { Button } from "@codegouvfr/react-dsfr/Button";
import { useState } from "react";
import { fetchSearchArticles } from "@/app/actions";
import { ArticleMeta } from "@/lib/articles/types";

export default function Articles() {
  const [searchValue, setSearchValue] = useState("");
  const [articles, setArticles] = useState<ArticleMeta[]>([]);

  const onSearchArticles = async () => {
    fetchSearchArticles([], searchValue).then((res: ArticleMeta[]) => setArticles(res));
  };

  return (
    <FullBleedSection className={styles.section} containerClassName={styles.pageContainer}>
      <h1 className={styles.title}>S’informer pour prendre soin de sa santé mentale</h1>
      <p className={styles.desc}>
        Des informations fiables pour t’accompagner : articles, vidéos, podcasts
      </p>
      <Input
        label=""
        className={styles.search}
        addon={<Button onClick={onSearchArticles}>Rechercher</Button>}
        nativeInputProps={{
          onChange: (e) => setSearchValue(e.target.value),
          value: searchValue,
        }}
      />
      <ArticlesList articles={articles} />
    </FullBleedSection>
  );
}
