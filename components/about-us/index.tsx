import React from "react";
import WhoAreWe from "./WhoAreWe";
import WhatsOnThisSite from "./WhatsOnThisSite";
import Experts from "./Experts";
import NeedToTalkBanner from "../common/NeedToTalkBanner";
import Link from "next/link";
import Button from "@codegouvfr/react-dsfr/Button";
import WhyThisSite from "./WhyThisSite";
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
              href="mailto:boiteaidees@santementale.etudiant.gouv.fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              boiteaidees@santementale.etudiant.gouv.fr
            </Link>
          </>
        }
        button={
          <Button linkProps={{ href: "mailto:boiteaidees@santementale.etudiant.gouv.fr" }}>
            Contacter l’équipe
          </Button>
        }
      />
    </>
  );
}
