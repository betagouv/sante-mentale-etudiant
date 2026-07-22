import styles from "./HelpReact.module.scss";
import { lienSteps } from "./data/lienSteps";
import { LightPinkBadge } from "../common/Badges";
import FullBleedSection from "../wrapper/FullBleedSection";

export default function HelpReact() {
  return (
    <FullBleedSection className={styles.section} containerClassName={styles.container} aria-labelledby="react-title">
      <div className={styles.header}>
        <LightPinkBadge>Étape 2</LightPinkBadge>
        <h2 id="react-title">Comment réagir ?</h2>
        <p>
          <b>Utilise la méthode L.I.E.N.</b> en 4 étapes, inspirée des approches de prévention par les
          pairs. <br /> Tu n'as pas besoin d'être expert, ta présence compte énormément.
        </p>
      </div>

      <div className={styles.content}>
        <img
          src="/images/pictures/woman-phone.png"
          alt=""
          className={styles.photo}
        />

        <ul className={styles.steps}>
          {lienSteps.map((step) => (
            <li key={step.step} className={styles.step}>
              <LightPinkBadge>{step.letter}</LightPinkBadge>
              <span className={styles.stepNumber}>Étape {step.step}</span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </FullBleedSection>
  );
}
