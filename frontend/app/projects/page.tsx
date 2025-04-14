"use client"

import React, { useEffect } from "react"

import Projects from "@/app/projects/projects"
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
        <div className={"relative flex w-screen flex-col items-center justify-center gap-y-8 font-sans"}>
            <div className={"absolute right-4 top-4 hidden flex-col gap-y-2 tablet:flex"}>
                <HomeButton />
                <ColorModeButton />
            </div>
            <div className={"-mb-2 mt-4 flex w-[312px] items-center justify-center gap-x-2 tablet:hidden"}>
                <HomeButton />
                <ColorModeButton />
            </div>
            <div className={"flex items-center justify-center tablet:mt-20"}>
                <Projects />
            </div>
        </div>
    )
}

export default function Page() {
    useEffect(() => {
        getColorMode()
    }, [])

    return checkScreenValidity(Supported(), Unsupported())
}
