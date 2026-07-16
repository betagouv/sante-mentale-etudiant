"use client";
import { useSearchParams } from "next/navigation";
import FindHelp from "@/components/trouver-du-soutien/FindHelp";

export default function FindHelpPage() {
  const searchParams = useSearchParams();
  const addressLabel = searchParams.get("addressLabel") ?? "";
  const longitude = parseFloat(searchParams.get("lon") ?? "");
  const latitude = parseFloat(searchParams.get("lat") ?? "");
  const whatINeed = searchParams.get("what-i-need") ?? "";
  const format = searchParams.get("format") ?? "";

  const hasValidCoordinates = !Number.isNaN(longitude) && !Number.isNaN(latitude);

  return (
    <FindHelp
      defaultAddressLabel={addressLabel}
      defaultWhatINeed={whatINeed}
      defaultFormat={format}
      {...(hasValidCoordinates && { defaultCoordinates: { longitude, latitude } })}
    />
  );
}
