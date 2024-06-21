import Image from "next/image";
import square from "../../public/square.svg";
import {
  Card,
} from "@/components/ui/card";

import github from "../../public/tech-icons/github.svg";
import insta from "../../public/insta.svg";
import linkedin from "../../public/linkedin.svg";
import twitter from "../../public/twitter.svg";
import { Button } from "@/components/ui/button";


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
    <div className=" mb-10">
      {/* Main content area */}
    
         
         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-24 justify-center items-center gap-4 sm:gap-2">
  {socialMedia.map((item) => (
    <Card
    key={item.id}
    className="p-4 flex flex-col items-center justify-center border-none shadow-sm group"
  >
    <Image
      src={item.icon}
      alt="Icon"
      className="w-12 h-12 md:w-16 md:h-16 object-contain transition-transform duration-300 ease-in-out transform group-hover:scale-110"
    />
    <h1 className="text-2xl rubik-scribble text-center font-medium text-gray-700 pt-3">
      {item.name}
    </h1>
    <p className="text-muted-foreground rubik text-center">{item.username}</p>
    <Button className="mt-4 text-center md:w-28" size="sm" asChild>
      <a href={item.link} target="_blank" rel="noopener noreferrer">
        Follow
      </a>
    </Button>
  </Card>
  
  ))}
</div>

      </div>
 
  );
}
