"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "@radix-ui/react-icons";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Import SVG icons for technologies
import htmlIcon from "../../public/skills/html-5-svgrepo-com.svg";
import css3Icon from "../../public/skills/css-3-svgrepo-com.svg";
import scssIcon from "../../public/skills/scss-svgrepo-com.svg";
import javascriptIcon from "../../public/skills/js-svgrepo-com.svg";
import typescriptIcon from "../../public/skills/typescript-icon-svgrepo-com.svg";
import reactIcon from "../../public/skills/react-svgrepo-com.svg";
import nextjsIcon from "../../public/skills/nextjs-fill-svgrepo-com.svg";
import angularIcon from "../../public/skills/angular-icon-svgrepo-com.svg";
import reduxIcon from "../../public/skills/redux-svgrepo-com.svg";
import tailwindIcon from "../../public/skills/tailwind-svgrepo-com.svg";
import nodejsIcon from "../../public/skills/node-js-svgrepo-com.svg";
import postgresIcon from "../../public/skills/postgresql-svgrepo-com.svg";
import prismaIcon from "../../public/skills/prisma-svgrepo-com.svg";
import firebaseIcon from "../../public/skills/firebase-svgrepo-com.svg";
import graphqlIcon from "../../public/skills/graphql-svgrepo-com.svg";
import jestIcon from "../../public/skills/jest-snapshot-svgrepo-com.svg";

import githubIcon from "../../public/tech-icons/github.svg";
import canvaIcon from "../../public/tech-icons/canva.svg";
import chatgptIcon from "../../public/tech-icons/chatgpt.svg";
import chromeIcon from "../../public/tech-icons/chrome.svg";
import figmaIcon from "../../public/tech-icons/figma.svg";
import microIcon from "../../public/tech-icons/micro.svg";
import vscodeIcon from "../../public/tech-icons/vscode.svg";
import { Tools } from "./Tools";
import IconCloud from "@/components/magicui/icon-cloud";
import FlipCard from "@/components/animata/card/flip-card";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

gsap.registerPlugin(ScrollTrigger);

const stackIcons = [
  canvaIcon,
  figmaIcon,
  chatgptIcon,
  githubIcon,
  chromeIcon,
  microIcon,
  vscodeIcon,
];

const languagesMarkup = [
  { name: "HTML", icon: htmlIcon },
  { name: "JavaScript", icon: javascriptIcon },
  { name: "TypeScript", icon: typescriptIcon },
];

const frontendFrameworks = [
  { name: "React.js", icon: reactIcon },
  { name: "Next.js", icon: nextjsIcon },
  { name: "Angular", icon: angularIcon },
];

const stateManagement = [{ name: "Redux", icon: reduxIcon }];

const styling = [
  { name: "CSS3", icon: css3Icon },
  { name: "SCSS", icon: scssIcon },
  { name: "Tailwind CSS", icon: tailwindIcon },
];

const backendDatabases = [
  { name: "Node.js", icon: nodejsIcon },
  { name: "PostgreSQL", icon: postgresIcon },
  { name: "Prisma", icon: prismaIcon },
  { name: "Firebase", icon: firebaseIcon },
];

const apisServices = [{ name: "GraphQL", icon: graphqlIcon }];

const testing = [{ name: "Jest", icon: jestIcon }];

