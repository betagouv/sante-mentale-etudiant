import styles from "./HomeFeelings.module.scss";
import { feelings } from "@/lib/feelings/data";
import FullBleedSection from "../../wrapper/FullBleedSection";
import { IllustrationHomeFeelingsWave } from "@/components/illustrations";
import { Tile } from "@codegouvfr/react-dsfr/Tile";
import Health from "@codegouvfr/react-dsfr/picto/Health";
import Notification from "@codegouvfr/react-dsfr/picto/Notification";
import Food from "@codegouvfr/react-dsfr/picto/Food";
import Moon from "@codegouvfr/react-dsfr/picto/Moon";
import System from "@codegouvfr/react-dsfr/picto/System";
import Error from "@codegouvfr/react-dsfr/picto/Error";
import Avatar from "@codegouvfr/react-dsfr/picto/Avatar";
import Warning from "@codegouvfr/react-dsfr/picto/Warning";

export const pictoMap = {
  Health,
  Notification,
  Food,
  Moon,
  System,
  Error,
  Avatar,
  Warning,
};

export type PictoName = keyof typeof pictoMap;

export default function HomeFeelings() {
  return (
    <FullBleedSection aria-labelledby="feelings-grid-title" bgColor="purple" borderColor="green">
      <IllustrationHomeFeelingsWave />
      <div className={styles.header}>
        <h2>Mettre des mots sur ce que tu ressens</h2>
        <p>Des fiches pour comprendre, reconnaître et trouver de l'aide</p>
      </div>

      <ul className={styles.grid}>
        {feelings.map((feeling) => {
          const Picto = pictoMap[feeling.picto];
          return (
            <Tile
              key={`feeling_${feeling.slug}`}
              enlargeLinkOrButton
              imageUrl={`/images/pictograms/${feeling.slug}.svg`}
              linkProps={{
                href: `je-ressens/${feeling.slug}`,
              }}
              orientation="vertical"
              title={feeling.name}
              titleAs="h4"
            />
          );
        })}
      </ul>
    </FullBleedSection>
  );
}
