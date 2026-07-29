import FullBleedSection from "../wrapper/FullBleedSection";
import styles from "./FeelingRecap.module.scss";
import { Feeling as FeelingType } from "@/lib/feelings/types";

type Props = {
  feeling: FeelingType;
};
export default function FeelingRecap({ feeling }: Props) {
  return (
    <FullBleedSection className={styles.section} containerClassName={styles.container}>
      <h2>À retenir de cette vidéo</h2>
      <div className={styles.list}>
        {feeling.recap.map((r, index) => (
          <div key={`recap__${index}`} className={styles.recap}>
            <div>
              <img
                src="https://www.systeme-de-design.gouv.fr/v1.14/storybook/img/placeholder.1x1.png"
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
