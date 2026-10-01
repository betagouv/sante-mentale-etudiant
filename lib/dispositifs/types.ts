import { ReactNode } from "react";
import { DispositifSlug } from "./data";

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

interface Contact {
  title: string;
}

export interface Dispositif {
  slug: DispositifSlug;
  catchPhrase: string;
  button: Button;
  audience: Audience;
  contact: Contact;
}
