import Badge from "@codegouvfr/react-dsfr/Badge";
import styles from "./HelpWords.module.scss";
import FullBleedSection from "../wrapper/FullBleedSection";

const TO_SAY = [
  "« J'ai remarqué que tu sembles différent en ce moment. Tu veux qu'on en parle ? »",
  "« Je ne sais pas quoi te dire, mais je suis là. »",
  "« Tu n'as pas à porter ça tout seul. »",
];

const TO_AVOID = [
  "« T'inquiète, ça va aller »",
  "« D'autres ont vécu pire. »",
  "« Tu devrais juste sortir un peu plus »",
];

export default function HelpWords() {
  return (
    <FullBleedSection className={styles.section} containerClassName={styles.container} aria-labelledby="words-title">
      <div className={styles.textWrapper}>
        <h2 className={styles.title}>
          Ce qu'on peut dire <span className={styles.regular}>(et ce qu'il vaut mieux éviter)</span>
        </h2>
        <div className={styles.columns}>
          <div className={styles.column}>
            <Badge severity="success" noIcon>À PRIVILÉGIER</Badge>
            <ul className={styles.list}>
              {TO_SAY.map((text) => (
                <li key={text}>{text}</li>
              ))}
            </ul>
          </div>
          <div className={styles.column}>
            <Badge severity="error" noIcon>À ÉVITER</Badge>
            <ul className={styles.list}>
              {TO_AVOID.map((text) => (
                <li key={text}>{text}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </FullBleedSection>
  );
}
