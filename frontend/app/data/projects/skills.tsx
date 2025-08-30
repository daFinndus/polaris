import { IconType } from "react-icons"

import { RiInkBottleFill, RiNextjsFill, RiTailwindCssFill } from "react-icons/ri"
import { FaJava, FaRaspberryPi, FaUnity, FaFlutter } from "react-icons/fa6"
import { SiGnubash, SiOpencv, SiPython, SiKotlin } from "react-icons/si"
import { IoLogoNodejs, IoLogoFirebase } from "react-icons/io5"
import { DiLinux, DiMongodb } from "react-icons/di"
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
    {
        name: "Kotlin",
        background: "bg-purple-600",
        icon: SiKotlin,
        color: "text-white",
    },
    {
        name: "Unity",
        background: "bg-black",
        icon: FaUnity,
        color: "text-white",
    },
    {
        name: "C#",
        background: "bg-blue-800",
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
        color: "text-red",
    },
]
