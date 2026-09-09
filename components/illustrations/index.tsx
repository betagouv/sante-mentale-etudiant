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

export const IllustrationWave = () => (
  <RenderImage
    src="/images/illustrations/needToTalkBanner/wave.svg"
    width={1440}
    height={452}
    className={styles.needToTalkStandingLeft}
  />
);
