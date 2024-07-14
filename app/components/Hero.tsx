"use client";

import React from "react";
import { FlipWords } from "../../components/ui/flip-words";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../../components/ui/hero-highlight";
import SparklesText from "@/components/magicui/sparkles-text";

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
    <div className="bg-white  mx-auto mt-8 ml-4  text-center lg:text-left">
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
          className=" h-full min-h-[400px] lg:min-h-[300px]  mt-4 md:mt-6"
        >
          <div className="text-4xl md:text-6xl lg:text-8xl text-black font-thin  ">
            <p className=" animate-slide-in-right">BORN IN THE DIGITAL AGE, </p>
            <p className=" animate-slide-in">
              
              <span className="cinzel-about "> SHUBHAM &nbsp;</span>{" "}
              <span className="font-thin">IS &nbsp; A </span>
            </p>
            <Highlight className="text-white dark:text-white ">
              FRONTEND DEVELOPER,
            </Highlight>

            <p className=" animate-slide-in mt-2">
              BASED IN{" "}
              {/* <span className="text-orange-500 cinzel-about ">MAHARASHTRA</span> */}
            <span className="text-4xl md:text-6xl lg:text-8xl text-purple-500 cinzel-about  animate-slide-in-right">
              INDIA
            </span>
            </p>
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
