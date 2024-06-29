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
    <div className="bg-white  w-full px-12 md:px-4 mx-auto mt-8">
      <HeroHighlight>
        <div className="animate-slide-in ">
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
          className="col-span-1 lg:col-span-3  h-full min-h-[500px] lg:min-h-[300px]  mt-4 md:mt-6"
        >
          <div className="text-4xl md:text-6xl lg:text-8xl text-black font-thin  ">
            <p className=" animate-slide-in-right">BORN IN THE DIGITAL AGE, </p>
            <p className=" animate-slide-in">
              <span className="cinzel-about "> SHUBHAM &nbsp;</span>{" "}
              <span className="font-thin">IS &nbsp; A </span>
            </p>
            <Highlight className="text-black dark:text-white ">
              FRONTEND DEVELOPER,
            </Highlight>

            <p className=" animate-slide-in">
              BASED IN{" "}
              <span className="text-orange-500 cinzel-about ">MAHARASHTRA</span>
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-8xl text-purple-500 cinzel-about  animate-slide-in-right">
              INDIA
            </h1>
          </div>
        </motion.h1>
      </HeroHighlight>
          <div className="max-w-7xl w-full content-end mt-4">
            <h1 className="text-right font-thin text-4xl md:text-4xl font-small lg:text-5xl">
              Scroll
            </h1>
            <div className="h-28 sm:h-48 border-r border-black mt-4"></div>
          </div>
          <div></div>
    </div>
  );
}
