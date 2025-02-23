"use client";

import React, { useEffect, useRef, useState } from "react";

import HomeButton from "@/components/home-button";
import { Button } from "@/components/ui/button";

import { useWindowSize } from "../hooks/useWindowSize";

import { RiVolumeUpFill, RiVolumeMuteFill } from "react-icons/ri";

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
  const [fade, setFade] = useState(true);

  const handleVideoPlay = () => {
    setBlacklist([...blacklist, currentVideo]);
    console.log("Added to blacklist", currentVideo);

    const videoDuration = videoRef.current?.duration || 0;
    console.log("Video duration is", videoDuration);

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
    setFade(true);
    setCurrentVideo(getNextVideo());
  };

  return (
    <div className={"relative w-screen h-3/4"}>
      <video
        onPlay={handleVideoPlay}
        onEnded={handleVideoEnd}
        onCanPlayThrough={() => setTimeout(() => setFade(false), 500)}
        ref={videoRef}
        className={`absolute object-cover w-full h-full transition-opacity duration-500 ${fade ? "opacity-0" : "opacity-100"
          }`}
        src={currentVideo}
        autoPlay
        muted
      />
      <div
        className={`absolute w-full h-full bg-black transition-opacity duration-500 ${fade ? "opacity-0" : "opacity-50"
          }`}
      />
      <div
        className={
          `flex absolute font-bold w-full top-0 left-1/2 -translate-x-1/2 flex-col items-center gap-y-2 justify-center h-full opacity-100 transition-colors duration-500 ${fade ? "text-primary" : "text-background"}`
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

export default function Page() {
  let size = useWindowSize();

  if (size.width! > 396) {
    return <Supported />;
  } else if (size.width! > 0) {
    return <Unsupported />;
  }
}
