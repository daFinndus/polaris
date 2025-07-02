"use client"

import React, { useEffect } from "react"

import Blog from "@/app/blog/blog"
import { getColorMode } from "@/app/hooks/getColorMode"

import HomeButton from "@/components/home-button"
import { checkScreenValidity } from "@/app/hooks/checkScreenValidity"
import ColorModeButton from "@/components/color-mode-button"

const Unsupported = () => {
    return (
        <div className={"flex h-screen w-screen items-center justify-center font-sans text-xs"}>
            <p>Your device is not supported.</p>
        </div>
    )
}

const Supported = () => {
    useEffect(() => {
        scrollTo(0, 0)
        getColorMode()
    }, [])

    return (
        <div className={"relative mx-4 flex flex-col items-center justify-center gap-y-4 font-sans notebook:mx-0"}>
            <div className={"absolute right-4 top-4 hidden flex-col gap-y-2 notebook:flex"}>
                <HomeButton />
                <ColorModeButton />
            </div>
            <div
                className={
                    "mt-4 flex w-full flex-row items-center justify-center gap-x-2 tablet:mt-12 tablet:w-[526px] notebook:hidden"
                }
            >
                <HomeButton />
                <ColorModeButton />
            </div>
            <Blog />
        </div>
    )
}

export default function Page() {
    useEffect(() => {
        getColorMode()
    }, [])

    return checkScreenValidity(Supported(), Unsupported())
}
