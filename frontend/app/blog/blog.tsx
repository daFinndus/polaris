"use client"

import React, { useState } from "react"

import { blogs } from "@/app/data/blogs"
import { Button } from "@/components/ui/button"

interface Blog {
    title: string
    date: string
    description: string
    content: React.ReactNode
}

export default function Blog() {
    return (
        <div className={"mb-4 flex w-auto flex-col gap-y-8 font-sans text-base"}>
            {blogs.map((blog, index) => (
                <Entry key={index} title={blog.title} date={blog.date} description={blog.description} content={blog.content} />
            ))}
        </div>
    )
}

const Entry = ({ title, date, description, content }: Blog) => {
    const [showContent, toggleContent] = useState(false)

    return (
        <div className="relative flex h-max w-[312px] flex-col rounded-xl border-2 border-background-lighter bg-background-light px-8 py-6 text-primary tablet:w-[526px]">
            <p className="text-xl font-bold">{title}</p>
            <p className="mb-4 text-sm text-primary-darker">{date}</p>
            <p className={"max-w-prose leading-relaxed tracking-wide"}>{description}</p>
            <div className="flex w-full flex-col items-center">
                {showContent && <div className="mt-2 max-w-prose leading-relaxed tracking-wide text-primary-darker">{content}</div>}
                <Button asChild variant="secondary" className="mt-4 w-56" onClick={() => toggleContent(!showContent)}>
                    <p>{showContent ? "Hide" : "Show"} content</p>
                </Button>
            </div>
        </div>
    )
}
