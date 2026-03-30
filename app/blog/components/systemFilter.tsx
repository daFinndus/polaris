import React from "react";

import { Button } from "@/components/ui/button";

import { IconType } from "react-icons";

import { CiFilter } from "react-icons/ci";
import { GrSolaris } from "react-icons/gr";
import { SiLinux } from "react-icons/si";
import { FaWindows, FaApple } from "react-icons/fa";

export interface System {
  name: string;
  icon: IconType;
}

export const systems: System[] = [
  {
    name: "Windows",
    icon: FaWindows,
  },
  {
    name: "Linux",
    icon: SiLinux,
  },
  {
    name: "macOS",
    icon: FaApple,
  },
  {
    name: "Solaris",
    icon: GrSolaris,
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
        {systems.map((system, index) => {
          return (
            <Button
              key={index}
              size={"sm"}
              variant={"secondary"}
              className={`text-xs transition-colors duration-300 justify-between ${device === system.name ? "bg-primary text-background-light hover:bg-primary/80" : "bg-background-lighter text-primary hover:bg-background-lightest"}`}
              onClick={() => toggleSystem(system.name)}
            >
              {system.name}
              <system.icon size={12} />
            </Button>
          );
        })}
      </div>
    </div>
  );
};
