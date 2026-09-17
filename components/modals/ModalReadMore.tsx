import React from "react";
import { readMoreModal } from ".";
import { Tip } from "@/lib/feelings/types";
import styles from "./Modals.module.scss";

type Props = {
  tip: Tip;
};
export const ModalReadMore = ({ tip }: Props) => (
  <readMoreModal.Component title={tip.title}>
    <div className={styles.tips}>
      {tip.items.map((tipItem, idx) => (
        <div key={`tip_item_${idx}`}>
          <b>{tipItem.title}: </b>
          {tipItem.desc}
        </div>
      ))}
    </div>
  </readMoreModal.Component>
);
