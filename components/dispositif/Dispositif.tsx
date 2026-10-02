import { Dispositif as DispositifType } from "@/lib/dispositifs/types";
import styles from "./Dispositif.module.scss";
import DispositifHero from "./DispositifHero";
import DispositifHowTo from "./DispositifHowTo";
import DispositifAudience from "./audience/DispositifAudience";
import DispositifWhatIsIt from "./DispositifWhatIsIt";

type Props = {
  dispositif: DispositifType;
};
export default function Dispositif({ dispositif }: Props) {
  return (
    <div className={styles.container}>
      <DispositifHero dispositif={dispositif} />
      <DispositifWhatIsIt dispositif={dispositif} />
      <DispositifAudience dispositif={dispositif} />
      <DispositifHowTo dispositif={dispositif} />
    </div>
  );
}
