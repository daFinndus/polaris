"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

import Link from "next/link";

import { useWindowSize } from "../hooks/useWindowSize";
import { getColorMode } from "@/app/hooks/getColorMode";
import { Button } from "@/components/ui/button";
import { TiHome } from "react-icons/ti";

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

/**
 * Gets the css variable from the root element and cuts it into a hsl string.
 * @param color The css variable to get.
 * @constructor The hsl string.
 */
const CutVariables = (color: string) => {
  const rootStyles = getComputedStyle(document.documentElement);

  return `hsl(${rootStyles
    .getPropertyValue(color)
    .trim()
    .replace(/\s+/g, ", ")})`;
};

const ThreeScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInitialized = useRef(false);

  useEffect(() => {
    // Avoid reinitialization
    if (isInitialized.current) return;
    isInitialized.current = true;

    const backgroundHSL = CutVariables("--background-light");
    const cubeColorHSL = CutVariables("--color");

    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Background color and variable
    renderer.setClearColor(new THREE.Color(0xff0000), 1);
    containerRef.current?.appendChild(renderer.domElement);

    // Geometry and material
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: cubeColorHSL });
    const cube = new THREE.Mesh(geometry, material);

    scene.background = new THREE.Color(backgroundHSL);
    scene.add(cube);

    // Resize event
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Render loop
    const renderScene = () => {
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
      requestAnimationFrame(renderScene);
    };

    renderScene();

    // Cleanup
    return () => {
      containerRef.current?.removeChild(renderer.domElement);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-screen h-screen inset-0 bg-background-light"
    />
  );
};

function Supported() {
  useEffect(() => {
    getColorMode();
  }, []);

  return (
    <div
      className={
        "font-sans relative h-screen w-screen justify-center flex items-center"
      }
    >
      <ThreeScene />
      <Link
        href={"/"}
        className={"hidden laptop:block w-10 h-10 absolute top-4 left-4"}
      >
        <Button className={"w-full h-full"} variant={"secondary"}>
          <TiHome size={4} />
        </Button>
      </Link>
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
