import { IconType } from "react-icons";

import { RiInkBottleFill, RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiOpencv, SiPython } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { IoLogoNodejs } from "react-icons/io5";
import { FaRaspberryPi } from "react-icons/fa6";

interface Project {
  name: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  description: string;
  url?: string;
  demo?: string;
  skills?: ({ name: string; background: string; icon: IconType, color: string })[];
}

const projects: Project[] = [
  {
    name: "Beerpong Tracker",
    src: "/images/beerpong_tracker.webp",
    alt: "Beerpong Tracker",
    width: 630,
    height: 594,
    description: "A python application that uses OpenCV, TKinter and a camera to track the cups and balls in a beerpong game.",
    url: "https://github.com/daFinndus/beerpong",
    skills: [
      { name: "Python", background: "bg-cyan-700", icon: SiPython, color: "text-yellow-400" },
      { name: "OpenCV", background: "bg-green-600", icon: SiOpencv, color: "text-primary" },
      { name: "TKinter", background: "bg-background-lighter", icon: RiInkBottleFill, color: "text-primary" }
    ]
  },
  {
    name: "Key Guardian",
    src: "/images/key_guardian.webp",
    alt: "Key Guardian",
    width: 802,
    height: 632,
    description: "A python application that uses TKinter to create a GUI, to make it possible for easy password generation and strength checking.",
    url: "https://github.com/daFinndus/key_guardian",
    skills: [
      { name: "Python", background: "bg-cyan-700", icon: SiPython, color: "text-yellow-400" },
      { name: "TKinter", background: "bg-background-lighter", icon: RiInkBottleFill, color: "text-primary" }
    ]
  },
  {
    name: "My Portfolio",
    src: "/images/portfolio.webp",
    alt: "My Portfolio",
    width: 768,
    height: 432,
    description: "A Next.js application that uses TailwindCSS and Node.js on the backend to create a responsive and accessible portfolio, displaying projects, and more.",
    url: "https://github.com/daFinndus/polaris",
    demo: "https://finnlucajensen.vercel.app",
    skills: [
      { name: "Next.js", background: "bg-black", icon: RiNextjsFill, color: "text-primary" },
      { name: "TailwindCSS", background: "bg-cyan-700", icon: RiTailwindCssFill, color: "text-primary" },
      { name: "Node.js", background: "bg-blue-800", icon: IoLogoNodejs, color: "text-primary" },
      { name: "MongoDB", background: "bg-green-600", icon: DiMongodb, color: "text-primary" }
    ]
  },
  {
    name: "Voice Assistant",
    src: "/images/voice_assistant.webp",
    alt: "Voice Assistant",
    width: 450,
    height: 450,
    description: "A python application that uses vosk to create a voice assistant that can be used to control the motors and sensors of a raspberry pi.",
    url: "https://github.com/daFinndus/voice_assistant/",
    skills: [
      { name: "Python", background: "bg-cyan-700", icon: SiPython, color: "text-yellow-400" },
      { name: "Raspberry Pi", background: "bg-purple-700", icon: FaRaspberryPi, color: "text-red-300" }
    ]
  }
];

export default projects;
