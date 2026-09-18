"use client";

import Button from "@codegouvfr/react-dsfr/Button";
import styles from "./HomeVideos.module.scss";
import { useCarouselScroll } from "@/hooks/useCarouselScroll";
import FullBleedSection from "@/components/wrapper/FullBleedSection";
import { testimonials } from "../../../data/videos";
import { VideoPlayer } from "@/components/video-player/VideoPlayer";
import {
  IllustrationHomeTestimonials1,
  IllustrationHomeTestimonials2,
} from "@/components/illustrations";

import { useVideoTestimonialModal } from "@/components/video/VideoTestimonialModalProvider";
import { VideoCard } from "@/components/video/VideoCard";

const CARD_WIDTH = 320;
const CARD_GAP = 32;
const STEP = CARD_WIDTH + CARD_GAP;

export interface HomeVideosProps {
  title?: string;
  description?: string;
}

export default function HomeVideos({
  title = "Un premier pas, ça peut être ça",
  description = "Des dispositifs gratuits et confidentiels pour t’accompagner, quand tu en as besoin",
}: HomeVideosProps) {
  const { trackRef, activeIndex, scrollToIndex, canScrollPrev, canScrollNext } = useCarouselScroll(
    testimonials.length,
    STEP
  );
  const { openVideo } = useVideoTestimonialModal();

  return (
    <FullBleedSection aria-labelledby="video-testimonials-title" bgColor="grey">
      <IllustrationHomeTestimonials1 />
      <IllustrationHomeTestimonials2 />
      <div className={styles.header}>
        <h2 id="video-testimonials-title">{title}</h2>
        {description && <p className={styles.description}>{description}</p>}
      </div>

      <div className={styles.carousel}>
        <ul ref={trackRef} className={styles.track}>
          {testimonials.map((testimonial) => (
            <li key={testimonial.key} className={styles.slide}>
              <VideoCard testimonial={testimonial} onOpen={openVideo} />
            </li>
          ))}
        </ul>

        <div className={`${styles.controlsWrapper} fr-hidden fr-unhidden-md`}>
          <div className={styles.controls}>
            <Button
              iconId="fr-icon-arrow-left-line"
              priority="secondary"
              title="Témoignages précédents"
              onClick={() => scrollToIndex(activeIndex - 1)}
              disabled={!canScrollPrev}
            />
            <Button
              iconId="fr-icon-arrow-right-line"
              priority="secondary"
              title="Témoignages suivants"
              onClick={() => scrollToIndex(activeIndex + 1)}
              disabled={!canScrollNext}
            />
          </div>
        </div>

        {/* for screen readers */}
        <p className="fr-sr-only" role="status" aria-live="polite">
          Témoignage {activeIndex + 1} sur {testimonials.length}
        </p>
      </div>
    </FullBleedSection>
  );
}
