'use client';

import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Badge} from "@/components/ui/badge"
import {Button} from "@/components/ui/button";
import {Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel";

import {IconType} from "react-icons";
import {LuCake} from "react-icons/lu";
import {BsBriefcase, BsStack} from "react-icons/bs";
import {SiCyberdefenders, SiGmail, SiNintendogamecube} from "react-icons/si";
import {IoGlobe, IoLanguage} from "react-icons/io5";
import {MdOutlineLocationOn, MdOutlineSportsSoccer} from "react-icons/md";
import {FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa";
import Link from "next/link";
import {RiNextjsFill, RiTailwindCssFill} from "react-icons/ri";
import {FaCodepen, FaLink, FaNodeJs} from "react-icons/fa6";
import {BiLogoReact} from "react-icons/bi";
import {DiDocker, DiGit, DiLinux, DiMongodb, DiMysql, DiPython, DiWindows} from "react-icons/di";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

function Tag({Icon, name}: { Icon: IconType, name: string }) {
    return (
        <Badge variant={"secondary"} className={"mr-2 px-2 py-1"}>
            <Icon className={"mr-2 size-4 text-color"}/>
            {name}
        </Badge>
    )
}

function About() {
    return (
        <div
            className={"mb-4 mr-4 flex size-max w-1/3 flex-col rounded-xl border-2 border-background-lighter bg-background-light p-4 text-primary"}>
            <div className={"  flex flex-row"}>
                <Avatar className={"ml-1 mt-1 size-28 rounded-xl"}>
                    <AvatarImage className={"object-cover"} src={"/images/me.png"}/>
                    <AvatarFallback delayMs={500}>daFinndus</AvatarFallback>
                </Avatar>
                <div className={"ml-4 flex flex-col space-y-1"}>
                    <Badge className={"my-1 w-max"} variant={"color"}>Currently studying..</Badge>
                    <p className={"text-lg font-bold"}>Finn Luca <span
                        className={"text-color-light"}>&#34;daFinndus&#34;</span> Jensen</p>
                    <p className={"text-sm font-bold"}>I&#39;m a <span
                        className={"text-color-light"}>Web-Developer</span> and {' '}
                        <span className={"text-color-light"}>Cybersecurity-Enthusiast</span>
                    </p>
                </div>
            </div>
            <div
                className={"mt-4 flex h-auto flex-col space-y-2 rounded-lg border-2 border-background-light bg-neutral-950 px-4 py-3"}>
                <div className={"flex flex-row"}>
                    <Tag Icon={IoLanguage} name={"German & English"}></Tag>
                    <Tag Icon={LuCake} name={"22 years old"}></Tag>
                    <Tag Icon={MdOutlineLocationOn} name={"Kiel"}></Tag>
                    <Tag Icon={IoGlobe} name={"UTC+1"}></Tag>
                </div>
                <div className={"flex flex-row"}>
                    <Tag Icon={BsBriefcase} name={"Student"}></Tag>
                    <Tag Icon={SiNintendogamecube} name={"Animal Crossing"}></Tag>
                    <Tag Icon={MdOutlineSportsSoccer} name={"Football"}></Tag>
                </div>
            </div>
            <div className={"mt-4 flex flex-row justify-center space-x-2"}>
                <Button asChild variant={"color"}>
                    <Link href={"mailto:finnlucajensen555@gmail.com"}>
                        <SiGmail/>Contact me!
                    </Link>
                </Button>
                <Button asChild variant={"secondary"}>
                    <Link href={"https://github.com/daFinndus"}><FaGithub/></Link>
                </Button>
                <Button asChild variant={"secondary"}>
                    <Link href={"https://www.linkedin.com/in/finn-luca-jensen-98a839286/"}>
                        <FaLinkedin/>
                    </Link>
                </Button>
                <Button asChild variant={"secondary"}>
                    <Link href={"https://x.com/dafinndus"}>
                        <FaTwitter/>
                    </Link>
                </Button>
            </div>
        </div>
    )
}

function Technology({Icon, name, version, href}: { Icon: IconType, name: string, version: string, href: string }) {
    return (
        <Link href={href} className={"group mb-2 mr-2"}>
            <Badge variant={"secondary"} className={"flex flex-row py-2 pr-3"}>
                <div className={"mr-2 rounded-lg border-2 border-background-lighter bg-background-light"}>
                    <Icon className={"size-12 p-2 text-color"}/>
                </div>
                <div className={"flex w-full flex-row items-center"}>
                    <div className={"flex flex-col pr-6"}>
                        <span className={"font-bold"}>{name}</span>
                        {version && <p className={"text-xs text-color-light"}>{version}</p>}
                    </div>
                </div>
                <FaLink className={"size-6 items-end group-hover:text-color"}/>
            </Badge>
        </Link>
    );
}

function Stack() {
    return (
        <div
            className={"mb-4 mr-4 flex w-1/3 flex-col rounded-xl border-2 border-background-lighter bg-background-light p-4 text-primary"}>
            <div className={"flex flex-row"}>
                <BsStack className={"size-6 text-color-light"}/>
                <p className={"ml-3 text-xl font-bold"}>My Tech Stack</p>
            </div>
            <p className={"mb-4 mt-1 text-sm text-background-lightest"}>
                Here are some of the technologies I use to build my projects.
            </p>
            <div className={"grid grid-cols-2"}>
                <Technology Icon={FaNodeJs} name={"Node.js"} version={"v14+"} href={"https://nodejs.org"}/>
                <Technology Icon={RiNextjsFill} name={"Next.js"} version={"v15+"} href={"https://nextjs.org"}/>
                <Technology Icon={BiLogoReact} name={"React"} version={"v19+"} href={"https://reactjs.org"}/>
                <Technology Icon={RiTailwindCssFill} name={"Tailwind"} version={"v3+"}
                            href={"https://tailwindcss.com"}/>
                <Technology Icon={DiMongodb} name={"MongoDB"} version={""} href={"https://mongodb.com"}/>
                <Technology Icon={DiMysql} name={"MySQL"} version={"v8+"} href={"https://mysql.com"}/>
                <Technology Icon={DiPython} name={"Python"} version={"v3.9+"} href={"https://python.org"}/>
                <Technology Icon={DiGit} name={"Git"} version={"v2.33+"} href={"https://git-scm.com"}/>
                <Technology Icon={DiDocker} name={"Docker"} version={"v20+"} href={"https://docker.com"}/>
                <Technology Icon={DiLinux} name={"Linux"} version={"Ubuntu, Debian, etc."} href={"https://linux.com"}/>
                <Technology Icon={DiWindows} name={"Windows"} version={"Windows 10 and 11"}
                            href={"https://microsoft.com"}/>
                <Technology Icon={SiCyberdefenders} name={"Cybersecurity"}
                            version={"Nmap, Hashcat, etc."} href={"https://hackthebox.com"}/>
            </div>
        </div>
    );
}

function Project({src, alt, width, height, name}: {
    src: string,
    alt: string,
    width: number,
    height: number
    name: string
}) {
    return (
        <CarouselItem className={"flex justify-center"}>
            <div className={"relative mt-5 w-1/3"}>
                <Image className={"rounded-lg"} src={src} alt={alt} width={width} height={height}/>
                <div
                    className={"absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-background"}>{name}</div>
            </div>
        </CarouselItem>
    );
}


function Projects() {
    return (
        <div
            className={"mb-4 mr-4 flex h-max w-1/3 flex-col rounded-xl border-2 border-background-lighter bg-background-light p-4 text-primary"}>
            <div className={"flex flex-row"}>
                <FaCodepen className={"size-6 text-color-light"}/>
                <p className={"ml-3 text-xl font-bold"}>My Projects</p>
            </div>
            <p className={"mb-4 mt-1 text-sm text-background-lightest"}>
                These are some of the projects I&#39;ve been working on.
            </p>
            <div className={"justify-items-center"}>
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    plugins={[
                        Autoplay({
                            delay: 5000,
                        })
                    ]}
                >
                    <CarouselContent>
                        <Project src={"/images/me.png"} alt={"Project 1"} width={1600} height={1200}
                                 name={"Project 1"}/>
                        <Project src={"/images/me.png"} alt={"Project 2"} width={1600} height={1200}
                                 name={"Project 2"}/>
                        <Project src={"/images/me.png"} alt={"Project 3"} width={1600} height={1200}
                                 name={"Project 3"}/>
                        <Project src={"/images/me.png"} alt={"Project 4"} width={1600} height={1200}
                                 name={"Project 4"}/>
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    );
}

export default function Home() {
    return (
        <div className={"flex flex-row justify-center px-32 py-8 font-sans"}>
            <About/>
            <Stack/>
            <Projects/>
        </div>
    );
}
