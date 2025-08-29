import React from "react"

import Image from "next/image"

interface Picture {
    src: string
    alt: string
    width: number
    height: number
}

export const Bild = ({ src, alt, width, height }: Picture) => {
    return (
        <Image
            className={"my-8 h-auto w-full rounded-xl shadow-lg shadow-background-lightest"}
            src={src}
            alt={alt}
            width={width}
            height={height}
        />
    )
}
