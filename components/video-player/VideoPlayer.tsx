
import { VideoTestimonial } from "../home/videos/types";
import styles from "./VideoPlayer.module.scss";

export interface VideoPlayerProps {
  testimonial: VideoTestimonial;
}

export function VideoPlayer({ testimonial }: VideoPlayerProps) {
  return (
    <video
      src={testimonial.videoUrl}
      poster={testimonial.posterUrl}
      controls
      autoPlay
      playsInline
      preload="auto"
      className={styles.video}
    >
      Votre navigateur ne peut pas lire cette vidéo.
    </video>
  );
}
