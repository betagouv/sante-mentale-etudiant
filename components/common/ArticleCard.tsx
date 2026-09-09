import { ArticleMeta } from "@/lib/articles/types";
import { Badge } from "@codegouvfr/react-dsfr/Badge";
import { Card } from "@codegouvfr/react-dsfr/Card";
import { Tag } from "@codegouvfr/react-dsfr/Tag";
import styles from "./ArticleCard.module.scss";
import { renderReadingTime } from "./Helper";

type Props = {
  article: ArticleMeta;
};

export const ArticleCard = ({ article }: Props) => {
  const link =
    article.type === "internal"
      ? { href: `/articles/${article.slug}` }
      : {
          href: article.url,
          referrerPolicy: "no-referrer" as const,
          target: "_blank" as const,
          rel: "noopener noreferrer",
        };
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
            <Tag>{article.mainFeeling.name}</Tag>
          </li>
        </ul>
      }
      title={article.title}
      titleAs="h3"
      endDetail={
        <>
          {renderReadingTime(article.readingTime)}
          {article.type === "external" ? " • Lien externe" : ""}
        </>
      }
    />
  );
};
