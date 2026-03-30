import { FaConnectdevelop } from "react-icons/fa6"

import { Engineering, Stack } from "@/app/data/knowledge"

import { Badge } from "@/components/ui/badge"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"

const Entry = ({ Icon, name, content, description }: Stack) => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Badge variant={"secondary"} className={"flex h-auto cursor-default flex-row items-center justify-start px-1"}>
                    <div className={"border-background-lighter bg-background-light mr-2 rounded-lg border-2"}>
                        <Icon className={"text-color-light smartphone:size-12 size-10 p-2"} />
                    </div>
                    <div className={"flex w-full flex-row items-center"}>
                        <div className={"flex flex-col"}>
                            <span className={"smartphone:text-xs overflow-hidden text-xs font-bold"}>{name}</span>
                            {content && <p className={"text-color-light smartphone:text-xs text-xxs font-normal"}>{content}</p>}
                        </div>
                    </div>
                </Badge>
            </PopoverTrigger>
            {description && (
                <PopoverContent className="border-background-lightest text-primary max-w-full text-justify text-xs shadow-2xl">
                    {description}
                </PopoverContent>
            )}
        </Popover>
    )
}

export const Application = () => {
    return (
        <div className={"bg-background-light tablet:w-131.5 flex h-max flex-col rounded-xl border-2 p-4"}>
            <div className={"flex flex-row items-center"}>
                <FaConnectdevelop className={"text-color-light size-6"} />
                <p className={"smartphone:text-xl ml-3 text-lg font-bold"}>Applications</p>
            </div>
            <p className={"text-primary-darker mt-1 mb-4 text-sm"}>Apps, systems, and languages I use</p>
            <div className={"grid grid-cols-2 gap-2 max-[528px]:grid-cols-1"}>
                {Engineering.map((technology, index) => (
                    <Entry
                        key={index}
                        Icon={technology.Icon}
                        name={technology.name}
                        content={technology.content}
                        description={technology.description}
                    />
                ))}
            </div>
        </div>
    )
}
