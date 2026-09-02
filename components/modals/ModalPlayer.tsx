import { VideoTestimonials } from "../home/videos/types";
import styles from "./ModalPlayer.module.scss";

export interface ModalPlayerProps {
  testimonial: VideoTestimonials;
}

export function ModalPlayer({ testimonial }: ModalPlayerProps) {
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
