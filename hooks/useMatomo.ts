import { BAPU } from "@/lib/bapu";
import { SSE } from "@/lib/sse";
import { push } from "@socialgouv/matomo-next";

export const useMatomo = () => {
  const trackArticlesSearchFree = (query: string) => {
    push(["trackEvent", "Articles", "recherche-libre", query]);
  };

  const trackArticlesSearchTag = (slug: string) => {
    push(["trackEvent", "Articles", "recherche-tag", slug]);
  };

  const trackBapuOpenModal = (bapu: BAPU) => {
    push(["trackEvent", "BAPU", "open-modal", bapu.name]);
  };

  const trackSseOpenModal = (sse: SSE) => {
    push(["trackEvent", "SSE", "open-modal", sse.displayName]);
  };

  const trackCall3314 = () => {
    console.log("matomo 3114");
    push(["trackEvent", "Urgent", "call", "3314"]);
  };

  return {
    trackArticlesSearchFree,
    trackArticlesSearchTag,
    trackBapuOpenModal,
    trackSseOpenModal,
    trackCall3314,
  };
};
