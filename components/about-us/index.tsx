import React from "react";
import WhoAreWe from "./WhoAreWe";
import Experts from "./Experts";
import NeedToTalkBanner from "../common/NeedToTalkBanner";
import Link from "next/link";
import Button from "@codegouvfr/react-dsfr/Button";
import WhyThisSite from "./WhyThisSite";
import WhatsOnThisSite from "./WhatsOnThisSite";
import styles from "./index.module.scss"

export default function AboutUs() {
  return (
    <>
      <WhoAreWe />
      <WhyThisSite />
      <WhatsOnThisSite />
      <Experts />
      <NeedToTalkBanner
        title={
          <>
            Une idée ?<br />
            Envie de participer au projet ?
          </>
        }
        subtitle="Nous avons toujours besoin d'échanger avec des étudiants."
        hint={
          <>
            ou en écrivant à{" "}
            <Link
              href="mailto:santementaleetudiant@enseignementsup.gouv.fr"
            >
              santementaleetudiant@enseignementsup.gouv.fr
            </Link>
          </>
        }
        button={
          <Button className={styles.button} linkProps={{ href: "mailto:santementaleetudiant@enseignementsup.gouv.fr" }}>
            Contacter l’équipe
          </Button>
        }
      />
    </>
  );
}
