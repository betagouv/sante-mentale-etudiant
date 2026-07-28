"use client";
import { Tag } from "@codegouvfr/react-dsfr/Tag";
import { Button } from "@codegouvfr/react-dsfr/Button";
import { ArticleMeta } from "@/lib/articles/types";
import styles from "./ArticleInfo.module.scss";

type Props = {
  article: ArticleMeta;
};
export default function ArticleInfo({ article }: Props) {
  return (
    <div className={styles.wrapper}>
      <Tag className={styles.tag}>Anxiété</Tag>
      <div className={styles.published}>Publié le 27/12/2026 • Mis à jour 27/04/27</div>
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
