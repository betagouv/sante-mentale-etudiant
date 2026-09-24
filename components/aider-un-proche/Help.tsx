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
          <p>
            C'est déjà beaucoup de t'en préoccuper. Voici comment reconnaître les signes de
            détresse, comment réagir et comment prendre soin de toi aussi.
          </p>
          <p>
            Pas besoin d'être expert. Si quelque chose t’inquiète, fais confiance à ton ressenti.
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
