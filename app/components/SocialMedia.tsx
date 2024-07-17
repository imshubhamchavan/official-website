import React from "react";
import { PinContainer } from "../../components/ui/3d-pin";
import Image from "next/image";
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
      "Stay connected and get a glimpse into my life by following me on Instagram! ",
    link: "https://www.instagram.com/shubhamzone.01/",
  },
  {
    id: 2,
    icon: twitter,
    name: "Twitter",
    username: "@Shubhamzone_",
    description:
      "Join me on Twitter for real-time updates and insights!let's connect on Twitter!",
    link: "https://twitter.com/Shubhamzone_",
  },
  {
    id: 3,
    icon: linkedin,
    name: "LinkedIn",
    username: "@shubham--chavan",
    description:
      "Connect with me on LinkedIn to stay updated on my professional journey.",
    link: "https://www.linkedin.com/in/shubham--chavan/",
  },
  {
    id: 4,
    icon: github,
    name: "GitHub",
    username: "@imshubhamchavan",
    description:
      "This is where I share my latest coding projects and work. From coding challenges to full-scale applications.",
    link: "https://github.com/imshubhamchavan/",
  },
];

export function SocialMedia() {
  return (
    <div className="max-w-7xl w-full  md:px-8 mx-auto mt-14">
      <h1 className="text-right text-4xl md:text-4xl rubik-scribble-thin  lg:text-5xl">
        Follow
      </h1>
      <h2 className="text-right text-4xl md:text-4xl cinzel lg:text-5xl">
        Me On
      </h2>
      <div className="h-28 sm:h-28 border-r border-black mr-2 mt-4"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:mx-0 mt-12">
        {socialMedia.map((social) => (
          <div key={social.id} className="w-full">
            <PinContainer title={social.name} href={social.link}>
              <div className="flex flex-col p-4 tracking-tight text-black sm:flex-row sm:basis-1/2  w-[16rem] h-[16rem]">
                <div className="flex flex-col mr-4">
                  <Image
                    src={social.icon}
                    alt={`${social.name} icon`}
                    height={60}
                    width={60}
                  />
                </div>
                <a href={social.link}>
                <div className="flex-1">
                  <h1 className="font-bold text-base text-black">
                    {social.name}
                  </h1>
                  <h2 className="font-thin rubik text-gray-400">
                    {social.username}
                  </h2>
                  <p className="text-base text-slate-800 mt-4">
                    {social.description}
                  </p>
                </div>
              </a>
              </div>
              <a href={social.link}>
                <Button className="mt-2 w-full bg-white border border-black text-black">Visit {social.name}</Button>
                </a>
            
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
}
