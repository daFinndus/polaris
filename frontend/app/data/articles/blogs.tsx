import React from "react"

import Facts from "@/app/data/articles/markdown/facts.mdx"

interface Blog {
    ident: string
    thumbnail: string
    width: number
    height: number
    title: string
    date: string
    description: string
    content: React.ReactNode
}

export const blogs: Blog[] = [
    {
        ident: "facts",
        thumbnail: "https://s8lcpnzirhyz4bbt.public.blob.vercel-storage.com/Blogs/facts.png",
        width: 300,
        height: 300,
        title: "Facts",
        date: "17.02.2025",
        description:
            "This is a writeup of Facts, an easy machine by Hack the Box. Relevant for this machine was Fuzzing, the AWS CLI and sudo misconfigurations.",
        content: <Facts />,
    },
]
