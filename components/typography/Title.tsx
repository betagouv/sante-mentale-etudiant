import { ReactNode } from "react";
import styles from "./Title.module.scss";

type Props = {
  children: string | ReactNode;
};
export function Title({ children }: Props) {
  return <h1 className={styles.title}>{children}</h1>;
}
