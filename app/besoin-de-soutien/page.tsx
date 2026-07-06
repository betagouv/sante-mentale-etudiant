"use client";
import { useQueryState } from "@/hooks/useQueryState";
import { CallOut } from "@codegouvfr/react-dsfr/CallOut";
import { Card } from "@codegouvfr/react-dsfr/Card";
import { ToggleSwitch } from "@codegouvfr/react-dsfr/ToggleSwitch";
import { useMemo, useState } from "react";

const dispositifs = [
  {
    title: "SPE",
    key: "spe",
    remote: false,
  },
  {
    title: "Nightline",
    key: "nightline",
    remote: true,
  },
  {
    title: "3040",
    key: "3040",
    remote: true,
  },
];

export default function NeedHelpPage() {
  const [preferRemote, setPreferRemote] = useQueryState("preferRemote", false);

  const filteredDispositifs = useMemo(
    () =>
      dispositifs.filter((dispositif) => {
        if (preferRemote) {
          return dispositif.remote;
        }
        return true;
      }),
    [preferRemote]
  );
  return (
    <>
      <CallOut title="Trouve quelqu'un à qui parler">
        Gratuit. Confidentiel. Tu parles toujours à un humain.
      </CallOut>
      <ToggleSwitch
        label="Je préfère en distanciel"
        checked={preferRemote}
        onChange={(checked) => setPreferRemote(checked)}
      />
      <div className="fr-grid-row fr-grid-row--gutters">
        {filteredDispositifs.map((dispositif) => (
          <div className="fr-col-4" key={dispositif.key}>
            <Card
              background
              border
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing, incididunt, ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et"
              enlargeLink
              imageAlt="texte alternatif de l’image"
              imageUrl="https://www.systeme-de-design.gouv.fr/v1.14/storybook/img/placeholder.16x9.png"
              linkProps={{
                href: "#",
              }}
              size="small"
              title={dispositif.title}
              titleAs="h3"
            />
          </div>
        ))}
      </div>
    </>
  );
}
