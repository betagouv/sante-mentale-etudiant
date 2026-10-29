"use client";
import { Input } from "@codegouvfr/react-dsfr/Input";
import { Button } from "@codegouvfr/react-dsfr/Button";
import { Tag } from "@codegouvfr/react-dsfr/Tag";
import { ArticleMeta, TAG_LABELS } from "@/lib/articles/types";
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
import { useMatomo } from "@/utils/matomo";

type Props = {
  allArticles: ArticleMeta[];
  feelings: Feeling[];
  defaultFeelingSlug?: FeelingSlug;
};

const EXTRA_FILTERS = Object.entries(TAG_LABELS).map(([slug, name]) => ({ slug, name }));

const matchesSlug = (article: ArticleMeta, slug: string) =>
  article.mainFeelingSlug === slug || article.tag === slug;

export default function ArticlesSearch({ allArticles, feelings, defaultFeelingSlug }: Props) {
  const [inputValue, setInputValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>(
    defaultFeelingSlug ? [defaultFeelingSlug] : []
  );

  const { trackArticlesSearchFree, trackArticlesSearchTag } = useMatomo();

  const toggle = (slug: string) => {
    if (!selectedFilters.includes(slug)) {
      trackArticlesSearchTag(slug);
    }
    setSelectedFilters((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
  };

  // search by feelings also render feeling less articles at the end
  const filteredArticles = useMemo(() => {
    const matchingSearch = allArticles.filter((a) =>
      a.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (selectedFilters.length === 0) return matchingSearch;

    return matchingSearch.filter((a) => selectedFilters.some((s) => matchesSlug(a, s)));
  }, [searchTerm, allArticles, selectedFilters]);

  const allFilters = [...feelings.map((f) => ({ slug: f.slug, name: f.name })), ...EXTRA_FILTERS];

  const onSearch = () => {
    setSearchTerm(inputValue);
    if (inputValue.length >= 2) {
      trackArticlesSearchFree(inputValue);
    }
  };

  return (
    <>
      <div className={styles.wrapper}>
        <IllustrationArticlesLeft1 />
        <IllustrationArticlesLeft2 />
        <IllustrationArticlesRight />
        <Input
          label="Recherche dans tous les contenus du site"
          className={styles.search}
          addon={<Button onClick={onSearch}>Rechercher</Button>}
          nativeInputProps={{
            onChange: (e) => setInputValue(e.target.value),
            onKeyDown: (e) => {
              if (e.key === "Enter") {
                onSearch();
              }
            },
            value: inputValue,
          }}
        />
        <ul className={`${styles.tags} fr-tags-group`}>
          {allFilters.map((f) => (
            <li key={f.slug}>
              <Tag
                nativeButtonProps={{
                  onClick: () => toggle(f.slug),
                }}
                pressed={selectedFilters.includes(f.slug)}
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
