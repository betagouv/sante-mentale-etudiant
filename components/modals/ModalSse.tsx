import { SSE } from "@/lib/sse";
import { sseModal } from ".";
import styles from "./Modals.module.scss";
import { EmailField, PhoneField } from "../common/InfoFields";

type Props = {
  sse: SSE;
};
export const ModalSse = ({ sse }: Props) => (
  <sseModal.Component title={`SSE de ${sse.city}`}>
    <p>Service de santé de l'{sse.universityName}</p>
    <div className={styles.list}>
      {EmailField(sse.email)}
      {PhoneField(sse.phone)}
    </div>
  </sseModal.Component>
);
