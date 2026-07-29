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

export interface Feeling {
  slug: string;
  name: string;
  catch: Intro;
  video: Video;
  recap: string[];
}
