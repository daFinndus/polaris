import React from "react";

import Link from "next/link";

import { Button } from "@/components/ui/button";

import { TiHome } from "react-icons/ti";

export default function HomeButton() {
  return (
    <Link href={"/"} className={"notebook:w-12 w-1/2 flex items-center h-12"}>
      <Button className={"w-full h-full"} variant={"secondary"}>
        <TiHome size={4} />
      </Button>
    </Link>
  );
}
