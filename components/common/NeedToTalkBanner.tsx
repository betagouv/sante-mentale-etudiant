import Button from "@codegouvfr/react-dsfr/Button";
import styles from "./NeedToTalkBanner.module.scss";
import FullBleedSection from "../wrapper/FullBleedSection";
import {
  IllustrationNeedToTalkSittingLeft,
  IllustrationNeedToTalkSittingRight,
  IllustrationNeedToTalkStandingLeft,
  IllustrationNeedToTalkStandingRight,
  IllustrationNeedToTalkWave,
} from "../illustrations";
import { ReactNode } from "react";

type Props = {
  title?: ReactNode;
  subtitle?: string;
  hint?: ReactNode;
  button?: ReactNode;
};
export default function NeedToTalkBanner({ title, subtitle, hint, button }: Props) {
  return (
    <FullBleedSection bgColor="purple">
      <IllustrationNeedToTalkWave />
      <IllustrationNeedToTalkStandingLeft />
      <IllustrationNeedToTalkSittingLeft />
      <IllustrationNeedToTalkStandingRight />
      <IllustrationNeedToTalkSittingRight />
      <div className={styles.content}>
        <h2 className={styles.title}>{title ?? "Besoin de parler à quelqu'un ?"}</h2>
        <p className={styles.subtitle}>
          {subtitle ??
            "Ligne d'écoute, professionnel de la santé mentale, structure près de chez toi : trouve l'interlocuteur qui te correspond."}
        </p>
        {button ?? <Button linkProps={{ href: "/orienteur" }}>Trouver l'aide adaptée</Button>}
        <p className={styles.hint}>
          {hint ?? (
            <>
              Moins de <b>30 secondes</b> pour trouver des solutions
            </>
          )}
        </p>
      </div>
    </FullBleedSection>
  );
}
