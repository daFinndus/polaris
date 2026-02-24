import React, { useState } from "react"

import Image from "next/image"
import Link from "next/link"

import { projects } from "@/app/data/projects/projects"
import { SortFilter } from "@/app/projects/components/sortFilter"
import { ResetFilter } from "@/app/projects/components/resetFilter"
import { ProjectFilter } from "@/app/projects/components/projectFilter"
import { LanguageFilter } from "@/app/projects/components/languageFilter"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

import { IconType } from "react-icons"
import { IoFilter } from "react-icons/io5"

interface Skill {
    name: string
    background: string
    icon: IconType
    color: string
}

interface Project {
    name: string
    date: Date
    src: string
    alt: string
    width: number
    height: number
    description: string
    personal: boolean
    url?: string
    demo?: string
    skills?: Skill[]
}

const Tile = ({ project }: { project: Project }) => {
    return (
        <div
            className={
                "border-background-lighter bg-background-light relative flex h-auto w-78 flex-col items-center justify-start rounded-lg border-2 px-4"
            }
        >
            <CardContainer className={"py-4"}>
                <CardBody className={"shadow-background-lighter relative h-full w-full shadow-lg"}>
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
                <p className={"text-primary-darker mb-2 text-justify text-sm"}>{project.description}</p>
                <div className={"mb-8 flex h-fit w-full flex-wrap gap-x-2 gap-y-2"}>
                    {project.skills?.map((skill, index) => (
                        <Badge
                            className={`${skill.background} flex min-h-6 items-center justify-center gap-x-2 pl-2 font-bold hover:opacity-70 ${skill.color}`}
                            key={index}
                        >
                            {skill.name}
                            <skill.icon />
                        </Badge>
                    ))}
                </div>
                <div className={"mt-auto mb-2 flex w-full items-end gap-x-2"}>
                    {project.url ? (
                        <Link href={project.url} className={"w-1/2"} target={"_blank"}>
                            <Button className={"bg-color-light text-background hover:bg-color/80 hover:text-primary w-full"}>
                                Sourcecode
                            </Button>
                        </Link>
                    ) : (
                        <Button className={"bg-background-lighter text-primary-darker w-1/2"} disabled>
                            No Sourcecode
                        </Button>
                    )}
                    {project.demo ? (
                        <Link href={project.demo} className={"w-1/2"} target={"_blank"}>
                            <Button className={"bg-primary text-background hover:bg-background hover:text-primary w-full"}>
                                Demo
                            </Button>
                        </Link>
                    ) : (
                        <Button className={"bg-background-lighter text-primary-darker w-1/2"} disabled>
                            No Demo
                        </Button>
                    )}
                </div>
            </div>
        </div>
    )
}

export const Projects = () => {
    const [open, setOpen] = useState<boolean>(false)

    const [demo, setDemo] = useState<boolean>(false)
    const [sort, setSort] = useState<string>("latest")
    const [personal, setPersonal] = useState<boolean>(false)
    const [languages, setLanguages] = useState<string[]>([])
    const [opensource, setOpensource] = useState<boolean>(false)

    /**
     * I think this could be the most disgusting function in the whole project.
     * I don't want to improve it yet, and maybe I never will.
     */
    const filtered = projects
        .filter((project) => {
            // Filter for the project types
            if (opensource && !project.url) return false
            if (demo && !project.demo) return false
            if (personal && !project.personal) return false

            // Filter by selected languages
            if (languages.length > 0) {
                const sprachen = project.skills?.map((skill) => skill.name) || []
                return languages.some((sprache) => sprachen.includes(sprache))
            }

            return true
        })
        .sort((a, b) => {
            if (sort === "latest") return b.date.getTime() - a.date.getTime()
            else if (sort === "oldest") return a.date.getTime() - b.date.getTime()
            else if (sort === "alphabetic") return a.name.localeCompare(b.name)
            else if (sort === "alphabetic-reverse") return b.name.localeCompare(a.name)
            return 0
        })

    const Filter = () => {
        return (
            <Collapsible
                open={open}
                onOpenChange={() => setOpen(!open)}
                className="bg-background tablet:max-w-160 laptop:max-w-246.5"
            >
                <div className="border-background-lighter bg-background-light mb-4 flex items-center justify-between space-x-4 rounded-lg border-2 px-2 py-1">
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
                            "border-background-lighter notebook:max-w-none laptop:flex-row laptop:gap-y-0 flex w-auto max-w-78 flex-col gap-x-8 gap-y-8 rounded-lg border-2 p-4"
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
                        <SortFilter sort={sort} setSort={setSort} />
                        <ResetFilter
                            projectCount={filtered.length}
                            setLanguages={setLanguages}
                            setOpensource={setOpensource}
                            setDemo={setDemo}
                            setPersonal={setPersonal}
                            setSort={setSort}
                        />
                    </div>
                </CollapsibleContent>
            </Collapsible>
        )
    }

    return (
        <div className={"mb-4 flex w-auto text-xs"}>
            <div className={"flex flex-col"}>
                <Filter />
                <div
                    className={
                        "notebook:grid-cols-2 laptop:grid-cols-3 grid grid-cols-1 justify-items-center gap-4 gap-x-4 gap-y-8"
                    }
                >
                    {filtered.map((project, index) => {
                        return <Tile key={index} project={project} />
                    })}
                </div>
            </div>
        </div>
    )
}
