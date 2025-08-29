import React from "react"

import { skills } from "@/app/data/projects/skills"

import { Button } from "@/components/ui/button"

import { CiFilter } from "react-icons/ci"
import { IconType } from "react-icons"

interface LanguageFilterProps {
    languages: string[]
    setLanguages: React.Dispatch<React.SetStateAction<string[]>>
}

interface Skill {
    name: string
    background: string
    icon: IconType
    color: string
}

/**
 * This component is used to filter the projects by language.
 * @param languages The languages that are currently selected.
 * @param setLanguages The function to set the languages.
 * @constructor
 */
export const LanguageFilter = ({ languages, setLanguages }: LanguageFilterProps) => {
    const sprachen = skills.map((skill: Skill) => skill.name)

    const toggleLanguage = (language: string) => {
        if (languages.includes(language)) setLanguages(languages.filter((sprache) => sprache !== language))
        else setLanguages([...languages, language])
    }

    return (
        <div className={"flex flex-col gap-y-2 laptop:w-1/4"}>
            <p className={"flex w-fit items-center gap-x-2 text-sm"}>
                <CiFilter size={12} />
                Select languages
            </p>
            <div className={"flex flex-row flex-wrap gap-x-2 gap-y-2"}>
                {sprachen.map((sprache) => {
                    return (
                        <Button
                            key={sprache}
                            size={"sm"}
                            variant={"secondary"}
                            className={`text-xs transition-colors duration-300 ${languages.includes(sprache) ? "bg-primary text-background-light hover:bg-primary/80" : "bg-background-light text-primary hover:bg-background-lighter"}`}
                            onClick={() => toggleLanguage(sprache)}
                        >
                            {sprache}
                        </Button>
                    )
                })}
            </div>
        </div>
    )
}
