import { DispositifSlug } from "./data";

interface Button {
  text: string;
}

export interface Dispositif {
  slug: DispositifSlug;
  catchPhrase: string;
  button: Button;
}
