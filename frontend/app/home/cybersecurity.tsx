import { IconType } from "react-icons"
import { MdSecurity } from "react-icons/md"

import { cybersecurity } from "@/app/data/knowledge"

import { Badge } from "@/components/ui/badge"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"

interface MethodsProps {
    Icon: IconType
    name: string
    content: string
    related?: string[]
}

const Method = ({ Icon, name, content, related }: MethodsProps) => {
    return (
        <HoverCard>
            <HoverCardTrigger className={"group"}>
                <Badge variant={"secondary"} className={"flex h-auto flex-row items-center justify-start px-1"}>
                    <div className={"border-background-lighter bg-background-light mr-2 rounded-lg border-2"}>
                        <Icon className={"text-color-light smartphone:size-12 size-10 p-2"} />
                    </div>
                    <div className={"flex w-full flex-row items-center"}>
                        <div className={"flex flex-col"}>
                            <span className={"text-xxs smartphone:text-xs font-bold"}>{name}</span>
                            {related && <p className={"text-color-light overflow-hidden text-xs"}>{related.join(", ")}</p>}
                        </div>
                    </div>
                </Badge>
            </HoverCardTrigger>
            <HoverCardContent>{content}</HoverCardContent>
        </HoverCard>
    )
}

export const SecurityStack = () => {
    return (
        <div
            className={
                "border-background-lighter bg-background-light text-primary tablet:w-131.5 flex h-max flex-col rounded-xl border-2 p-4"
            }
        >
            <div className={"flex flex-row items-center"}>
                <MdSecurity className={"text-color-light size-6"} />
                <p className={"smartphone:text-xl ml-3 text-lg font-bold"}>My Cybersecurity Stack</p>
            </div>
            <p className={"text-primary-darker mt-1 mb-4 text-sm"}>These are my go to tools and forums for cybersecurity</p>
            <div className={"grid grid-cols-2 gap-2"}>
                {cybersecurity.map((technology, index) => (
                    <Method key={index} Icon={technology.Icon} name={technology.name} content={technology.content} related={[]} />
                ))}
            </div>
        </div>
    )
}
