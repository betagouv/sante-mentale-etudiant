import styles from "./HomeFeelings.module.scss";
import { feelings } from "@/lib/feelings/data";
import FullBleedSection from "../../wrapper/FullBleedSection";
import { Tile } from "@codegouvfr/react-dsfr/Tile";

export default function HomeFeelings() {
  return (
    <FullBleedSection ariaLabelledBy="feelings-grid-title" bgColor="purple" borderColor="green">
      <div className={styles.header}>
        <h2 id="feelings-grid-title">Mettre des mots sur ce que tu ressens</h2>
        <p>Des fiches pour identifier ce que tu ressens, mieux comprendre et trouver de l'aide</p>
      </div>

      <ul className={styles.grid}>
        {feelings.map((feeling) => (
          <li key={`feeling_${feeling.slug}`}>
            <Tile
              className={styles.tile}
              enlargeLinkOrButton
              imageUrl={`/images/pictograms/${feeling.slug}.svg`}
              imageAlt=""
              linkProps={{
                href: `je-ressens/${feeling.slug}`,
              }}
              orientation="vertical"
              title={feeling.name}
              titleAs="h3"
            />
          </li>
        ))}
      </ul>
    </FullBleedSection>
  );
}
