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
    <div>
      <div className="grid gird-cols-1 lg:grid-cols-3 gap-4 mt-10  ">
        <Card className="col-span-1 lg:col-span-2 border-none p-8 bg-transparent">
          <h1 className="text-2xl lg:text-4xl rubik-scribble-regular text-gray-500">
            Skills and Technologies
          </h1>

          <CardContent className="flex flex-wrap gap-6 mt-16">
            {icons.map((item, index) => (
              <Image key={index} src={item} alt="Icon" className="w-16 h-16" />
            ))}
          </CardContent>

          <div className="relative inline-flex  group mt-14 ">
            <Link
              href="https://drive.google.com/file/d/1V8weoHW9mA-hRoMivTrTTKVVxD_YS6sX/view?usp=sharing"
              passHref
            >
              <Button
                className="mb-10 flex items-center ml-auto bg-red-600 text-white font-semibold"
                rel="noopener noreferrer"
                title="Download Resume"
              >
                {" "}
                Resume <DownloadIcon className="mr-2" />
              </Button>
            </Link>
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
      <h1 className="text-1xl lg:text-4xl rubik-scribble-regular text-gray-800  text-center mt-20">
        Resent Projects
      </h1>
    </div>
  );
}
