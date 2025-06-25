import { IconType } from "react-icons"

import skills from "@/app/data/projects/skills"

interface Skill {
    name: string
    background: string
    icon: IconType
    color: string
}

interface Project {
    name: string
    date: Date
    src: string
    alt: string
    width: number
    height: number
    description: string
    personal: boolean
    url?: string
    demo?: string
    skills?: Skill[]
}

const map = new Map(skills.map((skill) => [skill.name, skill]))

const projects: Project[] = [
    {
        name: "Portfolio",
        date: new Date("2024-12-03"),
        src: "https://s8lcpnzirhyz4bbt.public.blob.vercel-storage.com/Projects/portfolio-BdRW0YtU2v1lCWy4urZkmsP8JV661a.webp",
        alt: "My Portfolio",
        width: 768,
        height: 432,
        description:
            "A Next.js application that uses TailwindCSS and Node.js on the backend to create a responsive and accessible portfolio, displaying projects, and more.",
        personal: true,
        url: "https://github.com/daFinndus/polaris",
        demo: "https://finnlucajensen.vercel.app",
        skills: [map.get("Next.js")!, map.get("Node.js")!, map.get("TailwindCSS")!, map.get("MongoDB")!],
    },
    {
        name: "Beerpong Tracker",
        date: new Date("2024-04-12"),
        src: "https://s8lcpnzirhyz4bbt.public.blob.vercel-storage.com/Projects/beerpong_tracker-8UmAAr4rLY8XNUSvjgrLtrcjqQUCyU.webp",
        alt: "Beerpong Tracker",
        width: 630,
        height: 594,
        description: "A python application that uses OpenCV, TKinter and a camera to track the cups and balls in a beerpong game.",
        personal: false,
        url: "https://github.com/daFinndus/beerpong",
        skills: [map.get("Python")!, map.get("OpenCV")!, map.get("TKinter")!],
    },
    {
        name: "Voice Assistant",
        date: new Date("2023-10-19"),
        src: "https://s8lcpnzirhyz4bbt.public.blob.vercel-storage.com/Projects/voice_assistant-yfCE4b98YafJ2CvvCrYO4AWokeCOJV.webp",
        alt: "Voice Assistant",
        width: 450,
        height: 450,
        description:
            "A python application that uses vosk to create a voice assistant that can be used to control the motors and sensors of a raspberry pi.",
        personal: false,
        url: "https://github.com/daFinndus/voice_assistant/",
        skills: [map.get("Python")!, map.get("Raspberry Pi")!],
    },
    {
        name: "Key Guardian",
        date: new Date("2023-08-10"),
        src: "https://s8lcpnzirhyz4bbt.public.blob.vercel-storage.com/Projects/key_guardian-ZgU3XXToMCtfx7yQgNPC6oCrOqxTnE.webp",
        alt: "Key Guardian",
        width: 802,
        height: 632,
        description:
            "A python application that uses TKinter to create a GUI, to make it possible for easy password generation and strength checking.",
        personal: true,
        url: "https://github.com/daFinndus/key_guardian",
        skills: [map.get("Python")!, map.get("TKinter")!],
    },
    {
        name: "Honeypot by Cowrie",
        date: new Date("2025-06-19"),
        src: "https://s8lcpnzirhyz4bbt.public.blob.vercel-storage.com/Projects/cowrie-3ZkRCuKP29qJR7UXOWGakReAkIgcgM.png",
        alt: "Cowrie Honeypot",
        width: 317,
        height: 261,
        description:
            "I hosted a honeypot using Cowrie.\t" +
            "I set up an SSH honeypot to capture and analyze malicious activity.\t" +
            "I receive probably around 80 attacks per day.\t" +
            "With the received logs it is possible to view entered usernames, passwords, commands, and where the attackers are from.\t",
        personal: true,
        skills: [map.get("Bash")!, map.get("Linux")!, map.get("Raspberry Pi")!],
    },
    {
        name: "Working with Furhat",
        date: new Date("2025-03-15"),
        src: "https://s8lcpnzirhyz4bbt.public.blob.vercel-storage.com/Projects/furhat-MhuaREb2gx43VttBVUe64l2N95FY09.jpeg",
        alt: "Me and the Furhat robot",
        width: 434,
        height: 250,
        description:
            "Currently I am working in a group of five friends on the Furhat robot.\t" +
            "We are testing how the robot is being interacted with and how users react to it.\t" +
            "In the end, the robot should be used in a hospital to relieve the medical personal.",
        personal: false,
        demo: "https://www.instagram.com/p/DKZqmrkMHgC/",
        skills: [map.get("Java")!, map.get("Python")!],
    },
]

export default projects
