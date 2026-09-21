import Image from "next/image";
import styles from "./NightLineCard.module.scss";
import logo_nightline from "@/public/images/logos/nightline.png";
import Button from "@codegouvfr/react-dsfr/Button";

export default function NightLineCard() {
  return (
    <div className={`${styles.card}`}>
      <div>
        <Image
          src={logo_nightline}
          alt={""}
          className={styles.logo}
          width={256}
          height={0}
          style={{ width: "256px", height: "auto" }}
          sizes="256px"
        />{" "}
      </div>
      <div className={styles.text}>
        <div className={styles.title}>Coup de blues la nuit ?</div>
        <div className={styles.subtitle}>
          Tu peux aussi parler avec un étudiant avec <b>Nightline</b>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.infos}>
          <span>
            <span className="fr-icon--sm fr-icon-map-pin-2-line"></span> À distance
          </span>
          <span>
            <span className="fr-icon--sm fr-icon-time-line"></span> De 21h00 à 2h30
          </span>
        </div>
        <div className={styles.buttons}>
          <Button
            priority="secondary"
            linkProps={{
              href: "tel:0 809 104 104",
              "aria-label": "Appeler Nightline",
            }}
          >
            Par téléphone
          </Button>
          <Button
            priority="secondary"
            linkProps={{
              href: "https://www.nightline.fr/ma-nightline",
              "aria-label": "Naviguer vers Nightline",
            }}
          >
            Par tchat
          </Button>
        </div>
      </div>
    </div>
  );
}
