import HelpCall from "./HelpCall";
import HelpReact from "./HelpReact";
import HelpSigns from "./HelpSigns";
import styles from "./Help.module.scss";
import HelpWords from "./HelpWords";
import HelpYourself from "./HelpYourself";
import NeedToTalkBanner from "../common/NeedToTalkBanner";
import FullBleedSection from "../wrapper/FullBleedSection";
import {
  IllustrationHelpLeft1,
  IllustrationHelpLeft2,
  IllustrationHelpRight,
} from "../illustrations";

export default function Help() {
  return (
    <div>
      <FullBleedSection bgColor="grey">
        <div className={styles.container}>
          <IllustrationHelpLeft1 />
          <IllustrationHelpLeft2 />
          <IllustrationHelpRight />
          <h1 className={styles.title}>
            Tu t'inquiètes <br /> pour un proche ?
          </h1>
          <p className={styles.subtitle}>
            C'est déjà beaucoup de t'en préoccuper. Voici comment reconnaître les signes, comment
            agir et comment prendre soin de toi aussi.
          </p>
        </div>
      </FullBleedSection>
      <HelpSigns />
      <HelpCall />
      <HelpReact />
      <HelpWords />
      <HelpYourself />
      <NeedToTalkBanner />
    </div>
  );
}
