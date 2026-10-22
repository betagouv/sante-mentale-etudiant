"use client";
import { Input } from "@codegouvfr/react-dsfr/Input";
import { Button } from "@codegouvfr/react-dsfr/Button";
import { Tag } from "@codegouvfr/react-dsfr/Tag";
import { ArticleMeta } from "@/lib/articles/types";
import { useMemo, useState } from "react";
import { ArticlesList } from "../common/ArticlesList";
import styles from "./ArticlesSearch.module.scss";
import { Feeling } from "@/lib/feelings/types";
import {
  IllustrationArticlesLeft1,
  IllustrationArticlesLeft2,
  IllustrationArticlesRight,
} from "../illustrations";
import { FeelingSlug } from "@/lib/feelings/data";

type Props = {
  allArticles: ArticleMeta[];
  feelings: Feeling[];
  defaultFeelingSlug?: FeelingSlug;
};
export default function ArticlesSearch({ allArticles, feelings, defaultFeelingSlug }: Props) {
  const [inputValue, setInputValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFeelingSlugs, setSelectedFeelingSlugs] = useState<FeelingSlug[]>(
    defaultFeelingSlug ? [defaultFeelingSlug] : []
  );

  const toggleFeelingSlug = (slug: FeelingSlug) => {
    if (selectedFeelingSlugs.includes(slug)) {
      setSelectedFeelingSlugs([...selectedFeelingSlugs.filter((s) => s !== slug)]);
    } else {
      setSelectedFeelingSlugs([...selectedFeelingSlugs, slug]);
    }
  };

  // search by feelings also render feeling less articles at the end
  const filteredArticles = useMemo(() => {
    const matchingSearch = allArticles.filter((a) => a.title.includes(searchTerm));

    if (selectedFeelingSlugs.length === 0) return matchingSearch;

    const forSelectedFeelings = matchingSearch.filter(
      (a) => a.mainFeelingSlug && selectedFeelingSlugs.includes(a.mainFeelingSlug)
    );
    const general = matchingSearch.filter((a) => !a.mainFeelingSlug);

    return [...forSelectedFeelings, ...general];
  }, [searchTerm, allArticles, selectedFeelingSlugs]);
  return (
    <>
      <div className={styles.wrapper}>
        <IllustrationArticlesLeft1 />
        <IllustrationArticlesLeft2 />
        <IllustrationArticlesRight />
        <Input
          label="Recherche dans tous les contenus du site"
          className={styles.search}
          addon={<Button onClick={() => setSearchTerm(inputValue)}>Rechercher</Button>}
          nativeInputProps={{
            onChange: (e) => setInputValue(e.target.value),
            onKeyDown: (e) => {
              if (e.key === "Enter") {
                setSearchTerm(inputValue);
              }
            },
            value: inputValue,
          }}
        />
        <ul className={`${styles.tags} fr-tags-group`}>
          {feelings.map((f) => (
            <li key={f.slug}>
              <Tag
                nativeButtonProps={{
                  onClick: () => toggleFeelingSlug(f.slug),
                }}
                pressed={selectedFeelingSlugs.includes(f.slug)}
              >
                {f.name}
              </Tag>
            </li>
          ))}
        </ul>
      </div>
      <ArticlesList articles={filteredArticles} titleAs="h2" />
    </>
  );
}
