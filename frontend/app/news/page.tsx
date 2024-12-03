"use client";

import Link from "next/link";

import {Button} from "@/components/ui/button";

import {useWindowSize} from "@/app/hooks/useWindowSize";
import React from "react";

function Unsupported() {
    return (
        <div className={"flex h-screen w-screen items-center justify-center font-sans text-xs"}>
            <p>Your device is not supported.</p>
        </div>
    );
}

function Supported() {
    return (
        <div className={"font-sans relative h-screen w-screen justify-center flex items-center"}>
            Will be developed soon..
            <Link href={"/"} className={"absolute top-4 left-4"}>
                <Button variant={"secondary"}>
                    Back to homepage
                </Button>
            </Link>
        </div>
    );
}

export default function Home() {
    let size = useWindowSize();

    if (size.width! > 396) {
        return <Supported/>;
    } else if (size.width! > 0) {
        return <Unsupported/>;
    }
}