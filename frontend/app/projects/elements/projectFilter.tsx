import React from "react"

import { Checkbox } from "@/components/ui/checkbox"

import { FaProjectDiagram } from "react-icons/fa"

interface projectFilterProps {
    opensource: boolean
    setOpensource: React.Dispatch<React.SetStateAction<boolean>>
    demo: boolean
    setDemo: React.Dispatch<React.SetStateAction<boolean>>
    personal: boolean
    setPersonal: React.Dispatch<React.SetStateAction<boolean>>
}

export const ProjectFilter = ({ opensource, setOpensource, demo, setDemo, personal, setPersonal }: projectFilterProps) => {
    return (
        <div className={"flex flex-col gap-y-2 laptop:w-1/4"}>
            <p className={"flex w-fit items-center gap-x-2 text-sm"}>
                <FaProjectDiagram size={12} />
                Choose project criteria
            </p>
            <div className={"flex gap-x-2"}>
                <Checkbox id="opensource" checked={opensource} onCheckedChange={() => setOpensource(!opensource)} />
                <label htmlFor="opensource">Opensource</label>
            </div>
            <div className={"flex gap-x-2"}>
                <Checkbox id="demo" checked={demo} onCheckedChange={() => setDemo(!demo)} />
                <label htmlFor="demo">Demo available</label>
            </div>
            <div className={"flex gap-x-2"}>
                <Checkbox id="personal" checked={personal} onCheckedChange={() => setPersonal(!personal)} />
                <label htmlFor="personal">Personal project</label>
            </div>
        </div>
    )
}
