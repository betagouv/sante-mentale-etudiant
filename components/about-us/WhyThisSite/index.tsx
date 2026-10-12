import React from "react";
import styles from "./WhyThisSite.module.scss";
import FullBleedSection from "@/components/wrapper/FullBleedSection";
import { Tile } from "@codegouvfr/react-dsfr/Tile";
import EyeOff from "@codegouvfr/react-dsfr/picto/EyeOff";
import Error from "@codegouvfr/react-dsfr/picto/Error";
import { IllustrationWhoAreWeBottom } from "@/components/illustrations";

export default function WhyThisSite() {
  return (
    <FullBleedSection bgColor="purple">
      <IllustrationWhoAreWeBottom />
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.text}>
            <h2>Pourquoi ce site ?</h2>
            <p>
              <b>En interrogeant les étudiants, nous avons constaté deux freins majeurs.</b>
            </p>
          </div>
          <div className={styles.tile}>
            <Tile
              title="Le manque de lisibilité"
              desc="Beaucoup d'étudiants ne savent pas vers quels dispositifs se tourner, ni ce que ces dispositifs proposent réellement."
              titleAs="h3"
              orientation="vertical"
              pictogram={<EyeOff />}
            />
          </div>
          <div className={styles.tile}>
            <Tile
              title="Le sentiment d'illégitimité"
              desc="Beaucoup ne se sentent pas légitimes à consulter : l'idée que « ce n'est peut-être pas assez grave » revient souvent."
              titleAs="h3"
              pictogram={<Error />}
            />
          </div>
        </div>

        <div className={styles.cards}>
          <div className={styles.card}>
            <b>Résultat : une grande partie des étudiants concernés ne parle pas de sa détresse.</b>
            <br />
            Pourtant, des solutions existent : les <b>SSE</b> (services de santé étudiante), le{" "}
            <b>3040 </b>
            (ligne d’écoute de jour pour les étudiants en situation de mal être), le <b>
              3114
            </b>{" "}
            (numéro national de prévention du suicide), les <b>BAPU</b> (bureaux d’aide
            psychologique universitaire), <b>Santé Psy Étudiant</b> (dispositif d’accompagnement
            psychologique avec des psychologues libéraux), l’association <b>Nightline</b> (ligne
            d’écoute de nuit par des étudiants)...
          </div>
          <div className={styles.card}>
            Les dispositifs sont là, mais ils sont peu lisibles. Ce que les étudiants nous ont
            dit&nbsp;: vouloir passer de l'information à l'action. C'est ce constat qui a guidé la
            construction de Santé Mentale Étudiant.
            <br />
            <br />
            Les étudiants nous ont répondu (3) : ce qu’ils veulent, c’est passer de l’information à
            l’action.
            <br />
            <br />
            <i>
              (3) enquête Santé Psy Etudiant, Février 2026 (320 répondants) ; enquête mesure
              d’impact Santé Psy Etudiant, Juin 2026 (1413 répondants), 45 entretiens individuels
              (d’avril à juin 2026)
            </i>
          </div>
        </div>
      </div>
    </FullBleedSection>
  );
}
