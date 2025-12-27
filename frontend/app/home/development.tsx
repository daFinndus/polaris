import { IconType } from "react-icons"
import { FaConnectdevelop } from "react-icons/fa6"

import { development } from "@/app/data/knowledge"

import { Badge } from "@/components/ui/badge"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"

interface TechnologyProps {
    Icon: IconType
    name: string
    content: string
    version?: string
    href: string
}

const Technology = ({ Icon, name, content, version, href }: TechnologyProps) => {
    return (
        <HoverCard>
            <HoverCardTrigger href={href} target={"_blank"} className={"group"}>
                <Badge variant={"secondary"} className={"flex h-auto flex-row items-center justify-start px-1"}>
                    <div className={"border-background-lighter bg-background-light mr-2 rounded-lg border-2"}>
                        <Icon className={"text-color-light smartphone:size-12 size-10 p-2"} />
                    </div>
                    <div className={"flex w-full flex-row items-center"}>
                        <div className={"flex flex-col"}>
                            <span className={"text-xxs smartphone:text-xs font-bold"}>{name}</span>
                            {version && <p className={"text-color-light overflow-hidden text-xs"}>{version}</p>}
                        </div>
                    </div>
                </Badge>
            </HoverCardTrigger>
            <HoverCardContent>{content}</HoverCardContent>
        </HoverCard>
    )
}

export const DevStack = () => {
    return (
        <div
            className={
                "border-background-lighter bg-background-light text-primary tablet:w-131.5 flex h-max flex-col rounded-xl border-2 p-4"
            }
        >
            <div className={"flex flex-row items-center"}>
                <FaConnectdevelop className={"text-color-light size-6"} />
                <p className={"smartphone:text-xl ml-3 text-lg font-bold"}>My Development Stack</p>
            </div>
            <p className={"text-primary-darker mt-1 mb-4 text-sm"}>Here are some of the technologies I use to build my projects</p>
            <div className={"grid grid-cols-2 gap-2"}>
                {development.map((technology, index) => (
                    <Technology
                        key={index}
                        Icon={technology.Icon}
                        name={technology.name}
                        content={technology.content}
                        version={technology.version}
                        href={technology.href}
                    />
                ))}
            </div>
        </div>
    )
}
