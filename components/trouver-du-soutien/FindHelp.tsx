"use client";
import { Subtitle } from "../typography/Subtitle";
import { Title } from "../typography/Title";
import { useState } from "react";
import FindHelpFilters from "./FindHelpFilters";
import FindHelpResults from "./FindHelpResults";
import { Coordinate } from "@/services/address";
import FullBleedSection from "../wrapper/FullBleedSection";
import { Disclaimer } from "../typography/Disclaimer";
import ExternalLink from "../link/ExternalLink";

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
    <FullBleedSection ariaLabelledBy="find-help" bgColor="grey">
      <Title>Trouve du soutien en fonction de ta situation</Title>
      <Subtitle>Gratuit et confidentiel. Tu parles toujours à un humain.</Subtitle>
      <p>
        <i>
          Cet orienteur présente une sélection de dispositifs d'accompagnement gratuits ou pris en
          charge, publics, conventionnés ou associatifs. Cette sélection n'est pas exhaustive de
          l'ensemble de l'offre existante.
        </i>
      </p>
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
      <Disclaimer>
        Besoin d’autres ressources ?{" "}
        <ExternalLink href="https://www.psycom.org/sorienter/les-lignes-decoute/">
          Consulte l’annuaire des lignes d’écoute de Psycom.
        </ExternalLink>
      </Disclaimer>
    </FullBleedSection>
  );
}
