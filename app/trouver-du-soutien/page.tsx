"use client";
import { useSearchParams } from "next/navigation";
import FindHelp from "@/components/trouver-du-soutien/FindHelp";

export default function FindHelpPage() {
  const searchParams = useSearchParams();
  const postcode = searchParams.get("location") ?? "";
  const whatINeed = searchParams.get("what-i-need") ?? "";
  const format = searchParams.get("format") ?? "";

  return (
    <FindHelp defaultPostcode={postcode} defaultWhatINeed={whatINeed} defaultFormat={format} />
  );
}
