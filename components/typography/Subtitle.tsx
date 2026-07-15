import { ReactNode } from "react";
import styles from "./Subtitle.module.scss";

type Props = {
  children: string | ReactNode;
};
export function Subtitle({ children }: Props) {
  return <p className={styles.subtitle}>{children}</p>;
}
