import React from "react";

import styles from "./WhatsOnThisSite.module.scss";
import FullBleedSection from "@/components/wrapper/FullBleedSection";
import Tile from "@codegouvfr/react-dsfr/Tile";

import Compass from "@codegouvfr/react-dsfr/picto/Compass";
import Community from "@codegouvfr/react-dsfr/picto/Community";
import Success from "@codegouvfr/react-dsfr/picto/Success";
import Contract from "@codegouvfr/react-dsfr/picto/Contract";
import System from "@codegouvfr/react-dsfr/picto/System";
import Ecosystem from "@codegouvfr/react-dsfr/picto/Ecosystem";
export default function WhatsOnThisSite() {
  return (
    <FullBleedSection bgColor="grey">
      <div className={styles.container}>
        <div>
          <h2>Ce que propose le site</h2>
          <div className={styles.cards}>
            <Tile
              title="Un orienteur"
              desc="À partir de quelques questions, l'outil identifie le dispositif le plus adapté à la situation de chacun. Les dispositifs sont principalement destinés aux étudiants, gratuits et sans avance de frais."
              pictogram={<Compass />}
            />
            <Tile
              title="Des témoignages"
              desc="Des vidéos courtes de psychologues qui informent, conseillent, orientent, des dispositifs qui prennent la parole et expliquent leur mission aux étudiants et (à venir) des étudiants ayant traversé des difficultés qui témoignent comment ils ont trouvé des solutions."
              pictogram={<Community />}
            />
            <Tile
              title="Du contenu fiable"
              desc="Sur les ressentis les plus partagés par les étudiants - la fatigue, le stress / l’anxiété, l’isolement, l’addiction, la gestion des émotions, le deuil, une rupture… mais aussi sur le bien-être en général et comment celui-ci s’entretient (à venir)."
              pictogram={<Success />}
            />
          </div>
        </div>
        <div>
          <h2>Nos valeurs</h2>
          <div className={styles.cards}>
            <Tile
              title="Fiabilité"
              desc="L'ensemble des contenus est relu et validé par un comité d'experts (psychiatres, psychologues, chercheurs, professionnels de terrain)."
              pictogram={<Contract />}
            />
            <Tile
              title="Simplicité"
              desc="Le site s'adresse aux étudiants avec des mots clairs, sans jargon. On a privilégié la simplicité à l’exhaustivité de l’information. Ce site est une introduction à la thématique ‘santé mentale’ : pour aller plus loin, nous invitons les étudiants à aller consulter des sites référencés plus spécialisés."
              pictogram={<System />}
            />
            <Tile
              title="Par et pour les étudiants"
              desc="Des dizaines d'étudiants nous ont aidé à construire ce site - par leurs réponses à nos enquêtes ou les tests utilisateurs que nous avons faits (3). Leurs retours ont directement façonné le contenu et l'organisation du site et continueront à le faire."
              pictogram={<Ecosystem />}
            />
          </div>
        </div>
      </div>
    </FullBleedSection>
  );
}
