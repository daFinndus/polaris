"use client";

import React, { useEffect } from "react";

import HomeButton from "@/components/home-button";
import { useWindowSize } from "@/app/hooks/useWindowSize";
import { getColorMode } from "@/app/hooks/getColorMode";
import Articles from "@/app/news/articles";

function Unsupported() {
  return (
    <div
      className={
        "flex h-screen w-screen items-center justify-center font-sans text-xs"
      }
    >
      <p>Your device is not supported.</p>
    </div>
  );
}

function Supported() {
  useEffect(() => {
    getColorMode();
  }, []);

  return (
    <div className={"font-sans relative justify-center flex items-center"}>
      <div className={"h-full"}>
        <Articles />
      </div>
      <HomeButton />
    </div>
  );
}

export default function Home() {
  let size = useWindowSize();

  if (size.width! > 396) {
    return <Supported />;
  } else if (size.width! > 0) {
    return <Unsupported />;
  }
}
