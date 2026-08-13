import Link from "next/link";
import styles from "./HomeFeelings.module.scss";
import { feelings } from "@/lib/feelings/data";
import { FEELING_TILES } from "./feelings.config";
import FullBleedSection from "../../wrapper/FullBleedSection";
// import Tile from "@codegouvfr/react-dsfr/Tile";

export default function HomeFeelings() {
  return (
    <FullBleedSection className={styles.section} containerClassName={styles.container} aria-labelledby="feelings-grid-title">
      <div className={styles.header}>
        <h2>Mettre des mots sur ce que tu ressens</h2>
        <p>Des fiches pour comprendre, reconnaître et trouver de l'aide</p>
      </div>

      <ul className={styles.grid}>
        {FEELING_TILES.map((tile) => {
          // TODO can we use getFeelingBySlug here?
          const feeling = feelings.find((feeling) => feeling.slug === tile.slug);
          const label = feeling?.name ?? tile.fallbackLabel;

          return (
            <li key={tile.slug} className={styles.item}>
              {feeling ? (
                <Link href={`/je-ressens/${feeling.slug}`} className={styles.card}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={tile.icon} alt="" className={styles.icon} aria-hidden="true" />
                  <h3 className={styles.label}>{label}</h3>
                  <span className={`${styles.arrow} fr-icon-arrow-right-line`} aria-hidden="true" />
                </Link>
              ) : (
                <span className={`${styles.card} ${styles.cardDisabled}`} aria-disabled="true">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={tile.icon} alt="" className={styles.icon} aria-hidden="true" />
                  <h3 className={styles.label}>{label}</h3>
                  <span className={styles.note}>bientôt disponible</span>
                </span>

                //TODO replace Link and span above by one tile - style must be updated
                //   <Tile
                //   className={styles.card}
                //   enlargeLinkOrButton
                //   imageUrl={tile.icon}
                //   title={label}
                //   orientation="vertical"
                //   titleAs="h4"
                //   {...(feeling
                //     ? {
                //       linkProps: {
                //         href: `/je-ressens/${feeling.slug}`,
                //       },
                //     }
                //     : {
                //       disabled: true,
                //       buttonProps: {
                //         type: "button",
                //       },
                //     })}
                // />
              )}
            </li>
          );
        })}
      </ul>
    </FullBleedSection>
  );
}
