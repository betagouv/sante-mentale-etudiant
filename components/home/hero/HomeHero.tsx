import {
  IllustrationHomeGirlDesktop,
  IllustrationHomeMozaic,
  IllustrationHomePeopleDesktop,
  IllustrationHomePeopleMobile,
} from "../../illustrations";
import FullBleedSection from "../../wrapper/FullBleedSection";
import LaunchOrienteurCard from "../orienteur/LaunchOrienteurCard";
import styles from "./HomeHero.module.scss";

export default function HomeHero() {
  return (
    <FullBleedSection
      innerContainerClassName={styles.heroContainer}
      ariaLabelledBy="cta-hero"
      bgColor="purple"
      borderColor="yellow"
    >
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
