import Button from "@codegouvfr/react-dsfr/Button";
import Tag from "@codegouvfr/react-dsfr/Tag";
import styles from "./HelpCall.module.scss";
import CustomCard from "../common/CustomCard";
import logo_3114 from "@/public/images/logos/3114.png";
import { BADGE_CONFIDENTIEL, BADGE_GRATUIT } from "@/components/common/Badges";

export default function HelpCall() {
  return (
    <section className={styles.section} aria-labelledby="witness-title">
      <h2 id="witness-title" className={styles.text}>
        Tu es témoin de propos suicidaires ? Parles-en pour être écouté et orienté
      </h2>
      <CustomCard
        title="Consulte le site du 3114"
        subtitle="Prévention du suicide"
        description="Un professionnel de santé formé à la prévention du suicide sera à ton écoute. Ça peut prendre quelques minutes. Reste en ligne, tu fais bien d'appeler. 
          En danger immédiat ? Appelle le 15 (SAMU) sans attendre."
        image={logo_3114}
        button={<Button priority="secondary">Consulter le site du 3114</Button>}
        badges={[BADGE_GRATUIT, BADGE_CONFIDENTIEL]}
        location="A distance"
        openingHours="7j/7 • 24h/24"
        className={styles.card}
      />
    </section>
  );
}
