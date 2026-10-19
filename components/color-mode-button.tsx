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
    setBright(!bright);

    if (bright) {
      document.documentElement.classList.remove("bright");
      deleteCookie("bright");
    } else {
      document.documentElement.classList.add("bright");
      setCookie("bright", "Your website is now in light mode.");
    }
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
