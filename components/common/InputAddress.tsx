import Input from "@codegouvfr/react-dsfr/Input";
import { Dispatch, SetStateAction } from "react";

type Props = {
  postcode: string;
  setPostcode: Dispatch<SetStateAction<string>>;
};

export default function InputAddress({ postcode, setPostcode }: Props) {
  return (
    <Input
      iconId="fr-icon-map-pin-2-line"
      label="Ville, code postal"
      nativeInputProps={{
        value: postcode,
        onChange: (e) => setPostcode(e.target.value),
      }}
    ></Input>
  );
}
