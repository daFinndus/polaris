import { IconType } from "react-icons"

import { RiInkBottleFill, RiNextjsFill, RiTailwindCssFill } from "react-icons/ri"
import { FaJava, FaRaspberryPi, FaUnity, FaFlutter } from "react-icons/fa6"
import { SiGnubash, SiOpencv, SiPython, SiKotlin } from "react-icons/si"
import { IoLogoNodejs, IoLogoFirebase } from "react-icons/io5"
import { DiLinux, DiMongodb } from "react-icons/di"
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
        background: "cyan-800",
        icon: SiPython,
        color: "yellow-400",
    },
    {
        name: "Next.js",
        background: "black",
        icon: RiNextjsFill,
        color: "white",
    },
    {
        name: "Node.js",
        background: "green-600",
        icon: IoLogoNodejs,
        color: "gray-800",
    },
    {
        name: "TailwindCSS",
        background: "cyan-700",
        icon: RiTailwindCssFill,
        color: "white",
    },
    {
        name: "MongoDB",
        background: "green-300",
        icon: DiMongodb,
        color: "green-700",
    },
    {
        name: "OpenCV",
        background: "green-800",
        icon: SiOpencv,
        color: "cyan-400",
    },
    {
        name: "TKinter",
        background: "red-800",
        icon: RiInkBottleFill,
        color: "white",
    },
    {
        name: "Raspberry Pi",
        background: "purple-700",
        icon: FaRaspberryPi,
        color: "red-300",
    },
    {
        name: "Bash",
        background: "gray-800",
        icon: SiGnubash,
        color: "white",
    },
    {
        name: "Linux",
        background: "blue-800",
        icon: DiLinux,
        color: "yellow-400",
    },
    {
        name: "Java",
        background: "amber-600",
        icon: FaJava,
        color: "white",
    },
    {
        name: "Kotlin",
        background: "purple-600",
        icon: SiKotlin,
        color: "white",
    },
    {
        name: "Unity",
        background: "black",
        icon: FaUnity,
        color: "white",
    },
    {
        name: "C#",
        background: "blue-800",
        icon: TbBrandCSharp,
        color: "white",
    },
    {
        name: "Flutter",
        background: "blue-400",
        icon: FaFlutter,
        color: "white",
    },
    {
        name: "Firebase",
        background: "yellow-400",
        icon: IoLogoFirebase,
        color: "red-500",
    },
    {
        name: "Cybersecurity",
        background: "gray-900",
        icon: MdOutlineSecurity,
        color: "green-400",
    },
]
