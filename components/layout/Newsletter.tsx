"use client";
import { Follow } from "@codegouvfr/react-dsfr/Follow";

export function Newsletter() {
  return (
    <Follow
      newsletter={{
        buttonProps: {
          onClick: function noRefCheck() {},
        },
        desc: "On partage régulièrement des conseils, des ressources et des témoignages pour prendre soin de ta santé mentale. Inscris-toi pour les recevoir directement dans ta boîte mail.",
      }}
      social={{
        buttons: [
          {
            linkProps: {
              href: "#facebook",
            },
            type: "facebook",
          },
          {
            linkProps: {
              href: "#twitter",
            },
            type: "twitter-x",
          },
          {
            linkProps: {
              href: "#linkedin",
            },
            type: "linkedin",
          },
          {
            linkProps: {
              href: "#instagram",
            },
            type: "instagram",
          },
          {
            linkProps: {
              href: "#youtube",
            },
            type: "youtube",
          },
        ],
      }}
    />
  );
}
