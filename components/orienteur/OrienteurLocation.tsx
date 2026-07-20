import { ButtonsGroup } from "@codegouvfr/react-dsfr/ButtonsGroup";
import styles from "./Orienteur.module.scss";
import { useState } from "react";
import InputAddress from "../common/InputAddress";
import RequiredField from "../common/RequiredField";
import { Coordinate } from "@/services/address";

type Props = {
  onAnswer: (
    option: { next: string; patchAnswers: Record<string, string> },
    lastQuestion?: boolean
  ) => void;
};

export default function OrienteurLocation({ onAnswer }: Props) {
  const [coordinates, setCoordinates] = useState<Coordinate>();
  const [addressLabel, setAddresslabel] = useState<string>("");

  const isValid = coordinates && addressLabel;
  return (
    <>
      <p className={styles.hint}>
        Les champs marqués du symbole
        <RequiredField /> sont obligatoires.
      </p>
      <h1>Dans quelle zone recherches-tu de l'aide ?</h1>
      <p>Indique ta ville ou ton code postal pour trouver les dispositifs les plus proches.</p>
      <div className={styles.address}>
        <InputAddress
          addressLabel={addressLabel}
          setAddresslabel={setAddresslabel}
          setCoordinates={setCoordinates}
          label="Ta ville ou ton code postal"
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
            onClick: () => onAnswer({ next: "", patchAnswers: {} }, true),
          },
          {
            children: "Voir les résultats",
            iconId: "fr-icon-arrow-right-line",
            disabled: !isValid,
            onClick: () =>
              onAnswer(
                {
                  next: "",
                  patchAnswers: {
                    addressLabel,
                    longitude: coordinates?.longitude.toString() ?? "",
                    latitude: coordinates?.latitude.toString() ?? "",
                  },
                },
                true
              ),
          },
        ]}
      />
    </>
  );
}
