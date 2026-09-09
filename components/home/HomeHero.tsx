import {
  IllustrationHomeGirlDesktop,
  IllustrationHomeMozaic,
  IllustrationHomePeopleDesktop,
  IllustrationHomeWave,
} from "../illustrations";
import FullBleedSection from "../wrapper/FullBleedSection";
import styles from "./HomeHero.module.scss";
import LaunchOrienteurCard from "./orienteur/LaunchOrienteurCard";

export default function HomeHero() {
  return (
    <FullBleedSection
      className={styles.hero}
      containerClassName={styles.heroContainer}
      aria-labelledby="cta-hero"
    >
      <IllustrationHomeWave />
      <IllustrationHomeMozaic />
      <IllustrationHomeGirlDesktop />
      <IllustrationHomePeopleDesktop />
      <div className={styles.firstGrid}>
        <h1 className={styles.title}>
          La santé mentale des étudiants, <span className={styles.highlight}>parlons-en.</span>
        </h1>
      </div>
      <div className={styles.secondGrid}>
        <LaunchOrienteurCard />
      </div>
    </FullBleedSection>
  );
}
