import { Badge } from "@codegouvfr/react-dsfr/Badge";
import styles from "./ReadingTime.module.scss";
import { renderReadingTime } from "../../common/Helper";

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
      {renderReadingTime(time)}
    </Badge>
  );
}
