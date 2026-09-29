import { useState } from "react";
import { VideoPlayer } from "./VideoPlayer";
import { VideoTestimonial } from "./types";
import styles from "./VideoModalContent.module.scss";

export function VideoModalContent({ testimonial }: { testimonial: VideoTestimonial }) {
  const [isTranscriptionOpen, setIsTranscriptionOpen] = useState(false);
  const panelId = `video-transcription-${testimonial.key}`;
  const { transcription } = testimonial;

  return (
    <div>
      {transcription && (
        <div className={styles.toolbar}>
          <button
            type="button"
            className={`fr-btn fr-btn--sm fr-btn--tertiary-no-outline fr-btn--icon-right fr-icon-arrow-right-line ${styles.transcriptionBtn}`}
            aria-expanded={isTranscriptionOpen}
            aria-controls={panelId}
            onClick={() => setIsTranscriptionOpen((open) => !open)}
          >
            Transcription
          </button>
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