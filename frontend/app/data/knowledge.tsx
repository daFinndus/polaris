import {RiNextjsFill, RiTailwindCssFill} from "react-icons/ri";
import {SiBurpsuite, SiHackthebox} from "react-icons/si";
import {TbBrandCpp, TbBrandCSharp} from "react-icons/tb";
import {GiBreakingChain, GiBrute} from "react-icons/gi";
import {DiMongodb, DiPython} from "react-icons/di";
import {FaEye, FaNodeJs} from "react-icons/fa6";
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
        content: "I am able to identify open ports, services, and vulnerabilities on networked systems using tools like Nmap.",
        related: [],
        href: "https://nmap.org/book/man.html"
    },
    {
        Icon: GiBrute,
        name: "Directory Fuzzing",
        content: "I can discover hidden directories and files on web servers using tools like DirBuster and Gobuster or Ffuf.",
        related: [],
        href: "https://owasp.org/www-community/Vulnerability_Scanning/Tools_for_Fuzzing_and_Brute_Forcing"
    },
    {
        Icon: SiBurpsuite,
        name: "Web Application Testing",
        content: "I know how to infiltrate web applications to identify vulnerabilities and security flaws with Burp Suite.",
        related: [],
        href: "https://portswigger.net/web-security"
    },
    {
        Icon: GiBreakingChain,
        name: "Exploitation and Validation",
        content: "I know how to search for CVEs and exploit vulnerabilities to gain access to systems, then validate the exploit to ensure it works.",
        related: [],
        href: "https://www.metasploit.com/"
    },
    {
        Icon: SiHackthebox,
        name: "Theory & Practice",
        content: "On HTB I am applying penetration testing skills to solve real-world scenarios in a controlled environment, focusing on problem-solving and methodology.",
        related: ["Hack The Box"],
        href: "https://www.hackthebox.com/"
    }
];