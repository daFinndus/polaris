import {IconType} from "react-icons";
import {MdSecurity} from "react-icons/md";

import cybersecurity from "@/app/data/cybersecurity";

import {Badge} from "@/components/ui/badge";
import {HoverCard, HoverCardContent, HoverCardTrigger,} from "@/components/ui/hover-card"

interface MethodsProps {
    Icon: IconType;
    name: string;
    content: string;
    related: string[];
    href: string;
}

function Method({Icon, name, content, related, href}: MethodsProps) {
    return (
        <HoverCard>
            <HoverCardTrigger href={href} className={"group"}>
                <Badge variant={"secondary"} className={"flex h-16 flex-row"}>
                    <div className={"mr-2  rounded-lg border-2 border-background-lighter bg-background-light"}>
                        <Icon className={"size-12 p-2 text-color"}/>
                    </div>
                    <div className={"flex w-full flex-row items-center"}>
                        <div className={"flex flex-col"}>
                            <span className={"font-bold"}>{name}</span>
                            {related && (
                                <p className={"overflow-hidden text-xs text-color-light"}>{related.join(", ")}</p>
                            )}
                        </div>
                    </div>
                </Badge>
            </HoverCardTrigger>
            <HoverCardContent>{content}</HoverCardContent>
        </HoverCard>
    );
}

export default function SecurityStack() {
    return (
        <div
            className={
                "flex h-max flex-col rounded-xl border-2 border-background-lighter bg-background-light p-4 text-primary tablet:w-[526px]"
            }
        >
            <div className={"flex flex-row"}>
                <MdSecurity className={"size-6 text-color-light"}/>
                <p className={"ml-3 text-xl font-bold"}>My Cybersecurity Stack</p>
            </div>
            <p className={"mb-4 mt-1 text-sm text-primary-darker"}>
                These are my go to tools and forums for cybersecurity
            </p>
            <div className={"grid grid-cols-2 gap-2"}>
                {cybersecurity.map((technology, index) => (
                    <Method
                        key={index}
                        Icon={technology.Icon}
                        name={technology.name}
                        content={technology.content}
                        related={technology.related}
                        href={technology.href}
                    />
                ))}
            </div>
        </div>
    );
}
