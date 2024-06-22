"use client";
import myimg from "../../public/male0086.png";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";


const words = [
  "Expert Web Developer",
  "Next.js Specialist",
  "Coffee Is Life",
  "Creative Artist",
  "Illustrious Photographer",
  
];

const colorMap: { [key: string]: string } = {
  "Expert Web Developer": "text-red-500",
  "Next.js Specialist": "text-blue-500",
  "Coffee Is Life": "text-green-500",
  "Creative Artist": "text-yellow-500",
  "Illustrious Photographer": "text-purple-500",
};

export function Hero() {
  const [text] = useTypewriter({
    words: words,
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="grid lg:grid-cols-3 h-full">
      <title>Shubham Chavan | Portfolio</title>
      <div className="col-span-1 lg:col-span-2 animate-slide-in h-full min-h-[500px] lg:min-h-[300px]  mt-8 md:mt-16">
      <div className="text-center">
      <h1 className="text-6xl font-bold rubik-scribble-regular text-gray-500 md:text-7xl lg:text-8xl md:text-center ">
  SHUBHAM CHAVAN
</h1></div>
{" "}
        <div className="text-center rubik-scribble-regular text-gray-700">
          <h2>Frontend Developer</h2>
        </div>
        <br />
        <br />
        <br />
        <br />
        <h1 className="text-center rubik-scribble-regular text-2xl md:text-2xl lg:text-3xl">
          <span className={colorMap[text] || "text-gray-400"}>{text}</span>
          <span className="">
            <Cursor />
          </span>
        </h1>
      </div>
      <div className="relative overflow-visible">
      <Image
        src={myimg}
        alt="shubham chavan"
        className="col-span-1 h-[500px] mt-4 animate-slide-in-right object-cover rounded-2xl hidden md:block"
        priority
      /></div>
    </div>
  );
}
