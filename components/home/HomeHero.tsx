import FullBleedSection from "../wrapper/FullBleedSection";
import styles from "./HomeHero.module.scss";
import LaunchOrienteurCard from "./orienteur/LaunchOrienteurCard";

export default function HomeHero() {
  return (
    <FullBleedSection className={styles.hero} containerClassName={styles.heroContainer} aria-labelledby="cta-hero">
      <div className={styles.firstGrid}>
        <h1 className={styles.title}>
          La santé mentale des étudiants,{" "}
          <span className={styles.highlight}>parlons-en.</span>
        </h1>
        <picture className={styles.picture}>
          <img
            src="/images/illustrations/students-support.svg"
            alt=""
            className={styles.heroImage}
          />
        </picture>
      </div>
      <div className={styles.secondGrid}>
        <LaunchOrienteurCard />
      </div>
    </FullBleedSection>
  );
}