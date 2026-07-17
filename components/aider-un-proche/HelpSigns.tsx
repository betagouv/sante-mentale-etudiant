import Badge from "@codegouvfr/react-dsfr/Badge";
import styles from "./HelpSigns.module.scss";
import { signCategories } from "./data/signs";

export default function HelpSigns() {
  return (
    <section className={styles.section} aria-labelledby="signs-title">
      <Badge noIcon className={styles.badge}>Étape 1</Badge>
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
    </section>
  );
}
