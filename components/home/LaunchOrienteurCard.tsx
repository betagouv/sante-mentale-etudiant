import Button from "@codegouvfr/react-dsfr/Button";
import styles from "./LaunchOrienteurCard.module.scss";
import Badge from "@codegouvfr/react-dsfr/Badge";

export default function LaunchOrienteurCard() {
  return (
    <div className={`${styles.cardWrapper}`}>
      <div className={`fr-card fr-card--shadow ${styles.card}`}>
        <Badge className={styles.badge}>Gratuit et confidentiel</Badge>
        <h3 className={styles.title}>Trouve du soutien en quelques clics</h3>
        <p className={styles.desc}>
          Réponds à quelques questions pour trouver l'aide la plus adaptée à ta situation (ou pour
          aider un proche)
        </p>
        <Button size="large" linkProps={{ href: "/orienteur" }} className={styles.fullWidthBtn}>
          Trouver l'aide adaptée
        </Button>
        <p className={styles.hint}>
          Moins de <b>30 secondes</b> pour trouver des solutions 👌
        </p>
      </div>
    </div>
  );
}
