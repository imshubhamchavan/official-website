"use client";
import myimg from "../../public/male0086.png";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import logo from "../../public/shubhazone-logo.png"

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const words = [
  "Expert Web Developer",
  "Next.js Specialist",
  "Coffee Is Life",
  "Creative Artist",
  "Illustrious Photographer",
  
];

const colorMap: { [key: string]: string } = {
  "Expert Web Developer": "text-red-500 karla ",
  "Next.js Specialist": "text-blue-500 karla ",
  "Coffee Is Life": "text-green-500 karla ",
  "Creative Artist": "text-yellow-500 karla ",
  "Illustrious Photographer": "text-purple-500 karla",
};

export function Hero() {
  const [text] = useTypewriter({
    words: words,
    loop: true,
    delaySpeed: 1000,
    typeSpeed: 80,     // speed of typing
    deleteSpeed: 30, 
  });

  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.to(".icons", {
        rotate: 720,
        duration: 4,
        ease: "bounce.out",
      });
    }
  }, []);

  return (
    <div className="grid lg:grid-cols-3 h-full">
      <title>Shubham Chavan | Portfolio</title>
      <div className="col-span-1 lg:col-span-2 animate-slide-in h-full min-h-[500px] lg:min-h-[300px]  mt-8 md:mt-16">
      <div className="text-center">
      <h1 className="text-6xl font-bold rubik-scribble-regular text-gray-500 md:text-stroke md:font-extrabold md:text-7xl lg:text-8xl md:text-center ">
  SHUBHAM CHAVAN
</h1></div>
{" "}
        <div className="text-center rubik-scribble-regular text-gray-300 md:text-gray-700 ">
          <h2>Frontend Developer</h2>
        </div>
        <br />
        <br />
        <br />
        <br />
        <h1 className="text-center playfair-display text-2xl md:text-2xl lg:text-3xl">

          <span className={colorMap[text] || "text-gray-400 karla"}>“ {text} ”</span>
          <span className="">
           
          </span>
        </h1>
      </div>
      <div className="relative overflow-visible">
      <Image
        src={myimg}
        alt="shubham chavan"
        className="col-span-1 h-[500px] mt-4  object-cover hidden md:block"
        priority
      /></div>
    </div>
  );
}
