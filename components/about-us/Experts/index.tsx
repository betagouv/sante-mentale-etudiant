import React from "react";
import styles from "./Experts.module.scss";
import FullBleedSection from "@/components/wrapper/FullBleedSection";
import { IllustrationWhoAreWeMozaic } from "@/components/illustrations";

type Expert = {
  name: string;
  desc: string;
};

const experts: Expert[] = [
  {
    name: "Marion Albouy",
    desc: "Médecin de santé publique et enseignante, Vice-présidente santé, bien-être et prévention, Université de Poitiers",
  },
  {
    name: "Arnaud Carré",
    desc: "Enseignant-chercheur en psychologie, Université Savoie Mont Blanc ; expert Santé publique France",
  },
  {
    name: "Valérie Casin",
    desc: "Médecin directrice, service de santé des étudiants, Université Rennes 1 / Rennes 2",
  },
  {
    name: "Maxime Gignon",
    desc: "Ancien conseiller scientifique DGESIP ; Président de l'Observatoire Régional de la Santé et du Social ; Chef de service CHU Amiens Picardie",
  },
  {
    name: "Ruxandra Jorioz",
    desc: "Déléguée aux partenariats, 3114 ; présidente du Fonds de dotation Prévention Suicide France",
  },
  {
    name: "Jérôme Lacinga",
    desc: "Psychologue clinicien, dispositif Santé Psy Étudiant",
  },
  {
    name: "Katell Le Scouarnec",
    desc: "Psychologue au service de santé étudiante de Rennes ; psychologue du dispositif Santé Psy Étudiant",
  },
  {
    name: "Yannick Morvan",
    desc: "Maître de conférences en psychologie à Paris Nanterre ;  Psychologue clinicien ; Conseil scientifique de l’Observatoire de la Vie étudiante (OVE)",
  },
  {
    name: "Maria Pereira Da Costa",
    desc: "Conseillère scientifique à la DGESIP ; Vice-présidente du Conseil d’Administration de l’Université Paris Cité ; Professeur de psychologie différentielle",
  },
  {
    name: "Romain Sicot",
    desc: "Psychiatre spécialisé en addictologie ; Praticien hospitalier, responsable de l’unité de Liaison / Urgence de psychiatrie et d’addictologie (hôpitaux universitaires Saint-Louis Lariboisière Fernand Widal)",
  },
  {
    name: "Hélène Vulser",
    desc: "Médecin psychiatre à l’Hôpital Pitié-Salpêtrière, Maitresse de conférence à Sorbonne Université et chercheuse à l’Institut du Cerveau.",
  },
  {
    name: "Julia Zanforlin",
    desc: "Psychiatre au SSE et BAPU de Clermont-Ferrand",
  },
];
export default function Experts() {
  return (
    <FullBleedSection bgColor="purple">
      <IllustrationWhoAreWeMozaic />
      <div className={styles.top}>
        <h2 className={styles.title}>Un comité d'experts se mobilise</h2>
        <p className={styles.subtitle}>
          <b>
            L'ensemble des contenus du site s'appuie sur un comité pluridisciplinaire de 12 experts,
            couvrant la psychiatrie, l'addictologie, le neurodéveloppement, la prévention du
            suicide, la psychologie clinique, la recherche en santé publique et l'accompagnement en
            service de santé étudiante.
          </b>
        </p>
        <p className={styles.desc}>
          Le comité donne un avis sur les grands choix du site, relit les contenus les plus
          sensibles, participe à la rédaction de contenus et à la création de vidéos.
        </p>
      </div>
      <div className={styles.experts}>
        {experts.map((e: Expert, idx: number) => (
          <Expert key={`expert_${idx}`} expert={e} />
        ))}{" "}
      </div>
    </FullBleedSection>
  );
}

function Expert({ expert }: { expert: Expert }) {
  return (
    <div className={styles.expert}>
      <h4>{expert.name}</h4>
      <p>{expert.desc}</p>
    </div>
  );
}
