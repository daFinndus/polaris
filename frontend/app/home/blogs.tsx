import React from "react"

import Link from "next/link"

import { blogs } from "@/app/data/blogs"
import { Button } from "@/components/ui/button"

import { SiInoreader, SiReadthedocs } from "react-icons/si"

const Preview = () => {
    const latest = blogs.slice(0, 2)

    return (
        <div className="mb-6 mt-4 space-y-6">
            {latest.map((blog, index) => (
                <div key={index} className="rounded-md bg-background-lighter p-3 shadow-lg shadow-primary-light transition">
                    <p className="text-base font-semibold text-primary">{blog.title}</p>
                    <p className="text-sm text-primary">{blog.date}</p>
                    <p className="mt-2 whitespace-pre-line text-xs text-primary-dark tablet:text-sm">{blog.description}</p>
                </div>
            ))}
        </div>
    )
}

export default function Blogs() {
    return (
        <div
            className={
                "flex h-max flex-col rounded-xl border-2 border-background-lighter bg-background-light p-4 text-primary tablet:w-[526px]"
            }
        >
            <div className={"flex flex-row"}>
                <SiInoreader className={"size-6 text-color-light"} />
                <p className={"ml-3 text-xl font-bold"}>Read my Blog</p>
            </div>
            <div className={"flex flex-col items-center"}>
                <Preview />
                <Button asChild variant={"color"} className={"w-56"}>
                    <Link href={"/blog"}>
                        <SiReadthedocs className={"font-bold text-color-lightest"} />
                        Let's go to the blog
                    </Link>
                </Button>
            </div>
        </div>
    )
}
