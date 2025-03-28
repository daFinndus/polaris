import React, { useState } from "react"

import Image from "next/image"
import Link from "next/link"

import projects from "@/app/data/projects"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import { IconType } from "react-icons"
import { FaSort } from "react-icons/fa6"
import { CiFilter } from "react-icons/ci"
import { IoFilter } from "react-icons/io5"
import { FaProjectDiagram } from "react-icons/fa"
import { RiEqualizerFill } from "react-icons/ri"

interface Project {
    name: string
    src: string
    alt: string
    width: number
    height: number
    description: string
    url?: string
    demo?: string
    skills?: {
        name: string
        background: string
        icon: IconType
        color: string
    }[]
}

const Tile = ({ project }: { project: Project }) => {
    return (
        <div
            className={
                "relative flex h-[412px] w-[312px] flex-col items-center justify-start rounded-lg border-2 border-background-lighter bg-background-light px-4"
            }
        >
            <CardContainer className={"mb-6 h-fit w-full"}>
                <CardBody className={"relative h-fit w-full shadow-lg shadow-background-lighter"}>
                    <CardItem className={"h-fit w-full"} translateZ={15} translateY={2.5}>
                        <Image
                            className={"mt-4 h-44 w-[364px] rounded-lg"}
                            src={project.src}
                            alt={project.alt}
                            width={project.width}
                            height={project.height}
                        />
                    </CardItem>
                </CardBody>
            </CardContainer>
            <div className={"flex h-full w-full flex-col items-start justify-start text-start"}>
                <p className={"mb-2 text-base font-bold"}>{project.name}</p>
                <p className={"text-sm text-primary-darker"}>{project.description}</p>
                <div className={"mt-4 flex flex-wrap gap-x-2 gap-y-2"}>
                    {project.skills?.map((skill, index) => (
                        <Badge
                            className={`${skill.background} hover:${skill.background} flex min-h-6 gap-x-2 pl-2 text-primary`}
                            key={index}
                        >
                            {skill.name}
                            <skill.icon className={`${skill.color}`} />
                        </Badge>
                    ))}
                </div>
                <div className={"mb-2 flex h-full w-full items-end gap-x-4 px-4"}>
                    {project.url ? (
                        <Link href={project.url} className={"w-1/2"} target={"_blank"}>
                            <Button className={"mt-6 w-full bg-color-light text-primary hover:bg-primary hover:text-color"}>
                                Sourcecode
                            </Button>
                        </Link>
                    ) : (
                        <Button className={"mt-6 w-1/2 bg-background-lighter text-primary-darker"} disabled>
                            No Sourcecode Available
                        </Button>
                    )}
                    {project.demo ? (
                        <Link href={project.demo} className={"w-1/2"} target={"_blank"}>
                            <Button className={"mt-6 w-full bg-primary text-color hover:bg-color hover:text-primary"}>Demo</Button>
                        </Link>
                    ) : (
                        <Button className={"mt-6 w-1/2 bg-background-lighter text-primary-darker"} disabled>
                            No Demo Available
                        </Button>
                    )}
                </div>
            </div>
        </div>
    )
}

const Filter = () => {
    return (
        <Collapsible className="bg-background tablet:max-w-[964px]">
            <div className="mb-4 flex items-center justify-between space-x-4 rounded-lg border-2 border-background-lighter bg-background-light px-2 py-1">
                <h4 className="ml-2 min-w-fit text-sm font-semibold">Set filters</h4>
                <CollapsibleTrigger asChild className={"items-center justify-end"}>
                    <div className={"flex w-full items-end"}>
                        <Button variant={"ghost"}>
                            <IoFilter />
                        </Button>
                    </div>
                </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="mb-4 space-y-2">
                <div
                    className={
                        "flex w-auto max-w-[312px] flex-col gap-x-8 gap-y-8 rounded-lg border-2 border-background-lighter p-4 notebook:max-w-none laptop:flex-row laptop:gap-y-0"
                    }
                >
                    <LanguageFilter />
                    <ProjectTypeFilter />
                    <SortFilter />
                    <ResetFilter />
                </div>
            </CollapsibleContent>
        </Collapsible>
    )
}

