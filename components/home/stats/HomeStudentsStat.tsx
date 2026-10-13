import Link from "next/link";
import FullBleedSection from "../../wrapper/FullBleedSection";
import styles from "./HomeStudentsStat.module.scss";

export default function HomeStudentsStat() {
  return (
    <FullBleedSection innerContainerClassName={styles.container}>
      <h2 className={styles.title}>
        40% des étudiants présentent des signes d'une santé psychologique dégradée
      </h2>
      <p className={styles.subtitle}>
        <b>Tu n'es pas seul</b> et de nombreux dispositifs existent pour t'accompagner
      </p>
      <p>
        <Link href="/qui-sommes-nous">Qui sommes-nous et pourquoi ce site ?</Link>
      </p>
    </FullBleedSection>
  );
}
