import { IconType } from "react-icons"

import { skills } from "@/app/data/projects/skills"

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

export const projects: Project[] = [
    {
        name: "IoT Smart Farm",
        date: new Date("2025-12-15"),
        src: "https://s8lcpnzirhyz4bbt.public.blob.vercel-storage.com/Projects/smart_farm.jpeg",
        alt: "IoT Smart Farm",
        width: 819,
        height: 614,
        description:
            "This is a project I've done in an internship.\t" +
            "It was focused on creating an IT, OT, and IoT network with various sensors and devices.\t" +
            "The goal was to show the importance of network segmentation and security in such environments.",
        personal: false,
        skills: [map.get("Python")!, map.get("Bash")!, map.get("Cybersecurity")!],
    },
    {
        name: "Portfolio",
        date: new Date("2024-12-03"),
        src: "https://s8lcpnzirhyz4bbt.public.blob.vercel-storage.com/Projects/portfolio.png",
        alt: "My Portfolio",
        width: 1920,
        height: 995,
        description:
            "A Next.js application made with TailwindCSS\t" +
            "to create a simple and responsive portfolio, displaying projects, and more.",
        personal: true,
        url: "https://github.com/daFinndus/polaris",
        demo: "https://finnlucajensen.vercel.app",
        skills: [map.get("Next.js")!, map.get("React")!],
    },
    {
        name: "Beerpong Tracker",
        date: new Date("2024-04-12"),
        src: "https://s8lcpnzirhyz4bbt.public.blob.vercel-storage.com/Projects/beerpong_tracker.webp",
        alt: "Beerpong Tracker",
        width: 630,
        height: 594,
        description:
            "A python application that uses OpenCV's object detection,\t" +
            "TKinter, a raspberry pi and a camera to track the cups and balls in a beerpong game.",
        personal: false,
        url: "https://github.com/daFinndus/beerpong",
        skills: [map.get("Python")!],
    },
    {
        name: "Voice Assistant",
        date: new Date("2023-10-19"),
        src: "https://s8lcpnzirhyz4bbt.public.blob.vercel-storage.com/Projects/voice_assistant.webp",
        alt: "Voice Assistant",
        width: 450,
        height: 450,
        description:
            "A python application that uses vosk to create a voice assistant\t" +
            "that can be used to control the motors and sensors of a raspberry pi.",
        personal: false,
        url: "https://github.com/daFinndus/voice_assistant/",
        demo: "https://youtu.be/YrqET2Mh_ic",
        skills: [map.get("Python")!],
    },
    {
        name: "Key Guardian",
        date: new Date("2023-08-10"),
        src: "https://s8lcpnzirhyz4bbt.public.blob.vercel-storage.com/Projects/key_guardian.webp",
        alt: "Key Guardian",
        width: 802,
        height: 632,
        description:
            "A python application that uses TKinter to create a GUI,\t" +
            "to make it possible for easy password generation and strength checking.",
        personal: true,
        url: "https://github.com/daFinndus/key_guardian",
        skills: [map.get("Python")!],
    },
    {
        name: "Honeypot by Cowrie",
        date: new Date("2025-06-19"),
        src: "https://s8lcpnzirhyz4bbt.public.blob.vercel-storage.com/Projects/cowrie.png",
        alt: "Cowrie Honeypot",
        width: 317,
        height: 261,
        description:
            "I hosted a honeypot using Cowrie.\t" +
            "I set up an SSH honeypot to capture and analyze malicious activity.\t" +
            "I receive probably around 80 attacks per day.\t" +
            "With the received logs it is possible to view entered usernames, passwords, commands, and where the attackers are from.\t",
        personal: true,
        skills: [map.get("Bash")!, map.get("Cybersecurity")!],
    },
    {
        name: "Working with Furhat",
        date: new Date("2025-03-15"),
        src: "https://s8lcpnzirhyz4bbt.public.blob.vercel-storage.com/Projects/furhat.jpeg",
        alt: "Me and the Furhat robot",
        width: 434,
        height: 250,
        description:
            "In a group of five friends we were working with the Furhat robot.\t" +
            "We were testing how the robot is being interacted with and how users react to it.\t" +
            "The goal was to use the robot in a hospital to relieve the medical personal.",
        personal: false,
        demo: "https://www.instagram.com/p/DKZqmrkMHgC/",
        skills: [map.get("Kotlin")!, map.get("Python")!],
    },
    {
        name: "DiveVR",
        date: new Date("2025-01-17"),
        src: "https://s8lcpnzirhyz4bbt.public.blob.vercel-storage.com/Projects/dive_vr.png",
        alt: "Placeholder",
        width: 756,
        height: 406,
        description:
            "This was a university virtual reality project.\t" +
            "The user will be immersed in an underwater environment,\t" +
            "where they can interact and explore the life forms within.",
        personal: false,
        skills: [map.get("Unity")!, map.get("C#")!],
    },
    {
        name: "Bowl-A-Rama",
        date: new Date("2025-01-17"),
        src: "https://s8lcpnzirhyz4bbt.public.blob.vercel-storage.com/Projects/bowl_a_rama.png",
        alt: "Placeholder",
        width: 696,
        height: 374,
        description:
            "This was a university project focused on working with external controllers.\t" +
            "The user can use the mobile phone as a remote controller,\t" +
            "while a computer simulates the bowling environment.",
        personal: false,
        skills: [map.get("Unity")!, map.get("C#")!],
    },
    {
        name: "EasyChat",
        date: new Date("2023-08-16"),
        src: "https://s8lcpnzirhyz4bbt.public.blob.vercel-storage.com/Projects/easy_chat.jpg",
        alt: "Placeholder",
        width: 800,
        height: 450,
        description:
            "A mobile application with a chat interface and a news feed.\t" +
            "Works in realtime and offers image sharing and more.",
        personal: false,
        skills: [map.get("Flutter")!, map.get("Firebase")!],
    },
]
