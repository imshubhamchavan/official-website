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

gsap.registerPlugin(ScrollTrigger);

const stackIcons = [canvaIcon, figmaIcon, chatgptIcon, githubIcon, chromeIcon, microIcon, vscodeIcon];

const technologies = [
  { name: "HTML", icon: htmlIcon },
  { name: "CSS3", icon: css3Icon },
  { name: "SCSS", icon: scssIcon },
  { name: "JavaScript", icon: javascriptIcon },
  { name: "TypeScript", icon: typescriptIcon },
  { name: "React.js", icon: reactIcon },
  { name: "Next.js", icon: nextjsIcon },
  { name: "Angular", icon: angularIcon },
  { name: "Redux", icon: reduxIcon },
  { name: "Tailwind CSS", icon: tailwindIcon },
  { name: "Node.js", icon: nodejsIcon },
  { name: "PostgreSQL", icon: postgresIcon },
  { name: "Prisma", icon: prismaIcon },
  { name: "Firebase", icon: firebaseIcon },
  { name: "GraphQL", icon: graphqlIcon },
  { name: "Jest", icon: jestIcon },
];

export function AboutSection() {
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
    <section>
      <div className="panel align-top about font-thin mt-24">
        <div className="about-content flex space-x-2 md:space-x-8 flex-col">
          <h1 className="text-5xl lg:text-7xl rubik-scribble text-center">
            Skills and Technologies
          </h1>
          <div className="mt-8 text-center">
            <p className="font-normal text-gray-600 max-w-3xl w-full px-4 md:px-8 mx-auto">
              Welcome! Take a moment to explore the diverse range of{" "}
              <span className="font-extrabold">skills</span> and technologies I
              utilize. From cutting-edge web technologies and{" "}
              <span className="font-extrabold">frameworks</span> to essential
              design tools and programming languages.
            </p>
          </div>
        </div>

        {/* Skills section */}

        <div className="mt-12 md:mt-24">
          <Card className="col-span-1 lg:col-span-2 border-none p-4 md:p-8 bg-transparent">
            <CardContent className="flex flex-wrap justify-center items-center gap-5 md:gap-8">
              {technologies.map((tech, index) => (
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
                    className="w-12 h-12 md:w-16 md:h-16 group-hover:scale-110"
                  />
                  <span className="text-xs text-center block mt-1">{tech.name}</span>
                </div>
              ))}
            </CardContent>

            {/* Other icons section */}
            <Card className="border-none">
              <CardHeader className="mb-4">
                <CardTitle className="justify-center text-center text-1xl text-gray-400"></CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap justify-center items-center gap-8">
                {stackIcons.map((item, index) => (
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

            {/* Download resume button */}
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
        </div>
      </div>
    </section>
  );
}
