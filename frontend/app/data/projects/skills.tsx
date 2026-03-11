import { IconType } from "react-icons"

import { MdOutlineSecurity, MdOutlinePhoneIphone } from "react-icons/md"
import { FaRobot, FaVrCardboard } from "react-icons/fa6"
import { TbWorldSearch, TbTopologyStar3, TbDeviceDesktopCode } from "react-icons/tb"
import { LuNetwork, LuBrainCircuit } from "react-icons/lu"
import { GiFishingNet, GiCctvCamera } from "react-icons/gi"
import { BiChip } from "react-icons/bi"

export interface Skill {
    name: string
    background: string
    icon: IconType
    color: string
}

export const skills: Skill[] = [
    {
        name: "Reconnaissance",
        background: "bg-slate-900",
        icon: TbWorldSearch,
        color: "text-green-400",
    },
    {
        name: "Automation",
        background: "bg-slate-800",
        icon: TbDeviceDesktopCode,
        color: "text-blue-300",
    },
    {
        name: "Offensive Security",
        background: "bg-gray-900",
        icon: MdOutlineSecurity,
        color: "text-red-300",
    },
    {
        name: "Network Security",
        background: "bg-zinc-900",
        icon: LuNetwork,
        color: "text-cyan-300",
    },
    {
        name: "Honeypot",
        background: "bg-stone-900",
        icon: GiFishingNet,
        color: "text-amber-300",
    },
    {
        name: "Threat Monitoring",
        background: "bg-neutral-900",
        icon: GiCctvCamera,
        color: "text-orange-300",
    },
    {
        name: "IoT",
        background: "bg-emerald-900",
        icon: BiChip,
        color: "text-emerald-300",
    },
    {
        name: "Embedded Systems",
        background: "bg-teal-900",
        icon: TbTopologyStar3,
        color: "text-teal-300",
    },
    {
        name: "Computer Vision",
        background: "bg-indigo-900",
        icon: LuBrainCircuit,
        color: "text-indigo-300",
    },
    {
        name: "Voice Interfaces",
        background: "bg-violet-900",
        icon: FaRobot,
        color: "text-violet-300",
    },
    {
        name: "Password Security",
        background: "bg-gray-900",
        icon: MdOutlineSecurity,
        color: "text-green-300",
    },
    {
        name: "Web Development",
        background: "bg-black",
        icon: TbDeviceDesktopCode,
        color: "text-white",
    },
    {
        name: "Robotics",
        background: "bg-fuchsia-900",
        icon: FaRobot,
        color: "text-fuchsia-300",
    },
    {
        name: "Virtual Reality",
        background: "bg-purple-900",
        icon: FaVrCardboard,
        color: "text-pink-300",
    },
    {
        name: "Mobile Development",
        background: "bg-blue-900",
        icon: MdOutlinePhoneIphone,
        color: "text-blue-300",
    },
]
