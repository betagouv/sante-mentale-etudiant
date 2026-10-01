import { Dispositif } from "@/lib/dispositifs/types";
import FullBleedSection from "../wrapper/FullBleedSection";
import styles from "./DispositifWhatIsIt.module.scss";
import { testimonials } from "@/data/videos";
import DispositifVideo from "./DispositifVideo";
type Props = {
  dispositif: Dispositif;
};

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
      <div className={styles.cards}></div>
    </FullBleedSection>
  );
}
