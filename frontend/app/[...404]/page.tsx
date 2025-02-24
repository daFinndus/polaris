"use client";

import React, {useEffect, useRef, useState} from "react";

import HomeButton from "@/components/home-button";
import {Button} from "@/components/ui/button";

import {useWindowSize} from "../hooks/useWindowSize";

import {RiVolumeMuteFill, RiVolumeUpFill} from "react-icons/ri";
import {getColorMode} from "@/app/hooks/getColorMode";

function AudioButton() {
    const audioRef = useRef<HTMLAudioElement>(null);

    const [isMuted, setIsMuted] = React.useState(true);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.1;
            audioRef.current.play().catch((error) => console.error(error));
        }
    }, []);

    const ToggleAudio = () => {
        if (audioRef.current) {
            setIsMuted(!isMuted);
        }
    };

    return (
        <div className="flex w-12 h-12">
            <Button
                variant="secondary"
                className="w-full h-full"
                onClick={ToggleAudio}
            >
                {isMuted ? <RiVolumeMuteFill/> : <RiVolumeUpFill/>}
            </Button>
            <audio
                loop={true}
                muted={isMuted}
                ref={audioRef}
                src="/audios/been_good_to_know_ya.mp3"
                preload="auto"
            />
        </div>
    );
}

function VideoBackground() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const whitelist = Array.from(
        {length: 44},
        (_, i) => `/videos/cyberpunk_clip_${String(i).padStart(2, "0")}.mp4`
    );

    const [currentVideo, setCurrentVideo] = useState(whitelist[0]);
    const [blacklist, setBlacklist] = useState<string[]>([whitelist[0]]);
    const [fade, setFade] = useState(true);

    const handleVideoPlay = () => {
        setBlacklist([...blacklist, currentVideo]);

        const videoDuration = videoRef.current?.duration || 0;
        setTimeout(() => {
            setFade(true);
        }, videoDuration! * 1000 - 500);
    }

    const getNextVideo = () => {
        const available = whitelist.filter((video) => !blacklist.includes(video));

        if (available.length === 0) {
            setBlacklist([]);
            return whitelist[Math.floor(Math.random() * whitelist.length)];
        }

        return available[Math.floor(Math.random() * available.length)];
    };

    const handleVideoEnd = () => {
        setCurrentVideo(getNextVideo());
    };

    return (
        <div className={"relative w-full p-8 h-3/4"}>
            <video
                onPlay={handleVideoPlay}
                onEnded={handleVideoEnd}
                onCanPlayThrough={() => setFade(false)}
                ref={videoRef}
                className={`brightness-60 rounded-2xl object-cover w-full h-full transition-opacity duration-500 ${fade ? "opacity-0" : "opacity-100"}`}
                src={currentVideo}
                autoPlay
                muted
                playsInline
            />
            <p className={`text-[25vw] drop-shadow-2xl h-min absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-center font-bold opacity-100 transition-colors duration-500 ${fade ? "text-primary" : "text-background"}`}>404</p>
        </div>
    );
}

function Unsupported() {
    return (
        <div className={"flex h-screen w-screen items-center justify-center font-sans text-xs"}>
            <p>Your device is not supported.</p>
        </div>
    );
}

function Supported() {
    useEffect(() => {
        getColorMode();
    }, []);

    return (
        <div className={"flex flex-col h-screen w-screen items-center bg-background justify-center font-sans"}>
            <div className={"z-10 flex flex-row gap-x-2 absolute top-4 right-4"}>
                <HomeButton/>
                <AudioButton/>
            </div>
            <VideoBackground/>
        </div>
    );
}

export default function Page() {
    let size = useWindowSize();

    if (size.width! > 396) {
        return <Supported/>;
    } else if (size.width! > 0) {
        return <Unsupported/>;
    }
}
