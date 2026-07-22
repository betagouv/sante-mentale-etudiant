import Image from "next/image";
import styles from "./HelpYourself.module.scss";
import careImage from "@/public/images/pictures/psy.jpg";
import { LightPinkBadge } from "../common/Badges";
import FullBleedSection from "../wrapper/FullBleedSection";

export default function HelpYourself() {
  return (
    <FullBleedSection className={styles.section} containerClassName={styles.container} >
      <div className={styles.textColumn}>
        <LightPinkBadge>étape 3</LightPinkBadge>
        <h2 className={styles.title}>Prends soin de toi</h2>
        <p className={styles.intro}>
          Accompagner un proche en difficulté peut être pesant. Tes émotions sont légitimes. Tu as aussi le droit d'en parler à quelqu'un, et de poser des limites.
        </p>
        <p>Tu n’es pas thérapeute, tu n’as pas à porter seul cette situation.</p>
        <p>Repose-toi, garde tes propres activités, parle à un ami ou un professionnel.</p>
        <p>
          Si la situation te dépasse, contacte toi-même une ligne d'écoute : c'est aussi pour toi.
        </p>
      </div>
      <div className={styles.imageColumn}>
        <Image src={careImage} alt="" fill className={styles.image} />
      </div>
    </FullBleedSection>
  );
}
