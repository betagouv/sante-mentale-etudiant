import React from "react";
import styles from "./WhoAreWe.module.scss";
import FullBleedSection from "@/components/wrapper/FullBleedSection";

type Stat = {
  title: string;
  desc: string;
};

const Stats: Stat[] = [
  {
    title: "40%",
    desc: "des étudiants présentent des signes d'une santé psychologique dégradée (1)",
  },
  {
    title: "44 %",
    desc: "jugent difficile ou très difficile de trouver des informations en cas de problème psychologique (2)",
  },
  {
    title: "50 %",
    desc: "de ceux qui présentent des signes de détresse n'ont consulté aucun professionnel (2)",
  },
  {
    title: "3 sur 10",
    desc: "bénéficiaires de Santé Psy Étudiant n'auraient engagé aucune démarche sans le dispositif (3)",
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
            <i>(1) Enquête nationale Conditions de vie des étudiants (CdV 2023)</i>
          </li>
          <li>
            <i>(2) OVE, Repères Bien être santé des étudiants, 2024</i>
          </li>
          <li>
            <i>(3) Enquête Santé Psy Étudiant, juin 2026 (1413 répondants)</i>
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
          Santé Mentale Étudiant est un site national du Ministère de l’Enseignement Supérieur, de
          la Recherche et de l’Espace, dédié à la santé mentale des étudiants, qui informe, oriente
          et outille les étudiants.
        </b>
      </p>
      <p>
        Ce site ne s'ajoute pas aux ressources existantes : il a été conçu spécifiquement pour les
        étudiants et pour les réalités propres à cette période de vie. Il s'appuie sur les
        ressources fiables déjà disponibles lorsqu'elles existent et propose des contenus adaptés
        lorsque les problématiques rencontrées par les étudiants ne sont pas encore couvertes.
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
      <p>
        Le site s'adresse aux étudiants directement concernés ainsi qu'à ceux qui souhaiteraient
        aider un proche.
      </p>
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
