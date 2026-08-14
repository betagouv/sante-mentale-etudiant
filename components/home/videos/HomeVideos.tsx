"use client";

import { useState } from "react";
import { createModal } from "@codegouvfr/react-dsfr/Modal";
import Button from "@codegouvfr/react-dsfr/Button";
import styles from "./HomeVideos.module.scss";
import { useVideoModalDismissed } from "@/hooks/useVideoModalDismissed";
import { VideoTestimonials } from "./types";
import { useCarouselScroll } from "@/hooks/useCarouselScroll";
import FullBleedSection from "@/components/wrapper/FullBleedSection";
import { VideoCard } from "./VideoCard";
import { ModalPlayer } from "@/components/modals/ModalPlayer";
import { testimonials } from "./data";

const videoModal = createModal({
  id: "video-card-modal",
  isOpenedByDefault: false,
});

const CARD_WIDTH = 320;
const CARD_GAP = 32;
const STEP = CARD_WIDTH + CARD_GAP;

export interface HomeVideosProps {
  title?: string;
  description?: string;
}

export default function HomeVideos({
  title = "Une histoire qui pourrait être la tienne",
  description = "Des étudiants racontent, simplement, ce qu'ils ont vécu.",
}: HomeVideosProps) {
  const { trackRef, activeIndex, scrollToIndex } = useCarouselScroll(testimonials.length, STEP);
  const [activeTestimonial, setActiveTestimonial] = useState<VideoTestimonials | null>(null);

  useVideoModalDismissed(videoModal.id, () => setActiveTestimonial(null));

  const openVideo = (testimonial: VideoTestimonials) => {
    setActiveTestimonial(testimonial);
    videoModal.open();
  };

  return (
    <FullBleedSection
      className={styles.section}
      containerClassName={styles.container}
      aria-labelledby="video-testimonials-title"
    >
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
              disabled={activeIndex === 0}
            />
            <Button
              iconId="fr-icon-arrow-right-line"
              priority="secondary"
              title="Témoignages suivants"
              onClick={() => scrollToIndex(activeIndex + 1)}
              disabled={activeIndex === testimonials.length - 1}
            />
          </div>
        </div>

        {/* for screen readers */}
        <p className="fr-sr-only" role="status" aria-live="polite">
          Témoignage {activeIndex + 1} sur {testimonials.length}
        </p>
      </div>

      <videoModal.Component
        title={activeTestimonial ? `« ${activeTestimonial.citation} »` : "Témoignage vidéo"}
      >
        {activeTestimonial && <ModalPlayer key={activeTestimonial.key} testimonial={activeTestimonial} />}
      </videoModal.Component>
    </FullBleedSection>
  );
}
