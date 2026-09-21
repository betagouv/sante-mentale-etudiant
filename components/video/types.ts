import { Guest } from "@/lib/feelings/types";

export interface VideoTestimonial {
  key: string;
  videoUrl?: string;
  previewUrl?: string;
  posterUrl?: string;
  citation?: string;
  link?: string;
  duration?: number;
  guest?: Guest;
}
