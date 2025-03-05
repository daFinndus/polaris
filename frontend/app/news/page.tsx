"use client";

import React, {useEffect, useState} from "react";

import HomeButton from "@/components/home-button";
import Articles from "@/app/news/articles";

import {useWindowSize} from "@/app/hooks/useWindowSize";
import {getColorMode} from "@/app/hooks/getColorMode";
import {checkBackendConnection} from "@/app/hooks/checkBackendConnection";
import {notFound} from "next/navigation";


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
        <div className={"font-sans relative justify-center flex items-center"}>
            <div className={"h-full"}>
                <Articles/>
            </div>
            <div className={"hidden notebook:flex absolute top-6 left-4"}><HomeButton/></div>
        </div>
    );
}

export default function Page() {
    const size = useWindowSize();
    const [backend, setBackend] = useState<boolean | null>(null);

    useEffect(() => {
        checkBackendConnection().then((response) => {
            if (response === null) setBackend(false);
            else setBackend(true);
        });
    }, []);
    
    if (backend === null) return null;
    if (!backend) return notFound();

    if (size.width! > 396) {
        return <Supported/>;
    } else if (size.width! > 0) {
        return <Unsupported/>;
    }
}
