import type { ReactNode } from "react";
import styles from "./FullBleedSection.module.scss";

type BgColor = "grey" | "purple" | "yellow";
type BorderColor = "yellow" | "green";

type Props = {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  ariaLabelledBy?: string;
  bgColor?: BgColor;
  borderColor?: BorderColor;
};

export default function FullBleedSection({
  children,
  className,
  containerClassName,
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
      <div className={`fr-container ${containerClassName ?? ""}`}>{children}</div>
    </section>
  );
}
