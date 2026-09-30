import { VideoTestimonial } from "@/components/video/types";
import { ReactNode } from "react";
import { FeelingSlug } from "./data";

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
export type Metadata = {
  description: string;
  title: string;
};
export interface Feeling {
  metadata: Metadata;
  slug: FeelingSlug;
  name: string;
  catch: Intro;
  video: VideoTestimonial;
  recap: string[];
  faq: FAQ;
  tips: Tip[];
  whatIf: WhatIf;
}
