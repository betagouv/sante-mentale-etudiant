import { Dispositif } from "@/lib/dispositifs/types";
import FullBleedSection from "../wrapper/FullBleedSection";
import styles from "./DispositifHowTo.module.scss";
type Props = {
  dispositif: Dispositif;
};

export default function DispositifHowTo({ dispositif }: Props) {
  return (
    <FullBleedSection bgColor="purple">
      <>
        <h2 style={{ color: "white" }}>{dispositif.contact.title}</h2>
      </>
    </FullBleedSection>
  );
}
