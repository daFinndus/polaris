"use client";

import React from "react";

import Head from "next/head";

import About from "./home/about";
import Joke from "@/app/home/joke";
import Projects from "@/app/home/projects";
import DevStack from "@/app/home/development";
import HackTheBox from "@/app/home/hack_the_box";
import SecurityStack from "@/app/home/cybersecurity";

import NewsPageButton from "@/components/news-page-button";
import ColorModeButton from "@/components/color-mode-button";
import ErrorPageButton from "@/components/error-page-button";
import ThreePageButton from "@/components/three-page-button";

import {useWindowSize} from "@/app/hooks/useWindowSize";


function Unsupported() {
    return (
        <div className={"flex h-screen w-screen items-center justify-center font-sans text-xs"}>
            <p>Your device is not supported.</p>
        </div>
    );
}

function Supported() {
    return (
        <div className="relative flex w-screen items-center justify-center bg-background">
            <div className={"laptop:flex laptop:flex-col hidden gap-y-2 laptop:fixed laptop:top-4 laptop:right-4"}>
                <ColorModeButton/>
                <NewsPageButton/>
                <ThreePageButton/>
                <ErrorPageButton/>
            </div>
            <div className="flex items-start justify-center font-sans tablet:p-8 laptop:px-32">
                <PageHead/>
                <div className="hidden justify-center gap-4 desktop:grid desktop:grid-cols-3">
                    <div className={"space-y-4"}>
                        <About/>
                        <SecurityStack/>
                    </div>
                    <div className={"space-y-4"}>
                        <DevStack/>
                        <HackTheBox/>
                    </div>
                    <div className={"space-y-4"}>
                        <Projects/>
                        <Joke/>
                    </div>
                </div>
                <div className="hidden gap-4 laptop:grid laptop:grid-cols-2 desktop:hidden">
                    <div className="space-y-4">
                        <About/>
                        <DevStack/>
                        <HackTheBox/>
                    </div>
                    <div className={"space-y-4"}>
                        <Projects/>
                        <SecurityStack/>
                        <Joke/>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4 p-4 laptop:hidden">
                    <div
                        className={"flex gap-x-2 notebook:fixed notebook:flex-col notebook:gap-y-2 notebook:top-4 notebook:right-4"}>
                        <ColorModeButton/>
                        <NewsPageButton/>
                        <ThreePageButton/>
                    </div>
                    <About/>
                    <DevStack/>
                    <SecurityStack/>
                    <HackTheBox/>
                    <Projects/>
                    <Joke/>
                </div>
            </div>
        </div>
    );
}

function PageHead() {
    return (
        <Head>
            <title>Finn Luca Jensen</title>
            <meta
                name="description"
                content="This is the portfolio of Finn Luca 'daFinndus' Jensen"
            />
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href={"/favicon/apple-touch-icon.png"}
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href={"/favicon/favicon-32x32.png"}
            />
            <link rel="manifest" href={"/favicon/site.webmanifest"}/>
        </Head>
    );
}

export default function Page() {
    let size = useWindowSize();

    if (size.width! > 396) {
        return <Supported/>;
    } else if (size.width! > 0) {
        return <Unsupported/>;
    }
}
