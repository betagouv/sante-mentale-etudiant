export const splitAndCleanString = (s: string, separator = ";"): string[] => {
  return s
    ? s
        .split(separator)
        .map((v) => v.trim())
        .filter((v) => v.length > 0)
    : [];
};

export const displayDate = (d: string) => new Date(d).toLocaleDateString("fr-FR");
