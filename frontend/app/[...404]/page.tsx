"use client";

import React, { useEffect, useRef, useState } from "react";

import HomeButton from "@/components/home-button";
import { Button } from "@/components/ui/button";

import { getColorMode } from "../hooks/getColorMode";
import { useWindowSize } from "../hooks/useWindowSize";

import { RiVolumeUpFill, RiVolumeMuteFill } from "react-icons/ri";
import { notFound } from "next/navigation";

function AudioButton() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [isMuted, setIsMuted] = React.useState(true);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.1;
      audioRef.current.play();
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
        {isMuted ? <RiVolumeMuteFill /> : <RiVolumeUpFill />}
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
    { length: 44 },
    (_, i) => `/videos/cyberpunk_clip_${String(i).padStart(2, "0")}.mp4`
  );

  const [currentVideo, setCurrentVideo] = useState(whitelist[0]);
  const [blacklist, setBlacklist] = useState<string[]>([whitelist[0]]);
  const [fade, setFade] = useState(false);

  const getNextVideo = () => {
    const available = whitelist.filter((video) => !blacklist.includes(video));

    if (available.length === 0) {
      setBlacklist([]);
      return whitelist[Math.floor(Math.random() * whitelist.length)];
    }

    return available[Math.floor(Math.random() * available.length)];
  };

  const addBlacklist = (video: string) => setBlacklist([...blacklist, video]);

  const handleVideoEnd = () => {
    setFade(true);

    setTimeout(() => {
      setCurrentVideo(getNextVideo());
      setFade(false);
    }, 500);
  };

  return (
    <div className={"relative w-screen h-screen"}>
      <video
        onPlay={() => addBlacklist(currentVideo)}
        onEnded={handleVideoEnd}
        ref={videoRef}
        className={`absolute object-cover w-full h-full transition-opacity duration-500 ${fade ? "opacity-0" : "opacity-100"
          }`}
        src={currentVideo}
        autoPlay
        muted
      />
      <div
        className={`absolute w-full h-full bg-black transition-opacity duration-500 ${!fade ? "opacity-50" : "opacity-0"
          }`}
      />
      <div
        className={
          "flex absolute font-bold w-full text-white top-0 left-1/2 -translate-x-1/2 flex-col items-center gap-y-2 justify-center h-full opacity-100"
        }
      >
        <h1 className={"text-4xl"}>ERROR 404</h1>
        <h2 className={"text-xl"}>Page does not exist, Choom!</h2>
      </div>
    </div>
  );
}

function Unsupported() {
  return (
    <div
      className={
        "flex h-screen w-screen items-center justify-center font-sans text-xs"
      }
    >
      <p>Your device is not supported.</p>
    </div>
  );
}

function Supported() {
  useEffect(() => {
    getColorMode();
  });

  return (
    <div
      className={
        "flex flex-col h-screen w-screen items-center bg-background justify-center font-sans"
      }
    >
      <div className={"z-10 flex flex-row gap-x-2 absolute top-4 right-4"}>
        <HomeButton />
        <AudioButton />
      </div>
      <VideoBackground />
    </div>
  );
}

export default function Home() {
  let size = useWindowSize();

  if (size.width! > 396) {
    return <Supported />;
  } else if (size.width! > 0) {
    return <Unsupported />;
  }
}
