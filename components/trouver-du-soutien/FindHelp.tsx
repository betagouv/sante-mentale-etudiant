import { Subtitle } from "../typography/Subtitle";
import { Title } from "../typography/Title";
import { useState } from "react";
import styles from "./FindHelp.module.scss";
import FindHelpFilters from "./FindHelpFilters";

type Props = {
  defaultPostcode: string;
  defaultWhatIWant: string;
  defaultFormat: string;
};
export default function FindHelp({ defaultPostcode, defaultWhatIWant, defaultFormat }: Props) {
  const [postcode, setPostcode] = useState(defaultPostcode);
  const [whatIWant, setWhatIWant] = useState(defaultWhatIWant);
  const [format, setFormat] = useState(defaultFormat);
  return (
    <div className={styles.container}>
      <Title>Trouve du soutien en fonction de ta situation</Title>
      <Subtitle>Gratuit et sans avance de frais. Tu parles toujours à un humain.</Subtitle>
      <FindHelpFilters
        postcode={postcode}
        setPostcode={setPostcode}
        whatIWant={whatIWant}
        setWhatIWant={setWhatIWant}
        format={format}
        setFormat={setFormat}
      />
    </div>
  );
}
