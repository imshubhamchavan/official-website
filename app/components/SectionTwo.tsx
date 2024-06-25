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
    description:
      "Stay connected and get a glimpse into my life by following me on Instagram! I regularly post updates about my experiences, adventures, and daily moments. Don't miss out on my latest posts",
    link: "https://www.instagram.com/shubhamzone.01/",
  },
  {
    id: 2,
    icon: twitter,
    name: "X",
    username: "@Shubhamzone_",
    description:
      "Join me on Twitter for real-time updates and insights! Follow me to stay informed about my latest thoughts, projects, and daily musings. Don't miss out – let's connect on Twitter!",
    link: "https://x.com/Shubhamzone_",
  },
  {
    id: 3,
    icon: linkedin,
    name: "Linkedin",
    username: "@shubham--chavan",
    description:
      "Connect with me on LinkedIn to stay updated on my professional journey and see my latest projects and explore potential collaborations. Let's connect and grow together professionally!",
    link: "https://www.linkedin.com/in/shubham--chavan/",
  },
  {
    id: 4,
    icon: github,
    name: "Github",
    username: "@imshubhamchavan",
    description: "This is where I share my latest coding projects and work. From coding challenges to full-scale applications, there's a variety of projects here that I've been working on.Let's connect ",
    link: "https://github.com/imshubhamchavan/",
  },
];

const nameStyles: { [key: string]: { color: string } } = {
  1: { color: "#C13584" },
  2: { color: "black" },
  3: { color: "#0A66C2" },
  4: { color: " #000000" },
};

export function SectionTwo() {
  return (
    <div className="max-w-7xl w-full px-4 md:px-8 mx-auto mt-14">
      {/* Main content area */}

      <h1 className="text-right text-4xl md:text-4xl rubik-scribble-thin  lg:text-5xl">
        Follow
      </h1>
      <h1 className="text-right text-4xl md:text-4xl cinzel lg:text-5xl">
        Me On
      </h1>
      <div className="h-28 sm:h-28 border-r border-black mr-2 mt-4"></div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {socialMedia.map((item) => (

          //social media cards 
          <Card key={item.id} className="   border-none shadow-sm group">
            <CardHeader className="grid grid-cols-2 text-left">
              <Image
                src={item.icon}
                alt="Icon"
                className="w-8 h-8 md:w-14 md:h-14 object-contain transition-transform duration-300 ease-in-out transform group-hover:scale-110"
              />{" "}
              <div className="mr-4 ml-0">
                <CardTitle
                  style={nameStyles[item.id]}
                  className="text-2xl cinzel text-left font-bold"
                >
                  {item.name}
                </CardTitle>
                <CardDescription className="font-thin rubik text-gray-700">
                  {item.username}
                </CardDescription>
              </div>
            </CardHeader>
            
            <CardContent style={nameStyles[item.id]} className=" mt-4 font-normal overflow-hidden flex items-center justify-center">
              <p>{item.description} </p>
            </CardContent>
            <Button
              className="mt-4 bg-white font-bold border border-black text-black hover:text-white text-center md:w-full"
              size="sm"
              asChild
            >
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
