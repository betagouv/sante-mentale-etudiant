import { ContactTile, Dispositif } from "@/lib/dispositifs/types";
import FullBleedSection from "../wrapper/FullBleedSection";
import styles from "./DispositifHowTo.module.scss";
import { Tile, TileProps } from "@codegouvfr/react-dsfr/Tile";
import { Badge } from "@codegouvfr/react-dsfr/Badge";

import Smartphone from "@codegouvfr/react-dsfr/picto/Smartphone";
import MainSend from "@codegouvfr/react-dsfr/picto/MainSend";
import Calendar from "@codegouvfr/react-dsfr/picto/Calendar";
import Ecosystem from "@codegouvfr/react-dsfr/picto/Ecosystem";
import SelfTraining from "@codegouvfr/react-dsfr/picto/SelfTraining";
import Map from "@codegouvfr/react-dsfr/picto/Map";
import Community from "@codegouvfr/react-dsfr/picto/Community";

export const dispositifContactPictoMap = {
  Smartphone,
  MainSend,
  Calendar,
  Ecosystem,
  SelfTraining,
  Map,
  Community,
};

export type DispositifContactPictoName = keyof typeof dispositifContactPictoMap;

type Props = {
  dispositif: Dispositif;
};

export default function DispositifHowTo({ dispositif }: Props) {
  return (
    <FullBleedSection bgColor="purple">
      <>
        <h2 style={{ color: "white" }}>{dispositif.contact.title}</h2>
        <div className={styles.tiles}>
          {dispositif.contact.tiles.map((t, idx) => (
            <TileItem key={`contact__${idx}`} item={t} />
          ))}
        </div>
      </>
    </FullBleedSection>
  );
}

function TileItem({ item }: { item: ContactTile }) {
  const Picto = dispositifContactPictoMap[item.picto];

  const tileProps = {
    title: item.title,
    desc: item.desc,
    start: (
      <Badge noIcon severity="new">
        {item.badge}
      </Badge>
    ),
    pictogram: <Picto fontSize="large" color="blue-ecume" />,
    titleAs: "h3" as const,
    ...(item.linkProps && { linkProps: item.linkProps }),
  } as TileProps;

  return (
    <div className={styles.tile}>
      <Tile {...tileProps} />
    </div>
  );
}
