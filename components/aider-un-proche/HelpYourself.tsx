import styles from "./HelpYourself.module.scss";
import { LightPinkBadge } from "../common/Badges";
import FullBleedSection from "../wrapper/FullBleedSection";
import { IllustrationHelpCare } from "../illustrations";

export default function HelpYourself() {
  return (
    <FullBleedSection bgColor="grey">
      <IllustrationHelpCare />
      <div className={styles.textColumn}>
        <LightPinkBadge>étape 3</LightPinkBadge>
        <h2 className={styles.title}>Prends soin de toi</h2>
        <p className={styles.intro}>
          Accompagner un proche en difficulté peut être pesant. Tes émotions sont légitimes. Tu as
          aussi le droit d'en parler à quelqu'un, et de poser des limites.
        </p>
        <p>Tu n’es pas thérapeute, tu n’as pas à porter seul cette situation.</p>
        <p>Repose-toi, garde tes propres activités, parle à un ami ou un professionnel.</p>
        <p>
          N’attends pas que la situation te dépasse, tu peux être orienté ou aidé en en parlant à
          ton SSE ou à une ligne d’écoute
        </p>
      </div>
    </FullBleedSection>
  );
}
