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

type Props = {
  bapu: BAPU;
};
export const ModalBapu = ({ bapu }: Props) => (
  <bapuModal.Component title={bapu.name}>
    <p>Bureau d'aide psychologique universitaire</p>
    <div className={styles.list}>
      {OpeningHoursField(bapu.openingHours)}
      {AddressField(bapu.address)}
      {EmailField(bapu.email)}
      {PhoneField(bapu.phone)}
      {WebsiteField(bapu.website)}
      {EligibilityField(bapu.eligibility)}
    </div>
  </bapuModal.Component>
);
