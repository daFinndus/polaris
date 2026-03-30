"use client";

import { useEffect } from "react";

import Head from "next/head";

import { About } from "@/app/home/about";

import { Blogs } from "@/app/home/blogs";
import { Projects } from "@/app/home/projects";
import { Application } from "@/app/home/engineering";
import { Toolkit } from "@/app/home/tooling";
import { getColorMode } from "@/app/hooks/getColorMode";
import { checkScreenValidity } from "@/app/hooks/checkScreenValidity";

import { ColorModeButton } from "@/components/color-mode-button";
import { ErrorPageButton } from "@/components/error-page-button";
import { ClockPageButton } from "@/components/clock-page-button";
import { ImprintPageButton } from "@/components/imprint-page-button";

const Unsupported = () => {
  return (
    <div
      className={"flex h-screen w-screen items-center justify-center text-xs"}
    >
      <p>Your device is not supported.</p>
    </div>
  );
};

const Supported = () => {
  return (
    <div className="notebook:my-8 m-4 flex justify-center">
      <div className="notebook:fixed notebook:flex top-4 right-4 hidden flex-col gap-y-2">
        <ColorModeButton />
        <ImprintPageButton />
        <ClockPageButton />
        <ErrorPageButton />
      </div>
      <div className="desktop:grid desktop:grid-cols-3 hidden gap-4">
        <div className="space-y-4">
          <About />
          <Application />
        </div>
        <Toolkit />
        <div className="space-y-4">
          <Projects />
          <Blogs />
        </div>
      </div>
      <div className="laptop:grid laptop:grid-cols-2 desktop:hidden hidden gap-4">
        <div className="space-y-4">
          <About />
          <Application />
        </div>
        <div className="space-y-4">
          <Projects />
          <Toolkit />
          <Blogs />
        </div>
      </div>
      <div className="laptop:hidden grid grid-cols-1 gap-4">
        <div className="notebook:hidden flex gap-x-2">
          <ColorModeButton />
          <ClockPageButton />
          <ErrorPageButton />
        </div>
        <About />
        <Application />
        <Toolkit />
        <Projects />
        <Blogs />
      </div>
    </div>
  );
};

export default function Page() {
  useEffect(() => {
    if (typeof window !== undefined) {
      scrollTo(0, 0);
      getColorMode();
    }
  }, []);

  return checkScreenValidity({ Supported, Unsupported });
}
