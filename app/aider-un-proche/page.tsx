import Help from "@/components/aider-un-proche/Help";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aider un proche",
  description:
    "Un ami ou un camarade traverse une période difficile : apprenez à repérer les signes de détresse, à l'écouter et à l'orienter vers les bons professionnels.",
};

export default function HelpPage() {
  return (
    <>
      <Help />
    </>
  );
}
