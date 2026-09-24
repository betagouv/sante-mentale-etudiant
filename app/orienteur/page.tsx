import Orienteur from "@/components/orienteur/Orienteur";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quel soutien vous correspond ?",
};

export default function OrienteurPage() {
  return <Orienteur />;
}
