import React from "react"

import { Button } from "@/components/ui/button"

import { RiEqualizerFill } from "react-icons/ri"
import projects from "@/app/data/projects/projects"

interface resetFilterProps {
    projectCount: number
    setLanguages: React.Dispatch<React.SetStateAction<string[]>>
    setOpensource: React.Dispatch<React.SetStateAction<boolean>>
    setDemo: React.Dispatch<React.SetStateAction<boolean>>
    setPersonal: React.Dispatch<React.SetStateAction<boolean>>
    setSort: React.Dispatch<React.SetStateAction<string>>
}

export const ResetFilter = ({ projectCount, setLanguages, setOpensource, setDemo, setPersonal, setSort }: resetFilterProps) => {
    const resetFilter = () => {
        setLanguages([])
        setOpensource(false)
        setDemo(false)
        setPersonal(false)
        setSort("latest")
    }

    return (
        <div className={"flex flex-col gap-y-2 laptop:w-1/4"}>
            <p className={"flex w-fit items-center gap-x-2 text-sm"}>
                <RiEqualizerFill size={12} />
                Showing {projectCount}/{projects.length} projects
            </p>
            <Button variant={"secondary"} onClick={resetFilter}>
                Reset filters
            </Button>
        </div>
    )
}
