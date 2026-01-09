import React from "react"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import { FaSort } from "react-icons/fa6"

interface sortFilterProps {
    sort: string
    setSort: React.Dispatch<React.SetStateAction<string>>
}

export const SortFilter = ({ sort, setSort }: sortFilterProps) => {
    return (
        <div className={"laptop:w-1/4 flex flex-col gap-y-2"}>
            <p className={"flex w-fit items-center gap-x-2 text-sm"}>
                <FaSort size={12} />
                Sort by
            </p>
            <Select value={sort} onValueChange={(value) => setSort(value)}>
                <SelectTrigger className="h-12 w-45 rounded-lg border-2">
                    <SelectValue placeholder="Select sort mode" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="latest">Latest first</SelectItem>
                    <SelectItem value="oldest">Oldest first</SelectItem>
                    <SelectItem value="alphabetic">A-Z</SelectItem>
                    <SelectItem value="alphabetic-reverse">Z-A</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}
