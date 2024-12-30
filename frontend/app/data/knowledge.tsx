import {RiNextjsFill, RiTailwindCssFill} from "react-icons/ri";
import {SiBurpsuite, SiHackthebox} from "react-icons/si";
import {TbBrandCpp, TbBrandCSharp} from "react-icons/tb";
import {GiBreakingChain, GiBrute} from "react-icons/gi";
import {DiMongodb, DiPython} from "react-icons/di";
import {FaNodeJs, FaEye} from "react-icons/fa6";
import {BiLogoReact} from "react-icons/bi";

interface Technology {
    Icon: any,
    name: string,
    content: string,
    version?: string,
    href: string
}

export const development: Technology[] = [
    {
        Icon: DiPython,
        name: "Python",
        content: "Python is a versatile programming language I use for scripting, data analysis, and building prototypes.",
        href: "https://python.org"
    },
    {
        Icon: FaNodeJs,
        name: "Node.js",
        content: "Node.js is a JavaScript runtime that I use to build robust backend APIs. It powers the backend of my projects, including data handling and server-side logic.",
        version: "v14+",
        href: "https://nodejs.org"
    },
    {
        Icon: RiNextjsFill,
        name: "Next.js",
        content: "Next.js is my go-to React framework for building modern web applications with server-side rendering and optimized performance. I use it for my portfolio and other projects.",
        version: "v15+",
        href: "https://nextjs.org"
    },
    {
        Icon: BiLogoReact,
        name: "React",
        content: "React is central to my frontend development. I use it to create dynamic, component-based user interfaces in web applications.",
        version: "v19+",
        href: "https://reactjs.org"
    },
    {
        Icon: RiTailwindCssFill,
        name: "Tailwind",
        content: "Tailwind CSS is my preferred CSS framework for rapidly designing responsive and visually appealing user interfaces.",
        version: "v3+",
        href: "https://tailwindcss.com"
    },
    {
        Icon: DiMongodb,
        name: "MongoDB",
        content: "MongoDB is a NoSQL database I use to store and manage data in my projects. It's particularly helpful for handling flexible, document-based data.",
        href: "https://mongodb.com"
    },
    {
        Icon: TbBrandCpp,
        name: "C++",
        content: "C++ is my primary language for high-performance computing.",
        href: "https://isocpp.org"
    },
    {
        Icon: TbBrandCSharp,
        name: "C#",
        content: "C# is my main language for windows desktop applications and game development using Unity.",
        href: "https://dotnet.microsoft.com/en-us/languages/csharp"
    }
];

interface Method {
    Icon: any,
    name: string,
    content: string,
    related?: string[],
    href: string
}

export const cybersecurity: Method[] = [
    {
        Icon: FaEye,
        name: "Network Scanning",
        content: "Scanning and mapping networks to identify live hosts, open ports, and services for vulnerability analysis.",
        related: ["Nmap"],
        href: "https://nmap.org/book/man.html"
    },
    {
        Icon: GiBrute,
        name: "Directory Fuzzing",
        content: "Automated discovery of hidden directories and files on web servers by brute-forcing possible URLs.",
        related: ["Gobuster"],
        href: "https://owasp.org/www-community/Vulnerability_Scanning/Tools_for_Fuzzing_and_Brute_Forcing"
    },
    {
        Icon: SiBurpsuite,
        name: "Web Application Testing",
        content: "Testing the security of web applications by identifying vulnerabilities like XSS, SQL injection, and authentication issues.",
        related: ["Burp Suite"],
        href: "https://portswigger.net/web-security"
    },
    {
        Icon: GiBreakingChain,
        name: "Exploitation and Validation",
        content: "Exploiting vulnerabilities to validate their impact and assess the security posture of systems.",
        related: ["Metasploit"],
        href: "https://www.metasploit.com/"
    },
    {
        Icon: SiHackthebox,
        name: "Theory & Practice",
        content: "Applying penetration testing skills to solve real-world scenarios in a controlled environment, focusing on problem-solving and methodology.",
        related: ["Hack The Box"],
        href: "https://www.hackthebox.com/"
    }
];