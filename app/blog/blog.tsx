"use client";

import React, { useState, useEffect } from "react";

import Image from "next/image";
import { notFound } from "next/navigation";

import { IoFilter } from "react-icons/io5";
import { CiShare2 } from "react-icons/ci";
import { Copy } from "lucide-react";

import { blogs } from "@/app/data/articles/blogs";
import { Button } from "@/components/ui/button";

import { SystemFilter } from "./components/systemFilter";
import { DifficultyFilter } from "./components/difficultyFilter";
import { SortFilter } from "../projects/components/sortFilter";
import { ResetFilter } from "./components/resetFilter";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Searchbar } from "./components/searchBar";

interface Blog {
  ident: string;
  thumbnail: string;
  width: number;
  height: number;
  title: string;
  date: string;
  description: string;
  content: React.ReactNode;
}

const Entry = ({
  ident,
  thumbnail,
  width,
  height,
  title,
  date,
  description,
  content,
}: Blog) => {
  const [showContent, toggleContent] = useState(false);
  const [shared, setShared] = useState(false);

  const handleShare = () => {
    const url = `${window.location.origin}/blog#${ident}`;

    navigator.clipboard.writeText(url).then(() => {
      setShared(true);
      setTimeout(() => setShared(false), 1000);
    });
  };

  return (
    <div
      id={ident}
      className={
        "border-background-lighter bg-background-light tablet:w-160 relative flex flex-col rounded-xl border-2 p-6"
      }
    >
      <button
        onClick={handleShare}
        title={"Share blog"}
        className={"absolute top-4 right-4 cursor-pointer font-mono text-xs"}
      >
        {shared ? (
          <div className={"flex items-center gap-1.5 text-green-400"}>
            <CiShare2 size={13} />
            <span>Copied URL!</span>
          </div>
        ) : (
          <div
            className={
              "text-primary/40 hover:text-primary/80 flex items-center gap-1.5 duration-300"
            }
          >
            <Copy size={13} />
            <span>Share</span>
          </div>
        )}
      </button>
      <div className={"flex"}>
        <div className={"bg-background mr-2 h-fit w-fit rounded-xl p-2"}>
          <Image
            className={"h-8 w-8"}
            src={thumbnail}
            width={width}
            height={height}
            alt={`${title} thumbnail`}
          />
        </div>
        <div className={"flex-col"}>
          <p className={"tablet:text-xl text-lg font-bold"}>{title}</p>
          <p className={"text-primary-darker mb-4 text-sm"}>{date}</p>
        </div>
      </div>
      <p className={"text-sm"}>{description}</p>
      <div className={"flex flex-col items-center"}>
        {showContent && <div className={"mt-4 w-full text-sm"}>{content}</div>}
        <Button
          asChild
          variant={"secondary"}
          className={"mt-8 w-full cursor-default"}
          onClick={() => toggleContent(!showContent)}
        >
          <p>{showContent ? "Hide" : "Show"} content</p>
        </Button>
      </div>
    </div>
  );
};

interface FilterProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  device: string;
  setDevice: React.Dispatch<React.SetStateAction<string>>;
  difficulty: string;
  setDifficulty: React.Dispatch<React.SetStateAction<string>>;
  sort: string;
  setSort: React.Dispatch<React.SetStateAction<string>>;
  filteredCount: number;
}

