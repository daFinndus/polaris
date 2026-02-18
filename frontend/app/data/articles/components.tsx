import { useState } from "react"

import Image from "next/image"

import { Check, Copy } from "lucide-react"
import Link from "next/link"

interface Picture {
    src: string
    alt: string
    width: number
    height: number
}

export const Bild = ({ src, alt, width, height }: Picture) => {
    return (
        <Image
            className={"shadow-background-lighter my-4 h-auto w-full rounded shadow-lg"}
            src={src}
            alt={alt}
            width={width}
            height={height}
        />
    )
}

export const Marker = ({ content, link }: { content: string; link?: string }) => {
    return (
        <Link href={link || ""} target="_blank" className="text-primary hover:text-primary/80">
            <span className="inline-block text-blue-300">
                <span>{content}</span>
            </span>
        </Link>
    )
}

export const Code = ({ content }: { content: string }) => {
    return (
        <div className="bg-background-lighter text-primary inline-block rounded border px-1">
            <span className="font-mono">{content}</span>
        </div>
    )
}

export const Block = ({ content, language }: { content: string; language?: string }) => {
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(content).then(() => {
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        })
    }

    return (
        <div className="border-primary/10 bg-background-lighter my-4 w-full max-w-full overflow-hidden rounded border">
            <div className="border-primary/10 flex items-center justify-between border-b px-4 py-2">
                <span className="text-primary/40 font-mono text-xs tracking-widest uppercase">{language}</span>
                <button onClick={handleCopy} title="Copy code" className={"cursor-pointer font-mono text-xs"}>
                    {copied ? (
                        <div className="flex items-center gap-1.5 text-green-400">
                            <Check size={13} />
                            <span>Copied!</span>
                        </div>
                    ) : (
                        <div className="text-primary/40 hover:text-primary/80 flex items-center gap-1.5 duration-300">
                            <Copy size={13} />
                            <span>Copy</span>
                        </div>
                    )}
                </button>
            </div>

            <div className="max-w-full overflow-x-auto overflow-y-visible">
                <pre className="text-primary min-w-0 px-4 py-3 font-mono text-sm leading-relaxed whitespace-pre">{content}</pre>
            </div>
        </div>
    )
}
