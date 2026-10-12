import {
  InternalArticleMeta,
  PodcastArticleMeta,
} from "@/lib/articles/types";
import FullBleedSection from "../../wrapper/FullBleedSection";
import ArticleInfo from "./ArticleInfo";
import ArticleHeroImage from "./ArticleHeroImage";
import styles from "./Article.module.scss";
import PodcastPlayer from "@/components/podcast-player/PodcastPlayer";

type Props = {
  article: (InternalArticleMeta | PodcastArticleMeta) & {
    html: string;
  };
};

export default function Article({ article }: Props) {
  const { title, html, type } = article;
  const isInternal = type === "internal";
  const isPodcast = type === "podcast";

  return (
    <FullBleedSection innerContainerClassName={styles.pageContainer} bgColor="grey">
      <article className={styles.container}>
        <header className={styles.header}>
          <h1>{title}</h1>
          {isInternal && (
            <div
              className={styles.intro}
              dangerouslySetInnerHTML={{ __html: article.intro }}
            />
          )}
          <ArticleInfo article={article} />
        </header>

        {isInternal && <ArticleHeroImage article={article} />}

        <div className={styles.body}>
          {isInternal && article.heroCredits && (
            <div
              className={styles.heroCredits}
              dangerouslySetInnerHTML={{
                __html: article.heroCredits,
              }}
            />
          )}
          {isPodcast && (
            <PodcastPlayer
              title={title}
              podcastUrl={article.podcastUrl}
              transcription={article.transcription}
            />
          )}
          <div
            className={styles.article}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </article>
    </FullBleedSection>
  );
}
