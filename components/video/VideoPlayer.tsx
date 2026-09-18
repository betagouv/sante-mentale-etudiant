import { VideoTestimonial } from "./types";
import styles from "./VideoPlayer.module.scss";

export interface VideoPlayerProps {
  testimonial: VideoTestimonial;
}

export function VideoPlayer({ testimonial }: VideoPlayerProps) {

  const autoplayVideo = `${testimonial.videoUrl}${testimonial.videoUrl?.includes("?") ? "&" : "?"}autoplay=1&mute=1`;

  return (
    <iframe
      title={testimonial.citation || testimonial.guest?.name}
      src={autoplayVideo}
      className={styles.video}
      allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
      sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
    />
  );
}
