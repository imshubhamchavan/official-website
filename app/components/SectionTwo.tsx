import Image from "next/image";
import square from "../../public/square.svg";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
import { Button } from "@/components/ui/button";

const icons = [
    canva,
    figma,
    chatgpt,
    github,
    chrome,
    micro,
    vscode
  ];

  const socialMedia = [
    {
      id: 1,
      icon: insta,
      name: "Instagram",
      username: "@shubhamzone.01",
      link: "https://www.instagram.com/shubhamzone.01/",
    },
    {
      id: 2,
      icon: twitter,
      name: "X / Twitter",
      username: "@Shubhamzone_",
      link: "https://x.com/Shubhamzone_",
    },
    {
      id: 3,
      icon: linkedin,
      name: "Linkedin",
      username: "@shubham--chavan",
      link: "https://www.linkedin.com/in/shubham--chavan/",
    },
    {
        id: 4,
        icon: github,
        name: "Github",
        username: "@imshubhamchavan",
        link: "https://github.com/imshubhamchavan/",
      },
  ];
export function SectionTwo() {
  return (
    <div className="grid gird-cols-1 lg:grid-cols-3 gap-4 mt-10">
      <div className="w-full relative col-span-1 hidden md:block">
        <Image
          src={square}
          alt="square"
          className="w-full h-full object-cover rounded-2xl opacity-70"
        />
      </div>
      <div className="flex flex-col w-full col-span-1 lg:col-span-2 gap-4">
        <Card className=" border-none shadow-sm">
          <CardHeader>
            <CardTitle className="rubik-scribble-regular text-gray-700">Explore my stack</CardTitle>
            <CardDescription className="rubik">Check out the tools i use daily</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-4">
          {icons.map((item, index) => (
              <Image key={index} src={item} alt="Icon" className="w-16 h-16" />
            ))}
          </CardContent>
        </Card>
        <div className="grid grid-cols-2 sm:grid-cols-3 w-full gap-4">
          {socialMedia.map((item) => (
            <Card
              key={item.id}
              className="p-4 flex flex-col items-center sm:items-start  border-none shadow-sm"
            >
              <Image src={item.icon} alt="Icon" className="w-16 h-16 sm:w-8 sm:h-8 md:block" />
             
              <h1 className="text-2xl rubik-scribble font-medium text-gray-700 pt-3">{item.name}</h1>
              <p className="text-muted-foreground rubik">{item.username}</p>
              <Button className="mt-4" size="sm" asChild>
              <a href={item.link}> Follow</a>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
