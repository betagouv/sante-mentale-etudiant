import { FEELING_ANXIETY } from "../feelings/data";
import type { ArticleMeta } from "./types";

export const articles: ArticleMeta[] = [
  {
    type: "internal",
    slug: "stress-avant-un-examen",
    title: "Stress avant un examen : comment mieux le gérer ?",
    intro:
      "Mains moites, ventre noué, cœur qui s’accélère, pensées qui tournent en boucle…<br>Le stress avant un examen est une expérience que beaucoup d’étudiant·es connaissent.",
    author: "Vikie Ache",
    publishedAt: "2026-07-20",
    markdownFile: "stress-avant-un-examen.md",
    heroImage: "/articles/stress-avant-un-examen/hero.jpg",
    heroCredits:
      "Source : Adobe Stock<br>Média complètement généré par une IA et vérifié par un agent.",
    readingTime: 4,
    mainFeeling: FEELING_ANXIETY,
  },
  {
    type: "internal",
    slug: "le-blues-du-dimanche-soir",
    title: "Le blues du dimanche soir : pourquoi cette angoisse revient chaque semaine ?",
    intro:
      "Le week-end touche à sa fin, la nuit tombe, et une boule au ventre commence à apparaître.<br>Tu regardes l’heure, tu penses au réveil du lundi matin, aux cours, aux mails, aux transports, aux responsabilités qui reviennent… et l’angoisse monte progressivement.",
    author: "Vickie Ache",
    publishedAt: "2026-07-20",
    markdownFile: "le-blues-du-dimanche-soir.md",
    heroImage: "/articles/le-blues-du-dimanche-soir/hero.jpg",
    heroCredits:
      "Source : Adobe Stock<br>Média complètement généré par une IA et vérifié par un agent.",
    readingTime: 5,
    mainFeeling: FEELING_ANXIETY,
  },
  {
    type: "external",
    slug: "quand-le-sommeil-s-en-mele",
    url: "https://www.psycom.org/sinformer/la-sante-mentale/quand-le-sommeil-sen-mele/",
    intro:
      "La qualité de nos nuits peut favoriser ou au contraire fragiliser notre santé mentale. Voici des pistes pour l'améliorer.",
    readingTime: 4,
    title: "Quand le sommeil s'en mêle",
    mainFeeling: FEELING_ANXIETY,
    heroImage: "/articles/quand-le-sommeil-s-en-mele/hero.jpg",
  },
];
