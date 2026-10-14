import { articles } from "./articles/data";
import { dispositifs } from "./dispositifs/data";
import { feelings } from "./feelings/data";

export type SiteSection = {
  title: string;
  href?: string;
  children?: { title: string; href: string }[];
};

export const SITE_SECTIONS: SiteSection[] = [
  { title: "Accueil", href: "/" },
  { title: "Orienteur", href: "/orienteur" },
  {
    title: "Je ressens...",
    children: feelings.map((feeling) => ({ title: feeling.name, href: `/je-ressens/${feeling.slug}` })),
  },
  { title: "Trouver du soutien", href: "/trouver-du-soutien" },
  {
    title: "Les dispositifs",
    children: dispositifs.map((dispositif) => ({ title: dispositif.menuTitle || dispositif.slug, href: `/dispositif/${dispositif.slug}` })),
  },
  {
    title: "S'informer",
    href: "/s-informer",
    children: articles
      .filter((article) => article.type !== "external")
      .map((article) => ({
        title: article.title,
        href: `/s-informer/${article.slug}`,
      })),
  },
  { title: "Aider un proche", href: "/aider-un-proche" },
  { title: "Mentions légales", href: "/mentions-legales" },
  { title: "Données personnelles", href: "/donnees-personnelles" },
  { title: "Gestion des cookies", href: "/gestion-cookies" },
  { title: "Qui sommes-nous", href: "/qui-sommes-nous" },
  { title: "Accessibilité", href: "/accessibilite" },
];
