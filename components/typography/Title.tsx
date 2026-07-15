import { ReactNode } from "react";

type Props = {
  children: string | ReactNode;
};
export function Title({ children }: Props) {
  return <h1 style={{ color: "#161616", marginBottom: "0.5rem" }}>{children}</h1>;
}
