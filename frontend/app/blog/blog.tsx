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

export const Blog = () => {
    useEffect(() => {
        if (blogs.length <= 0) {
            notFound()
        }
    })

    return (
        <div className={"text-primary grid grid-cols-1 gap-4 text-justify"}>
            {blogs.map((blog, index) => (
                <Entry key={index} title={blog.title} date={blog.date} description={blog.description} content={blog.content} />
            ))}
        </div>
    )
}

const Entry = ({ title, date, description, content }: Blog) => {
    const [showContent, toggleContent] = useState(false)

    return (
        <div className="border-background-lighter bg-background-light tablet:w-131.5 flex flex-col rounded-xl border-2 px-8 py-6">
            <p className="tablet:text-xl text-lg font-bold">{title}</p>
            <p className="text-primary-darker mb-4 text-sm">{date}</p>
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
