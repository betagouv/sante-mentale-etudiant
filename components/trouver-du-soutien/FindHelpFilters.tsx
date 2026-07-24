import { Button } from "@codegouvfr/react-dsfr/Button";
import { Select } from "@codegouvfr/react-dsfr/Select";
import styles from "./FindHelp.module.scss";
import { OPTIONS_I_NEED } from "./data/findHelp";
import { Dispatch, SetStateAction } from "react";
import InputAddress from "../common/InputAddress";
import { Coordinate } from "@/services/address";
type Props = {
  addressLabel: string;
  setAddressLabel: Dispatch<SetStateAction<string>>;
  whatINeed: string;
  setWhatINeed: Dispatch<SetStateAction<string>>;
  format: string;
  setFormat: Dispatch<SetStateAction<string>>;
  setCoordinates: Dispatch<SetStateAction<Coordinate | undefined>>;
};
export default function FindHelpFilters({
  addressLabel,
  setAddressLabel,
  whatINeed,
  setWhatINeed,
  format,
  setFormat,
  setCoordinates,
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
      <InputAddress
        addressLabel={addressLabel}
        setAddresslabel={setAddressLabel}
        setCoordinates={setCoordinates}
      />
      <Select
        label="Ce que je cherche"
        nativeSelectProps={{
          onChange: (event) => handleWhatINeedChange(event.target.value),
          value: whatINeed,
        }}
      >
        <option value="" disabled hidden>
          Selectionner une option
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
            Selectionner une option
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
