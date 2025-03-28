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
            <HoverCardTrigger href={href} className={"group"}>
                <Badge variant={"secondary"} className={"flex h-16 flex-row"}>
                    <div className={"mr-2 rounded-lg border-2 border-background-lighter bg-background-light"}>
                        <Icon className={"size-12 p-2 text-color-light"} />
                    </div>
                    <div className={"flex w-full flex-row items-center"}>
                        <div className={"flex flex-col"}>
                            <span className={"font-bold"}>{name}</span>
                            {version && <p className={"overflow-hidden text-xs text-color-light"}>{version}</p>}
                        </div>
                    </div>
                </Badge>
            </HoverCardTrigger>
            <HoverCardContent>{content}</HoverCardContent>
        </HoverCard>
    )
}

export default function DevStack() {
    return (
        <div
            className={
                "flex h-max flex-col rounded-xl border-2 border-background-lighter bg-background-light p-4 text-primary tablet:w-[526px]"
            }
        >
            <div className={"flex"}>
                <FaConnectdevelop className={"size-6 text-color-light"} />
                <p className={"ml-3 text-xl font-bold"}>My Development Stack</p>
            </div>
            <p className={"mb-4 mt-1 text-sm text-primary-darker"}>Here are some of the technologies I use to build my projects</p>
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
