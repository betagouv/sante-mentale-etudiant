import { IllustrationHelpSigns } from "../illustrations";
import FullBleedSection from "../wrapper/FullBleedSection";
import styles from "./HelpSigns.module.scss";
import { signCategories } from "./data/signs";
import { LightPinkBadge } from "@/components/common/Badges";

export default function HelpSigns() {
  return (
    <FullBleedSection
      containerClassName={styles.container}
      aria-labelledby="signs-title"
      bgColor="purple"
    >
      <IllustrationHelpSigns />
      <LightPinkBadge>Étape 1</LightPinkBadge>
      <div className={styles.titlesWrapper}>
        <h2 id="signs-title" className={styles.title}>
          Repérer les premiers signes de mal-être
        </h2>
        <p className={styles.subtitle}>
          Souvent, ce sont plusieurs petits signaux qui s'accumulent. Pris isolément, ces
          comportements ne sont pas forcément inquiétants, surtout lorsqu’ils sont passagers. En
          revanche, leur accumulation ou un changement soudain dans les habitudes ou le comportement
          peut traduire une situation de mal-être.
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
