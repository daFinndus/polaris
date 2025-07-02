"use client"

import React, { useState } from "react"

import { notFound } from "next/navigation"

import { blogs } from "@/app/data/articles/blogs"
import { Button } from "@/components/ui/button"

interface Blog {
    title: string
    date: string
    description: string
    content: React.ReactNode
}

export default function Blog() {
    return (
        <>
            {blogs.length == 0 ? (
                notFound()
            ) : (
                <div className={"flex w-auto flex-col items-center justify-center gap-4 notebook:my-20"}>
                    {blogs.length > 0 &&
                        blogs.map((blog, index) => (
                            <Entry
                                key={index}
                                title={blog.title}
                                date={blog.date}
                                description={blog.description}
                                content={blog.content}
                            />
                        ))}
                </div>
            )}
        </>
    )
}

const Entry = ({ title, date, description, content }: Blog) => {
    const [showContent, toggleContent] = useState(false)

    return (
        <div className="flex h-max w-auto flex-col rounded-xl border-2 border-background-lighter bg-background-light px-8 py-6 text-justify text-primary tablet:w-[526px] notebook:mx-0">
            <p className="text-lg font-bold tablet:text-xl">{title}</p>
            <p className="mb-4 text-sm text-primary-darker">{date}</p>
            <p className={"text-sm"}>{description}</p>
            <div className="flex flex-col items-center">
                {showContent && <div className={"mt-4 w-full text-sm"}>{content}</div>}
                <Button
                    asChild
                    variant="secondary"
                    className="mt-8 w-full cursor-default"
                    onClick={() => toggleContent(!showContent)}
                >
                    <p>{showContent ? "Hide" : "Show"} content</p>
                </Button>
            </div>
        </div>
    )
}
