import {RiNextjsFill, RiTailwindCssFill} from "react-icons/ri";
import {DiMongodb, DiPython} from "react-icons/di";
import {TbBrandCSharp} from "react-icons/tb";
import {BiLogoReact} from "react-icons/bi";
import {FaNodeJs} from "react-icons/fa6";

interface Technology {
    Icon: any,
    name: string,
    content: string,
    version: string,
    href: string
}

const dev_techs: Technology[] = [
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
        version: "v6+",
        href: "https://mongodb.com"
    },
    {
        Icon: DiPython,
        name: "Python",
        content: "Python is a versatile programming language I use for scripting, data analysis, and building prototypes.",
        version: "v3.9+",
        href: "https://python.org"
    },
    {
        Icon: TbBrandCSharp,
        name: "C#",
        content: "C# is my main language for windows desktop applications and game development using Unity.",
        version: "v9+",
        href: "https://dotnet.microsoft.com/en-us/languages/csharp"
    }
];

export default dev_techs;
