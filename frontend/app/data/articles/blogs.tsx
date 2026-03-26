import React from "react"

import CCTV from "@/app/data/articles/markdown/cctv.mdx"
import Facts from "@/app/data/articles/markdown/facts.mdx"
import Kobold from "@/app/data/articles/markdown/kobold.mdx"
import WingData from "@/app/data/articles/markdown/wingdata.mdx"
import VariaType from "@/app/data/articles/markdown/variatype.mdx"
import Interpreter from "@/app/data/articles/markdown/interpreter.mdx"

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
        ident: "Kobold",
        thumbnail: "https://s8lcpnzirhyz4bbt.public.blob.vercel-storage.com/Blogs/kobold.png",
        width: 300,
        height: 300,
        title: "Kobold",
        date: "26.03.2026",
        description:
            "This is a writeup of Kobold, an easy linux machine by Hack the Box. This machine mainly worked with a vulnerable version of MCPJam and abusing docker.",
        content: <Kobold />,
    },
    {
        ident: "variatype",
        thumbnail: "https://s8lcpnzirhyz4bbt.public.blob.vercel-storage.com/Blogs/variatype.png",
        width: 300,
        height: 300,
        title: "VariaType",
        date: "19.03.2026",
        description:
            "This is a writeup of VariaType, a medium linux machine by Hack the Boxk. This machine mainly worked with a vulnerable version of fontTools and setuptools.",
        content: <VariaType />,
    },
    {
        ident: "cctv",
        thumbnail: "https://s8lcpnzirhyz4bbt.public.blob.vercel-storage.com/Blogs/cctv.png",
        width: 300,
        height: 300,
        title: "CCTV",
        date: "13.03.2026",
        description:
            "This is a writeup of CCTV, an easy linux machine by Hack the Box. This machine mainly worked with ZoneMinder and motionEye.",
        content: <CCTV />,
    },
    {
        ident: "interpreter",
        thumbnail: "https://s8lcpnzirhyz4bbt.public.blob.vercel-storage.com/Blogs/interpreter.png",
        width: 300,
        height: 300,
        title: "Interpreter",
        date: "24.02.2025",
        description:
            "This is a writeup of Interpreter, a medium linux machine by Hack the Box. This machine mainly worked with Mirth Connect, a healthcare integration engine.",
        content: <Interpreter />,
    },
    {
        ident: "wingdata",
        thumbnail: "https://s8lcpnzirhyz4bbt.public.blob.vercel-storage.com/Blogs/wingdata.png",
        width: 300,
        height: 300,
        title: "WingData",
        date: "21.02.2025",
        description:
            "This is a writeup of WingData, an easy linux machine by Hack the Box. This machine mainly worked with Wing FTP and a vulnerable version of the python library tarfile.",
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
            "This is a writeup of Facts, an easy linux machine by Hack the Box. Relevant for this machine was Fuzzing, the AWS CLI and sudo misconfigurations.",
        content: <Facts />,
    },
]
