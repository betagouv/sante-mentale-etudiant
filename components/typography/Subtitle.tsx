import { ReactNode } from "react";

type Props = {
  children: string | ReactNode;
};
export function Subtitle({ children }: Props) {
  return <p style={{ color: "#3A3A3A", fontSize: "1.25rem" }}>{children}</p>;
}
