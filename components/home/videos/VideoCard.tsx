import { useState } from "react";
import styles from "./VideoCard.module.scss";
import { VideoTestimonials } from "./types";

export interface VideoCardProps {
  testimonial: VideoTestimonials;
  onOpen: (testimonial: VideoTestimonials) => void;
}

export function VideoCard({ testimonial, onOpen }: VideoCardProps) {
  const [isPreviewActive, setIsPreviewActive] = useState(false);

  return (
    <button
      type="button"
      className={styles.card}
      onClick={() => onOpen(testimonial)}
      onPointerEnter={() => setIsPreviewActive(true)}
      onPointerLeave={() => setIsPreviewActive(false)}
      onFocus={() => setIsPreviewActive(true)}
      onBlur={() => setIsPreviewActive(false)}
      aria-label={`Lire le témoignage : ${testimonial.citation}`}
    >
      <span className={styles.thumbnail}>
        {isPreviewActive && testimonial.previewUrl ? (
          <video
            src={testimonial.previewUrl}
            className={styles.poster}
            muted
            loop
            autoPlay
            playsInline
            preload="metadata"
            aria-hidden="true"
          />
        ) : (
          testimonial.posterUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={testimonial.posterUrl} alt="" className={styles.poster} />
          )
        )}
        <span className={`${styles.playIcon} fr-icon-play-fill`} aria-hidden="true" />
      </span>

      <span className={styles.citation}>« {testimonial.citation} »</span>
    </button>
  );
}
