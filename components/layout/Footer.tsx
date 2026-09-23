"use client";
import { Footer as FooterDsfr } from "@codegouvfr/react-dsfr/Footer";

export function Footer() {
  return (
    <FooterDsfr
      id="footer"
      accessibility="partially compliant"
      contentDescription="Des ressources et des repères pour mieux comprendre et prendre soin de sa santé mentale pendant les études."
      accessibilityLinkProps={{ href: "/accessibilite" }}
      termsLinkProps={{ href: "/mentions-legales" }}
      domains={[
        "info.gouv.fr",
        "service-public.gouv.fr",
        "legifrance.gouv.fr",
        "data.gouv.fr",
        "etudiant.gouv.fr",
      ]}
      bottomItems={[
        {
          text: "Données personnelles",
          linkProps: { href: "/donnees-personnelles" },
        },
        {
          text: "Gestion des cookies",
          linkProps: { href: "/gestion-cookies" },
        },
        {
          text: "Qui sommes-nous",
          linkProps: { href: "/qui-sommes-nous" },
        },
      ]}
    />
  );
}
