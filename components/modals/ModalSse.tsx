import { SSE } from "@/lib/sse";
import { sseModal } from ".";
import styles from "./Modals.module.scss";
import { AddressField, EmailField, PhoneField, WebsiteField } from "../common/InfoFields";
import React from "react";
import { splitAndCleanString } from "@/utils/misc";

type Props = {
  sse: SSE;
};
export const ModalSse = ({ sse }: Props) => (
  <sseModal.Component title={`${sse.displayName}`}>
    <p>Service de santé de {sse.displayUniversityName}</p>
    <div className={styles.list}>
      {sse.address && AddressField(sse.address, sse.latitude, sse.longitude)}
      {sse.email &&
        splitAndCleanString(sse.email).map((e, idx) => (
          <React.Fragment key={`email__${idx}`}> {EmailField(e, idx)}</React.Fragment>
        ))}
      {sse.phone &&
        splitAndCleanString(sse.phone).map((p, idx) => (
          <React.Fragment key={`phone__${idx}`}> {PhoneField(p, idx)}</React.Fragment>
        ))}
      {sse.website &&
        splitAndCleanString(sse.website).map((w, idx) => (
          <React.Fragment key={`website__${idx}`}> {WebsiteField(w, idx)}</React.Fragment>
        ))}
    </div>
  </sseModal.Component>
);
