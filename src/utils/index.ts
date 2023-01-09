export const cx = (...classes: Array<string | undefined | false | null>) => {
  return Array.from(classes)
    .filter(Boolean)
    .join(" ")
    .replace(/\s+/g, " ") // remove extra whitespace
    .trim();
};
