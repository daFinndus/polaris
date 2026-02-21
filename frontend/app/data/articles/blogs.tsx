import React from "react"

import Facts from "@/app/data/articles/markdown/facts.mdx"
import WingData from "@/app/data/articles/markdown/wingdata.mdx"

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
        ident: "wingdata",
        thumbnail: "https://s8lcpnzirhyz4bbt.public.blob.vercel-storage.com/Blogs/wingdata.png",
        width: 300,
        height: 300,
        title: "WingData",
        date: "21.02.2025",
        description:
            "This is a writeup of WingData, an easy machine by Hack the Box. This machine mainly worked with Wing FTP and a vulnerable version of the python library tarfile.",
        content: <WingData />,
    },
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
