"use client";

import React from "react";

import Head from "next/head";

import About from "./home/about";

import Projects from "@/app/home/projects";
import DevStack from "@/app/home/development";
import HackTheBox from "@/app/home/hack-the-box";
import SecurityStack from "@/app/home/cybersecurity";

import ColorModeButton from "@/components/color-mode-button";
import ErrorPageButton from "@/components/error-page-button";

import { useWindowSize } from "@/app/hooks/useWindowSize";

const Unsupported = () => {
  return (
    <div className={"flex h-screen w-screen items-center justify-center font-sans text-xs"}>
      <p>Your device is not supported.</p>
    </div>
  );
};

const Supported = () => {
  return (
    <div className="relative flex w-screen items-center justify-center bg-background">
      <div className={"laptop:flex laptop:flex-col hidden gap-y-2 laptop:fixed laptop:top-4 laptop:right-4"}>
        <ColorModeButton />
        <ErrorPageButton />
      </div>
      <div className="flex items-start justify-center font-sans tablet:p-8 laptop:px-32">
        <PageHead />
        <div className="hidden justify-center gap-4 desktop:grid desktop:grid-cols-3">
          <div className={"space-y-4"}>
            <About />
            <DevStack />
          </div>
          <div className={"space-y-4"}>
            <SecurityStack />
          </div>
          <div className={"space-y-4"}>
            <Projects />
            <HackTheBox />
          </div>
        </div>
        <div className="hidden gap-4 laptop:grid laptop:grid-cols-2 desktop:hidden">
          <div className="space-y-4">
            <About />
            <DevStack />
            <HackTheBox />
          </div>
          <div className={"space-y-4"}>
            <Projects />
            <SecurityStack />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 p-4 laptop:hidden">
          <div
            className={"flex gap-x-2 notebook:fixed notebook:flex-col notebook:gap-y-2 notebook:top-4 notebook:right-4"}>
            <ColorModeButton />
            <ErrorPageButton />
          </div>
          <About />
          <DevStack />
          <SecurityStack />
          <HackTheBox />
          <Projects />
        </div>
      </div>
    </div>
  );
};

const PageHead = () => {
  return (
    <Head>
      <title>Finn Luca Jensen</title>
      <meta
        name="description"
        content="This is the portfolio of Finn Luca 'daFinndus' Jensen"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={"/favicon/apple-touch-icon.png"}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={"/favicon/favicon-32x32.png"}
      />
      <link rel="manifest" href={"/favicon/site.webmanifest"} />
    </Head>
  );
};

export default function Page() {
  const size = useWindowSize();

  if (size.width! > 396) {
    return <Supported />;
  } else if (size.width! > 0) {
    return <Unsupported />;
  }
}