export function Skills() {
  const iconsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    iconsRef.current.forEach((icon) => {
      if (icon) {
        ScrollTrigger.create({
          trigger: icon,
          start: "top 75%",
          onEnter: () => {
            gsap.to(icon, {
              rotate: 720,
              duration: 1,
              ease: "bounce.out",
            });
          },
        });
      }
    });
  }, []);

  return (
    <section className="">
      <div className="panel align-top font-thin about mt-12">
        <div className="about-content flex space-x-2 md:space-x-8 flex-col">
          <h1 className="text-5xl lg:text-10xl ribes text-center">
            Skills and Technologies
          </h1>
          <div className="mt-4 mb-12 text-1xl lg:text-2xl font-extralight text-center">
            <p className="font-normal text-gray-800 max-w-6xl w-full ribes-mono px-2 md:px-2 mx-auto">
              Welcome! Take a moment to explore the diverse range of{" "}
              <span className="ribes-bold">skills</span> and technologies I
              utilize. From cutting-edge web <span className="ribes-bold">technologies </span>and frameworks to
              essential design tools and{" "}
              programming languages.
            </p> 
          </div>
        </div>

        {/* Skills sections */}
        <div className="mt-8 md:mt-4 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
            <div className="m-1">
              {" "}
              <div className="col-span-1 h-full w-full flex items-center justify-center overflow-hidden rounded-2xl bg-background px-12 pb-2 pt-8 ">
                <IconCloud iconSlugs={slugs} />
              </div>
            </div>

            <div className="col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 ">

                {/* Languages & Markup */}
                <Card className="col-span-2 lg:col-span-1 border-none p-4 m-1 md:p-8 bg-yellow-50 ">
                  <CardHeader>
                    <CardTitle className="text-center text-2xl ribes-mono text-black  mb-4">
                      Languages & Markup
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap justify-center items-center gap-5 md:gap-8">
                    {languagesMarkup.map((tech, index) => (
                      <div
                        key={index}
                        ref={(el) => {
                          if (el) {
                            iconsRef.current[index] = el;
                          }
                        }}
                        className="group relative icons"
                      >
                        <Image
                          src={tech.icon}
                          alt={`${tech.name} Icon`}
                          className="w-12 h-12 md:w-12 md:h-12 group-hover:scale-110"
                        />
                        {/* <span className="text-xs text-center block mt-1">
                         
                        </span> */}
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Frontend Frameworks & Libraries */}
                <Card className="col-span-2 lg:col-span-1 border-none p-4 m-1 md:p-8 bg-yellow-50 ">
                  <CardHeader>
                    <CardTitle className="text-center text-2xl text-black ribes-mono mb-4">
                      Frameworks & Libraries
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap justify-center items-center gap-5 md:gap-8">
                    {frontendFrameworks.map((tech, index) => (
                      <div
                        key={index}
                        ref={(el) => {
                          if (el) {
                            iconsRef.current[index] = el;
                          }
                        }}
                        className="group relative icons"
                      >
                        <Image
                          src={tech.icon}
                          alt={`${tech.name} Icon`}
                          className="w-12 h-12 md:w-12 md:h-12 group-hover:scale-110"
                        />
                        <span className="text-xs text-center block mt-1">
                         
                        </span>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* State Management */}
                <Card className="col-span-2 lg:col-span-1 border-none p-4 m-1 md:p-8 bg-yellow-50 ">
                  <CardHeader>
                    <CardTitle className="text-center text-2xl text-black ribes-mono mb-4">
                      State Management
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap justify-center items-center gap-5 md:gap-8">
                    {stateManagement.map((tech, index) => (
                      <div
                        key={index}
                        ref={(el) => {
                          if (el) {
                            iconsRef.current[index] = el;
                          }
                        }}
                        className="group relative icons"
                      >
                        <Image
                          src={tech.icon}
                          alt={`${tech.name} Icon`}
                          className="w-12 h-12 md:w-12 md:h-12 group-hover:scale-110"
                        />
                        <span className="text-xs text-center block mt-1">
                         
                        </span>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Styling */}
                <Card className="col-span-2 lg:col-span-1 border-none p-4 m-1 md:p-8 bg-yellow-50 ">
                  <CardHeader>
                    <CardTitle className="text-center text-2xl text-black ribes-mono mb-4">
                      Styling
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap justify-center items-center gap-5 md:gap-8">
                    {styling.map((tech, index) => (
                      <div
                        key={index}
                        ref={(el) => {
                          if (el) {
                            iconsRef.current[index] = el;
                          }
                        }}
                        className="group relative icons"
                      >
                        <Image
                          src={tech.icon}
                          alt={`${tech.name} Icon`}
                          className="w-12 h-12 md:w-12 md:h-12 group-hover:scale-110"
                        />
                        <span className="text-xs text-center block mt-1">
                         
                        </span>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* backendDatabases  */}

                <Card className="col-span-2 lg:col-span-2 border-none p-4 m-1 md:p-8 bg-yellow-50 ">
                  <CardHeader>
                    <CardTitle className="text-center text-2xl text-black ribes-mono mb-4">
                      {" "}
                      Backend & Databases{" "}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap justify-center items-center gap-5 md:gap-8">
                    {backendDatabases.map((tech, index) => (
                      <div
                        key={index}
                        ref={(el) => {
                          if (el) {
                            iconsRef.current[index] = el;
                          }
                        }}
                        className="group relative icons"
                      >
                        <Image
                          src={tech.icon}
                          alt={`${tech.name} Icon`}
                          className="w-12 h-12 md:w-12 md:h-12 group-hover:scale-110"
                        />
                        <span className="text-xs text-center block mt-1">
                         
                        </span>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* apisServices */}
                <Card className="col-span-2 lg:col-span-1 border-none p-4 m-1 md:p-8 bg-yellow-50 ">
                  <CardHeader>
                    <CardTitle className="text-center text-2xl text-black ribes-mono mb-4">
                      {" "}
                      Api Services{" "}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap justify-center items-center gap-5 md:gap-8">
                    {apisServices.map((tech, index) => (
                      <div
                        key={index}
                        ref={(el) => {
                          if (el) {
                            iconsRef.current[index] = el;
                          }
                        }}
                        className="group relative icons"
                      >
                        <Image
                          src={tech.icon}
                          alt={`${tech.name} Icon`}
                          className="w-12 h-12 md:w-12 md:h-12 group-hover:scale-110"
                        />
                        <span className="text-xs text-center block mt-1">
                         
                        </span>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* testing */}
                <Card className="col-span-2 lg:col-span-1 border-none p-4 m-1 md:p-8 bg-yellow-50 ">
                  <CardHeader>
                    <CardTitle className="text-center text-2xl text-black ribes-mono mb-4">
                      Testing
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap justify-center items-center gap-5 md:gap-8">
                    {testing.map((tech, index) => (
                      <div
                        key={index}
                        ref={(el) => {
                          if (el) {
                            iconsRef.current[index] = el;
                          }
                        }}
                        className="group relative icons"
                      >
                        <Image
                          src={tech.icon}
                          alt={`${tech.name} Icon`}
                          className="w-12 h-12 md:w-12 md:h-12 group-hover:scale-110"
                        />
                        <span className="text-xs text-center block mt-1">
                         
                        </span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
        <Tools />
        <div className="relative flex justify-center mt-12 md:mt-24">
          <Link href="https://flowcv.com/resume/ssw2v8kt0u" passHref>
            <Button
              variant="outline"
              className="relative overflow-hidden mb-10 flex font-bold items-center ml-auto bg-white text-red-600 rounded-full border-red-600 px-6 py-4 z-10 group"
              rel="noopener noreferrer"
              title="Download Resume"
            >
              <span className="relative z-10 flex items-center ribes group-hover:text-white">
                Download Resume <DownloadIcon className="ml-2" />
              </span>
              <span className="absolute inset-0 bg-red-600  transition-all duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0"></span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
