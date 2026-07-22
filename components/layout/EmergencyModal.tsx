import styles from "./EmergencyModal.module.scss";
import { TILE_114, TILE_3114, TILE_SAMU } from "../common/Tiles";

export function EmergencyModal() {
  return (
    <>
      <p>
        En cas de danger immédiat ou de pensées suicidaires, appelle l'un de ces numéros.{" "}
        <b>Appels gratuits, confidentiels et anonymes.</b>
      </p>
      <div className={styles.container}>
        {TILE_3114}
        {TILE_SAMU}
        {TILE_114}
      </div>
    </>
  );
}
