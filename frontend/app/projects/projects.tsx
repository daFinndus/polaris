import React, { useState } from "react"

import Image from "next/image"
import Link from "next/link"

import projects from "@/app/data/projects"

import { SortFilter } from "@/app/projects/elements/sortFilter"
import { ResetFilter } from "@/app/projects/elements/resetFilter"
import { ProjectFilter } from "@/app/projects/elements/projectFilter"
import { LanguageFilter } from "@/app/projects/elements/languageFilter"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

import { IconType } from "react-icons"
import { IoFilter } from "react-icons/io5"

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
                "relative flex h-[512px] w-[312px] flex-col items-center justify-start rounded-lg border-2 border-background-lighter bg-background-light px-4 notebook:h-[456px]"
            }
        >
            <CardContainer className={"py-6"}>
                <CardBody className={"relative h-full w-full shadow-lg shadow-background-lighter"}>
                    <CardItem translateZ={15} translateY={2.5}>
                        <Image
                            className={"h-44 rounded-lg"}
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
                            className={`${skill.background} hover:${skill.background}/70 flex min-h-6 items-center justify-center gap-x-2 pl-2 font-bold ${skill.color}`}
                            key={index}
                        >
                            {skill.name}
                            <skill.icon />
                        </Badge>
                    ))}
                </div>
                <div className={"mb-4 flex h-full w-full items-end gap-x-2"}>
                    {project.url ? (
                        <Link href={project.url} className={"w-1/2"} target={"_blank"}>
                            <Button className={"mt-6 w-full bg-color-light text-background hover:bg-color/80 hover:text-primary"}>
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
                            <Button className={"mt-6 w-full bg-primary text-background hover:bg-background hover:text-primary"}>
                                Demo
                            </Button>
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

export default function Projects() {
    const [open, setOpen] = useState<boolean>(false)

    const [demo, setDemo] = useState<boolean>(false)
    const [sort, setSort] = useState<string>("latest")
    const [personal, setPersonal] = useState<boolean>(false)
    const [languages, setLanguages] = useState<string[]>([])
    const [opensource, setOpensource] = useState<boolean>(false)

    const Filter = () => {
        return (
            <Collapsible open={open} onOpenChange={() => setOpen(!open)} className="bg-background tablet:max-w-[964px]">
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
                        <LanguageFilter languages={languages} setLanguages={setLanguages} />
                        <ProjectFilter
                            opensource={opensource}
                            setOpensource={setOpensource}
                            demo={demo}
                            setDemo={setDemo}
                            personal={personal}
                            setPersonal={setPersonal}
                        />
                        <SortFilter />
                        <ResetFilter />
                    </div>
                </CollapsibleContent>
            </Collapsible>
        )
    }

    return (
        <div className={"mb-4 flex w-auto font-sans text-xs"}>
            <div className={"flex flex-col"}>
                <Filter />
                <div
                    className={
                        "grid grid-cols-1 justify-items-center gap-4 gap-x-4 gap-y-8 notebook:grid-cols-2 laptop:grid-cols-3"
                    }
                >
                    {projects.map((project, index) => {
                        return <Tile key={index} project={project} />
                    })}
                </div>
            </div>
        </div>
    )
}
