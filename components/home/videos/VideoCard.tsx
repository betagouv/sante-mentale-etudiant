import { useState } from "react";
import Image from "next/image";
import styles from "./VideoCard.module.scss";
import { VideoTestimonial } from "./types";

export interface VideoCardProps {
  testimonial: VideoTestimonial;
  onOpen: (testimonial: VideoTestimonial) => void;
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
            <Image
              src={testimonial.posterUrl}
              alt=""
              width={320}
              height={500}
              className={styles.poster}
            />
          )
        )}
        <span className={`${styles.playIcon} fr-icon-play-fill fr-icon--lg`} aria-hidden="true" />
      </span>

      <span className={styles.citation}>« {testimonial.citation} »</span>
    </button>
  );
}