const LanguageFilter = () => {
    return (
        <div className={"flex flex-col gap-y-2 laptop:w-1/4"}>
            <p className={"flex w-fit items-center gap-x-2 text-sm"}>
                <CiFilter size={12} />
                Select languages
            </p>
            <div className={"flex flex-row flex-wrap gap-x-2 gap-y-2"}>
                <Button variant={"secondary"} size={"sm"}>
                    Next.js
                </Button>
                <Button variant={"secondary"} size={"sm"}>
                    Tailwind
                </Button>
                <Button variant={"secondary"} size={"sm"}>
                    Node.js
                </Button>
                <Button variant={"secondary"} size={"sm"}>
                    Python
                </Button>
                <Button variant={"secondary"} size={"sm"}>
                    Java
                </Button>
                <Button variant={"secondary"} size={"sm"}>
                    C#
                </Button>
                <Button variant={"secondary"} size={"sm"}>
                    MongoDB
                </Button>
                <Button variant={"secondary"} size={"sm"}>
                    Raspberry Pi
                </Button>
            </div>
        </div>
    )
}

const ProjectTypeFilter = () => {
    return (
        <div className={"flex flex-col gap-y-2 laptop:w-1/4"}>
            <p className={"flex w-fit items-center gap-x-2 text-sm"}>
                <FaProjectDiagram size={12} />
                Choose project criteria
            </p>
            <div className={"flex gap-x-2"}>
                <Checkbox id="opensource" />
                <label htmlFor="opensource">Opensource</label>
            </div>
            <div className={"flex gap-x-2"}>
                <Checkbox id="demo" />
                <label htmlFor="demo">Demo available</label>
            </div>
            <div className={"flex gap-x-2"}>
                <Checkbox id="personal" />
                <label htmlFor="personal">Personal project</label>
            </div>
        </div>
    )
}

const SortFilter = () => {
    return (
        <div className={"flex flex-col gap-y-2 laptop:w-1/4"}>
            <p className={"flex w-fit items-center gap-x-2 text-sm"}>
                <FaSort size={12} />
                Sort by
            </p>
            <Select>
                <SelectTrigger className="h-12 w-[180px] rounded-lg border-2">
                    <SelectValue placeholder="Select sort mode" />
                </SelectTrigger>
                <SelectContent className={"font-sans"}>
                    <SelectItem value="latest">Latest first</SelectItem>
                    <SelectItem value="oldest">Oldest first</SelectItem>
                    <SelectItem value="alphabetic">A-Z</SelectItem>
                    <SelectItem value="alphabetic-reverse">Z-A</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}

const ResetFilter = () => {
    return (
        <div className={"flex flex-col gap-y-2 laptop:w-1/4"}>
            <p className={"flex w-fit items-center gap-x-2 text-sm"}>
                <RiEqualizerFill size={12} />
                Showing 3/7 projects
            </p>
            <Button variant={"secondary"}>Reset filters</Button>
        </div>
    )
}

export default function Projects() {
    const [open, setOpen] = useState<boolean>(false)

    const [demo, setDemo] = useState<boolean>(false)
    const [sort, setSort] = useState<string>("latest")
    const [languages, setLanguages] = useState<string[]>([])
    const [opensource, setOpensource] = useState<boolean>(false)

    return (
        <div className={"mb-4 flex w-auto font-sans text-xs"}>
            <div className={"flex flex-col"}>
                <Filter />
                <div
                    className={
                        "grid grid-cols-1 justify-items-center gap-4 gap-x-4 gap-y-8 notebook:grid-cols-2 laptop:grid-cols-3"
                    }
                >
                    {projects.map((project, index) => (
                        <Tile key={index} project={project} />
                    ))}
                </div>
            </div>
        </div>
    )
}
