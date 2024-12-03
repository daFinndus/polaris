import Image from "next/image";
import Link from "next/link";

import {Button} from "@/components/ui/button";

import {Carousel, CarouselContent, CarouselItem,} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import "@/app/styles/carousel-fade.css";

import {GrCubes} from "react-icons/gr";
import {FaCodepen} from "react-icons/fa";

import projects from "@/app/data/projects";

function Project({
                     src,
                     alt,
                     width,
                     height,
                 }: {
    src: string;
    alt: string;
    width: number;
    height: number;
}) {
    return (
        <CarouselItem className={"basis-1/3"}>
            <Image
                className={"m-0 flex h-24 w-[172px] items-center justify-center rounded-lg bg-background p-0 text-center text-xs font-bold"}
                src={src}
                alt={alt}
                width={width}
                height={height}
            />
        </CarouselItem>
    );
}

export default function Projects() {
    return (
        <div
            className={
                "flex h-max flex-col rounded-xl border-2 border-background-lighter bg-background-light p-4 text-primary tablet:w-[526px]"
            }
        >
            <div className={"flex flex-row"}>
                <FaCodepen className={"size-6 text-color-light"}/>
                <p className={"ml-3 text-xl font-bold"}>My Projects</p>
            </div>
            <p className={"mt-1 text-sm text-primary-darker"}>
                These are some of the projects I&#39;ve been working on
            </p>
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
                        <GrCubes className={"text-color-lighter"}/>
                        View all my projects
                    </Link>
                </Button>
            </div>
        </div>
    );
}
