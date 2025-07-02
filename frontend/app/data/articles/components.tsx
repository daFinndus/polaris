import Image from "next/image"
import React from "react"

interface Picture {
    src: string
    alt: string
    width: number
    height: number
}

const Bild = ({ src, alt, width, height }: Picture) => {
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

export default Bild
