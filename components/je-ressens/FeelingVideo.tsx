import Image from "next/image";
import FullBleedSection from "../wrapper/FullBleedSection";
import styles from "./FeelingVideo.module.scss";
import { Feeling as FeelingType } from "@/lib/feelings/types";

type Props = {
  feeling: FeelingType;
};
export default function FeelingVideo({ feeling }: Props) {
  return (
    <FullBleedSection className={styles.section} containerClassName={styles.container}>
      <Image
        src="/images/illustrations/feeling-video.svg"
        alt=""
        aria-hidden="true"
        width={369}
        height={740}
        className={styles.illustration}
      />
      <div className={styles.content}>
        <div className={styles.desc}>
          <h1>{feeling.catch.description}</h1>
          <p dangerouslySetInnerHTML={{ __html: feeling.catch.sentence }} />
          <div className={styles.duration}>
            <span className="fr-icon--md fr-icon-time-line" />
            <span>{feeling.video.duration} minutes</span>
          </div>
          <div className={styles.guest}>
            <div className="fr-icon--md fr-icon-user-line" />
            <div>
              Avec <b>{feeling.video.guest.name}</b>
              <br />
              {feeling.video.guest.role}
            </div>
          </div>
        </div>
        <div className={styles.video}>
          <img src="/images/tmp/tmp_video.jpg" />
        </div>
        <div className={styles.help}>need help</div>
      </div>
    </FullBleedSection>
  );
}
