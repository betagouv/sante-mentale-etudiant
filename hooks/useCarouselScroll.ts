import { useCallback, useEffect, useRef, useState } from "react";

export function useCarouselScroll(itemCount: number, stepPx: number) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = useCallback(
    (index: number) => {
      const track = trackRef.current;
      if (!track) return;
      const clamped = Math.max(0, Math.min(index, itemCount - 1));
      track.scrollTo({ left: clamped * stepPx, behavior: "smooth" });
    },
    [itemCount, stepPx]
  );

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame = 0;
    const handleScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setActiveIndex(Math.round(track.scrollLeft / stepPx));
      });
    };

    track.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(frame);
    };
  }, [stepPx]);

  return { trackRef, activeIndex, scrollToIndex };
}
