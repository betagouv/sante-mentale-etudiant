import { ArticleMeta } from "@/lib/articles/types";
import { Badge } from "@codegouvfr/react-dsfr/Badge";
import { Card } from "@codegouvfr/react-dsfr/Card";
import { Tag } from "@codegouvfr/react-dsfr/Tag";
import styles from "./ArticleCard.module.scss";
import { renderReadingTime } from "./Helper";
import { getFeelingBySlug } from "@/lib/feelings";

type Props = {
  article: ArticleMeta;
  titleAs?: "h3" | "h2" | "h4" | "h5" | "h6" | undefined;
};

export const ArticleCard = ({ article, titleAs = "h3" }: Props) => {
  const link =
    article.type === "internal"
      ? { href: `/s-informer/${article.slug}` }
      : {
        href: article.url,
        referrerPolicy: "no-referrer" as const,
        target: "_blank" as const,
        rel: "noopener noreferrer",
      };

  const mainFeeling = getFeelingBySlug(article.mainFeelingSlug);
  return (
    <Card
      className={styles.card}
      background
      badge={
        <Badge severity="new" noIcon>
          Article
        </Badge>
      }
      border
      enlargeLink
      imageAlt=""
      imageUrl={article.heroImage}
      linkProps={link}
      size="small"
      start={
        <ul className="fr-tags-group">
          <li>
            <Tag>{mainFeeling?.name}</Tag>
          </li>
        </ul>
      }
      title={article.title}
      titleAs={titleAs}
      endDetail={
        <>
          {article.readingTime && renderReadingTime(article.readingTime)}
          {article.type === "external" ? " • Lien externe" : ""}
        </>
      }
    />
  );
};
