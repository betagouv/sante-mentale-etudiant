"use client";
import { Header as DsfrHeader } from "@codegouvfr/react-dsfr/Header";
import { Badge } from "@codegouvfr/react-dsfr/Badge";
import type { MainNavigationProps } from "@codegouvfr/react-dsfr/MainNavigation/MainNavigation";
import { usePathname } from "next/navigation";
import { needHelpModal } from "@/components/modals";
import { EmergencyModal } from "./EmergencyModal";

export function Header() {
  const pathname = usePathname();

  // use dsfr nav items structure directly
  const navigation: MainNavigationProps.Item[] = [
    {
      text: "Je ressens...",
      isActive: pathname.startsWith("/je-ressens"),
      menuLinks: [
        {
          text: "Je ressens du stress ou de l'anxiété",
          linkProps: { href: "/je-ressens/anxiete" },
        },
        {
          text: "Je ressens de l'épuisement ou un manque d'énergie",
          linkProps: { href: "/je-ressens/fatigue" },
        },
      ],
    },
    {
      text: "Trouver du soutien",
      linkProps: { href: "/trouver-du-soutien" },
      isActive: pathname === "/trouver-du-soutien",
    },
    { text: "S'informer", linkProps: { href: "/articles" }, isActive: pathname === "/articles" },
    {
      text: "Aider un proche",
      linkProps: { href: "/aider-un-proche" },
      isActive: pathname === "/aider-un-proche",
    },
  ];

  return (
    <>
      <DsfrHeader
        brandTop={
          <>
            Ministère de
            <br />
            l'Enseignement
            <br />
            Supérieur, de
            <br />
            la Recherche
            <br />
            et de l'Espace
          </>
        }
        homeLinkProps={{
          href: "/",
          title: "Accueil",
        }}
        navigation={navigation}
        serviceTagline="Trouver les bons repères pour prendre soin de ta santé mentale"
        serviceTitle={
          <>
            Santé Mentale. Etudiant{" "}
            <Badge as="span" noIcon severity="success">
              Beta
            </Badge>
          </>
        }
        operatorLogo={{
          alt: "Santé Mentale. Etudiant",
          imgUrl: "images/logos/sme.png",
          linkProps: {
            href: "/",
            title: "Accueil - Santé Mentale. Etudiant - République Française",
          },
          orientation: "horizontal",
        }}
        quickAccessItems={[
          {
            iconId: "fr-icon-question-line",
            linkProps: {
              href: "/trouver-du-soutien",
            },
            text: "À qui en parler ?",
          },
          {
            iconId: "fr-icon-alarm-warning-line",
            buttonProps: {
              ...needHelpModal.buttonProps,
              className: "fr-primary",
            },
            text: "Besoin d'aide urgente",
          },
        ]}
      />
      <needHelpModal.Component title="Parler à quelqu'un maintenant" size="medium">
        <EmergencyModal />
      </needHelpModal.Component>
    </>
  );
}
