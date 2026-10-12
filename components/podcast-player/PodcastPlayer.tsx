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
        width="100%"
        height="200"
        loading="lazy"
      />
      {transcription && (
        <Accordion label="Transcription">
          <p className={styles.transcription}>{transcription}</p>
        </Accordion>
      )}
    </section>
  );
}
