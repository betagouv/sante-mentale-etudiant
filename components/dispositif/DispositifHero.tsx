/* eslint-disable @next/next/no-img-element */
import { Dispositif } from "@/lib/dispositifs/types";
import FullBleedSection from "../wrapper/FullBleedSection";
import styles from "./DispositifHero.module.scss";
import { IllustrationDispositifDesktop, IllustrationDispositifMobile } from "../illustrations";
import { ButtonsGroup } from "@codegouvfr/react-dsfr/ButtonsGroup";
type Props = {
  dispositif: Dispositif;
};

export default function DispositifHero({ dispositif }: Props) {
  return (
    <FullBleedSection bgColor="yellow">
      <div className={styles.container}>
        <IllustrationDispositifMobile />
        <IllustrationDispositifDesktop />
        <img
          alt=""
          src={`/images/illustrations/dispositifs/logos/${dispositif.slug}-main.svg`}
          className={styles.logo}
        />
        <h1 className={styles.title}>{dispositif.catchPhrase}</h1>
        <ButtonsGroup
          buttons={[
            {
              children: dispositif.button.text,
              priority: "secondary",
            },
          ]}
          inlineLayoutWhen="sm and up"
        />
      </div>
    </FullBleedSection>
  );
}