const Filter = ({
  open,
  setOpen,
  device,
  setDevice,
  difficulty,
  setDifficulty,
  sort,
  setSort,
  filteredCount,
}: FilterProps) => {
  return (
    <Collapsible
      open={open}
      onOpenChange={() => setOpen(!open)}
      className={"bg-background w-auto notebook:w-160"}
    >
      <div
        className={
          "border-background-lighter bg-background-light mb-4 flex items-center justify-between space-x-4 rounded-lg border-2 px-2 py-1"
        }
      >
        <h4 className={"ml-2 min-w-fit text-sm font-semibold"}>Set filters</h4>
        <CollapsibleTrigger asChild className={"items-center justify-end"}>
          <div className={"flex w-full items-end"}>
            <Button variant={"ghost"}>
              <IoFilter />
            </Button>
          </div>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className={"mb-4 space-y-2"}>
        <div className={"notebook:max-w-none w-auto rounded-lg border-2 p-4"}>
          <div className={"flex flex-row justify-between gap-x-4"}>
            <div className={"notebook:flex flex-col gap-y-4 hidden w-1/2"}>
              <SystemFilter device={device} setDevice={setDevice} />
              <DifficultyFilter
                difficulty={difficulty}
                setDifficulty={setDifficulty}
              />
            </div>
            <div className={"notebook:flex hidden w-1/2 flex-col gap-y-8"}>
              <SortFilter sort={sort} setSort={setSort} />
              <ResetFilter
                writeupCount={filteredCount}
                setSystems={setDevice}
                setDifficulty={setDifficulty}
                setSort={setSort}
              />
            </div>
          </div>
          <div
            className={
              "notebook:hidden notebook:w-0 flex w-full flex-col gap-y-8"
            }
          >
            <SystemFilter device={device} setDevice={setDevice} />
            <DifficultyFilter
              difficulty={difficulty}
              setDifficulty={setDifficulty}
            />
            <SortFilter sort={sort} setSort={setSort} />
            <ResetFilter
              writeupCount={filteredCount}
              setSystems={setDevice}
              setDifficulty={setDifficulty}
              setSort={setSort}
            />
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export const Blog = () => {
  const [open, setOpen] = useState(false);

  const [device, setDevice] = useState<string>("");
  const [difficulty, setDifficulty] = useState<string>("");
  const [sort, setSort] = useState<string>("latest");

  const [keywords, setKeywords] = useState<string[]>([]);

  const filtered = blogs
    .filter((blog) => {
      // Check if system name matches with provided device.
      if (device) {
        if (!blog.system.includes(device)) {
          return false;
        }
      }

      // Filter by difficulty.
      if (difficulty) {
        if (blog.difficulty !== difficulty) {
          return false;
        }
      }

      // Filter by keywords.
      if (keywords.length > 0) {
        const searchable = [
          blog.title,
          blog.description,
          blog.system,
          ...blog.keywords,
        ]
          .join(" ")
          .toLowerCase();

        if (!keywords.every((keyword) => searchable.includes(keyword))) {
          return false;
        }
      }

      return true;
    })
    .sort((a, b) => {
      if (sort === "latest") return b.date.getTime() - a.date.getTime();
      else if (sort === "oldest") return a.date.getTime() - b.date.getTime();
      else if (sort === "alphabetic") return a.title.localeCompare(b.title);
      else if (sort === "alphabetic-reverse")
        return b.title.localeCompare(a.title);
      return 0;
    });

  useEffect(() => {
    if (blogs.length <= 0) {
      notFound();
    }
  });

  return (
    <div className={"text-primary grid grid-cols-1 text-justify"}>
      <Filter
        open={open}
        setOpen={setOpen}
        device={device}
        setDevice={setDevice}
        difficulty={difficulty}
        setDifficulty={setDifficulty}
        sort={sort}
        setSort={setSort}
        filteredCount={filtered.length}
      />
      <Searchbar
        onChange={(value) =>
          setKeywords(value.toLowerCase().trim().split(/\s+/).filter(Boolean))
        }
      />
      <div className={"gap-y-4 flex flex-col"}>
        {filtered.map((blog, index) => (
          <Entry
            key={index}
            ident={blog.ident}
            thumbnail={blog.thumbnail}
            width={blog.width}
            height={blog.height}
            title={blog.title}
            date={blog.date
              .toISOString()
              .split("T")[0]
              .split("-")
              .reverse()
              .join(".")}
            description={blog.description}
            content={blog.content}
          />
        ))}
      </div>
    </div>
  );
};
