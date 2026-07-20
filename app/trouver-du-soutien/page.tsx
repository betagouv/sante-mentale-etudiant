import FindHelp from "@/components/trouver-du-soutien/FindHelp";

type SearchParams = { [key: string]: string | string[] | undefined };

export default async function FindHelpPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;
  const addressLabel = (params.addressLabel as string) ?? "";
  const longitude = parseFloat((params.lon as string) ?? "");
  const latitude = parseFloat((params.lat as string) ?? "");
  const whatINeed = (params["what-i-need"] as string) ?? "";
  const format = (params.format as string) ?? "";

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
