import Link from "next/link";

import {Badge} from "@/components/ui/badge";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

import {IconType} from "react-icons";
import {GiRank3} from "react-icons/gi";
import {TiWorld} from "react-icons/ti";
import {FaUserAlt} from "react-icons/fa";
import {FaServer} from "react-icons/fa6";
import {MdSportsScore} from "react-icons/md";

function Statistic({Icon, name}: { Icon: IconType; name: string }) {
    return (
        <Badge
            variant={"secondary"}
            className={"h-[28px] px-2 py-1 smartphone:w-max"}>
            <Icon className={"mr-2 size-4 text-primary"}/>
            {name}
        </Badge>
    );
}

export default function HackTheBox() {
    return (
        <div
            className={"flex h-max flex-col rounded-xl border-2 border-background-lighter  bg-background-light p-4 text-primary tablet:w-[526px]"}>
            <Link href={"https://app.hackthebox.com/profile/1934765"}>
                <div className={"flex flex-row"}>
                    <Avatar className={"ml-1 mt-1 size-20 rounded-xl tablet:size-28"}>
                        <AvatarImage
                            className={"object-cover"}
                            src={"/images/lucy.webp"}
                            alt={"This is me in Thailand"}
                        />
                        <AvatarFallback delayMs={500}>daFinndus</AvatarFallback>
                    </Avatar>
                    <div className={"ml-4 flex flex-col"}>
                        <p className={"text-xl font-bold mb-2"}>Hack the Box</p>
                        <div
                            className={"flex h-auto flex-wrap items-center gap-2 rounded-lg border-none bg-background px-4 py-3"}>
                            <Statistic Icon={GiRank3} name={"Script Kiddie"}/>
                            <Statistic Icon={TiWorld} name={"#820 Global Rank"}/>
                            <Statistic Icon={MdSportsScore} name={"25 Final Score"}/>
                            <Statistic Icon={FaUserAlt} name={"7 User Pawns"}/>
                            <Statistic Icon={FaServer} name={"7 System Pawns"}/>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}
