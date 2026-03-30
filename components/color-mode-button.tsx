"use client"

import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"

import { setCookie } from "cookies-next/client"
import { deleteCookie } from "cookies-next"

import { MdDarkMode, MdLightMode } from "react-icons/md"
import { getColorMode } from "@/app/hooks/getColorMode"

/**
 * This is a custom button that changes the color mode of the website.
 * To change the color mode, a class is added to the document element.
 * It stores the current color mode value in a cookie.
 * @constructor
 */
export const ColorModeButton = () => {
    const [dark, setDark] = useState(false)

    useEffect(() => {
        setDark(getColorMode())
    }, [])

    const changeMode = () => {
        setDark(!dark)

        if (dark) {
            document.documentElement.classList.remove("dark")
            deleteCookie("dark")
        } else {
            document.documentElement.classList.add("dark")
            setCookie("dark", "Your website is currently in dark mode.")
        }
    }

    return (
        <Button
            variant={"secondary"}
            onClick={changeMode}
            aria-label={"Change the color mode of the website"}
            className={"notebook:w-12 flex h-12 w-1/2 min-w-12 items-center"}
        >
            {dark ? <MdLightMode /> : <MdDarkMode />}
        </Button>
    )
}
