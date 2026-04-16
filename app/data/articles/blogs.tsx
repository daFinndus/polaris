import React from "react";

import CCTV from "@/app/data/articles/markdown/cctv.mdx";
import Facts from "@/app/data/articles/markdown/facts.mdx";
import Kobold from "@/app/data/articles/markdown/kobold.mdx";
import DevArea from "@/app/data/articles/markdown/devarea.mdx";
import WingData from "@/app/data/articles/markdown/wingdata.mdx";
import Silentium from "@/app/data/articles/markdown/silentium.mdx";
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
    ident: "Silentium",
    thumbnail:
      "https://s8lcpnzirhyz4bbt.public.blob.vercel-storage.com/Blogs/silentium.png",
    width: 300,
    height: 300,
    title: "Silentium",
    date: new Date("2026-04-16"),
    description:
      "Silentium is an easy Linux machine centered around a two-stage Flowise exploit chain and credential reuse via leaked environment variables, leading to a Gogs RCE for root.",
    system: "Linux",
    difficulty: "Easy",
    keywords: ["flowise", "gogs", "credential-reuse"],
    content: <Silentium />,
  },
  {
    ident: "DevArea",
    thumbnail:
      "https://s8lcpnzirhyz4bbt.public.blob.vercel-storage.com/Blogs/devarea.png",
    width: 300,
    height: 300,
    title: "DevArea",
    date: new Date("2026-04-02"),
    description:
      "DevArea is a medium Linux machine. Getting in required exploiting a SOAP-based web service via an Apache CXF SSRF vulnerability, with credentials for Hoverfly hiding in plain sight inside a systemd service file.",
    system: "Linux",
    difficulty: "Medium",
    keywords: ["soap", "hoverfly", "apache-cxf", "misconfiguration", "ssrf"],
    content: <DevArea />,
  },
  {
    ident: "MonitorsFour",
    thumbnail:
      "https://s8lcpnzirhyz4bbt.public.blob.vercel-storage.com/Blogs/monitorsfour.png",
    width: 300,
    height: 300,
    title: "MonitorsFour",
    date: new Date("2026-03-30"),
    description:
      "MonitorsFour is an easy Windows machine running Cacti. A logic flaw leaked all user hashes unauthenticated, and an exposed Docker daemon on the internal network made for a straightforward container escape.",
    system: "Windows",
    difficulty: "Easy",
    keywords: ["cacti", "docker", "escape", "rce"],
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
      "Kobold is an easy Linux machine that involved exploiting a vulnerable MCPJam instance and abusing Docker to escalate to root.",
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
      "VariaType is a medium Linux machine. The path to root ran through vulnerabilities in fontTools and setuptools, both Python packaging tools you wouldn't normally think twice about.",
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
      "CCTV is an easy Linux machine built around two surveillance software platforms, ZoneMinder and motionEye, each with their own exploitable weaknesses.",
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
      "Interpreter is a medium Linux machine centered entirely around Mirth Connect, an open-source healthcare integration engine with a nasty unauthenticated RCE.",
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
      "WingData is an easy Linux machine. Initial access came through Wing FTP, and privilege escalation abused a path traversal vulnerability in Python's tarfile library.",
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
      "Facts is an easy Linux machine where thorough fuzzing opened the door, and the path to root ran through the AWS CLI and a sudo misconfiguration.",
    system: "Linux",
    difficulty: "Easy",
    keywords: ["fuzzing", "aws", "sudo"],
    content: <Facts />,
  },
];
