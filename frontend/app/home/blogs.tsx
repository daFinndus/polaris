import React from "react"

import Link from "next/link"

import { blogs } from "@/app/data/articles/blogs"

import { Button } from "@/components/ui/button"

import { SiInoreader, SiReadthedocs } from "react-icons/si"
import Image from "next/image"

const Preview = () => {
    const latest = blogs.slice(0, 2)

    return (
        <div className="tablet:min-w-123.5 my-4 w-auto space-y-4 text-base">
            {latest.map((blog, index) => (
                <div key={index} className="bg-background-lighter rounded-md p-4">
                    <div className="flex h-auto">
                        <div className="bg-background-light mr-2 w-fit rounded-xl p-2">
                            <Image
                                className="h-8 w-8"
                                src={blog.thumbnail}
                                width={blog.width}
                                height={blog.height}
                                alt={`${blog.title} thumbnail`}
                            />
                        </div>
                        <div className="flex h-auto flex-col justify-center">
                            <p className="text-primary text-base font-semibold">{blog.title}</p>
                            <p className="text-primary text-sm">{blog.date}</p>
                        </div>
                    </div>
                    <p className="text-primary-dark mt-2 text-justify text-sm whitespace-pre-line">{blog.description}</p>
                </div>
            ))}
        </div>
    )
}

export const Blogs = () => {
    return (
        <>
            {blogs.length > 0 ? (
                <div
                    className={
                        "border-background-lighter bg-background-light text-primary tablet:w-131.5 flex h-max flex-col rounded-xl border-2 p-4"
                    }
                >
                    <div className={"flex flex-row items-center"}>
                        <SiInoreader className={"text-color-light size-6"} />
                        <p className={"smartphone:text-xl ml-3 text-lg font-bold"}>Read my Blog</p>
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
