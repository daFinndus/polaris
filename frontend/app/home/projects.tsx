import Link from "next/link"
import Image from "next/image"

import { projects } from "@/app/data/projects/projects"

import "@/app/styles/carousel-fade.css"
import AutoScroll from "embla-carousel-auto-scroll"

import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"

import { GrCubes } from "react-icons/gr"
import { FaCodepen } from "react-icons/fa"

const Project = ({ src, alt, width, height }: { src: string; alt: string; width: number; height: number }) => {
    return (
        <CarouselItem className={"smartphone:basis-1/3 basis-1/2"}>
            <Image
                className={
                    "bg-background m-0 flex h-24 w-43 items-center justify-center rounded-lg p-0 text-center text-xs font-bold blur-[2px]"
                }
                src={src}
                alt={alt}
                width={width}
                height={height}
                unoptimized
            />
        </CarouselItem>
    )
}

export const Projects = () => {
    return (
        <div
            className={
                "border-background-lighter bg-background-light text-primary tablet:w-131.5 flex h-max flex-col rounded-xl border-2 p-4"
            }
        >
            <div className={"flex flex-row items-center"}>
                <FaCodepen className={"text-color-light size-6"} />
                <p className={"smartphone:text-xl ml-3 text-lg font-bold"}>My Projects</p>
            </div>
            <p className={"text-primary-darker mt-1 text-sm"}>These are some of the projects I&#39;ve been working on</p>
            <div className={"flex flex-col items-center"}>
                <div className={"flex w-full flex-row items-center justify-center overflow-hidden"}>
                    <Carousel
                        opts={{
                            align: "center",
                            loop: true,
                        }}
                        plugins={[
                            AutoScroll({
                                speed: 0.5,
                            }),
                        ]}
                        className={"carousel-fade-overlay my-4 h-fit w-5/6"}
                    >
                        <CarouselContent className={""}>
                            {projects.map((project, index) => (
                                <Project
                                    key={index}
                                    src={project.src}
                                    alt={project.alt}
                                    width={project.width}
                                    height={project.height}
                                />
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
                <Button asChild variant={"color"} className={"w-56"}>
                    <Link href={"/projects"}>
                        <GrCubes />
                        View all my projects
                    </Link>
                </Button>
            </div>
        </div>
    )
}
