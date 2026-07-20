"use client";
import { Subtitle } from "../typography/Subtitle";
import { Title } from "../typography/Title";
import { useState } from "react";
import styles from "./FindHelp.module.scss";
import FindHelpFilters from "./FindHelpFilters";
import FindHelpResults from "./FindHelpResults";
import { Coordinate } from "@/services/address";

type Props = {
  defaultAddressLabel: string;
  defaultWhatINeed: string;
  defaultFormat: string;
  defaultCoordinates?: Coordinate;
};
export default function FindHelp({
  defaultAddressLabel,
  defaultWhatINeed,
  defaultFormat,
  defaultCoordinates,
}: Props) {
  const [addressLabel, setAddressLabel] = useState(defaultAddressLabel);
  const [whatINeed, setWhatINeed] = useState(defaultWhatINeed);
  const [format, setFormat] = useState(defaultFormat);
  const [coordinates, setCoordinates] = useState(defaultCoordinates);

  return (
    <div className={styles.container}>
      <Title>Trouve du soutien en fonction de ta situation</Title>
      <Subtitle>Gratuit et sans avance de frais. Tu parles toujours à un humain.</Subtitle>
      <FindHelpFilters
        addressLabel={addressLabel}
        setAddressLabel={setAddressLabel}
        whatINeed={whatINeed}
        setWhatINeed={setWhatINeed}
        format={format}
        setFormat={setFormat}
        setCoordinates={setCoordinates}
      />
      <FindHelpResults
        addressLabel={addressLabel}
        coordinates={coordinates}
        whatINeed={whatINeed}
        format={format}
      />
    </div>
  );
}
