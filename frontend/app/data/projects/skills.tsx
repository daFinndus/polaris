import { IconType } from "react-icons"

import { RiNextjsFill } from "react-icons/ri"
import { FaReact, FaUnity, FaFlutter } from "react-icons/fa6"
import { SiGnubash, SiPython, SiKotlin } from "react-icons/si"
import { IoLogoFirebase } from "react-icons/io5"
import { MdOutlineSecurity } from "react-icons/md"
import { TbBrandCSharp } from "react-icons/tb"

interface Skill {
    name: string
    background: string
    icon: IconType
    color: string
}

export const skills: Skill[] = [
    {
        name: "Python",
        background: "bg-blue-800",
        icon: SiPython,
        color: "text-yellow-400",
    },
    {
        name: "Next.js",
        background: "bg-black",
        icon: RiNextjsFill,
        color: "text-white",
    },
    {
        name: "React",
        background: "bg-blue-600",
        icon: FaReact,
        color: "text-white",
    },
    {
        name: "Bash",
        background: "bg-gray-800",
        icon: SiGnubash,
        color: "text-white",
    },
    {
        name: "Kotlin",
        background: "bg-purple-600",
        icon: SiKotlin,
        color: "text-red-200",
    },
    {
        name: "Unity",
        background: "bg-gray-800",
        icon: FaUnity,
        color: "text-white",
    },
    {
        name: "C#",
        background: "bg-purple-800",
        icon: TbBrandCSharp,
        color: "text-white",
    },
    {
        name: "Flutter",
        background: "bg-blue-400",
        icon: FaFlutter,
        color: "text-white",
    },
    {
        name: "Firebase",
        background: "bg-yellow-400",
        icon: IoLogoFirebase,
        color: "text-red-500",
    },
    {
        name: "Cybersecurity",
        background: "bg-gray-900",
        icon: MdOutlineSecurity,
        color: "text-green-400",
    },
]
