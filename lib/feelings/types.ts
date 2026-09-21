import { VideoTestimonial } from "@/components/video/types";
import { PictoName } from "@/components/home/feelings/HomeFeelings";
import { PictoProps } from "@codegouvfr/react-dsfr/picto/utils/PictoWrapper";
import { FC, ReactNode } from "react";

type Intro = {
  sentence: ReactNode;
  description: string;
};

export type Guest = {
  name: string;
  role: string;
};

type FAQ_Item = {
  question: string;
  answer: ReactNode;
};
type FAQ = {
  title: string;
  intro: ReactNode;
  items: FAQ_Item[];
};
export type TipItem = {
  title: string;
  desc: ReactNode;
};
export type Tip = {
  title: string;
  items: TipItem[];
};
export type WhatIf = {
  title?: string;
  content: ReactNode;
};
export interface Feeling {
  slug: string;
  name: string;
  picto: PictoName;
  catch: Intro;
  video: VideoTestimonial;
  recap: string[];
  faq: FAQ;
  tips: Tip[];
  whatIf: WhatIf;
}
