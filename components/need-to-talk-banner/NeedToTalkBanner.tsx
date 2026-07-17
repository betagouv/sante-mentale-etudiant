import Button from "@codegouvfr/react-dsfr/Button";
import styles from "./NeedToTalkBanner.module.scss";

export default function NeedToTalkBanner() {
  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <h2 className={styles.title}>Besoin de parler à quelqu'un ?</h2>
        <p className={styles.subtitle}>
          Ligne d'écoute, psychologue universitaire, structure près de chez toi : trouve
          l'interlocuteur qui te correspond.
        </p>
        <Button
          className={styles.button}
          linkProps={{ href: "/trouver-du-soutien" }}
        >
          Trouver l'aide adaptée
        </Button>
        <p className={styles.hint}>Moins de <b>30 secondes</b> pour trouver des solutions 👌</p>
      </div>
    </div>
  );
}
