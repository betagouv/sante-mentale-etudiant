"use client";
import { Footer as FooterDsfr } from "@codegouvfr/react-dsfr/Footer";

export function Footer() {
  return (
    <FooterDsfr
      id="footer"
      accessibility="non compliant"
      contentDescription="Des ressources et des repères pour mieux comprendre et prendre soin de sa santé mentale pendant les études."
      accessibilityLinkProps={{ href: "/accessibilite" }}
      termsLinkProps={{ href: "/mentions-legales" }}
      domains={["info.gouv.fr", "service-public.gouv.fr", "legifrance.gouv.fr", "data.gouv.fr"]}
      bottomItems={[
        {
          text: "Données personnelles",
          linkProps: { href: "/donnees-personnelles" },
        },
        {
          text: "Gérer mes cookies",
          buttonProps: {
            onClick: () => window.tarteaucitron?.userInterface.openPanel(),
          },
        },
        {
          text: "Qui sommes-nous",
          linkProps: { href: "/qui-sommes-nous" },
        },
        { text: "Plan du site", linkProps: { href: "/plan-du-site" } },
      ]}
      partnersLogos={{
        main: {
          alt: "Parlons Santé Mentale",
          imgUrl: "/images/logos/parlons-sante-mentale.svg",
          linkProps: {
            href: "https://santementale.gouv.fr",
            target: "_blank",
            rel: "noopener noreferrer",
            title: "Parlons Santé Mentale - nouvelle fenêtre",
          },
        },
      }}
    />
  );
}
