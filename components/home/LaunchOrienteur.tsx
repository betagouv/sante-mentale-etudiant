import styles from "./LaunchOrienteur.module.css";
import LaunchOrienteurCard from "./LaunchOrienteurCard";

export default function LaunchOrienteur() {
  return (
    <section className={styles.hero}>
      <div className={styles.firstGrid}>
        <h1 className={styles.title}>
          La santé mentale des étudiants,{" "}
          <span className={styles.highlight}>parlons-en.</span>
        </h1>
        <picture className={styles.picture}>
          <img
            src="/images/illustrations/students-support.svg"
            alt=""
            className={styles.heroImage}
          />
        </picture>
      </div>
      <div className={styles.secondGrid}>
        <LaunchOrienteurCard />
      </div>
    </section>
  );
}