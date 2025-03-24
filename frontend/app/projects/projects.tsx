import React from "react";

import Image from "next/image";

import projects from "@/app/data/projects";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const Tile = ({ src, alt, width, height }: { src: string; alt: string; width: number; height: number; }) => {
  return (
    <div
      className={"relative w-[364px] px-4 h-96 items-center rounded-lg bg-background-light flex-col border-background-lighter border-2 flex justify-start"}
    >
      <CardContainer className={"h-fit w-full mb-8"}>
        <CardBody
          className={"h-fit w-full bg-background-light relative shadow-lg  shadow-background-lighter"}>
          <CardItem className={"h-fit w-full"} translateZ={15} translateY={2.5}>
            <Image
              className={"w-[364px] mt-4 h-44 rounded-lg"}
              src={src} alt={alt}
              width={width}
              height={height}
            />
          </CardItem>
        </CardBody>
      </CardContainer>
      <p>{alt}</p>
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
              src={project.src}
              alt={project.alt}
              width={project.width}
              height={project.height}
            />
          ))}
        </div>
      </div>
    </div>
  );
}