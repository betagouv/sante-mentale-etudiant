import { ButtonsGroup } from "@codegouvfr/react-dsfr/ButtonsGroup";
import { Input } from "@codegouvfr/react-dsfr/Input";
import styles from "./Orienteur.module.scss";
import { useState } from "react";

type Props = {
  onAnswer: (id: string, option: { next: string; value: string }, lastQuestion?: boolean) => void;
};

export default function OrienteurLocation({ onAnswer }: Props) {
  const [postcode, setPostcode] = useState<string>("");

  const handleChange = (entry: string) => {
    const digitsOnly = entry.replace(/\D/g, "").slice(0, 5);
    setPostcode(digitsOnly);
  };

  const isValid = postcode.length === 5;
  return (
    <>
      <p className={styles.hint}>
        Les champs marqués du symbole <span className={styles.error}>*</span> sont obligatoires.
      </p>
      <h1>Dans quelle zone recherches-tu de l'aide ?</h1>
      <p>Indique ton code postal pour trouver les dispositifs les plus proches.</p>
      <Input
        label={
          <>
            Ton code postal <span className={styles.error}>*</span>
          </>
        }
        nativeInputProps={{
          value: postcode,
          onChange: (e) => handleChange(e.target.value),
          inputMode: "numeric",
          pattern: "[0-9]{5}",
          maxLength: 5,
        }}
      />
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
