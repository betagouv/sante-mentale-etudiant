import { ButtonsGroup } from "@codegouvfr/react-dsfr/ButtonsGroup";
import styles from "./Orienteur.module.scss";
import { useState } from "react";
import InputAddress from "../common/InputAddress";
import RequiredField from "../common/RequiredField";

type Props = {
  onAnswer: (id: string, option: { next: string; value: string }, lastQuestion?: boolean) => void;
};

export default function OrienteurLocation({ onAnswer }: Props) {
  const [postcode, setPostcode] = useState<string>("");

  const isValid = postcode.length === 5;
  return (
    <>
      <p className={styles.hint}>
        Les champs marqués du symbole
        <RequiredField /> sont obligatoires.
      </p>
      <h1>Dans quelle zone recherches-tu de l'aide ?</h1>
      <p>Indique ta ville pour trouver les dispositifs les plus proches.</p>
      <div className={styles.address}>
        <InputAddress
          postcode={postcode}
          setPostcode={setPostcode}
          label="Ta ville ou code postal"
          required
        />
      </div>
      <ButtonsGroup
        buttonsIconPosition="right"
        buttonsSize="large"
        inlineLayoutWhen="md and up"
        alignment="right"
        buttons={[
          {
            children: "Je préfère ne pas préciser",
            priority: "secondary",
            onClick: () => onAnswer("location", { next: "", value: "" }, true),
          },
          {
            children: "Voir les résultats",
            iconId: "fr-icon-arrow-right-line",
            disabled: !isValid,
            onClick: () => onAnswer("location", { next: "", value: postcode }, true),
          },
        ]}
      />
    </>
  );
}
