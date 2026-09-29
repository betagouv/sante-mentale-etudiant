"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { videoModal } from "@/components/modals";
import { useVideoModalDismissed } from "@/hooks/useVideoModalDismissed";
import { VideoTestimonial } from "./types";
import { VideoModalContent } from "./VideoModalContent";

interface VideoTestimonialModalContextValue {
  openVideo: (testimonial: VideoTestimonial) => void;
}

const VideoTestimonialModalContext = createContext<VideoTestimonialModalContextValue | null>(null);

export function VideoTestimonialModalProvider({ children }: { children: ReactNode }) {
  const [activeTestimonial, setActiveTestimonial] = useState<VideoTestimonial | null>(null);

  useVideoModalDismissed(videoModal.id, () => setActiveTestimonial(null));

  const openVideo = (testimonial: VideoTestimonial) => {
    setActiveTestimonial(testimonial);
    videoModal.open();
  };

  return (
    <VideoTestimonialModalContext.Provider value={{ openVideo }}>
      {children}

      <videoModal.Component size="small" title={<span className="fr-sr-only">Témoignage vidéo</span>}>
        {activeTestimonial && (
          <VideoModalContent key={activeTestimonial.key} testimonial={activeTestimonial} />
        )}
      </videoModal.Component>
    </VideoTestimonialModalContext.Provider>
  );
}

export function useVideoTestimonialModal() {
  const context = useContext(VideoTestimonialModalContext);
  if (!context) {
    throw new Error("useVideoTestimonialModal must be used within a VideoTestimonialModalProvider");
  }
  return context;
}
