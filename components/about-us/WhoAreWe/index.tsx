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
    desc: "étudiants présentent des signes de détresse psychologique",
  },
  {
    title: "44 %",
    desc: "ne savent pas où trouver de l'information en cas de difficulté",
  },
  {
    title: "50 %",
    desc: "de ceux qui présentent des signes de détresse n'ont consulté aucun professionnel",
  },
  {
    title: "3 sur 10",
    desc: "bénéficiaires de Santé Psy Étudiant n'auraient engagé aucune démarche sans le dispositif",
  },
];

export default function WhoAreWe() {
  return (
    <FullBleedSection bgColor="grey">
      <div className={styles.container}>
        <TopSection />
        <Statistics />
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
      <h3>Les objectifs de Santé mentale étudiant </h3>
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
