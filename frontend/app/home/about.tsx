import { useEffect, useState } from "react"

import Link from "next/link"

import { useScramble } from "use-scramble"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { getNextWord } from "@/app/hooks/getNextWord"
import { getRandomWord } from "@/app/hooks/getRandomWord"

import { IconType } from "react-icons"
import { LuCake } from "react-icons/lu"
import { BsBriefcase } from "react-icons/bs"
import { MdOutlineLocationOn } from "react-icons/md"
import { IoGlobe, IoLanguage } from "react-icons/io5"
import { SiGmail, SiHackthebox } from "react-icons/si"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

const Tag = ({ Icon, name }: { Icon: IconType; name: string }) => {
    return (
        <Badge variant={"about"} className={"text-xxs smartphone:w-max smartphone:text-xs h-7 px-2 py-1"}>
            <Icon className={"text-color mr-2 size-4"} />
            {name}
        </Badge>
    )
}

export const About = () => {
    const words = ["Developer", "Cybersecurity-Enthusiast", "Student"]
    const [word, setWord] = useState(getRandomWord(words))

    const { ref } = useScramble({
        text: word,
        tick: 1,
        seed: 3,
        speed: 0.5,
        overflow: true,
        overdrive: true,
    })

    const getAge = () => {
        const birthDate = new Date("2002-11-10")
        const currentDate = new Date()

        return Math.floor((currentDate.getTime() - birthDate.getTime()) / 3.15576e10)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setWord(getNextWord(words, word))
        }, 2500)

        return () => clearInterval(interval)
    }, [word])

    return (
        <div
            className={
                "border-background-lighter bg-background-light text-primary tablet:w-131.5 flex h-max flex-col rounded-xl border-2 p-4"
            }
        >
            <div className={"flex flex-row"}>
                <Avatar className={"smartphone:size-20 tablet:size-28 size-16 rounded-xl"}>
                    <AvatarImage
                        className={"object-cover"}
                        src="https://s8lcpnzirhyz4bbt.public.blob.vercel-storage.com/Miscellaneous/pose.jpg"
                        alt="This is me."
                        width={400}
                        height={300}
                    />
                    <AvatarFallback className={"rounded-xl"}>404</AvatarFallback>
                </Avatar>
                <div className={"smartphone:ml-4 ml-2 flex flex-col space-y-1"}>
                    <Badge className={"text-xxs smartphone:text-xs mb-1 w-max"} variant={"color"}>
                        <p className={"text-white"}>Best experience on desktop!</p>
                    </Badge>
                    <p className={"smartphone:text-sm tablet:text-lg text-xs font-bold"}>
                        Finn Luca
                        <span className={"text-color-light"}> &#34;daFinndus&#34; </span>
                        Jensen
                    </p>
                    <div className={"text-xxs smartphone:text-xs tablet:text-sm flex flex-row space-x-1 font-bold"}>
                        <p>I am a</p>
                        <span ref={ref} />
                    </div>
                </div>
            </div>
            <div className={"bg-background mt-4 flex h-auto flex-wrap items-center gap-2 rounded-lg border-none px-4 py-3"}>
                <Tag Icon={IoLanguage} name={"German & English"} />
                <Tag Icon={LuCake} name={`${getAge()} years old`} />
                <Tag Icon={MdOutlineLocationOn} name={"Kiel"} />
                <Tag Icon={IoGlobe} name={"UTC+1"} />
                <Tag Icon={BsBriefcase} name={"Student"} />
            </div>
            <div className={"mt-4 flex w-full flex-row justify-center space-x-2"}>
                <Button className={"w-full"} variant={"color"}>
                    <Link href={"mailto:finnlucajensen@proton.me"} target={"_blank"}>
                        <SiGmail />
                    </Link>
                </Button>
                <Button className={"w-full"} variant={"secondary"}>
                    <Link href={"https://app.hackthebox.com/public/users/1934765"} target={"_blank"}>
                        <SiHackthebox />
                    </Link>
                </Button>
                <Button className={"w-full"} variant={"secondary"}>
                    <Link href={"https://github.com/daFinndus"} target={"_blank"}>
                        <FaGithub />
                    </Link>
                </Button>
                <Button className={"w-full"} variant={"secondary"}>
                    <Link href={"https://www.linkedin.com/in/finn-luca-jensen-98a839286/"} target={"_blank"}>
                        <FaLinkedin />
                    </Link>
                </Button>
                <Button className={"w-full"} variant={"secondary"}>
                    <Link href={"https://x.com/dafinndus"} target={"_blank"}>
                        <FaTwitter />
                    </Link>
                </Button>
            </div>
        </div>
    )
}
