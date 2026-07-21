import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  ariaLabelledBy?: string;
};

export default function FullBleedSection({
  children,
  className,
  containerClassName,
  ariaLabelledBy,
}: Props) {
  return (
    <section className={className} aria-labelledby={ariaLabelledBy}>
      <div className={`fr-container ${containerClassName ?? ""}`}>{children}</div>
    </section>
  );
}
