import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import me from "../../public/skills-img.png";

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
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from '@radix-ui/react-icons';

import github from "../../public/tech-icons/github.svg";
import canva from "../../public/tech-icons/canva.svg";
import chatgpt from "../../public/tech-icons/chatgpt.svg";
import chrome from "../../public/tech-icons/chrome.svg";
import figma from "../../public/tech-icons/figma.svg";
import micro from "../../public/tech-icons/micro.svg";
import insta from "../../public/insta.svg";
import linkedin from "../../public/linkedin.svg";
import twitter from "../../public/twitter.svg";
import vscode from "../../public/tech-icons/vscode.svg";

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
  return (
    <div className="  mt-24 font-thin">
      <div className="flex space-x-8 flex flex-col">
        <h1 className="text-4xl lg:text-6xl rubik-scribble text-center text-gray-800 ml-5">
          Skills and Technologies
        </h1>
        <div className="mt-8  text-center">

        <p className="noto-sans text-gray-500 max-w-3xl w-full px-4 md:px-8 mx-auto">Welcome! Take a moment to explore the diverse range of skills and technologies I utilize. From cutting-edge web technologies and frameworks to essential design tools and programming languages.</p>
</div>
      </div>
      <div className=" mt-4 ">
      <Card className="col-span-1 lg:col-span-2 border-none p-8 bg-transparent">
  <CardContent className="flex flex-wrap justify-center items-center gap-8 ">
    {icons.map((item, index) => (
      <div key={index} className="group relative">
        <Image
          src={item}
          alt="Icon"
          className="w-16 h-16 object-contain transition-transform duration-300 ease-in-out transform group-hover:scale-110"
        />
      </div>
    ))}
  </CardContent>

  <Card className="border-none">
  <CardHeader className="mb-4">
    <CardTitle className="justify-center text-center text-1xl text-gray-400">
    
    </CardTitle>
  </CardHeader>
  <CardContent className="flex flex-wrap justify-center items-center gap-8 ">
  
    {stack_icons.map((item, index) => (
      <div key={index} className="group relative">
        <Image
          src={item}
          alt="Icon"
          className="w-16 h-16 sm:w-8 sm:h-8 md:w-16 md:h-16 object-contain transition-transform duration-300 ease-in-out transform group-hover:scale-110"
        />
      </div>
    ))}
  </CardContent>
</Card>

  <div className="relative flex justify-center mt-24">
    <Link
      href="https://drive.google.com/file/d/1V8weoHW9mA-hRoMivTrTTKVVxD_YS6sX/view?usp=sharing"
      passHref
    >
      <Button
  variant="outline"
  className="relative overflow-hidden mb-10 flex font-bold items-center ml-auto bg-white text-red-600 rounded-full border-red-600 px-6 py-4 z-10 group"
  rel="noopener noreferrer"
  title="Download Resume"
>
  <span className="relative z-10 flex items-center">
    Download Resume <DownloadIcon className="ml-2" />
  </span>
  <span className="absolute inset-0 bg-red-600 transition-all duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0"></span>
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
