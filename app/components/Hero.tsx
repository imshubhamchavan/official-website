"use client";
import myimg from "../../public/male0086.png";
import Image from "next/image";
import React, {useEffect} from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export function Hero() {
  const [text] = useTypewriter({
    words: [
      "Expert Web Developer",
      "Next.js Specialist",
      "Coffee Enthusiast",
      "Creative Artist",
      "Illustrious Photographer",
      "Passionate Traveler",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="col-span-1 lg:col-span-2 animate-slide-in h-full min-h-[500px] lg:min-h-[300px] rounded-2xl p-8 mt-16">
        <h1 className="text-3xl text-bold rubik-scribble-regular text-gray-500 sm:text-3xl lg:text-7xl">
          SHUBHAM CHAVAN
        </h1>{" "}
        <div className="text-center rubik-scribble-regular text-gray-300"><h2>Frontend Developer</h2></div>
        <br /><br /><br /><br />
        <h1 className="text-center rubik-scribble-regular text-1xl sm:text-1xl lg:text-2xl">
          <span className="text-blue-400 ">{text}</span>
          <span className="">
            <Cursor />
          </span>
        </h1>
        <h1 className="text-1xl sm:text-1xl lg:text-2xl font-normal text-left  text-muted-foreground mt-3 ">
          {/* information here */}
        </h1>
        
      </div>

      <Image
        src={myimg}
        alt="shubham chavan"
        className="col-span-1 h-[550px] animate-slide-in-right object-cover rounded-2xl"
        priority
      />
    </div>
  );
}
