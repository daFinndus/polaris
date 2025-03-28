import { GiBreakingChain, GiBrute, GiCrackedDisc } from "react-icons/gi"
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri"
import { DiMongodb, DiPython } from "react-icons/di"
import { FaEye, FaNodeJs } from "react-icons/fa6"
import { BiLogoReact } from "react-icons/bi"
import { SiBurpsuite } from "react-icons/si"
import { VscTerminalBash } from "react-icons/vsc"

interface Technology {
    Icon: any
    name: string
    content: string
    version?: string
    href: string
}

export const development: Technology[] = [
    {
        Icon: DiPython,
        name: "Python",
        content: "Python is a versatile programming language I use for scripting, data analysis, and building prototypes.",
        href: "https://python.org",
    },
    {
        Icon: FaNodeJs,
        name: "Node.js",
        content:
            "Node.js is a JavaScript runtime that I use to build robust backend APIs. It powers the backend of my projects, including data handling and server-side logic.",
        version: "v14+",
        href: "https://nodejs.org",
    },
    {
        Icon: RiNextjsFill,
        name: "Next.js",
        content:
            "Next.js is my go-to React framework for building modern web applications with server-side rendering and optimized performance. I use it for my portfolio and other projects.",
        version: "v15+",
        href: "https://nextjs.org",
    },
    {
        Icon: BiLogoReact,
        name: "React",
        content:
            "React is central to my frontend development. I use it to create dynamic, component-based user interfaces in web applications.",
        version: "v19+",
        href: "https://reactjs.org",
    },
    {
        Icon: RiTailwindCssFill,
        name: "Tailwind",
        content:
            "Tailwind CSS is my preferred CSS framework for rapidly designing responsive and visually appealing user interfaces.",
        version: "v3+",
        href: "https://tailwindcss.com",
    },
    {
        Icon: DiMongodb,
        name: "MongoDB",
        content:
            "MongoDB is a NoSQL database I use to store and manage data in my projects. It's particularly helpful for handling flexible, document-based data.",
        href: "https://mongodb.com",
    },
]

interface Method {
    Icon: any
    name: string
    content: string
}

export const cybersecurity: Method[] = [
    {
        Icon: FaEye,
        name: "Network Scanning",
        content: "I am able to identify open ports, services, and vulnerabilities on networked systems using tools like Nmap.",
    },
    {
        Icon: GiBrute,
        name: "Directory Fuzzing",
        content: "I can discover hidden directories and files on web servers using tools like DirBuster, Gobuster or Ffuf.",
    },
    {
        Icon: SiBurpsuite,
        name: "Web Application Testing",
        content: "I know how to analyze web applications for security vulnerabilities using tools like Burp Suite.",
    },
    {
        Icon: GiBreakingChain,
        name: "Exploitation and Validation",
        content:
            "I know how to search for CVEs and exploit vulnerabilities to gain access to systems, then validate the exploit to ensure it works.",
    },
    {
        Icon: GiCrackedDisc,
        name: "Password Cracking",
        content: "I can crack hashed passwords using tools like John the Ripper and Hashcat.",
    },
    {
        Icon: VscTerminalBash,
        name: "Scripting",
        content: "I now my way around Bash and PowerShell for automating tasks, monitoring systems, and more.",
    },
]
