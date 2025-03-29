import React from "react"

import { Button } from "@/components/ui/button"

import { RiEqualizerFill } from "react-icons/ri"

export const ResetFilter = () => {
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
