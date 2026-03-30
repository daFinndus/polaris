import React from "react"

import Link from "next/link"

import { Button } from "@/components/ui/button"

import { TiHome } from "react-icons/ti"

export const HomeButton = () => {
    return (
        <Link href={"/"} className={"notebook:w-12 flex h-12 w-1/2 min-w-12 items-center"}>
            <Button className={"h-full w-full"} variant={"secondary"}>
                <TiHome size={4} />
            </Button>
        </Link>
    )
}
