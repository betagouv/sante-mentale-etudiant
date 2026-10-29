import { push } from "@socialgouv/matomo-next";

export const useMatomo = () => {
  const trackArticlesSearchFree = (query: string) => {
    push(["trackEvent", "Articles", "recherche-libre", query]);
  };

  const trackArticlesSearchTag = (slug: string) => {
    push(["trackEvent", "Articles", "recherche-tag", slug]);
  };

  return { trackArticlesSearchFree, trackArticlesSearchTag };
};
