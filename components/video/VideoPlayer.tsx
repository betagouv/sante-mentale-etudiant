import { VideoTestimonial } from "./types";
import styles from "./VideoPlayer.module.scss";

export interface VideoPlayerProps {
  testimonial: VideoTestimonial;
}

export function VideoPlayer({ testimonial }: VideoPlayerProps) {
  return (
    <iframe
      title={testimonial.citation || testimonial.guest?.name}
      src={testimonial.videoUrl}
      className={styles.video}
      allow="autoplay; fullscreen"
      sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
    />
  );
}
