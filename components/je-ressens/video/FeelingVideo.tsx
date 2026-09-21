"use client";

import FullBleedSection from "../../wrapper/FullBleedSection";
import styles from "./FeelingVideo.module.scss";
import { Feeling as FeelingType } from "@/lib/feelings/types";
import NeedHelp from "./NeedHelp";
import { IllustrationFeelingVideo } from "@/components/illustrations";
import { useVideoTestimonialModal } from "@/components/video/VideoTestimonialModalProvider";
import { VideoCard } from "@/components/video/VideoCard";

type Props = {
  feeling: FeelingType;
};

export default function FeelingVideo({ feeling }: Props) {
  const { openVideo } = useVideoTestimonialModal();

  return (
    <FullBleedSection
      bgColor="purple"
      borderColor="yellow"
      innerContainerClassName={styles.innerContainer}
    >
      <IllustrationFeelingVideo />
      <div className={styles.content}>
        <div className={styles.desc}>
          <h1>{feeling.catch.description}</h1>
          {feeling.catch.sentence}
          <div className={styles.duration}>
            <span className="fr-icon--md fr-icon-time-line" />
            <span>{feeling.video.duration} minutes</span>
          </div>
          <div className={styles.guest}>
            <div className="fr-icon--md fr-icon-user-line" />
            <div>
              Avec <b>{feeling.video.guest?.name}</b>
              <br />
              {feeling.video.guest?.role}
            </div>
          </div>
        </div>
        <VideoCard testimonial={feeling.video} onOpen={openVideo} />
        <NeedHelp />
      </div>
    </FullBleedSection>
  );
}
