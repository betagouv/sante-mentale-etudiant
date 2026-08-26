"use client";
import { Input } from "@codegouvfr/react-dsfr/Input";
import { Button } from "@codegouvfr/react-dsfr/Button";
import { Tag } from "@codegouvfr/react-dsfr/Tag";
import { ArticleMeta } from "@/lib/articles/types";
import { useMemo, useState } from "react";
import { ArticlesList } from "../common/ArticlesList";
import styles from "./ArticlesSearch.module.scss";
import { Feeling } from "@/lib/feelings/types";

type Props = {
  allArticles: ArticleMeta[];
  feelings: Feeling[];
};
export default function ArticlesSearch({ allArticles, feelings }: Props) {
  const [inputValue, setInputValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFeelingSlugs, setSelectedFeelingSlugs] = useState<string[]>([]);

  const toggleFeelingSlug = (slug: string) => {
    if (selectedFeelingSlugs.includes(slug)) {
      setSelectedFeelingSlugs([...selectedFeelingSlugs.filter((s) => s !== slug)]);
    } else {
      setSelectedFeelingSlugs([...selectedFeelingSlugs, slug]);
    }
  };

  const filteredArticles = useMemo(
    () =>
      allArticles
        .filter((a) => a.title.includes(searchTerm))
        .filter(
          (a) =>
            selectedFeelingSlugs.length === 0 || selectedFeelingSlugs.includes(a.mainFeeling.slug)
        ),
    [searchTerm, allArticles, selectedFeelingSlugs]
  );
  return (
    <>
      <Input
        label=""
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
      <ul className="fr-tags-group">
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
      <ArticlesList articles={filteredArticles} />
    </>
  );
}
