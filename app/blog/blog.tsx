"use client"

import React, { useState, useEffect } from "react"

import { notFound } from "next/navigation"

import { CiShare2 } from "react-icons/ci"
import { Copy } from "lucide-react"

import { blogs } from "@/app/data/articles/blogs"
import { Button } from "@/components/ui/button"
import Image from "next/image"

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

const Entry = ({ ident, thumbnail, width, height, title, date, description, content }: Blog) => {
    const [showContent, toggleContent] = useState(false)
    const [shared, setShared] = useState(false)

    const handleShare = () => {
        const url = `${window.location.origin}/blog#${ident}`

        navigator.clipboard.writeText(url).then(() => {
            setShared(true)
            setTimeout(() => setShared(false), 1000)
        })
    }

    return (
        <div
            id={ident}
            className="border-background-lighter bg-background-light tablet:w-131.5 relative flex flex-col rounded-xl border-2 p-6"
        >
            <button onClick={handleShare} title="Share blog" className={"absolute top-4 right-4 cursor-pointer font-mono text-xs"}>
                {shared ? (
                    <div className="flex items-center gap-1.5 text-green-400">
                        <CiShare2 size={13} />
                        <span>Copied URL!</span>
                    </div>
                ) : (
                    <div className="text-primary/40 hover:text-primary/80 flex items-center gap-1.5 duration-300">
                        <Copy size={13} />
                        <span>Share</span>
                    </div>
                )}
            </button>
            <div className="flex">
                <div className="bg-background mr-2 h-fit w-fit rounded-xl p-2">
                    <Image className="h-8 w-8" src={thumbnail} width={width} height={height} alt={`${title} thumbnail`} />
                </div>
                <div className="flex-col">
                    <p className="tablet:text-xl text-lg font-bold">{title}</p>
                    <p className="text-primary-darker mb-4 text-sm">{date}</p>
                </div>
            </div>
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

export const Blog = () => {
    useEffect(() => {
        if (blogs.length <= 0) {
            notFound()
        }
    })

    return (
        <div className={"text-primary grid grid-cols-1 gap-4 text-justify"}>
            {blogs.map((blog, index) => (
                <Entry
                    key={index}
                    ident={blog.ident}
                    thumbnail={blog.thumbnail}
                    width={blog.width}
                    height={blog.height}
                    title={blog.title}
                    date={blog.date}
                    description={blog.description}
                    content={blog.content}
                />
            ))}
        </div>
    )
}
