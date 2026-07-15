"use client";
import { useSearchParams } from "next/navigation";
import { CallOut } from "@codegouvfr/react-dsfr/CallOut";
import { Subtitle } from "@/components/typography/Subtitle";
import { Title } from "@/components/typography/Title";

export default function FindHelpPage() {
  const searchParams = useSearchParams();
  const postcode = searchParams.get("location") ?? "";
  return (
    <div style={{ padding: "2rem 6.66rem", backgroundColor: "#F9F6F2" }}>
      <Title>Trouve du soutien en fonction de ta situation</Title>
      <Subtitle>Gratuit et sans avance de frais. Tu parles toujours à un humain.</Subtitle>
      <h2>{postcode}</h2>
      <CallOut title="Trouver du soutien">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam aperiam doloribus,
        voluptas modi vitae soluta ducimus. Minus veritatis eius ut maxime, mollitia maiores atque,
        iste nulla obcaecati repellendus perspiciatis placeat.
      </CallOut>
    </div>
  );
}
