import FullBleedSection from "../wrapper/FullBleedSection";
import styles from "./FeelingRecap.module.scss";
import { Feeling as FeelingType } from "@/lib/feelings/types";

type Props = {
  feeling: FeelingType;
};

const RECAP_PICTOS = [
  "anxiety",
  "feeling-management",
  "solitude",
  "feeling-management",
];

export default function FeelingRecap({ feeling }: Props) {
  return (
    <FullBleedSection innerContainerClassName={styles.container} bgColor="grey">
      <h2>À retenir de cette vidéo</h2>
      <div className={styles.list}>
        {feeling.recap.map((r, index) => (
          <div key={`recap__${index}`} className={styles.recap}>
            <div>
              <img
                src={`/images/pictograms/${RECAP_PICTOS[index]}.svg`}
                alt=""
                width={50}
                height={50}
              />
            </div>
            {r}
          </div>
        ))}
      </div>
    </FullBleedSection>
  );
}
