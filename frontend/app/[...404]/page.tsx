import React, { useEffect } from "react";

import Link from "next/link";

import { Button } from "@/components/ui/button";

import { getColorMode } from "../hooks/getColorMode";

export default function Page() {
  useEffect(() => {
    getColorMode();
  });

  return (
    <div
      className={
        "flex flex-col h-screen w-screen items-center justify-center font-sans"
      }
    >
      <h1 className={"font-bold mb-2"}>Error 404</h1>
      <p>This page does not exist</p>
      <Link href={"/"} className={"absolute bottom-8"}>
        <Button variant={"secondary"}>Back to homepage</Button>
      </Link>
    </div>
  );
}
