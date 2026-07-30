import styles from "./TipCard.module.scss";
import { Tip } from "@/lib/feelings/types";

type Props = {
  tip: Tip;
};
export default function TipCard({ tip }: Props) {
  return (
    <div className={styles.card}>
      <h4>{tip.title}</h4>
      {tip.items.map((tipItem, index) => (
        <div key={`item__${index}`}>
          <b>{tipItem.title} : </b>
          {tipItem.desc}
        </div>
      ))}
    </div>
  );
}
