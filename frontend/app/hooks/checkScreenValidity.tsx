import React from "react"

import { useWindowSize } from "@/app/hooks/useWindowSize"

/**
 * This function will check if the page can be displayed on the current screen size.
 * @param Supported The page to be displayed if the screen size is supported.
 * @param Unsupported The page to be displayed if the screen size is not supported.
 */
export const checkScreenValidity = (Supported: React.JSX.Element, Unsupported: React.JSX.Element) => {
    const size = useWindowSize()

    if (size.width! >= 328) return Supported
    else if (size.width! > 0) return Unsupported
}
