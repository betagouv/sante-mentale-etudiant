import { SSE } from "@/lib/sse";
import { sseModal } from ".";
import styles from "./Modals.module.scss";
import {
  AddressField,
  EmailField,
  MoreInfoField,
  PhoneField,
  WebsiteField,
} from "../common/InfoFields";
import React from "react";
import { splitAndCleanString } from "@/utils/misc";
import { Disclaimer } from "../typography/Disclaimer";

type Props = {
  sse: SSE | null;
};
export const ModalSse = ({ sse }: Props) => {
  if (!sse) return <sseModal.Component title="">{null}</sseModal.Component>;

  return (
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
        {sse.instagram &&
          splitAndCleanString(sse.instagram).map((w, idx) => (
            <React.Fragment key={`instagram__${idx}`}> {WebsiteField(w, idx)}</React.Fragment>
          ))}
        {sse.moreInfo && MoreInfoField(sse.moreInfo)}
        <Disclaimer>
          Les conditions d'éligibilité varient selon les services. N’hésite pas à vérifier avant de
          te déplacer.
        </Disclaimer>
      </div>
    </sseModal.Component>
  );
};
