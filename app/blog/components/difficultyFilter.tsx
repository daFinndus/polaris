import React from "react";

import { Button } from "@/components/ui/button";

import { CiFilter } from "react-icons/ci";

import { IconType } from "react-icons";
import { BiWindows } from "react-icons/bi";
import { GrSolaris } from "react-icons/gr";
import { SiLinux, SiMacos } from "react-icons/si";

export interface Difficulty {
  name: string;
  background: string;
  icon: IconType;
  color: string;
}

export const difficulties: Difficulty[] = [
  {
    name: "Easy",
    background: "bg-green-600/10",
    icon: BiWindows,
    color: "text-green-600",
  },
  {
    name: "Medium",
    background: "bg-yellow-600/10",
    icon: SiLinux,
    color: "text-yellow-600",
  },
  {
    name: "Hard",
    background: "bg-red-600/10",
    icon: SiMacos,
    color: "text-red-600",
  },
  {
    name: "Insane",
    background: "bg-gray-600/10",
    icon: GrSolaris,
    color: "text-gray-600",
  },
];

interface DifficultyProps {
  difficulty: string;
  setDifficulty: React.Dispatch<React.SetStateAction<string>>;
}

/**
 * This component is used to filter the writeups by difficulty.
 * @param difficulties The difficulties that are currently selected.
 * @param setDifficulty The function to set the difficulties.
 * @constructor
 */
export const DifficultyFilter = ({
  difficulty,
  setDifficulty,
}: DifficultyProps) => {
  const schwierigkeiten = difficulties.map((diffy: Difficulty) => diffy.name);

  const toggleDifficulty = (diffy: string) => {
    setDifficulty((current) => (current === diffy ? "" : diffy));
  };

  return (
    <div className={"notebook:w-auto flex flex-col gap-y-2"}>
      <p className={"flex w-fit items-center gap-x-2 text-sm"}>
        <CiFilter size={12} />
        Select difficulties
      </p>
      <div className={"notebook:grid-cols-2 grid grid-cols-2 gap-2"}>
        {schwierigkeiten.map((schwierigkeit) => {
          return (
            <Button
              key={schwierigkeit}
              size={"sm"}
              variant={"secondary"}
              onClick={() => toggleDifficulty(schwierigkeit)}
              className={`text-xs transition-colors duration-300 ${difficulty === schwierigkeit ? "bg-primary text-background-light hover:bg-primary/80" : "bg-background-lighter text-primary hover:bg-background-lightest"}`}
            >
              {schwierigkeit}
            </Button>
          );
        })}
      </div>
    </div>
  );
};
