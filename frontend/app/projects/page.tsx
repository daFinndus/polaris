"use client";

import React, { useEffect } from "react";

import Projects from "@/app/projects/projects";
import { useWindowSize } from "@/app/hooks/useWindowSize";
import { getColorMode } from "@/app/hooks/getColorMode";

import HomeButton from "@/components/home-button";

const Unsupported = () => {
  return (
    <div className={"flex h-screen w-screen items-center justify-center font-sans text-xs"}>
      <p>Your device is not supported.</p>
    </div>
  );
};

const Supported = () => {
  useEffect(() => {
    getColorMode();
  }, []);

  return (
    <div className={"font-sans relative w-screen justify-center flex flex-col gap-y-8 items-center"}>
      <div
        className={"fixed right-4 top-4"}>
        <HomeButton />
      </div>
      <Projects />
    </div>
  );
};

export default function Page() {
  const size = useWindowSize();

  useEffect(() => {
    getColorMode();
  }, []);

  if (size.width! > 396) {
    return <Supported />;
  } else if (size.width! > 0) {
    return <Unsupported />;
  }
}
