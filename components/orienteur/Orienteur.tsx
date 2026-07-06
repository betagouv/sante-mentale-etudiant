"use client";
import Button from "@codegouvfr/react-dsfr/Button";
import styles from "./Orienteur.module.scss";

export default function Orienteur() {
  return (
    <section className={styles.section}>
      <div className={styles.imageWrapper}>
        <img src="https://placehold.co/630x664" alt="" className={styles.image} />
      </div>

      <div className={styles.content}>
        <p className={styles.hint}>
          Les champs marqués du symbole <span className={styles.error}>*</span> sont obligatoires.
        </p>
        <p className={styles.hint}>
          Ce questionnaire t'oriente et ne pose en aucun cas un diagnostic médical.
        </p>
        <h1 className={styles.title}>
          As-tu des pensées suicidaires, ou crains-tu pour la sécurité d'un proche ?
        </h1>
        <p>
          Ma situation <span className={styles.error}>*</span>
        </p>
        <p>checkbox 1</p>
        <p>checkbox 2</p>
        <Button>Continuer</Button>
      </div>
    </section>
  );
}
