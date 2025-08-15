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
                    <div className={"mr-2 rounded-lg border-2 border-background-lighter bg-background-light"}>
                        <Icon className={"size-10 p-2 text-color-light smartphone:size-12"} />
                    </div>
                    <div className={"flex w-full flex-row items-center"}>
                        <div className={"flex flex-col"}>
                            <span className={"text-xxs font-bold smartphone:text-xs"}>{name}</span>
                            {related && <p className={"overflow-hidden text-xs text-color-light"}>{related.join(", ")}</p>}
                        </div>
                    </div>
                </Badge>
            </HoverCardTrigger>
            <HoverCardContent>{content}</HoverCardContent>
        </HoverCard>
    )
}

export default function SecurityStack() {
    return (
        <div
            className={
                "flex h-max flex-col rounded-xl border-2 border-background-lighter bg-background-light p-4 text-primary tablet:w-[526px]"
            }
        >
            <div className={"flex flex-row items-center"}>
                <MdSecurity className={"size-6 text-color-light"} />
                <p className={"ml-3 text-lg font-bold smartphone:text-xl"}>My Cybersecurity Stack</p>
            </div>
            <p className={"mb-4 mt-1 text-sm text-primary-darker"}>These are my go to tools and forums for cybersecurity</p>
            <div className={"grid grid-cols-2 gap-2"}>
                {cybersecurity.map((technology, index) => (
                    <Method key={index} Icon={technology.Icon} name={technology.name} content={technology.content} related={[]} />
                ))}
            </div>
        </div>
    )
}
