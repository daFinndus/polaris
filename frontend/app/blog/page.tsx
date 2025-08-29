"use client"

import React, { useEffect } from "react"

import { Blog } from "@/app/blog/blog"
import { getColorMode } from "@/app/hooks/getColorMode"
import { checkScreenValidity } from "@/app/hooks/checkScreenValidity"

import HomeButton from "@/components/home-button"
import ColorModeButton from "@/components/color-mode-button"

const Unsupported = () => {
    return (
        <div className={"flex h-screen w-screen items-center justify-center font-sans text-xs"}>
            <p>Your device is not supported.</p>
        </div>
    )
}

const Supported = () => {
    return (
        <div className={"m-4 flex justify-center font-sans notebook:my-8"}>
            <div className={"right-4 top-4 hidden flex-col gap-y-2 notebook:fixed notebook:flex"}>
                <HomeButton />
                <ColorModeButton />
            </div>
            <div className={"grid grid-cols-1 gap-4"}>
                <div className={"flex gap-x-2 notebook:hidden"}>
                    <HomeButton />
                    <ColorModeButton />
                </div>
                <Blog />
            </div>
        </div>
    )
}

export default function Page() {
    useEffect(() => {
        if (typeof window !== undefined) {
            scrollTo(0, 0)
            getColorMode()
        }
    }, [])

    return checkScreenValidity(Supported(), Unsupported())
}
