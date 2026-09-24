import { useRef, useState } from "react";
import Image from "next/image";
import styles from "./VideoCard.module.scss";
import { VideoTestimonial } from "./types";

export interface VideoCardProps {
  testimonial: VideoTestimonial;
  onOpen: (testimonial: VideoTestimonial) => void;
}

export function VideoCard({ testimonial, onOpen }: VideoCardProps) {
  const [isPreviewActive, setIsPreviewActive] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const activatePreview = () => {
    setIsPreviewActive(true);
    videoRef.current?.play();
  };

  const deactivatePreview = () => {
    setIsPreviewActive(false);
    videoRef.current?.pause();
  };

  return (
    <button
      type="button"
      className={styles.card}
      onClick={() => onOpen(testimonial)}
      onPointerEnter={activatePreview}
      onPointerLeave={deactivatePreview}
      onFocus={activatePreview}
      onBlur={deactivatePreview}
      aria-label={`Lire le témoignage : ${testimonial.citation}`}
    >
      <span className={styles.thumbnail}>
        {testimonial.posterUrl && (
          <Image
            src={testimonial.posterUrl}
            alt=""
            width={320}
            height={500}
            className={styles.poster}
          />
        )}

        {testimonial.previewUrl && (
          <video
            ref={videoRef}
            src={testimonial.previewUrl}
            className={`${styles.poster} ${styles.previewVideo} ${isPreviewActive ? styles.previewVisible : ""}`}
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          />
        )}

        <span className={`${styles.playIcon} fr-icon-play-fill fr-icon--lg`} aria-hidden="true" />
      </span>

      {testimonial.citation && (
        <span className={styles.citation}>«&nbsp;{testimonial.citation}&nbsp;»</span>
      )}
    </button>
  );
}
