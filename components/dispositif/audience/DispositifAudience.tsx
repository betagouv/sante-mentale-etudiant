import { AudienceItem, Dispositif } from "@/lib/dispositifs/types";
import styles from "./DispositifAudience.module.scss";
import FullBleedSection from "@/components/wrapper/FullBleedSection";
import Image from "next/image";
import { IllustrationDispositifAudienceWave } from "@/components/illustrations";
type Props = {
  dispositif: Dispositif;
};

export default function DispositifAudience({ dispositif }: Props) {
  return (
    <FullBleedSection bgColor="grey">
      <IllustrationDispositifAudienceWave />
      <div style={{ position: "relative" }}>
        <h2>{dispositif.audience.title}</h2>
        <div className={styles.cards}>
          {dispositif.audience.items.slice(0, 3).map((a, i) => (
            <Card key={`item__${i}`} item={a} idx={i + 1} />
          ))}
        </div>
      </div>
    </FullBleedSection>
  );
}

function Card({ item, idx }: { item: AudienceItem; idx: number }) {
  return (
    <div className={styles.card}>
      <Image
        width={377}
        height={218}
        src={`/images/illustrations/dispositifs/audience/card-${idx}.svg`}
        alt=""
      />
      <div className={styles.cardBody}>
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
      </div>
    </div>
  );
}
