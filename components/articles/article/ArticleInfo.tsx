import { Tag } from "@codegouvfr/react-dsfr/Tag";
import { Button } from "@codegouvfr/react-dsfr/Button";
import { InternalArticleMeta, PodcastArticleMeta } from "@/lib/articles/types";
import styles from "./ArticleInfo.module.scss";
import { displayDate } from "@/utils/misc";
import { getFeelingBySlug } from "@/lib/feelings";

type Props = {
  article: InternalArticleMeta | PodcastArticleMeta;
};
export default function ArticleInfo({ article }: Props) {
  const mainFeeling = getFeelingBySlug(article.mainFeelingSlug);
  const updatedAt = article.type === "internal" ? article.updatedAt : undefined

  return (
    <div className={styles.wrapper}>
      <Tag className={styles.tag}>{mainFeeling?.name}</Tag>
      <div className={styles.published}>
        Publié le {displayDate(article.publishedAt)}
        {updatedAt ? ` • Mis à jour ${displayDate(updatedAt)}` : ""}
      </div>
      <div className={styles.separator} />
      <Button iconId="fr-icon-printer-line" priority="tertiary" title="Label button" size="small" />
    </div>
  );
}
