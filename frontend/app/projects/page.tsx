"use client"

import React, { useEffect } from "react"

import { Projects } from "@/app/projects/projects"
import { getColorMode } from "@/app/hooks/getColorMode"
import { checkScreenValidity } from "@/app/hooks/checkScreenValidity"

import { HomeButton } from "@/components/home-button"
import { ColorModeButton } from "@/components/color-mode-button"

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
            <div className={"tablet:flex absolute top-4 right-4 hidden flex-col gap-y-2"}>
                <HomeButton />
                <ColorModeButton />
            </div>
            <div className={"tablet:hidden mt-4 -mb-2 flex w-78 items-center justify-center gap-x-2"}>
                <HomeButton />
                <ColorModeButton />
            </div>
            <div className={"tablet:mt-20 flex items-center justify-center"}>
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
