import styles from "./FeelingTips.module.scss";
import { Feeling as FeelingType } from "@/lib/feelings/types";
import FullBleedSection from "@/components/wrapper/FullBleedSection";
import TipCard from "./TipCard";
import WhatIfCard from "./WhatIfCard";
import {
  IllustrationFeelingsPeople,
  IllustrationFeelingsTipsMozaic,
  IllustrationFeelingsWave,
} from "@/components/illustrations";

type Props = {
  feeling: FeelingType;
};
export default function FeelingTips({ feeling }: Props) {
  return (
    <FullBleedSection bgColor="purple">
      <IllustrationFeelingsTipsMozaic />
      <IllustrationFeelingsWave />
      <IllustrationFeelingsPeople />
      <div className={styles.innerContainer}>
        <h2>À tester au quotidien</h2>
        <div className={styles.cardsList}>
          {feeling.tips.map((tip, index) => (
            <TipCard key={`tip__${index}`} tip={tip} />
          ))}
          <WhatIfCard whatIf={feeling.whatIf} />
        </div>
      </div>
    </FullBleedSection>
  );
}
