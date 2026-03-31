import React from "react";

import CCTV from "@/app/data/articles/markdown/cctv.mdx";
import Facts from "@/app/data/articles/markdown/facts.mdx";
import Kobold from "@/app/data/articles/markdown/kobold.mdx";
import WingData from "@/app/data/articles/markdown/wingdata.mdx";
import VariaType from "@/app/data/articles/markdown/variatype.mdx";
import Interpreter from "@/app/data/articles/markdown/interpreter.mdx";
import MoniorsFour from "@/app/data/articles/markdown/monitorsfour.mdx";

interface Blog {
  ident: string;
  thumbnail: string;
  width: number;
  height: number;
  title: string;
  date: Date;
  description: string;
  system: string;
  difficulty: string;
  keywords: string[];
  content: React.ReactNode;
}

export const blogs: Blog[] = [
  {
    ident: "MonitorsFour",
    thumbnail:
      "https://s8lcpnzirhyz4bbt.public.blob.vercel-storage.com/Blogs/monitorsfour.png",
    width: 300,
    height: 300,
    title: "MonitorsFour",
    date: new Date("2026-04-02"),
    description:
      "This is a writeup of MonitorsFour, an easy windows machine by Hack the Box. This machine worked with a vulnerable version of Cacti, weak credentials and a Docker escape.",
    system: "Windows",
    difficulty: "Easy",
    keywords: ["cacti", "docker", "escape"],
    content: <MoniorsFour />,
  },
  {
    ident: "Kobold",
    thumbnail:
      "https://s8lcpnzirhyz4bbt.public.blob.vercel-storage.com/Blogs/kobold.png",
    width: 300,
    height: 300,
    title: "Kobold",
    date: new Date("2026-03-26"),
    description:
      "This is a writeup of Kobold, an easy linux machine by Hack the Box. This machine mainly worked with a vulnerable version of MCPJam and abusing docker.",
    system: "Linux",
    difficulty: "Easy",
    keywords: ["mcpjam", "docker"],
    content: <Kobold />,
  },
  {
    ident: "variatype",
    thumbnail:
      "https://s8lcpnzirhyz4bbt.public.blob.vercel-storage.com/Blogs/variatype.png",
    width: 300,
    height: 300,
    title: "VariaType",
    date: new Date("2026-03-19"),
    description:
      "This is a writeup of VariaType, a medium linux machine by Hack the Boxk. This machine mainly worked with a vulnerable version of fontTools and setuptools.",
    system: "Linux",
    difficulty: "Medium",
    keywords: ["fonttools", "setuptools", "python"],
    content: <VariaType />,
  },
  {
    ident: "cctv",
    thumbnail:
      "https://s8lcpnzirhyz4bbt.public.blob.vercel-storage.com/Blogs/cctv.png",
    width: 300,
    height: 300,
    title: "CCTV",
    date: new Date("2026-03-13"),
    description:
      "This is a writeup of CCTV, an easy linux machine by Hack the Box. This machine mainly worked with ZoneMinder and motionEye.",
    system: "Linux",
    difficulty: "Easy",
    keywords: ["zoneminder", "motioneye"],
    content: <CCTV />,
  },
  {
    ident: "interpreter",
    thumbnail:
      "https://s8lcpnzirhyz4bbt.public.blob.vercel-storage.com/Blogs/interpreter.png",
    width: 300,
    height: 300,
    title: "Interpreter",
    date: new Date("2025-02-24"),
    description:
      "This is a writeup of Interpreter, a medium linux machine by Hack the Box. This machine mainly worked with Mirth Connect, a healthcare integration engine.",
    system: "Linux",
    difficulty: "Medium",
    keywords: ["mirth", "connect", "healthcare"],
    content: <Interpreter />,
  },
  {
    ident: "wingdata",
    thumbnail:
      "https://s8lcpnzirhyz4bbt.public.blob.vercel-storage.com/Blogs/wingdata.png",
    width: 300,
    height: 300,
    title: "WingData",
    date: new Date("2025-02-21"),
    description:
      "This is a writeup of WingData, an easy linux machine by Hack the Box. This machine mainly worked with Wing FTP and a vulnerable version of the python library tarfile.",
    system: "Linux",
    difficulty: "Easy",
    keywords: ["wing", "ftp", "tarfile"],
    content: <WingData />,
  },
  {
    ident: "facts",
    thumbnail:
      "https://s8lcpnzirhyz4bbt.public.blob.vercel-storage.com/Blogs/facts.png",
    width: 300,
    height: 300,
    title: "Facts",
    date: new Date("2025-02-17"),
    description:
      "This is a writeup of Facts, an easy linux machine by Hack the Box. Relevant for this machine was Fuzzing, the AWS CLI and sudo misconfigurations.",
    system: "Linux",
    difficulty: "Easy",
    keywords: ["fuzzing", "aws", "sudo"],
    content: <Facts />,
  },
];
