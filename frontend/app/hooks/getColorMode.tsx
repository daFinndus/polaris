"use client";

import { getCookie } from "cookies-next/client";

/**
 * This is a custom hook that gets the color mode of the website.
 * It also sets the color mode of the website by adding a class to the document element.
 * @returns A boolean value that represents the color mode. True if dark, false if light.
 */
export function getColorMode() {
  const isDark =
    getCookie("dark") === "Your website is currently in dark mode.";

  if (isDark) {
    document.documentElement.classList.add("dark");
  }

  return isDark;
}
