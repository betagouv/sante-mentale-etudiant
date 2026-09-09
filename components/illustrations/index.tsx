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

export const IllustrationHomeWave = () => (
  <RenderImage
    src="/images/illustrations/home/wave.svg"
    width={1110}
    height={608}
    className={styles.homeWave}
  />
);

export const IllustrationHomeFeelingsWave = () => (
  <RenderImage
    src="/images/illustrations/home/wave2.svg"
    width={1190}
    height={754}
    className={styles.homeWave2}
  />
);

export const IllustrationHomeMozaic = () => (
  <RenderImage
    src="/images/illustrations/home/mozaic.svg"
    width={367}
    height={424}
    className={styles.homeMozaic}
  />
);

export const IllustrationHomePeopleDesktop = () => (
  <RenderImage
    src="/images/illustrations/home/people-desktop.png"
    width={562}
    height={344}
    className={styles.homePeopleDesktop}
  />
);

export const IllustrationHomePeopleMobile = () => (
  <RenderImage
    src="/images/illustrations/home/mobile.png"
    width={327}
    height={147}
    className={styles.homePeopleMobile}
  />
);

export const IllustrationHomeGirlDesktop = () => (
  <RenderImage
    src="/images/illustrations/home/girl-desktop.png"
    width={313}
    height={392}
    className={styles.homeGirlDesktop}
  />
);

export const IllustrationHomeTestimonials1 = () => (
  <RenderImage
    src="/images/illustrations/home/question1.svg"
    width={239}
    height={217}
    className={styles.homeTestimonial1}
  />
);

export const IllustrationHomeTestimonials2 = () => (
  <RenderImage
    src="/images/illustrations/home/question2.svg"
    width={163}
    height={168}
    className={styles.homeTestimonial2}
  />
);

export const IllustrationHelpLeft1 = () => (
  <RenderImage
    src="/images/illustrations/help/left1.svg"
    width={141}
    height={414}
    className={styles.helpLeft1}
  />
);

export const IllustrationHelpLeft2 = () => (
  <RenderImage
    src="/images/illustrations/help/left2.svg"
    width={247}
    height={387}
    className={styles.helpLeft2}
  />
);

export const IllustrationHelpRight = () => (
  <RenderImage
    src="/images/illustrations/help/right.svg"
    width={327}
    height={393}
    className={styles.helpRight}
  />
);

export const IllustrationHelpSigns = () => (
  <RenderImage
    src="/images/illustrations/help/signs.svg"
    width={532}
    height={776}
    className={styles.helpSigns}
  />
);

export const IllustrationArticlesLeft1 = () => (
  <RenderImage
    src="/images/illustrations/articles/left1.svg"
    width={320}
    height={467}
    className={styles.articlesLeft1}
  />
);

export const IllustrationArticlesLeft2 = () => (
  <RenderImage
    src="/images/illustrations/articles/left2.svg"
    width={244}
    height={248}
    className={styles.articlesLeft2}
  />
);

export const IllustrationArticlesRight = () => (
  <RenderImage
    src="/images/illustrations/articles/right.svg"
    width={318}
    height={467}
    className={styles.articlesRight}
  />
);
