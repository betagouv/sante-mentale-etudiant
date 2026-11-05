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
              desc="Des informations sur les difficultés et les situations que les étudiants peuvent rencontrer (fatigue, stress, solitude, consommations, émotions…), des conseils pour y faire face et, prochainement, des repères pour prendre soin de son bien-être au quotidien."
              pictogram={<Success />}
            />
          </div>
        </div>
        <div>
          <h2>Nos valeurs</h2>
          <div className={styles.cards}>
            <Tile
              title="Fiabilité"
              desc="Les pages sur les ressentis sont co-écrites avec un comité d’experts (psychiatres, psychologues, chercheurs, professionnels de terrain)."
              pictogram={<Contract />}
            />
            <Tile
              title="Simplicité"
              desc="Un site simple et sans jargon, pensé comme une première porte d’entrée sur la santé mentale. Pour aller plus loin, il renvoie vers des sites spécialisés de référence, des témoignages / podcasts ou des initiatives."
              pictogram={<System />}
            />
            <Tile
              title="Construit avec les étudiants"
              desc="Des dizaines d'étudiants nous ont aidé à construire ce site - par leurs réponses à nos enquêtes ou les tests utilisateurs que nous avons faits. Leurs retours ont directement façonné le contenu et l'organisation du site et continueront à le faire."
              pictogram={<Ecosystem />}
            />
          </div>
        </div>
      </div>
    </FullBleedSection>
  );
}
