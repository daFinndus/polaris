"use client";

import { getCookie } from "cookies-next/client";

/**
 * This is a custom hook that gets the color mode of the website.
 * It also sets the color mode of the website by adding a class to the document element.
 * @returns A boolean value that represents the color mode. True if dark, false if light.
 */
export const getColorMode = (): boolean => {
  const isBright =
    getCookie("bright") === "Your website is currently in light mode.";

  if (!isBright) {
    document.documentElement.classList.add("dark");
  }

  return isBright;
};
