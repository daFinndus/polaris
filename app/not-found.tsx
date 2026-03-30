"use client";

import React, { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { HomeButton } from "@/components/home-button";
import { getColorMode } from "@/app/hooks/getColorMode";

import { RiVolumeMuteFill, RiVolumeUpFill } from "react-icons/ri";
import { checkScreenValidity } from "@/app/hooks/checkScreenValidity";

const AUDIO_LIST = [
  "/audios/been_good_to_know_ya.mp3",
  "/audios/crustpunk.mp3",
  "/audios/phantom_liberty.mp3",
];

const VIDEO_WHITELIST = Array.from(
  { length: 46 },
  (_, i) => `/videos/cyberpunk_clip_${String(i).padStart(2, "0")}.mp4`,
);

/**
 * This function is responsible for rendering the audio button.
 * It will loop through one audio file and play it in the background.
 */
const AudioButton = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [isMuted, setIsMuted] = React.useState(true);

  useEffect(() => {
    if (audioRef.current) {
      // Set a random audio file from the list.
      audioRef.current.src =
        AUDIO_LIST[Math.floor(Math.random() * AUDIO_LIST.length)];

      audioRef.current.volume = 0.1;
      audioRef.current.play().catch((error) => console.error(error));
    }
  }, []);

  // Function to play the next audio file from the list.
  const NextAudio = () => {
    if (audioRef.current) {
      // Pause the current audio.
      audioRef.current.pause();

      // Set a new audio file which is not the current one.
      const current = audioRef.current.src;
      const tempAudioList = AUDIO_LIST.filter((i) => i !== current);

      audioRef.current.src =
        tempAudioList[Math.floor(Math.random() * tempAudioList.length)];
      audioRef.current.play().catch((error) => console.error(error));
    }
  };

  // This function is self-explanatory, it toggles the audio on and off.
  const ToggleAudio = () => {
    if (audioRef.current) {
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className={"notebook:w-12 flex h-12 w-1/2"}>
      <Button
        variant={"secondary"}
        className={"h-full w-full"}
        onClick={ToggleAudio}
      >
        {isMuted ? <RiVolumeMuteFill /> : <RiVolumeUpFill />}
      </Button>
      <audio
        muted={isMuted}
        ref={audioRef}
        preload={"auto"}
        onEnded={NextAudio}
      />
    </div>
  );
};

/**
 * This function is responsible for rendering the video background.
 * It will loop through a list of video clips and play them in the background.
 */
const VideoBackground = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Executing the script under ~/frontend/public/scripts/video-clip-count.py will count the number of clips.
  // Has to be manually updated if the number of clips changes.
  const [currentVideo, setCurrentVideo] = useState(VIDEO_WHITELIST[0]);
  const [blacklist, setBlacklist] = useState<string[]>([]);
  const [fade, setFade] = useState(true);

  const handleVideoPlay = () => {
    setBlacklist([...blacklist, currentVideo]);

    const videoDuration = videoRef.current?.duration || 0;
    setTimeout(
      () => {
        setFade(true);
      },
      videoDuration! * 1000 - 500,
    );
  };

  const getNextVideo = () => {
    const available = VIDEO_WHITELIST.filter(
      (video) => !blacklist.includes(video),
    );

    if (available.length === 0) {
      setBlacklist([]);
      return VIDEO_WHITELIST[
        Math.floor(Math.random() * VIDEO_WHITELIST.length)
      ];
    }

    return available[Math.floor(Math.random() * available.length)];
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentVideo(
        VIDEO_WHITELIST[Math.floor(Math.random() * VIDEO_WHITELIST.length)],
      );
    }, 0);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={"relative h-3/4 w-full p-8"}>
      <video
        onPlay={handleVideoPlay}
        onEnded={() => setCurrentVideo(getNextVideo())}
        onCanPlayThrough={() => setFade(false)}
        ref={videoRef}
        className={`h-full w-full rounded-2xl object-cover blur-[2px] brightness-60 transition-opacity duration-500 ${fade ? "opacity-0" : "opacity-100"}`}
        src={currentVideo}
        autoPlay
        muted
        playsInline
      />
      <p
        className={`absolute top-1/2 left-1/2 h-min -translate-x-1/2 -translate-y-1/2 text-center text-[25vw] font-bold opacity-100 drop-shadow-2xl transition-colors duration-500 ${fade ? "text-primary" : "text-background"}`}
      >
        404
      </p>
    </div>
  );
};

const Unsupported = () => {
  return (
    <div
      className={"flex h-screen w-screen items-center justify-center text-xs"}
    >
      <p>Your device is not supported.</p>
    </div>
  );
};

const Supported = () => {
  useEffect(() => {
    getColorMode();
  }, []);

  return (
    <div
      className={
        "bg-background flex h-screen w-screen flex-col items-center justify-center"
      }
    >
      <div
        className={
          "notebook:w-min fixed top-4 right-4 flex items-center justify-center gap-x-2"
        }
      >
        <HomeButton />
        <AudioButton />
      </div>
      <VideoBackground />
    </div>
  );
};

export default function Page() {
  return checkScreenValidity({ Supported, Unsupported });
}
