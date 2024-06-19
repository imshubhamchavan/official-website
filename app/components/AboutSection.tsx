import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
  jest

]




export function AboutSection() {
  return (
    <div className="grid gird-cols-1 lg:grid-cols-3 gap-4 mt-10  ">
      <Card className="col-span-1 lg:col-span-2 border-none p-8 bg-transparent" >
        <h1 className="text-4xl lg:text-5xl rubik-scribble-regular text-gray-500">
          Skills and Technologies
        </h1>
       
          <CardContent className="flex flex-wrap gap-6 mt-16">
          {icons.map((item, index) => (
              <Image key={index} src={item} alt="Icon" className="w-16 h-16" />
            ))}
          </CardContent>
      
        <div className="relative inline-flex  group mt-14">
          <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#adadad] via-[#ff6363] to-[#a6a6a6] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
          <a
            href="https://drive.google.com/file/d/1V8weoHW9mA-hRoMivTrTTKVVxD_YS6sX/view?usp=sharing"
            title="download resume"
            className="relative inline-flex items-center justify-center px-5 py-2 text-lg font-bold text-white transition-all duration-200 bg-red-500 group-hover:bg-red-600 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            role="button"
            rel="noopener noreferrer"
            target="_blank"
          >
            Resume&emsp;<span>&#8681;</span>
          </a>
        </div>
      </Card>
      <div className="col-span-1 hidden md:block">
        <Image
          src={me}
          alt="shubham chavan"
          className="h-[500px] object-cover rounded-lg w-full"
        />
      </div>
    </div>
  );
}
