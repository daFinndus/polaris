"use client";

import React, {useEffect} from "react";

import Link from "next/link";

import {Button} from "@/components/ui/button";

import {useWindowSize} from "@/app/hooks/useWindowSize";
import {getColorMode} from "@/app/hooks/getColorMode";

function Unsupported() {
    return (
        <div className={"flex h-screen w-screen items-center justify-center font-sans text-xs"}>
            <p>Your device is not supported.</p>
        </div>
    );
}

function Supported() {
    useEffect(() => {
        getColorMode();
    }, []);

    return (
        <div className={"font-sans relative h-screen w-screen justify-center flex items-center"}>
            No projects yet..
            <Link href={"/"} className={"absolute top-4 left-4"}>
                <Button variant={"secondary"}>Back to homepage</Button>
            </Link>
        </div>
    );
}

export default function Page() {
    const size = useWindowSize();

    if (size.width! > 396) {
        return <Supported/>;
    } else if (size.width! > 0) {
        return <Unsupported/>;
    }
}
