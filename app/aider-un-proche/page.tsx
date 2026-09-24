import Help from "@/components/aider-un-proche/Help";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aider un proche",
};

export default function HelpPage() {
  return (
    <>
      <Help />
    </>
  );
}
