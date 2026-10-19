import { Disclaimer } from "../typography/Disclaimer";
import FullBleedSection from "../wrapper/FullBleedSection";
import styles from "./FeelingRecap.module.scss";
import { Feeling as FeelingType } from "@/lib/feelings/types";

type Props = {
  feeling: FeelingType;
};

const RECAP_PICTOS = ["anxiety", "feeling-management", "solitude", "fatigue"];

export default function FeelingRecap({ feeling }: Props) {
  return (
    <FullBleedSection innerContainerClassName={styles.container} bgColor="grey">
      <h2>À retenir de cette vidéo</h2>
      <Disclaimer>
        Cette page et cette vidéo donnent des repères et conseils généraux et ne remplacent pas un
        échange individuel avec un professionnel qui tiendra compte de ta situation.
      </Disclaimer>
      <div className={styles.list}>
        {feeling.recap.map((r, index) => (
          <div key={`recap__${index}`} className={styles.recap}>
            <img
              src={`/images/pictograms/${RECAP_PICTOS[index]}.svg`}
              alt=""
              width={50}
              height={50}
            />
            <h3>{r}</h3>
          </div>
        ))}
      </div>
    </FullBleedSection>
  );
}
