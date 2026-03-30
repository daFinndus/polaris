import { IconType } from "react-icons";

import { MdOutlineSecurity, MdOutlinePhoneIphone } from "react-icons/md";
import { FaRobot, FaVrCardboard } from "react-icons/fa6";
import {
  TbWorldSearch,
  TbTopologyStar3,
  TbDeviceDesktopCode,
} from "react-icons/tb";
import { LuNetwork, LuBrainCircuit } from "react-icons/lu";
import { GiFishingNet, GiCctvCamera } from "react-icons/gi";
import { BiChip } from "react-icons/bi";

export interface Skill {
  name: string;
  background: string;
  icon: IconType;
  color: string;
}

export const skills: Skill[] = [
  {
    name: "Reconnaissance",
    background: "bg-emerald-800",
    icon: TbWorldSearch,
    color: "text-emerald-100",
  },
  {
    name: "Automation",
    background: "bg-blue-800",
    icon: TbDeviceDesktopCode,
    color: "text-blue-100",
  },
  {
    name: "Offensive Security",
    background: "bg-rose-800",
    icon: MdOutlineSecurity,
    color: "text-rose-100",
  },
  {
    name: "Network Security",
    background: "bg-cyan-800",
    icon: LuNetwork,
    color: "text-cyan-100",
  },
  {
    name: "Honeypot",
    background: "bg-amber-800",
    icon: GiFishingNet,
    color: "text-amber-100",
  },
  {
    name: "Threat Monitoring",
    background: "bg-orange-800",
    icon: GiCctvCamera,
    color: "text-orange-100",
  },
  {
    name: "IoT",
    background: "bg-lime-800",
    icon: BiChip,
    color: "text-lime-100",
  },
  {
    name: "Embedded Systems",
    background: "bg-teal-800",
    icon: TbTopologyStar3,
    color: "text-teal-100",
  },
  {
    name: "Computer Vision",
    background: "bg-indigo-800",
    icon: LuBrainCircuit,
    color: "text-indigo-100",
  },
  {
    name: "Voice Interfaces",
    background: "bg-violet-800",
    icon: FaRobot,
    color: "text-violet-100",
  },
  {
    name: "Password Security",
    background: "bg-green-800",
    icon: MdOutlineSecurity,
    color: "text-green-100",
  },
  {
    name: "Web Development",
    background: "bg-sky-800",
    icon: TbDeviceDesktopCode,
    color: "text-sky-100",
  },
  {
    name: "Robotics",
    background: "bg-fuchsia-800",
    icon: FaRobot,
    color: "text-fuchsia-100",
  },
  {
    name: "Virtual Reality",
    background: "bg-purple-800",
    icon: FaVrCardboard,
    color: "text-purple-100",
  },
  {
    name: "Mobile Development",
    background: "bg-blue-700",
    icon: MdOutlinePhoneIphone,
    color: "text-blue-100",
  },
];
