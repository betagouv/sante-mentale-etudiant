"use client";
import { VideoTestimonial } from "../video/types";
import { VideoCard } from "../video/VideoCard";
import { useVideoTestimonialModal } from "../video/VideoTestimonialModalProvider";

export default function DispositifVideo({ video }: { video: VideoTestimonial }) {
  const { openVideo } = useVideoTestimonialModal();
  return <VideoCard testimonial={video} onOpen={openVideo} />;
}
