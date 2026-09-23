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
    desc: "Vice-présidente santé, bien-être et prévention, Université de Poitiers",
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
        {Array(14)
          .fill([...experts])
          .reduce((a, b) => a.concat(b))
          .map((e: Expert, idx: number) => (
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
