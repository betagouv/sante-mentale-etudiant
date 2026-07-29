import { ReactNode } from "react";

type Intro = {
  sentence: string;
  description: string;
};

type Guest = {
  name: string;
  role: string;
};
type Video = {
  duration: number;
  guest: Guest;
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
export interface Feeling {
  slug: string;
  name: string;
  catch: Intro;
  video: Video;
  recap: string[];
  faq: FAQ;
}
