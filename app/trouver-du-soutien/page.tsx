"use client";
import { useSearchParams } from "next/navigation";
import { CallOut } from "@codegouvfr/react-dsfr/CallOut";

export default function FindHelpPage() {
  const searchParams = useSearchParams();
  const postcode = searchParams.get("location") ?? "";
  return (
    <>
      <h2>{postcode}</h2>
      <CallOut title="Trouver du soutien">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam aperiam doloribus,
        voluptas modi vitae soluta ducimus. Minus veritatis eius ut maxime, mollitia maiores atque,
        iste nulla obcaecati repellendus perspiciatis placeat.
      </CallOut>
    </>
  );
}
