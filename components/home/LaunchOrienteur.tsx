import styles from "./LaunchOrienteur.module.css";
import LaunchOrienteurCard from "./LaunchOrienteurCard";

export default function LaunchOrienteur() {
  return (
    <section className={styles.hero}>
      <picture className={styles.picture}>
        <source media="(min-width: 768px)" srcSet="https://placehold.co/1440x580" />
        <img src="https://placehold.co/375x256" alt="" className={styles.heroImage} />
        {/* <source media="(min-width: 768px)" srcSet="/images/hero-1440x580.jpg" /> */}
        {/* <img src="/images/hero-375x256.jpg" alt="" className={styles.heroImage} /> */}
      </picture>
      <LaunchOrienteurCard />
    </section>
  );
}
