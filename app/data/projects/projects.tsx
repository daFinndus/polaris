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
        name: "Reconnoisseur",
        date: new Date("2026-03-08"),
        src: "https://s8lcpnzirhyz4bbt.public.blob.vercel-storage.com/Projects/reconnoisseur.png",
        alt: "Reconnoisseur",
        width: 1920,
        height: 1032,
        description:
            "Reconnoisseur is a reconnaissance automation tool built in Bash to support the early phases of penetration testing." +
            "It currently does automated port scanning and service detection of hosts and subnets." +
            "Soon it will also support web enumeration and vulnerability scanning.",
        personal: true,
        url: "https://github.com/daFinndus/reconnoisseur",
        skills: [map.get("Reconnaissance")!, map.get("Automation")!, map.get("Offensive Security")!],
    },
    {
        name: "IoT Smart Farm",
        date: new Date("2025-12-15"),
        src: "https://s8lcpnzirhyz4bbt.public.blob.vercel-storage.com/Projects/smart_farm.jpeg",
        alt: "IoT Smart Farm",
        width: 819,
        height: 614,
        description:
            "This internship project focused on building an IT, OT, and IoT environment with connected sensors and devices. " +
            "Using Python and Bash, the project demonstrated the importance of segmentation and security controls in interconnected operational environments.",
        personal: false,
        skills: [map.get("IoT")!, map.get("Network Security")!, map.get("Embedded Systems")!],
    },
    {
        name: "Portfolio",
        date: new Date("2024-12-03"),
        src: "https://s8lcpnzirhyz4bbt.public.blob.vercel-storage.com/Projects/portfolio.png",
        alt: "My Portfolio",
        width: 1920,
        height: 995,
        description:
            "A responsive portfolio website built with Next.js, React, and Tailwind CSS to present projects, writeups, and technical focus areas in a clean and structured way.",
        personal: true,
        url: "https://github.com/daFinndus/polaris",
        demo: "https://finnlucajensen.vercel.app",
        skills: [map.get("Web Development")!],
    },
    {
        name: "Beerpong Tracker",
        date: new Date("2024-04-12"),
        src: "https://s8lcpnzirhyz4bbt.public.blob.vercel-storage.com/Projects/beerpong_tracker.webp",
        alt: "Beerpong Tracker",
        width: 630,
        height: 594,
        description:
            "A Python application using OpenCV, Tkinter, a Raspberry Pi, and a camera to detect cups and balls during a beer pong game and track the state of play automatically.",
        personal: false,
        url: "https://github.com/daFinndus/beerpong",
        skills: [map.get("Computer Vision")!, map.get("Automation")!, map.get("Embedded Systems")!],
    },
    {
        name: "Voice Assistant",
        date: new Date("2023-10-19"),
        src: "https://s8lcpnzirhyz4bbt.public.blob.vercel-storage.com/Projects/voice_assistant.webp",
        alt: "Voice Assistant",
        width: 450,
        height: 450,
        description:
            "A Python-based voice assistant built with Vosk to control motors and sensors connected to a Raspberry Pi through spoken commands.",
        personal: false,
        url: "https://github.com/daFinndus/voice_assistant/",
        demo: "https://youtu.be/YrqET2Mh_ic",
        skills: [map.get("Voice Interfaces")!, map.get("IoT")!, map.get("Automation")!],
    },
    {
        name: "Key Guardian",
        date: new Date("2023-08-10"),
        src: "https://s8lcpnzirhyz4bbt.public.blob.vercel-storage.com/Projects/key_guardian.webp",
        alt: "Key Guardian",
        width: 802,
        height: 632,
        description:
            "A Python application with a Tkinter-based GUI for password generation and password strength evaluation, designed to encourage better password hygiene and usability.",
        personal: true,
        url: "https://github.com/daFinndus/key_guardian",
        skills: [map.get("Password Security")!, map.get("Automation")!],
    },
    {
        name: "Honeypot by Cowrie",
        date: new Date("2025-06-19"),
        src: "https://s8lcpnzirhyz4bbt.public.blob.vercel-storage.com/Projects/cowrie.png",
        alt: "Cowrie Honeypot",
        width: 317,
        height: 261,
        description:
            "A self-hosted SSH honeypot deployed with Cowrie to capture and analyze malicious activity. " +
            "The setup logs usernames, passwords, commands, and source information, providing a practical view into recurring attack behavior against exposed services.",
        personal: true,
        skills: [map.get("Honeypot")!, map.get("Threat Monitoring")!, map.get("Network Security")!],
    },
    {
        name: "Working with Furhat",
        date: new Date("2025-03-15"),
        src: "https://s8lcpnzirhyz4bbt.public.blob.vercel-storage.com/Projects/furhat.jpeg",
        alt: "Me and the Furhat robot",
        width: 434,
        height: 250,
        description:
            "In a team project, we worked with the Furhat social robot to evaluate user interaction and behavior. " +
            "The goal was to explore how the platform could support communication scenarios in hospital environments using Kotlin- and Python-based experimentation.",
        personal: false,
        demo: "https://www.instagram.com/p/DKZqmrkMHgC/",
        skills: [map.get("Robotics")!, map.get("Voice Interfaces")!],
    },
    {
        name: "DiveVR",
        date: new Date("2025-01-17"),
        src: "https://s8lcpnzirhyz4bbt.public.blob.vercel-storage.com/Projects/dive_vr.png",
        alt: "DiveVR",
        width: 756,
        height: 406,
        description:
            "A university virtual reality project built with Unity and C# that immerses the user in an underwater environment where marine life can be explored interactively.",
        personal: false,
        skills: [map.get("Virtual Reality")!],
    },
    {
        name: "Bowl-A-Rama",
        date: new Date("2024-08-17"),
        src: "https://s8lcpnzirhyz4bbt.public.blob.vercel-storage.com/Projects/bowl_a_rama.png",
        alt: "Bowl-A-Rama",
        width: 696,
        height: 374,
        description:
            "A university project built with Unity and C# in which a mobile phone acts as an external controller while a computer simulates a bowling environment.",
        personal: false,
        skills: [map.get("Virtual Reality")!, map.get("Mobile Development")!],
    },
    {
        name: "EasyChat",
        date: new Date("2023-08-16"),
        src: "https://s8lcpnzirhyz4bbt.public.blob.vercel-storage.com/Projects/easy_chat.jpg",
        alt: "EasyChat",
        width: 800,
        height: 450,
        description:
            "A realtime mobile chat application built with Flutter and Firebase, featuring messaging, a news feed, and media sharing functionality.",
        personal: false,
        skills: [map.get("Mobile Development")!],
    },
]
