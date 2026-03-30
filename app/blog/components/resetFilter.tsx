import React from "react";

import { Button } from "@/components/ui/button";

import { RiEqualizerFill } from "react-icons/ri";
import { blogs } from "@/app/data/articles/blogs";

interface resetFilterProps {
  writeupCount: number;
  setSystems: React.Dispatch<React.SetStateAction<string>>;
  setDifficulty: React.Dispatch<React.SetStateAction<string>>;
  setSort: React.Dispatch<React.SetStateAction<string>>;
}

export const ResetFilter = ({
  writeupCount,
  setSystems,
  setDifficulty,
  setSort,
}: resetFilterProps) => {
  const resetFilter = () => {
    setSystems("");
    setDifficulty("");
    setSort("latest");
  };

  return (
    <div className={"notebook:w-max flex w-auto flex-col gap-y-2"}>
      <p className={"flex w-fit items-center gap-x-2 text-sm"}>
        <RiEqualizerFill size={12} />
        Showing {writeupCount}/{blogs.length} writeups
      </p>
      <Button variant={"secondary"} onClick={resetFilter}>
        Reset filters
      </Button>
    </div>
  );
};
