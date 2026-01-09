"use client"

import React, { useEffect } from "react"

import { checkScreenValidity } from "@/app/hooks/checkScreenValidity"

import { HomeButton } from "@/components/home-button"
import { ColorModeButton } from "@/components/color-mode-button"
import { ClockPageButton } from "@/components/clock-page-button"
import { ErrorPageButton } from "@/components/error-page-button"

import { getColorMode } from "@/app/hooks/getColorMode"

const Unsupported = () => {
    return (
        <div className={"flex h-screen w-screen items-center justify-center text-xs"}>
            <p>Your device is not supported.</p>
        </div>
    )
}

const Supported = () => {
    return (
        <div>
            <div className="notebook:fixed notebook:flex top-4 right-4 hidden flex-col gap-y-2">
                <ColorModeButton />
                <HomeButton />
                <ClockPageButton />
                <ErrorPageButton />
            </div>
            <div className="bg-background text-primary flex h-screen w-screen flex-col items-center justify-center text-sm">
                <p>Finn Luca Jensen</p>
                <p>Waitzstraße 47</p>
                <p className={"mb-4"}>24105 Kiel</p>
                <p>E-Mail: finnlucajensen@proton.me</p>
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
