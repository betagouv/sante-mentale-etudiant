import Link from "next/link";
import FullBleedSection from "../../wrapper/FullBleedSection";
import styles from "./HomeStudentsStat.module.scss";

export default function HomeStudentsStat() {
  return (
    <FullBleedSection innerContainerClassName={styles.container}>
      <h1 className={styles.title}>
        1 étudiant sur 3 traverse <br /> une période difficile durant ses études.
      </h1>
      <p className={styles.subtitle}>
        <b>Tu n'es pas seul</b> et de nombreux dispositifs existent pour t'accompagner
      </p>
      <p>
        <Link href="/qui-sommes-nous">Qui sommes-nous et pourquoi ce site ?</Link>
      </p>
    </FullBleedSection>
  );
}
