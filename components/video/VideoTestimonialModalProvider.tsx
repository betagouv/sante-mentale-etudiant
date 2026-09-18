"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { videoModal } from "@/components/modals";
import { useVideoModalDismissed } from "@/hooks/useVideoModalDismissed";
import { VideoPlayer } from "./VideoPlayer";
import { VideoTestimonial } from "./types";

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

      <videoModal.Component
        size="small"
        title={activeTestimonial ? `« ${activeTestimonial.citation} »` : "Témoignage vidéo"}
        buttons={
          activeTestimonial?.link
            ? {
              children: <>En savoir plus</>,
              linkProps: {
                href: activeTestimonial.link,
                target: "_blank",
                rel: "noopener noreferrer",
              },
            }
            : undefined
        }
      >
        {activeTestimonial && (
          <div>
            <VideoPlayer
              key={activeTestimonial.key}
              testimonial={activeTestimonial}
            />
          </div>
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
