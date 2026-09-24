import { Button } from "@codegouvfr/react-dsfr/Button";
import styles from "./TipCard.module.scss";
import { Tip } from "@/lib/feelings/types";

type Props = {
  tip: Tip;
  picto?: string;
  onReadMore: () => void;
};
export default function TipCard({ tip, picto, onReadMore }: Props) {
  return (
    <>
      <div className={styles.card}>
        {picto && (
          <img
            src={`/images/pictograms/${picto}.svg`}
            alt=""
            width={50}
            height={50}
          />
        )}
        <h4>{tip.title}</h4>
        <div className={styles.itemsList}>
          {
            <span>
              <b>{tip.items[0].title} : </b>
              {tip.items[0].desc}{" "}
            </span>
          }
        </div>
        <Button
          size="small"
          priority="tertiary no outline"
          iconId="fr-icon-add-line"
          onClick={onReadMore}
        >
          Lire plus
        </Button>
      </div>
    </>
  );
}
