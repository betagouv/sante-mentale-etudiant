"use client";
import { VideoTestimonial } from "../video/types";
import { VideoCard } from "../video/VideoCard";
import { useVideoTestimonialModal } from "../video/VideoTestimonialModalProvider";

export interface DispositifVideoProps {
  video: VideoTestimonial;
  showCitation?: boolean;
}

export default function DispositifVideo({ video, showCitation = true }: DispositifVideoProps) {
  const { openVideo } = useVideoTestimonialModal();
  return <VideoCard testimonial={video} onOpen={openVideo} showCitation={showCitation} />;
}
