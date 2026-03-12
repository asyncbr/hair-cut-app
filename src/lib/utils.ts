import clsx from "clsx";

export function cn(...inputs: Array<string | false | null | undefined>) {
  return clsx(inputs);
}

export function absoluteUrl(siteUrl: string, path: string) {
  return new URL(path, siteUrl).toString();
}
