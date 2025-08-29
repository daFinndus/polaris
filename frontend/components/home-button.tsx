import React from "react"

import Link from "next/link"

import { Button } from "@/components/ui/button"

import { TiHome } from "react-icons/ti"

export const HomeButton = () => {
    return (
        <Link href={"/"} className={"flex h-12 w-1/2 min-w-12 items-center notebook:w-12"}>
            <Button className={"h-full w-full"} variant={"secondary"}>
                <TiHome size={4} />
            </Button>
        </Link>
    )
}
