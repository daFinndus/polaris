import { IconType } from "react-icons"

import { RiInkBottleFill, RiNextjsFill, RiTailwindCssFill } from "react-icons/ri"
import { SiGnubash, SiOpencv, SiPython } from "react-icons/si"
import { FaJava, FaRaspberryPi } from "react-icons/fa6"
import { DiLinux, DiMongodb } from "react-icons/di"
import { IoLogoNodejs } from "react-icons/io5"

interface Skill {
    name: string
    background: string
    icon: IconType
    color: string
}

export const skills: Skill[] = [
    {
        name: "Python",
        background: "bg-cyan-800",
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
        name: "Node.js",
        background: "bg-green-600",
        icon: IoLogoNodejs,
        color: "text-gray-800",
    },
    {
        name: "TailwindCSS",
        background: "bg-cyan-700",
        icon: RiTailwindCssFill,
        color: "text-white",
    },
    {
        name: "MongoDB",
        background: "bg-green-300",
        icon: DiMongodb,
        color: "text-green-700",
    },
    {
        name: "OpenCV",
        background: "bg-green-800",
        icon: SiOpencv,
        color: "text-cyan-400",
    },
    {
        name: "TKinter",
        background: "bg-red-800",
        icon: RiInkBottleFill,
        color: "text-white",
    },
    {
        name: "Raspberry Pi",
        background: "bg-purple-700",
        icon: FaRaspberryPi,
        color: "text-red-300",
    },
    {
        name: "Bash",
        background: "bg-gray-800",
        icon: SiGnubash,
        color: "text-white",
    },
    {
        name: "Linux",
        background: "bg-blue-800",
        icon: DiLinux,
        color: "text-yellow-400",
    },
    {
        name: "Java",
        background: "bg-amber-600",
        icon: FaJava,
        color: "text-white",
    },
]
