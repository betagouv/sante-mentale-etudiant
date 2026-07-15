import { Input } from "@codegouvfr/react-dsfr/Input";
import { Button } from "@codegouvfr/react-dsfr/Button";
import { Select } from "@codegouvfr/react-dsfr/Select";
import styles from "./FindHelp.module.scss";
import { OPTIONS_I_NEED } from "./data/findHelp";
import { Dispatch, SetStateAction } from "react";
type Props = {
  postcode: string;
  setPostcode: Dispatch<SetStateAction<string>>;
  whatINeed: string;
  setWhatINeed: Dispatch<SetStateAction<string>>;
  format: string;
  setFormat: Dispatch<SetStateAction<string>>;
};
export default function FindHelpFilters({
  postcode,
  setPostcode,
  whatINeed,
  setWhatINeed,
  format,
  setFormat,
}: Props) {
  const formatOptions = whatINeed ? OPTIONS_I_NEED[whatINeed].formatOptions : [];

  function handleWhatINeedChange(newWhatINeed: string) {
    setWhatINeed(newWhatINeed);
    const newFormatOptions = newWhatINeed ? OPTIONS_I_NEED[newWhatINeed].formatOptions : [];
    const stillValid = newFormatOptions.some((o) => o.value === format);

    if (!stillValid) {
      setFormat("");
    }
  }
  return (
    <div className={styles.filters}>
      <Input
        iconId="fr-icon-map-pin-2-line"
        label="Code postal"
        nativeInputProps={{
          value: postcode,
          onChange: (e) => setPostcode(e.target.value),
        }}
      ></Input>
      <Select
        label="Ce que je cherche"
        nativeSelectProps={{
          onChange: (event) => handleWhatINeedChange(event.target.value),
          value: whatINeed,
        }}
      >
        <option value="" disabled hidden>
          Selectionnez une option
        </option>
        {Object.values(OPTIONS_I_NEED).map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </Select>
      {formatOptions && formatOptions.length > 0 && (
        <Select
          label="Format"
          nativeSelectProps={{
            onChange: (event) => setFormat(event.target.value),
            value: format,
          }}
        >
          <option value="" disabled hidden>
            Selectionnez une option
          </option>
          {formatOptions.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </Select>
      )}
      <Button priority="secondary">Plus de filtres</Button>
    </div>
  );
}
