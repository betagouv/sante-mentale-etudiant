import { Subtitle } from "../typography/Subtitle";
import { Title } from "../typography/Title";
import { useState } from "react";
import styles from "./FindHelp.module.scss";
import FindHelpFilters from "./FindHelpFilters";
import FindHelpResults from "./FindHelpResults";

type Props = {
  defaultPostcode: string;
  defaultWhatINeed: string;
  defaultFormat: string;
};
export default function FindHelp({ defaultPostcode, defaultWhatINeed, defaultFormat }: Props) {
  const [postcode, setPostcode] = useState(defaultPostcode);
  const [whatINeed, setWhatINeed] = useState(defaultWhatINeed);
  const [format, setFormat] = useState(defaultFormat);

  return (
    <div className={styles.container}>
      <Title>Trouve du soutien en fonction de ta situation</Title>
      <Subtitle>Gratuit et sans avance de frais. Tu parles toujours à un humain.</Subtitle>
      <FindHelpFilters
        postcode={postcode}
        setPostcode={setPostcode}
        whatINeed={whatINeed}
        setWhatINeed={setWhatINeed}
        format={format}
        setFormat={setFormat}
      />
      <FindHelpResults postcode={postcode} whatINeed={whatINeed} format={format} />
    </div>
  );
}
