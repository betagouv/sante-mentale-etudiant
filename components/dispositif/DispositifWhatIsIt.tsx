import { Dispositif } from "@/lib/dispositifs/types";
import FullBleedSection from "../wrapper/FullBleedSection";
import styles from "./DispositifWhatIsIt.module.scss";
import DispositifVideo from "./DispositifVideo";
import { ReactNode } from "react";
import { Tile } from "@codegouvfr/react-dsfr/Tile";
import { testimonials } from "@/data/videos/videos";
type Props = {
  dispositif: Dispositif;
};

const pictoArray = ["feeling-management", "eating-disorder", "solitude", "anxiety", "substances"];

export default function DispositifWhatIsIt({ dispositif }: Props) {
  return (
    <FullBleedSection bgColor="purple">
      <div className={styles.top}>
        <div className={styles.text}>
          <h2>{dispositif.whatIsIt.title}</h2>
          <div>{dispositif.whatIsIt.desc}</div>
          <div>
            {" "}
            <img
              alt=""
              src={`/images/illustrations/dispositifs/logos/${dispositif.slug}-secondary.svg`}
              className={styles.logo}
            />
          </div>
        </div>
        <div className={styles.video}>
          <DispositifVideo video={testimonials[0]} />
        </div>
      </div>
      <div className={styles.cards}>
        {dispositif.whatIsIt.items.map((it, idx) => (
          <div key={`item_${idx}`} className={styles.card}>
            <ItemCard title={it.title} desc={it.desc} picto={pictoArray[idx]} />
          </div>
        ))}
      </div>
    </FullBleedSection>
  );
}

function ItemCard({ title, desc, picto }: { title: string; desc: ReactNode; picto: string }) {
  return (
    <Tile
      imageUrl={`/images/pictograms/${picto}.svg`}
      orientation="vertical"
      title={title}
      desc={desc}
      titleAs="h3"
    />
  );
}
