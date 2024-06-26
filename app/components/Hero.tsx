"use client";
import myimg from "../../public/male0086.png";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import logo from "../../public/shubhazone-logo.png";
import { HelloText } from "./HelloText";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Skills } from "./skills";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const words = [
  "Expert Web Developer",
  "Next.js Specialist",
  "Coffee Is Life",
  "Creative Artist",
  "Illustrious Photographer",
];

const colorMap: { [key: string]: string } = {
  "Expert Web Developer": "text-purple-500 karla ",
  "Next.js Specialist": "text-orange-500 karla ",
  "Coffee Is Life": "text-purple-500 karla ",
  "Creative Artist": "text-orange-500 karla ",
  "Illustrious Photographer": "text-purple-500 karla",
};

export function Hero() {
  const [text] = useTypewriter({
    words: words,
    loop: true,
    delaySpeed: 1000,
    typeSpeed: 80, // speed of typing
    deleteSpeed: 30,
  });

  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.to(".mainicon", {
        rotate: 720,
        duration: 2,
        ease: "bounce.in",
      });
    }
  }, []);

  return (
    <div className="bg-white max-w-7xl w-full px-12 md:px-4 mx-auto mt-8">
      <div className="grid lg:grid-cols-3  ">
        <title>Shubham Chavan | Portfolio</title>
        <div className="col-span-1 lg:col-span-3  h-full min-h-[500px] lg:min-h-[300px]  mt-4 md:mt-6">
          <div className="animate-slide-in">
            <HelloText />
          </div>
          <div className="mt-4 animate-slide-in-right">
            <h1 className="text-2xl md:text-6xl lg:text-8xl text-black font-thin  ">
              BORN IN THE DIGITAL AGE,{" "}
              <span className="cinzel-about ">SHUBHAM</span>&nbsp; IS &nbsp; A{" "}
              <p className="cinzel-about">FRONTEND DEVELOPER</p> BASED IN{" "}
              <span className="text-orange-500 cinzel-about">MAHARASHTRA</span>,
            </h1>
            <h1 className="text-6xl md:text-7xl lg:text-8xl text-purple-500 cinzel-about ">
              INDIA
            </h1>
          </div>{" "}
        </div>
      </div>
      <div className="max-w-7xl w-full content-end mt-4">
        <h1 className="text-right font-thin text-4xl md:text-4xl font-small lg:text-5xl">Scroll</h1>
        <div className="h-28 sm:h-48 border-r border-black mt-4"></div>
      </div>
      <div>
        
      </div>
    </div>
  );
}
