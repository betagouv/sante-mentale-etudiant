import type { ReactNode } from "react";
import styles from "./FullBleedSection.module.scss";

type BgColor = "grey" | "purple" | "yellow" | "light-purple";
type BorderColor = "yellow" | "green";

type Props = {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  innerContainerClassName?: string;
  ariaLabelledBy?: string;
  bgColor?: BgColor;
  borderColor?: BorderColor;
};

export default function FullBleedSection({
  children,
  className,
  containerClassName,
  innerContainerClassName,
  ariaLabelledBy,
  bgColor,
  borderColor,
}: Props) {
  const bgColorClass = bgColor ? styles[bgColor] : "";
  const borderColorClass = borderColor ? styles[`border-${borderColor}`] : "";
  return (
    <section
      className={`${styles.section} ${bgColorClass} ${borderColorClass} ${className ?? ""}`.trim()}
      aria-labelledby={ariaLabelledBy}
    >
      <div className={`${styles.container} ${containerClassName ?? ""}`}>
        <div className={`${styles.innerContainer} ${innerContainerClassName ?? ""}`}>
          {children}
        </div>
      </div>
    </section>
  );
}
