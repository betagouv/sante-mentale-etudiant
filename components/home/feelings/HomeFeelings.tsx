import styles from "./HomeFeelings.module.scss";
import { feelings } from "@/lib/feelings/data";
import FullBleedSection from "../../wrapper/FullBleedSection";
import { IllustrationHomeFeelingsWave } from "@/components/illustrations";
import { Tile } from "@codegouvfr/react-dsfr/Tile";

export default function HomeFeelings() {
  return (
    <FullBleedSection aria-labelledby="feelings-grid-title" bgColor="purple" borderColor="green">
      <IllustrationHomeFeelingsWave />
      <div className={styles.header}>
        <h2>Mettre des mots sur ce que tu ressens</h2>
        <p>Des fiches pour reconnaître, comprendre ce que tu ressens et trouver de l'aide</p>
      </div>

      <ul className={styles.grid}>
        {feelings.map((feeling) => {
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
