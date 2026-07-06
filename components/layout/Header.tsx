"use client";
import { Header as DsfrHeader } from "@codegouvfr/react-dsfr/Header";
import { Badge } from "@codegouvfr/react-dsfr/Badge";
import { usePathname } from "next/navigation";

const navItems = [
  {
    title: "Je ressens...",
    paths: [
      {
        path: "/je-ressens/anxiete",
        title: "Je ressens du stress ou de l'anxieté",
      },
      {
        path: "/je-ressens/fatigue",
        title: "Je ressens de l'épuisement ou un manque d'énergie ",
      },
    ],
  },
  {
    title: "Trouver du soutien",
    path: "/trouver-du-soutien",
  },
  {
    title: "S'informer",
    path: "/articles",
  },
  {
    title: "Aider un proche",
    path: "/aider-un-proche",
  },
];

export function Header() {
  const pathname = usePathname();
  console.log("pathname", pathname);

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
      navigation={navItems.map((item) => ({
        text: item.title,
        ...(item.path
          ? { linkProps: { target: "self", href: item.path } }
          : {
              menuLinks: item.paths?.map((it) => ({
                linkProps: {
                  href: it.path,
                },
                text: it.title,
              })),
            }),
        isActive: pathname === item.path,
      }))}
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
