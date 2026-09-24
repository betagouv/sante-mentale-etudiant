"use client";
import styles from "./FeelingTips.module.scss";
import { Feeling as FeelingType, Tip } from "@/lib/feelings/types";
import FullBleedSection from "@/components/wrapper/FullBleedSection";
import TipCard from "./TipCard";
import WhatIfCard from "./WhatIfCard";
import {
  IllustrationFeelingsPeople,
  IllustrationFeelingsTipsMozaic,
  IllustrationFeelingsWave,
} from "@/components/illustrations";
import { useState } from "react";
import { readMoreModal } from "@/components/modals";

type Props = {
  feeling: FeelingType;
};

const TIP_PICTOS = ["fatigue", "fatigue", "substances", "painful-event"];

export default function FeelingTips({ feeling }: Props) {
  const [activeTip, setActiveTip] = useState<Tip | null>(null);
  return (
    <FullBleedSection bgColor="purple">
      <IllustrationFeelingsTipsMozaic />
      <IllustrationFeelingsWave />
      <IllustrationFeelingsPeople />
      <div className={styles.innerContainer}>
        <h2>À tester au quotidien</h2>
        <div className={styles.cardsList}>
          {feeling.tips.map((tip, index) => (
            <TipCard
              key={`tip__${index}`}
              tip={tip}
              picto={TIP_PICTOS[index]}
              onReadMore={() => {
                setActiveTip(tip);
                readMoreModal.open();
              }}
            />
          ))}
          <WhatIfCard whatIf={feeling.whatIf} />
          <readMoreModal.Component title={activeTip?.title ?? ""}>
            {activeTip && (
              <div className={styles.tips}>
                {activeTip.items.map((tipItem, idx) => (
                  <div key={`tip_item_${idx}`} className={styles.margin}>
                    <b>{tipItem.title} : </b>
                    {tipItem.desc}
                  </div>
                ))}
              </div>
            )}
          </readMoreModal.Component>
        </div>
      </div>
    </FullBleedSection>
  );
}
