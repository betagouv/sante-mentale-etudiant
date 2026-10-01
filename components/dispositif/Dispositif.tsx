import { Dispositif as DispositifType } from "@/lib/dispositifs/types";
import styles from "./Dispositif.module.scss";
import DispositifHero from "./DispositifHero";

type Props = {
  dispositif: DispositifType;
};
export default function Dispositif({ dispositif }: Props) {
  return (
    <div className={styles.container}>
      <DispositifHero dispositif={dispositif} />
    </div>
  );
}
