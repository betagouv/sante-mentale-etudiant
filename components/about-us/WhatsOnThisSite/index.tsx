import React from "react";

import styles from "./WhatsOnThisSite.module.scss";
import FullBleedSection from "@/components/wrapper/FullBleedSection";
import Tile from "@codegouvfr/react-dsfr/Tile";
import { Quote } from "@codegouvfr/react-dsfr/Quote";

import EyeOff from "@codegouvfr/react-dsfr/picto/EyeOff";
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
              desc="À partir de quelques questions, l'outil identifie le dispositif le plus adapté à la situation de chacun. Les dispositifs sont toujours destinés aux étudiants, gratuits et sans avance de frais."
              pictogram={<EyeOff />}
            />
            <Tile
              title="Des témoignages"
              desc="Des vidéos courtes, d'étudiants ayant traversé des difficultés et qui racontent comment ils ont trouvé des solutions, et de psychologues qui informent, conseillent, orientent."
              pictogram={<Community />}
            />
            <Tile
              title="Du contenu fiable"
              desc="Sur les ressentis les plus partagés - la fatigue, l’anxiété, l’isolement, l’addiction, le deuil, une rupture… mais aussi sur le bien être et comment celui-ci s’entretient."
              pictogram={<Success />}
            />
          </div>
        </div>
        <div>
          <h2>Nos valeurs</h2>
          <div className={styles.cards}>
            <Tile
              title="Fiabilité"
              desc="L'ensemble des contenus est relu et validé par un comité d'experts (psychiatres, psychologues, chercheurs, professionnels de terrain). Sur un sujet comme la santé mentale, aucune approximation n'est acceptable."
              pictogram={<Contract />}
            />
            <Tile
              title="Simplicité"
              desc="Le site s'adresse aux étudiants avec des mots clairs, sans jargon. On a privilégié la simplicité à l’exhaustivité de l’information."
              pictogram={<System />}
            />
            <Tile
              title="Par et pour les étudiants"
              desc="Des dizaines d'étudiants nous ont aidé à construire ce site - par leurs réponses à nos enquêtes ou les tests utilisateurs que nous avons faits."
              pictogram={<Ecosystem />}
            />
          </div>
        </div>
        <div>
          <h2>Le mot du directeur de la DGESIP</h2>
          <Quote
            className=""
            imageUrl="/images/illustrations/qui-sommes-nous/director_dgesip.jpg"
            size="xlarge"
            source={<>Directeur général de l'enseignement et de l'insertion professionnelle</>}
            text="Sed maximum est in amicitia parem esse inferiori. Saepe enim excellentiae quaedam sunt, qualis erat Scipionis in nostro, ut ita dicam, grege. Numquam se ille Philo, numquam Rupilio, numquam Mummio anteposuit, numquam inferioris ordinis amicis, Q."
          />
        </div>
      </div>
    </FullBleedSection>
  );
}
