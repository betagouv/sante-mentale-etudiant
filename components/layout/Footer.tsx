"use client";
import { Footer as FooterDsfr } from "@codegouvfr/react-dsfr/Footer";

export function Footer() {
  return (
    <FooterDsfr
      id="footer"
      accessibility="partially compliant"
      operatorLogo={{
        orientation: "horizontal",
        imgUrl: "/images/logos/sme.png",
        alt: "",
      }}
      contentDescription="Des ressources et des repères pour mieux comprendre et prendre soin de sa santé mentale pendant les études."
      accessibilityLinkProps={{ href: "/accessibilite" }}
      termsLinkProps={{ href: "/mentions-legales" }}
      bottomItems={[
        {
          text: "Données personnelles",
          linkProps: { href: "/donnees-personnelles" },
        },
        {
          text: "CGU",
          linkProps: { href: "/cgu" },
        },
        {
          text: "Gestion des cookies",
          linkProps: { href: "/gestion-cookies" },
        },
      ]}
    />
  );
}
