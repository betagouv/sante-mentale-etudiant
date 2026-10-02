import { ReactNode } from "react";
import { DispositifSlug } from "./data";
import { DispositifContactPictoName } from "@/components/dispositif/DispositifHowTo";

interface Button {
  text: string;
}

export interface AudienceItem {
  title: string;
  desc: ReactNode;
}

interface Audience {
  title: string;
  items: AudienceItem[];
}

export interface ContactTile {
  title: string;
  badge: string;
  desc: ReactNode;
  picto: DispositifContactPictoName;
  linkProps: {
    href: string;
    "aria-label"?: string;
  };
}
interface Contact {
  title: string;
  tiles: ContactTile[];
}

interface WhatIsIt {
  title: string;
  desc: ReactNode;
  items: {
    title: string;
    desc: ReactNode;
  }[];
}

export interface Dispositif {
  slug: DispositifSlug;
  catchPhrase: string;
  button: Button;
  audience: Audience;
  contact: Contact;
  whatIsIt: WhatIsIt;
}
