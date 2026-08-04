"use client";
import { TagProps } from "@codegouvfr/react-dsfr/Tag";
import { TagsGroup } from "@codegouvfr/react-dsfr/TagsGroup";
import { Button } from "@codegouvfr/react-dsfr/Button";
import { ArticleMeta } from "@/lib/articles/types";
import styles from "./ArticleInfo.module.scss";
import { displayDate } from "@/utils/misc";

type Props = {
  article: ArticleMeta;
};
export default function ArticleInfo({ article }: Props) {
  return (
    <div className={styles.wrapper}>
      <TagsGroup
        className={styles.tags}
        tags={
          article.topics.map((t) => ({
            children: t.name,
          })) as [TagProps, ...TagProps[]]
        }
      />
      <div className={styles.published}>
        Publié le {displayDate(article.publishedAt)}
        {article.updatedAt ? ` • Mis à jour ${displayDate(article.updatedAt)}` : ""}
      </div>
      <div className={styles.separator} />
      <Button
        iconId="fr-icon-printer-line"
        onClick={() => {}}
        priority="tertiary"
        title="Label button"
        size="small"
      />
    </div>
  );
}
