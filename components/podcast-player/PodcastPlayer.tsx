import Accordion from "@codegouvfr/react-dsfr/Accordion";
import styles from "./PodcastPlayer.module.scss";

type PodcastProps = {
  title: string;
  podcastUrl: string;
  transcription: string;
};

export default function PodcastPlayer({
  title,
  podcastUrl,
  transcription,
}: PodcastProps) {
  return (
    <section aria-label={`Podcast : ${title}`}>
      <iframe
        src={podcastUrl}
        title={`Lecteur audio : ${title}`}
        className={styles.player}
        height="200"
        loading="lazy"
      />
      {transcription && (
        <Accordion label="Transcription" titleAs="h2" className={styles.accordion}>
          <p className={styles.transcription}>{transcription}</p>
        </Accordion>
      )}
    </section>
  );
}
