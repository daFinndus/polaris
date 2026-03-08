import { FaEye } from "react-icons/fa6"
import { MdDeveloperMode } from "react-icons/md"
import { VscTerminalBash } from "react-icons/vsc"
import { DiMongodb, DiPython } from "react-icons/di"
import { SiBurpsuite, SiDocker, SiHackster, SiLinux } from "react-icons/si"
import { GiBreakingChain, GiBrute, GiClick, GiCrackedDisc } from "react-icons/gi"

export interface Stack {
    Icon: any
    name: string
    content?: string
    description?: string
}

export const Engineering: Stack[] = [
    {
        Icon: GiClick,
        name: "Click me",
        content: "For a detailed description",
        description:
            "This is just a dummy. I really didn't know how to fit a explanation for the stacks into this grid component. You can also click the other stacks and the stacks in the toolkit section.",
    },
    {
        Icon: MdDeveloperMode,
        name: "Web Development",
        content: "React and Tailwind CSS",
        description:
            "I have experience building web applications with Next.js. I love to use ShadCN components for my projects, as they are well-designed and easy to use. Of course I know my way around vanilla web development as well. HTML, JavaScript, CSS and also PHP are all technologies I am comfortable working with.",
    },
    {
        Icon: DiPython,
        name: "Automation & Scripting",
        content: "Python, Bash, PowerShell",
        description:
            "I mainly use Python for scripting, but the efficiency of Bash and PowerShell for quick tasks and system administration is undeniable, so I use them as well.",
    },
    {
        Icon: DiMongodb,
        name: "Backend",
        content: "Node.js and MongoDB",
        description:
            "I am familar with backend development concepts, RESTful API design, and working with databases to support application functionality and data management. I have some projects using SQL databases, but I prefer MongoDB for its flexibility and ease of use in my projects.",
    },
    {
        Icon: SiLinux,
        name: "Operating Systems",
        content: "Linux, Windows, macOS",
        description:
            "I currently use Arch on my notebook, Windows 11 on my workstation and used to use macOS for development as well. I know my way around all three and am comfortable working in any of them. Linux is my absolute favorite though, and I use it for most of my projects and work.",
    },
    {
        Icon: SiDocker,
        name: "Virtualization",
        content: "Docker, Proxmox and KVM",
        description:
            "I use Proxmox with multiple LXC containers for my own homelab, KVM on my notebook and VMWare on my workstation. Docker is around in all environments, but I prefer using the CLI version instead of the GUI.",
    },
]

export const Tools: Stack[] = [
    {
        Icon: FaEye,
        name: "Reconnaissance",
        description:
            "I know how to do basic reconnaissance, system and social wise. I use OSINT techniques to gather information about targets, and I am familiar with tools like Nmap for network scanning and enumeration.",
    },
    {
        Icon: GiBrute,
        name: "Fuzzing",
        description:
            "I know how to use fuzzing tools to identify unwanted public endpoints, unsecure parameter values or sub-domains. I have experience with tools like ffuf and wfuzz for web application fuzzing, and I am familiar with the concept of mutation-based fuzzing for more complex targets.",
    },
    {
        Icon: GiBreakingChain,
        name: "Exploitation",
        description:
            "I analyze known weaknesses, adapt public research where appropriate, and validate exploitability in controlled environments. Currently I am not really able to craft exploits on my own, but I know where to find them and how to use them.",
    },
    {
        Icon: GiCrackedDisc,
        name: "Hash and Pass Cracking",
        description:
            "I know how to brute-force passwords, execute dictionary attacks, and use rainbow tables to crack hashes. I have experience with tools like Hashcat and John the Ripper for password cracking, and I am familiar with the concept of salting and peppering and its impact on hash cracking.",
    },
    {
        Icon: SiHackster,
        name: "Post-Exploitation",
        description:
            "I know where to find common privilege escalation vectors and where to search for insecure configurations and credentials. I am familiar with the concept of lateral movement and persistence techniques.",
    },
]
