"use client";
import myimg from "../../public/male0086.png";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";


const words = [
  "Expert Web Developer",
  "Next.js Specialist",
  "Coffee Enthusiast",
  "Creative Artist",
  "Illustrious Photographer",
  "Passionate Traveler",
];

const colorMap: { [key: string]: string } = {
  "Expert Web Developer": "text-red-500",
  "Next.js Specialist": "text-blue-500",
  "Coffee Enthusiast": "text-green-500",
  "Creative Artist": "text-yellow-500",
  "Illustrious Photographer": "text-purple-500",
  "Passionate Traveler": "text-pink-500",
};

export function Hero() {
  const [text] = useTypewriter({
    words: words,
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 ">
      <title>Shubham Chavan | Portfolio</title>
      <div className="col-span-1 lg:col-span-2 animate-slide-in h-full min-h-[500px] lg:min-h-[300px] rounded-2xl p-8 mt-16">
        <h1 className="text-6xl text-bold rubik-scribble-regular text-gray-500 sm:text-3xl lg:text-7xl">
          SHUBHAM CHAVAN
        </h1>{" "}
        <div className="text-center rubik-scribble-regular text-gray-300">
          <h2>Frontend Developer</h2>
        </div>
        <br />
        <br />
        <br />
        <br />
        <h1 className="text-center rubik-scribble-regular text-1xl sm:text-1xl lg:text-2xl">
          <span className={colorMap[text] || "text-black"}>{text}</span>
          <span className="">
            <Cursor />
          </span>
        </h1>
      </div>
      <div className="relative overflow-visible">
      <Image
        src={myimg}
        alt="shubham chavan"
        className="col-span-1 h-[550px] animate-slide-in-right object-cover rounded-2xl"
        priority
      /></div>
    </div>
  );
}
