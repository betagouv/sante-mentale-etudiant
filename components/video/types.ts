import { VideoKey } from "@/data/videos/videos";
import { Guest } from "@/lib/feelings/types";

export interface VideoTestimonial {
  key: VideoKey;
  videoUrl: string;
  transcription: string;
  previewUrl?: string;
  posterUrl?: string;
  citation?: string;
  link?: string;
  duration?: number;
  guest?: Guest;
}
