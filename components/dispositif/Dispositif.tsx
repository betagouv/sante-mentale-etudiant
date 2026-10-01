import { Dispositif as DispositifType } from "@/lib/dispositifs/types";
import styles from "./Dispositif.module.scss";

type Props = {
  dispositif: DispositifType;
};
export default function Dispositif({ dispositif }: Props) {
  return <div className={styles.container}></div>;
}
