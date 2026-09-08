import { useCallback, useEffect, useRef, useState } from "react";

export function useCarouselScroll(itemCount: number, stepPx: number) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollNext, setCanScrollNext] = useState(itemCount > 1);

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

    const updateFromScroll = () => {
      // scrollLeft = how many pixels we've scrolled from the start divided by
      // the width of one card tells us which card is active
      setActiveIndex(Math.round(track.scrollLeft / stepPx));
      setCanScrollNext(track.scrollLeft < track.scrollWidth - track.clientWidth - 1);
    };

    updateFromScroll();
    track.addEventListener("scroll", updateFromScroll, { passive: true });
    return () => track.removeEventListener("scroll", updateFromScroll);
  }, [stepPx]);

  return {
    trackRef,
    activeIndex,
    scrollToIndex,
    canScrollPrev: activeIndex > 0,
    canScrollNext,
  };
}
