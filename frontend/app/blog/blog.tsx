"use client"

import React, { useState, useEffect } from "react"

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
    useEffect(() => {
        if (blogs.length <= 0) {
            notFound()
        }
    })

    return (
        <div className={"grid grid-cols-1 gap-4 text-justify text-primary"}>
            {blogs.map((blog, index) => (
                <Entry key={index} title={blog.title} date={blog.date} description={blog.description} content={blog.content} />
            ))}
        </div>
    )
}

const Entry = ({ title, date, description, content }: Blog) => {
    const [showContent, toggleContent] = useState(false)

    return (
        <div className="flex flex-col rounded-xl border-2 border-background-lighter bg-background-light px-8 py-6 tablet:w-[526px]">
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
