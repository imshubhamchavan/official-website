"use client";

import React from "react";
import { FlipWords } from "../../components/ui/flip-words";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../../components/ui/hero-highlight";

gsap.registerPlugin(useGSAP, ScrollTrigger);
const words = [
  "“Hi”",
  "“Hello”",
  "“Namaste”",
  "“Bonjour”",
  "“Hola”",
  "“Zdravstvuyte”",
  "“Ciao”",
  "“Selam”",
  "“Olá”",
  "“Anyoung haseyo”",
  "“Nǐ hǎo”",
];

export function Hero() {
  return (
    <div className="mt-12 mx-6 text-center">
      <HeroHighlight className="">
        <div className="animate-slide-in ml-24 text-left">
          <FlipWords words={words} />
        </div>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="   mt-4 "
        >
          <div className="text-4xl md:text-6xl lg:text-9xl text-gray-900 ">
            <p className=" animate-slide-in-right ribes-mono">
              BORN IN THE DIGITAL AGE,
              <span className="font-semibold text-purple-400">
                {" "}
                SHUBHAM 
              </span>{" "}
              <span className="font-thin ribes-mono">IS A </span>
            </p>

            <p className="tilt-left">
            <Highlight className="text-white text-4xl md:text-6xl lg:text-9xl dark:text-white ribes-mono">
              FRONTEND-DEVELOPER
            </Highlight>
            </p>
            

            <p className=" animate-slide-in ">
              <span className="ribes-mono"> BASED IN </span>
              {/* <span className="text-orange-500 cinzel-about ">MAHARASHTRA</span> */}
              <span className="text-4xl md:text-6xl lg:text-9xl ribes-bold animate-slide-in-right text-orange-400">
                INDIA
              </span>
            </p>
          </div>
        </motion.h1>
      </HeroHighlight>
      <div className="max-w-7xl w-full content-end mt-32">
        <h1 className="text-right font-thin text-4xl md:text-4xl font-small ribes-mono lg:text-5xl">
          Scroll
        </h1>
        <div className="h-28 sm:h-48 border-r border-black mt-4"></div>
      </div>
      <div></div>
    </div>
  );
}
