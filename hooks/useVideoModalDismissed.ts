import { useEffect, useRef } from "react";

export function useVideoModalDismissed(modalId: string, onDismiss: () => void) {
  const onDismissRef = useRef(onDismiss);

  useEffect(() => {
    onDismissRef.current = onDismiss;
  });

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        const target = mutation.target;
        if (!(target instanceof HTMLElement) || target.id !== modalId) continue;

        const isOpen =
          target instanceof HTMLDialogElement
            ? target.open
            : target.getAttribute("aria-hidden") !== "true" && !target.hidden;

        if (!isOpen) onDismissRef.current();
      }
    });

    observer.observe(document.body, {
      subtree: true,
      attributes: true,
      attributeFilter: ["open", "aria-hidden", "hidden", "class"],
    });

    return () => observer.disconnect();
  }, [modalId]);
}
