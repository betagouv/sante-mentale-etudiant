import React from "react";
import styles from "./WhoAreWe.module.scss";
import FullBleedSection from "@/components/wrapper/FullBleedSection";

type Stat = {
  title: string;
  desc: string;
};

const Stats: Stat[] = [
  {
    title: "1 sur 3",
    desc: "étudiant présente des signes de détresse psychologique (1)",
  },
  {
    title: "44 %",
    desc: "jugent difficile de trouver des informations en cas de problèmes psychologiques (1)",
  },
  {
    title: "50 %",
    desc: "de ceux qui présentent des signes de détresse n'ont consulté aucun professionnel (1)",
  },
  {
    title: "3 sur 10",
    desc: "bénéficiaires de Santé Psy Étudiant n'auraient engagé aucune démarche sans le dispositif (2)",
  },
];

export default function WhoAreWe() {
  return (
    <FullBleedSection bgColor="grey">
      <div className={styles.container}>
        <TopSection />
        <Statistics />
        <ul style={{ listStyleType: "none", width: "100%" }}>
          <li>
            <i>(1) OVE Repères BSE 2024</i>
          </li>
          <li>
            <i>(2) Enquête Santé Psy Etudiant, juin 2026</i>
          </li>
        </ul>
      </div>
    </FullBleedSection>
  );
}

function TopSection() {
  return (
    <div className={styles.top}>
      <Who />
      <Objectives />
    </div>
  );
}

function Who() {
  return (
    <div className={styles.who}>
      <h1 className={styles.title}>Qui sommes-nous ?</h1>
      <p>
        <b>
          Santé Mentale Étudiant est le site national du Ministère de l'Enseignement Supérieur, de
          la Recherche et de l'Espace dédié à la santé mentale des étudiants.
        </b>
      </p>
      <p>
        Il informe, oriente et outille pour prendre soin de sa santé mentale. Il s'adresse aussi
        bien aux étudiants directement concernés qu'à ceux qui souhaitent aider un proche.
      </p>
    </div>
  );
}

function Objectives() {
  return (
    <div className={styles.objectives}>
      <h2>Les objectifs de Santé Mentale Étudiant </h2>
      <ul>
        <li>Comprendre ce que recouvre une situation de mal-être, avec des mots simples.</li>
        <li>Trouver la ressource la plus adaptée à une situation donnée, à proximité.</li>
        <li>Agir, grâce à des outils concrets à mobiliser au quotidien.</li>
      </ul>
    </div>
  );
}

function Statistics() {
  return (
    <div className={styles.stats}>
      {Stats.map((s, idx) => (
        <Statistic key={`stat__${idx}`} stat={s} />
      ))}
    </div>
  );
}

function Statistic({ stat }: { stat: Stat }) {
  return (
    <div className={styles.stat}>
      <div className={styles.statTitle}>{stat.title}</div>
      <div className={styles.statDesc}>{stat.desc}</div>
    </div>
  );
}
