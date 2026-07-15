"use client";
import { useSearchParams } from "next/navigation";
import FindHelp from "@/components/trouver-du-soutien/FindHelp";

export default function FindHelpPage() {
  const searchParams = useSearchParams();
  const postcode = searchParams.get("location") ?? "";
  const whatIWant = searchParams.get("toto") ?? "";
  const format = searchParams.get("location") ?? "";

  return (
    <FindHelp defaultPostcode={postcode} defaultWhatIWant={whatIWant} defaultFormat={format} />
  );
}
