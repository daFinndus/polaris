import React from "react";

import { Button } from "@/components/ui/button";

import { CiFilter } from "react-icons/ci";

import { IconType } from "react-icons";
import { BiWindows } from "react-icons/bi";
import { GrSolaris } from "react-icons/gr";
import { SiLinux, SiMacos } from "react-icons/si";

export interface System {
  name: string;
  background: string;
  icon: IconType;
  color: string;
}

export const systems: System[] = [
  {
    name: "Windows",
    background: "bg-blue-600/10",
    icon: BiWindows,
    color: "text-blue-600",
  },
  {
    name: "Linux",
    background: "bg-green-600/10",
    icon: SiLinux,
    color: "text-green-600",
  },
  {
    name: "macOS",
    background: "bg-gray-600/10",
    icon: SiMacos,
    color: "text-gray-600",
  },
  {
    name: "Solaris",
    background: "bg-yellow-600/10",
    icon: GrSolaris,
    color: "text-yellow-600",
  },
];

interface SystemProps {
  device: string;
  setDevice: React.Dispatch<React.SetStateAction<string>>;
}

/**
 * This component is used to filter the writeups by operating system.
 * @param systems The systems that are currently selected.
 * @param setSystem The function to set the systems.
 * @constructor
 */
export const SystemFilter = ({ device, setDevice }: SystemProps) => {
  const systeme = systems.map((system: System) => system.name);

  const toggleSystem = (system: string) => {
    setDevice((current) => (current === system ? "" : system));
  };

  return (
    <div className={"notebook:w-auto flex flex-col gap-y-2"}>
      <p className={"flex w-fit items-center gap-x-2 text-sm"}>
        <CiFilter size={12} />
        Select systems
      </p>
      <div className={"notebook:grid-cols-2   grid grid-cols-2 gap-2"}>
        {systeme.map((system) => {
          return (
            <Button
              key={system}
              size={"sm"}
              variant={"secondary"}
              className={`text-xs transition-colors duration-300 ${device === system ? "bg-primary text-background-light hover:bg-primary/80" : "bg-background-lighter text-primary hover:bg-background-lightest"}`}
              onClick={() => toggleSystem(system)}
            >
              {system}
            </Button>
          );
        })}
      </div>
    </div>
  );
};
