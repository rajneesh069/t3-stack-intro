import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function setThemeCookie(theme: "dark") {
  document.cookie = `theme=${theme}; path=/; max-age=31536000`;
}
