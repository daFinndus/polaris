import { useEffect, useState } from "react";

import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { getNextWord } from "@/app/hooks/getNextWord";
import { getRandomWord } from "@/app/hooks/getRandomWord";

import { useScramble } from "use-scramble";

import { IconType } from "react-icons";
import { LuCake } from "react-icons/lu";
import { BsBriefcase } from "react-icons/bs";
import { IoGlobe, IoLanguage } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";

const Tag = ({ Icon, name }: { Icon: IconType; name: string }) => {
  return (
    <Badge variant={"about"} className={"h-[28px] px-2 py-1 smartphone:w-max"}>
      <Icon className={"mr-2 size-4 text-color"} />
      {name}
    </Badge>
  );
};

export default function About() {
  const words = ["Developer", "Cybersecurity-Enthusiast", "Student"];
  const [word, setWord] = useState(getRandomWord(words));

  const { ref } = useScramble({
    text: word,
    tick: 1,
    seed: 3,
    speed: 0.5,
    overflow: true,
    overdrive: true
  });

  const getAge = () => {
    const birthDate = new Date("2002-11-10");
    const currentDate = new Date();

    return Math.floor((currentDate.getTime() - birthDate.getTime()) / 3.15576e+10);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setWord(getNextWord(words, word));
    }, 5000);

    return () => clearInterval(interval);
  });

  return (
    <div
      className={"flex h-max flex-col rounded-xl border-2 border-background-lighter  bg-background-light p-4 text-primary tablet:w-[526px]"}>
      <div className={"flex flex-row"}>
        <Avatar className={"ml-1 mt-1 size-20 rounded-xl tablet:size-28"}>
          <AvatarImage
            className={"object-cover"}
            src={"/images/me.webp"}
            alt={"This is me in Thailand"}
          />
          <AvatarFallback delayMs={500}>daFinndus</AvatarFallback>
        </Avatar>
        <div className={"ml-4 flex flex-col space-y-1"}>
          <Badge className={"my-1 w-max"} variant={"color"}>
            Best experience on desktop!
          </Badge>
          <p className={"text-sm font-bold tablet:text-lg"}>
            Finn Luca
            <span className={"text-color-light"}> &#34;daFinndus&#34; </span>
            Jensen
          </p>
          <div className={"flex flex-row space-x-1 text-xs font-bold tablet:text-sm"}>
            <p>I am a</p>
            <span ref={ref} />
          </div>
        </div>
      </div>
      <div
        className={"mt-4 flex h-auto flex-wrap items-center gap-2 rounded-lg border-none bg-background px-4 py-3"}>
        <Tag Icon={IoLanguage} name={"German & English"}></Tag>
        <Tag Icon={LuCake} name={`${getAge()} years old`}></Tag>
        <Tag Icon={MdOutlineLocationOn} name={"Kiel"}></Tag>
        <Tag Icon={IoGlobe} name={"UTC+1"}></Tag>
        <Tag Icon={BsBriefcase} name={"Student"}></Tag>
      </div>
      <div className={"mt-4 flex flex-row justify-center space-x-2"}>
        <Button asChild variant={"color"}>
          <Link href={"mailto:finnlucajensen555@gmail.com"}>
            <SiGmail className={"text-color-lighter"} />
            Contact me!
          </Link>
        </Button>
        <Button asChild variant={"secondary"}>
          <Link href={"https://github.com/daFinndus"} target={"_blank"}>
            <FaGithub />
          </Link>
        </Button>
        <Button asChild variant={"secondary"}>
          <Link href={"https://www.linkedin.com/in/finn-luca-jensen-98a839286/"} target={"_blank"}>
            <FaLinkedin />
          </Link>
        </Button>
        <Button asChild variant={"secondary"}>
          <Link href={"https://x.com/dafinndus"} target={"_blank"}>
            <FaTwitter />
          </Link>
        </Button>
      </div>
    </div>
  );
}
