export const splitAndCleanString = (s: string, separator = ";"): string[] => {
  return s
    ? s
        .split(separator)
        .map((v) => v.trim())
        .filter((v) => v.length > 0)
    : [];
};
