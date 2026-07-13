import { ReactNode } from "react";
import styles from "./Orienteur.module.scss";

type Props = {
  image: string;
  children: ReactNode;
};

export default function OrienteurWrapper({ image, children }: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.imageWrapper}>
        <img src={image} alt="" className={styles.image} />
      </div>
      <div className={styles.content}>{children}</div>
    </section>
  );
}
