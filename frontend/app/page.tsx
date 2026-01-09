"use client"

import React, { useEffect } from "react"

import Head from "next/head"

import { About } from "@/app/home/about"

import { Blogs } from "@/app/home/blogs"
import { Projects } from "@/app/home/projects"
import { DevStack } from "@/app/home/development"
import { SecurityStack } from "@/app/home/cybersecurity"
import { getColorMode } from "@/app/hooks/getColorMode"
import { checkScreenValidity } from "@/app/hooks/checkScreenValidity"

import { ColorModeButton } from "@/components/color-mode-button"
import { ErrorPageButton } from "@/components/error-page-button"
import { ClockPageButton } from "@/components/clock-page-button"

const Unsupported = () => {
    return (
        <div className={"flex h-screen w-screen items-center justify-center text-xs"}>
            <p>Your device is not supported.</p>
        </div>
    )
}

const Supported = () => {
    return (
        <div className="notebook:my-8 m-4 flex justify-center">
            <PageHead />
            <div className={"notebook:fixed notebook:flex top-4 right-4 hidden flex-col gap-y-2"}>
                <ColorModeButton />
                <ClockPageButton />
                <ErrorPageButton />
            </div>
            <div className="desktop:grid desktop:grid-cols-3 hidden gap-4">
                <div className={"space-y-4"}>
                    <About />
                    <DevStack />
                </div>
                <SecurityStack />
                <div className={"space-y-4"}>
                    <Projects />
                    <Blogs />
                </div>
            </div>
            <div className="laptop:grid laptop:grid-cols-2 desktop:hidden hidden gap-4">
                <div className="space-y-4">
                    <About />
                    <DevStack />
                </div>
                <div className={"space-y-4"}>
                    <Projects />
                    <SecurityStack />
                    <Blogs />
                </div>
            </div>
            <div className="laptop:hidden grid grid-cols-1 gap-4">
                <div className={"notebook:hidden flex gap-x-2"}>
                    <ColorModeButton />
                    <ClockPageButton />
                    <ErrorPageButton />
                </div>
                <About />
                <DevStack />
                <SecurityStack />
                <Projects />
                <Blogs />
            </div>
        </div>
    )
}

const PageHead = () => {
    return (
        <Head>
            <title>Finn Luca Jensen</title>
            <meta name="description" content="The portfolio of Finn Luca 'daFinndus' Jensen" />
            <link rel="apple-touch-icon" sizes="180x180" href={"/favicon/apple-touch-icon.png"} />
            <link rel="icon" type="image/png" sizes="32x32" href={"/favicon/favicon-32x32.png"} />
            <link rel="manifest" href={"/favicon/site.webmanifest"} />
        </Head>
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
