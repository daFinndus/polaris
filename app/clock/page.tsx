"use client"

import React, { useEffect, useState } from "react"

import { getColorMode } from "@/app/hooks/getColorMode"
import { checkScreenValidity } from "@/app/hooks/checkScreenValidity"

import { HomeButton } from "@/components/home-button"
import { ColorModeButton } from "@/components/color-mode-button"

const Unsupported = () => {
    return (
        <div className={"flex h-screen w-screen items-center justify-center text-xs"}>
            <p>Your device is not supported.</p>
        </div>
    )
}

/**
 * Get the current time in HH:mm:ss format.
 * @returns The current time in a formatted string.
 */
const getTime = () => {
    const date = new Date()

    const hours = date.getHours().toString().padStart(2, "0")
    const minutes = date.getMinutes().toString().padStart(2, "0")
    const seconds = date.getSeconds().toString().padStart(2, "0")

    return `${hours}:${minutes}:${seconds}`
}

const Supported = () => {
    const [time, setTime] = useState<string>(getTime())

    useEffect(() => {
        scrollTo(0, 0)
        getColorMode()

        const interval = setInterval(() => {
            setTime(getTime())
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className={"relative flex h-screen w-screen flex-col items-center justify-center text-center"}>
            <div className={"tablet:flex absolute top-4 right-4 hidden flex-col gap-y-2"}>
                <HomeButton />
                <ColorModeButton />
            </div>
            <div className={"tablet:hidden mt-4 -mb-2 flex w-78 items-center justify-center gap-x-2"}>
                <HomeButton />
                <ColorModeButton />
            </div>
            <span className="text-primary smartphone:text-6xl tablet:text-8xl flex h-full items-center text-center text-4xl">
                {time}
            </span>
        </div>
    )
}

export default function Page() {
    useEffect(() => {
        getColorMode()
    }, [])

    return checkScreenValidity(Supported(), Unsupported())
}
