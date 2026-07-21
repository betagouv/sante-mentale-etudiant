import FullBleedSection from "../wrapper/FullBleedSection";
import styles from "./HelpSigns.module.scss";
import { signCategories } from "./data/signs";
import { LightBrownBadge } from "@/components/common/Badges";


export default function HelpSigns() {
  return (
    <FullBleedSection className={styles.section} containerClassName={styles.container} aria-labelledby="signs-title">
      <LightBrownBadge>Étape 1</LightBrownBadge>
      <div className={styles.titlesWrapper}>
        <h2 id="signs-title" className={styles.title}>
          Repérer les premiers signes
        </h2>
        <p className={styles.subtitle}>
          <b>Pas besoin d'être expert.</b> Souvent, ce sont plusieurs petits signaux qui s'accumulent. <br /> Si
          quelque chose t'inquiète, fais confiance à ton ressenti.
        </p>
      </div>

      <div className={styles.cards}>
        {signCategories.map((category) => (
          <div key={category.title} className={`fr-card fr-card--shadow ${styles.card}`}>
            <img src={category.icon} alt="" className={styles.cardIcon} />
            <h3 className={styles.cardTitle}>{category.title}</h3>
            <p className={styles.cardSubtitle}>{category.subtitle}</p>
            <ul className={styles.cardList}>
              {category.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </FullBleedSection>
  );
}
