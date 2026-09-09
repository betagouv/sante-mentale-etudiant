import {
  IllustrationHomeGirlDesktop,
  IllustrationHomeMozaic,
  IllustrationHomePeopleDesktop,
  IllustrationHomePeopleMobile,
  IllustrationHomeWave,
} from "../illustrations";
import FullBleedSection from "../wrapper/FullBleedSection";
import styles from "./HomeHero.module.scss";
import LaunchOrienteurCard from "./orienteur/LaunchOrienteurCard";

export default function HomeHero() {
  return (
    <FullBleedSection
      containerClassName={styles.heroContainer}
      aria-labelledby="cta-hero"
      bgColor="purple"
      borderColor="yellow"
    >
      <IllustrationHomeWave />
      <IllustrationHomeMozaic />
      <IllustrationHomeGirlDesktop />
      <IllustrationHomePeopleDesktop />
      <div className={styles.title}>
        <IllustrationHomePeopleMobile />
        <h1>
          La santé mentale des étudiants, <span className={styles.highlight}>parlons-en.</span>
        </h1>
      </div>
      <div className={styles.orienteur}>
        <LaunchOrienteurCard />
      </div>
    </FullBleedSection>
  );
}
