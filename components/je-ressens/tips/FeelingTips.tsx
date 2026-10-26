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
import { Disclaimer } from "@/components/typography/Disclaimer";

type Props = {
  feeling: FeelingType;
};

const TIP_PICTOS = ["fatigue", "feeling-management", "drugs", "painful-event"];

export default function FeelingTips({ feeling }: Props) {
  const [activeTip, setActiveTip] = useState<Tip | null>(null);
  return (
    <FullBleedSection bgColor="purple">
      <IllustrationFeelingsTipsMozaic />
      <IllustrationFeelingsWave />
      <IllustrationFeelingsPeople />
      <div className={styles.innerContainer}>
        <h2>Quelques idées que tu peux tester</h2>
        <Disclaimer>
          Ces idées peuvent t’aider à te sentir un peu mieux. Elles ne remplacent pas un accompagnement : quand les difficultés durent ou te
          font souffrir, c’est le moment d’en parler à un professionnel.
        </Disclaimer>
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
          <readMoreModal.Component title={activeTip?.title ?? "En savoir plus"}>
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
