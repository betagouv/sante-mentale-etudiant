import styles from "./ArticleHeroImage.module.scss";
import { ArticleMeta } from "@/lib/articles/types";
import Image from "next/image";
import ReadingTime from "./ReadingTime";

type Props = {
  article: ArticleMeta;
};
export default function ArticleHeroImage({ article }: Props) {
  return (
    <div className={styles.heroWrapper}>
      <Image
        src={article.heroImage}
        alt={article.title}
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}
        priority
      />
      <ReadingTime className={styles.heroBadge} time={article.readingTime} />
    </div>
  );
}
