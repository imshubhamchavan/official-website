"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

// icons
import html_icon from "../../public/skills/html-5-svgrepo-com.svg";
import javascript from "../../public/skills/js-svgrepo-com.svg";
import scss from "../../public/skills/scss-svgrepo-com.svg";
import react_icon from "../../public/skills/react-svgrepo-com.svg";
import nextjs from "../../public/skills/nextjs-fill-svgrepo-com.svg";
import typescript from "../../public/skills/typescript-icon-svgrepo-com.svg";
import nodejs from "../../public/skills/node-js-svgrepo-com.svg";
import redux from "../../public/skills/redux-svgrepo-com.svg";
import tailwindcss from "../../public/skills/tailwind-svgrepo-com.svg";
import postgres from "../../public/skills/postgresql-svgrepo-com.svg";
import prisma from "../../public/skills/prisma-svgrepo-com.svg";
import firebase from "../../public/skills/firebase-svgrepo-com.svg";
import graphql from "../../public/skills/graphql-svgrepo-com.svg";
import jest from "../../public/skills/jest-snapshot-svgrepo-com.svg";
import angular from "../../public/skills/angular-icon-svgrepo-com.svg";
import css3 from "../../public/skills/css-3-svgrepo-com.svg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "@radix-ui/react-icons";

import github from "../../public/tech-icons/github.svg";
import canva from "../../public/tech-icons/canva.svg";
import chatgpt from "../../public/tech-icons/chatgpt.svg";
import chrome from "../../public/tech-icons/chrome.svg";
import figma from "../../public/tech-icons/figma.svg";
import micro from "../../public/tech-icons/micro.svg";
import vscode from "../../public/tech-icons/vscode.svg";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const stack_icons = [canva, figma, chatgpt, github, chrome, micro, vscode];

const icons = [
  html_icon,
  css3,
  scss,
  tailwindcss,
  javascript,
  react_icon,
  redux,
  nextjs,
  angular,
  typescript,
  nodejs,
  postgres,
  prisma,
  firebase,
  graphql,
  jest,
];

export function AboutSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.to(".icons", {
        rotate: 720,
        duration: 1,
        delay: 2,
        ease: "bounce.out",
      });

      // gsap.from(".about", {
      //   scrollTrigger: {
      //     start: "top top",
      //     end: "bottom 150px",
      //     pin: ".about-content",
      //     markers: true,
      //     scrub: true,
      //   },
      // });
    }
  }, []);
  return (
    <div className="panel align-top about font-thin mt-24">
      <div className="about-content flex space-x-2 md:space-x-8 flex-col">
        <h1 className=" text-5xl lg:text-7xl rubik-scribble text-center">
          Skills and Technologies
        </h1>
        <div className="mt-8  text-center">
          <p className="font-normal text-gray-600 max-w-3xl w-full px-4 md:px-8 mx-auto">
            Welcome! Take a moment to explore the diverse range of{" "}
            <span className="font-extrabold">skills</span> and technologies I
            utilize. From cutting-edge web technologies and{" "}
            <span className="font-extrabold">frameworks</span> to essential
            design tools and programming languages.
          </p>
        </div>
      </div>

      {/* skills section */}

      <div className=" mt-12 md:mt-24">
        <Card className="col-span-1 lg:col-span-2 border-none p-4 md:p-8 bg-transparent">
          <CardContent className="flex flex-wrap justify-center items-center gap-5 md:gap-8  ">
            {icons.map((item, index) => (
              <div key={index} className="group relative">
                <Image
                  src={item}
                  alt="Icon"
                  className="icons w-12 h-12 md:w-16 md:h-16  group-hover:scale-110"
                />
              </div>
            ))}
          </CardContent>

          <Card className="border-none">
            <CardHeader className="mb-4">
              <CardTitle className="justify-center text-center text-1xl text-gray-400"></CardTitle>
            </CardHeader>
            <CardContent className=" flex flex-wrap justify-center items-center gap-8 ">
              {stack_icons.map((item, index) => (
                <div key={index} className="group relative">
                  <Image
                    src={item}
                    alt="Icon"
                    className="icons w-14 h-14 md:w-16 md:h-16 object-contain transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                  />
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="relative flex justify-center mt-12 md:mt-24">
            <Link href="https://flowcv.com/resume/ssw2v8kt0u" passHref>
              <Button
                variant="outline"
                className="relative overflow-hidden mb-10 flex font-bold items-center ml-auto bg-white text-red-600 rounded-full border-red-600 px-6 py-4 z-10 group"
                rel="noopener noreferrer"
                title="Download Resume"
              >
                <span className="relative z-10 flex items-center group-hover:text-white">
                  Download Resume <DownloadIcon className="ml-2" />
                </span>
                <span className="absolute inset-0 bg-red-600  transition-all duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0"></span>
              </Button>
            </Link>
          </div>
        </Card>

        {/* <div className="col-span-1 hidden md:block">
          <Image
            src={me}
            alt="shubham chavan"
            className="h-[500px] object-cover rounded-lg w-full"
          />
        </div> */}
      </div>
    </div>
  );
}
