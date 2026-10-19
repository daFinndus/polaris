"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

import { setCookie } from "cookies-next/client";
import { deleteCookie } from "cookies-next";

import { MdDarkMode, MdLightMode } from "react-icons/md";
import { getColorMode } from "@/app/hooks/getColorMode";

/**
 * This is a custom button that changes the color mode of the website.
 * To change the color mode, a class is added to the document element.
 * It stores the current color mode value in a cookie.
 * @constructor
 */
export const ColorModeButton = () => {
  const [bright, setBright] = useState(getColorMode());

  const changeMode = () => {
    if (!bright) {
      document.documentElement.classList.remove("dark");
      setCookie("bright", "Your website is currently in light mode.");
    } else {
      document.documentElement.classList.add("dark");
      deleteCookie("bright");
    }

    setBright(!bright);
  };

  return (
    <Button
      variant={"secondary"}
      onClick={changeMode}
      aria-label={"Change the color mode of the website"}
      className={"notebook:w-12 flex h-12 w-1/2 min-w-12 items-center"}
    >
      {bright ? <MdDarkMode /> : <MdLightMode />}
    </Button>
  );
};
