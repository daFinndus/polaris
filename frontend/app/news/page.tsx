"use client";

import React, { useEffect } from "react";

import Link from "next/link";

import { Button } from "@/components/ui/button";

import { useWindowSize } from "@/app/hooks/useWindowSize";
import { getColorMode } from "@/app/hooks/getColorMode";
import Articles from "@/app/news/articles";
import { TiHome } from "react-icons/ti";

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
      <Link
        href={"/"}
        className={"hidden laptop:block w-10 h-10 absolute top-4 left-4"}
      >
        <Button className={"w-full h-full"} variant={"secondary"}>
          <TiHome size={4} />
        </Button>
      </Link>
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
