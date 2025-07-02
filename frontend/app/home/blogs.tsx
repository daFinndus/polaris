import React from "react"

import Link from "next/link"

import { blogs } from "@/app/data/articles/blogs"
import { Button } from "@/components/ui/button"

import { SiInoreader, SiReadthedocs } from "react-icons/si"

const Preview = () => {
    const latest = blogs.slice(0, 2)

    return (
        <div className="my-4 min-w-[494px] space-y-4 text-base">
            {latest.map((blog, index) => (
                <div key={index} className="rounded-md bg-background-lighter px-4 py-4">
                    <p className="text-base font-semibold text-primary">{blog.title}</p>
                    <p className="text-sm text-primary">{blog.date}</p>
                    <p className="mt-2 whitespace-pre-line text-justify text-sm text-primary-dark">{blog.description}</p>
                </div>
            ))}
        </div>
    )
}

export default function Blogs() {
    return (
        <>
            {blogs.length > 0 ? (
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
                                <SiReadthedocs />
                                Let's go to the blog
                            </Link>
                        </Button>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </>
    )
}
