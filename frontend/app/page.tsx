"use client"

import React, { useEffect } from "react"

import Head from "next/head"

import About from "./home/about"

import Blogs from "@/app/home/blogs"
import Projects from "@/app/home/projects"
import DevStack from "@/app/home/development"
import SecurityStack from "@/app/home/cybersecurity"
import { getColorMode } from "@/app/hooks/getColorMode"
import { checkScreenValidity } from "@/app/hooks/checkScreenValidity"

import ColorModeButton from "@/components/color-mode-button"
import ErrorPageButton from "@/components/error-page-button"

const Unsupported = () => {
    return (
        <div className={"flex h-screen w-screen items-center justify-center font-sans text-xs"}>
            <p>Your device is not supported.</p>
        </div>
    )
}

const Supported = () => {
    return (
        <div className="m-4 flex justify-center font-sans notebook:my-8">
            <PageHead />
            <div className={"right-4 top-4 hidden flex-col gap-y-2 notebook:fixed notebook:flex"}>
                <ColorModeButton />
                <ErrorPageButton />
            </div>
            <div className="hidden gap-4 desktop:grid desktop:grid-cols-3">
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
            <div className="hidden gap-4 laptop:grid laptop:grid-cols-2 desktop:hidden">
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
            <div className="grid grid-cols-1 gap-4 laptop:hidden">
                <div className={"flex gap-x-2 notebook:hidden"}>
                    <ColorModeButton />
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
