import React from "react";

import Image from "next/image";
import Link from "next/link";

import projects from "@/app/data/projects";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { IconType } from "react-icons";

interface Project {
  name: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  description: string;
  url?: string;
  demo?: string;
  skills?: ({ name: string; background: string; icon: IconType, color: string })[];
}

const Tile = ({ project }: { project: Project }) => {
  return (
    <div
      className={"relative w-[364px] px-4 h-[376px] items-center rounded-lg bg-background-light flex-col border-background-lighter border-2 flex justify-start"}
    >
      <CardContainer className={"h-fit w-full mb-6"}>
        <CardBody
          className={"h-fit w-full relative shadow-lg shadow-background-lighter"}>
          <CardItem className={"h-fit w-full"} translateZ={15} translateY={2.5}>
            <Image
              className={"w-[364px] mt-4 h-44 rounded-lg"}
              src={project.src}
              alt={project.alt}
              width={project.width}
              height={project.height}
            />
          </CardItem>
        </CardBody>
      </CardContainer>
      <div className={"w-full h-full justify-start items-start text-start flex flex-col"}>
        <p className={"text-base font-bold mb-2"}>{project.name}</p>
        <p className={"text-sm text-primary-darker"}>{project.description}</p>
        <div className={"flex mt-4 gap-x-2"}>
          {project.skills?.map((skill, index) => (
            <Badge className={`${skill.background} hover:${skill.background} pl-2 min-h-6 gap-x-2 text-primary flex`}
                   key={index}>{skill.name}
              <skill.icon className={`${skill.color}`} />
            </Badge>
          ))}
        </div>
        <div className={"flex w-full gap-x-4 items-end h-full mb-4"}>
          {project.url ? (
            <Link href={project.url} className={"w-1/2"} target={"_blank"}>
              <Button className={"mt-6 w-full bg-color-light text-primary hover:bg-primary hover:text-color"}>
                Sourcecode
              </Button>
            </Link>
          ) : (
            <Button className={"mt-6 w-1/2 bg-background-lighter text-primary-darker"} disabled>
              No Sourcecode Available
            </Button>
          )}
          {project.demo ? (
            <Link href={project.demo} className={"w-1/2"} target={"_blank"}>
              <Button className={"mt-6 w-full bg-primary text-color hover:bg-color hover:text-primary"}>Demo</Button>
            </Link>
          ) : (
            <Button className={"mt-6 w-1/2 bg-background-lighter text-primary-darker"} disabled>
              No Demo Available
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  return (
    <div
      className={"h-fit w-fit mx-4 mb-4 mt-20 font-sans flex justify-center items-start text-xs"}>
      <div className={"h-fit flex flex-col items-center justify-center"}>
        <div
          className={"grid gap-x-8 gap-y-8 grid-cols-1 notebook:grid-cols-2 laptop:grid-cols-3"}>
          {projects.map((project, index) => (
            <Tile
              key={index}
              project={project}
            />
          ))}
        </div>
      </div>
    </div>
  );
}