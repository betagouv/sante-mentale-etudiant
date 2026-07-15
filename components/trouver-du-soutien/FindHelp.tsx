import { Subtitle } from "../typography/Subtitle";
import { Title } from "../typography/Title";
import { useState } from "react";
import styles from "./FindHelp.module.scss";
import FindHelpFilters from "./FindHelpFilters";
import CustomCard from "../common/CustomCard";
import logo from "@/public/images/logos/3040.png";
import { Button } from "@codegouvfr/react-dsfr/Button";
import { Badge } from "@codegouvfr/react-dsfr/Badge";

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
      <br></br>
      <CustomCard
        title="Appelle le 3040"
        subtitle="Le numéro pour la santé mentale des étudiants"
        description="Des psychologues et travailleurs sociaux à ton écoute pour t'informer et t'orienter vers les services adaptés."
        image={logo}
        button={<Button priority="secondary">Appeler le 3040</Button>}
        badges={[
          <Badge key="professionels">PROFESSIONNELS</Badge>,
          <Badge key="de-jour">De jour</Badge>,
        ]}
        location="A distance"
        openingHours="7j/7 • 9h-23h"
      />
    </div>
  );
}
