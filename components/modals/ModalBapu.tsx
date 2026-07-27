import React from "react";
import { bapuModal } from ".";
import { BAPU } from "@/lib/bapu";
import {
  AddressField,
  EligibilityField,
  EmailField,
  OpeningHoursField,
  PhoneField,
  WebsiteField,
} from "../common/InfoFields";
import styles from "./Modals.module.scss";
import { splitAndCleanString } from "@/utils/misc";
import { Tag } from "@codegouvfr/react-dsfr/Tag";

type Props = {
  bapu: BAPU;
};
export const ModalBapu = ({ bapu }: Props) => (
  <bapuModal.Component title={bapu.name}>
    <p>Bureau d'aide psychologique universitaire de {bapu.city}</p>
    {bapu.professionals && (
      <div className={styles.tagList}>
        {splitAndCleanString(bapu.professionals).map((pro) => (
          <Tag className={styles.tag} key={`tag__${pro}`}>
            {pro}
          </Tag>
        ))}
      </div>
    )}
    <div className={styles.list}>
      {bapu.openingHours && OpeningHoursField(bapu.openingHours)}
      {bapu.address && AddressField(bapu.address, bapu.latitude, bapu.longitude)}
      {bapu.email &&
        splitAndCleanString(bapu.email).map((e, idx) => (
          <React.Fragment key={`email__${idx}`}> {EmailField(e, idx)}</React.Fragment>
        ))}
      {bapu.phone &&
        splitAndCleanString(bapu.phone).map((p, idx) => (
          <React.Fragment key={`phone__${idx}`}> {PhoneField(p, idx)}</React.Fragment>
        ))}
      {WebsiteField(bapu.website)}
      {bapu.eligibility && EligibilityField(bapu.eligibility)}
    </div>
  </bapuModal.Component>
);
