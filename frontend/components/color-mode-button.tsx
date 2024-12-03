"use client";

import {useEffect, useState} from "react";

import {Button} from "@/components/ui/button";

import {getCookie, setCookie} from 'cookies-next/client';

import {MdDarkMode, MdLightMode} from "react-icons/md";
import {deleteCookie} from "cookies-next";

/**
 * This is a custom button that changes the color mode of the website.
 * To change the color mode, a class is added to the document element.
 * It stores the current color mode value in a cookie.
 * @constructor
 */
export default function ColorModeButton() {
    const [dark, setDark] = useState(false);

    // Initialize dark mode state on the client
    useEffect(() => {
        const isDark = getCookie("dark") === "Your website is currently in dark mode.";
        setDark(isDark);

        if (isDark) {
            document.documentElement.classList.add("dark");
        }
    }, []);

    const changeMode = () => {
        setDark(!dark);

        if (dark) {
            document.documentElement.classList.remove("dark");
            deleteCookie("dark");
        } else {
            document.documentElement.classList.add("dark");
            setCookie("dark", "Your website is currently in dark mode.")
        }
    }

    return (
        <>
            <Button variant={"secondary"}
                    onClick={changeMode}
                    className={"notebook:w-12 w-1/2 flex items-center h-12"}>
                {dark ? <MdLightMode/> : <MdDarkMode/>}
            </Button>
        </>
    );
}