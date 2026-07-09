"use client";
import { Header as DsfrHeader } from "@codegouvfr/react-dsfr/Header";
import { Badge } from "@codegouvfr/react-dsfr/Badge";
import type { MainNavigationProps } from "@codegouvfr/react-dsfr/MainNavigation/MainNavigation";
import { usePathname } from "next/navigation";


export function Header() {
  const pathname = usePathname();

  // use dsfr nav items structure directly
  const navigation: MainNavigationProps.Item[] = [
    {
      text: "Je ressens...",
      isActive: pathname.startsWith("/je-ressens"),
      menuLinks: [
        { text: "Je ressens du stress ou de l'anxiété", linkProps: { href: "/je-ressens/anxiete" } },
        { text: "Je ressens de l'épuisement ou un manque d'énergie", linkProps: { href: "/je-ressens/fatigue" } },
      ],
    },
    { text: "Trouver du soutien", linkProps: { href: "/trouver-du-soutien" }, isActive: pathname === "/trouver-du-soutien" },
    { text: "S'informer", linkProps: { href: "/articles" }, isActive: pathname === "/articles" },
    { text: "Aider un proche", linkProps: { href: "/aider-un-proche" }, isActive: pathname === "/aider-un-proche" },
  ];

  return (
    <DsfrHeader
      brandTop={
        <>
          INTITULE
          <br />
          OFFICIEL
        </>
      }
      homeLinkProps={{
        href: "/",
        title: "Accueil",
      }}
      navigation={navigation}
      serviceTagline="Prendre soin de sa santé mentale quand on est étudiant"
      serviceTitle={
        <>
          Santé Mentale .Etudiants{" "}
          <Badge as="span" noIcon severity="success">
            Beta
          </Badge>
        </>
      }
    />
  );
}
