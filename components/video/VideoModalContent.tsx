import { useState } from "react";
import { VideoPlayer } from "./VideoPlayer";
import { VideoTestimonial } from "./types";
import styles from "./VideoModalContent.module.scss";
import Button from "@codegouvfr/react-dsfr/Button";

export function VideoModalContent({ testimonial }: { testimonial: VideoTestimonial }) {
  const [isTranscriptionOpen, setIsTranscriptionOpen] = useState(false);
  const panelId = `video-transcription-${testimonial.key}`;
  const { transcription } = testimonial;

  return (
    <div>
      {transcription && (
        <div className={styles.toolbar}>
          <Button
            priority="tertiary no outline"
            size="small"
            iconId="fr-icon-arrow-right-line"
            iconPosition="right"
            onClick={() => setIsTranscriptionOpen((open) => !open)}
            nativeButtonProps={{
              "aria-expanded": isTranscriptionOpen,
              "aria-controls": panelId,
            }}
            className={styles.transcriptionBtn}
          >
            Transcription
          </Button>
        </div>
      )}

      <div className={styles.player}>
        {transcription && (
          <div
            id={panelId}
            className={styles.panel}
            hidden={!isTranscriptionOpen}
            role="region"
            aria-label="Transcription de la vidéo"
            tabIndex={0}
          >
            {transcription.split("\n\n").map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        )}

        <div inert={isTranscriptionOpen}>
          <VideoPlayer testimonial={testimonial} />
        </div>
      </div>
    </div>
  );
}