import { Badge } from "@codegouvfr/react-dsfr/Badge";
import styles from "./ReadingTime.module.scss";

type Props = {
  time: number;
  className?: string;
};
export default function ReadingTime({ time, className, ...rest }: Props) {
  return (
    <Badge
      noIcon
      severity="success"
      className={`${styles.badge} ${className ? ` ${className}` : ""}`}
      {...rest}
    >
      <span
        className="fr-icon--sm fr-icon-timer-line"
        aria-hidden="true"
        style={{ marginRight: "4px" }}
      />
      {time.toString()} minutes de lecture
    </Badge>
  );
}
