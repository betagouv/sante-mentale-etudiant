import React from "react";
import Image from "next/image";
import styles from "./illustrations.module.scss";

type Props = {
  src: string;
  width: number;
  height: number;
  alt?: string;
  className: string;
};

const RenderImage = ({ src, width, height, alt = "", className }: Props) => (
  <Image
    src={src}
    alt={alt}
    aria-hidden="true"
    width={width}
    height={height}
    className={`${styles.illustration} ${className}`}
  />
);

export const IllustrationNeedToTalkSittingLeft = () => (
  <RenderImage
    src="/images/illustrations/needToTalkBanner/sitting-left.png"
    width={213}
    height={239}
    className={styles.needToTalkSittingLeft}
  />
);

export const IllustrationNeedToTalkStandingLeft = () => (
  <RenderImage
    src="/images/illustrations/needToTalkBanner/standing-left.png"
    width={110}
    height={425}
    className={styles.needToTalkStandingLeft}
  />
);
export const IllustrationNeedToTalkSittingRight = () => (
  <RenderImage
    src="/images/illustrations/needToTalkBanner/sitting-right.png"
    width={294}
    height={214}
    className={styles.needToTalkSittingRight}
  />
);

export const IllustrationNeedToTalkStandingRight = () => (
  <RenderImage
    src="/images/illustrations/needToTalkBanner/standing-right.png"
    width={129}
    height={430}
    className={styles.needToTalkStandingRight}
  />
);

export const IllustrationNeedToTalkWave = () => (
  <RenderImage
    src="/images/illustrations/needToTalkBanner/wave.svg"
    width={1440}
    height={452}
    className={styles.needToTalkStandingLeft}
  />
);

export const IllustrationFeelingVideo = () => (
  <RenderImage
    src="/images/illustrations/feeling-video.svg"
    width={369}
    height={740}
    className={styles.feelingVideo}
  />
);
