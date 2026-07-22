import HelpCall from "./HelpCall";
import HelpReact from "./HelpReact";
import HelpSigns from "./HelpSigns";
import styles from "./Help.module.scss";
import HelpWords from "./HelpWords";
import HelpYourself from "./HelpYourself";
import NeedToTalkBanner from "../besoin-de-parler/NeedToTalkBanner";
import FullBleedSection from "../wrapper/FullBleedSection";

export default function Help() {
  return (
    <div>
      <FullBleedSection className={styles.section} containerClassName={styles.container}>
        <h1 className={styles.title}>Tu t'inquiètes <br /> pour un proche ?</h1>
        <p className={styles.subtitle}>
          C'est déjà beaucoup de t'en préoccuper. Voici comment reconnaître les signes, comment agir et comment prendre soin de toi aussi.
        </p>
      </FullBleedSection>
      <HelpSigns />
      <HelpCall />
      <HelpReact />
      <HelpWords />
      <HelpYourself />
      <NeedToTalkBanner />
    </div>
  )
}
