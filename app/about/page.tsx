"use client";
import Image from "next/image";
import myimg from "../../public/me2.jpg";
import Experience from "../components/experience";
import Certificates from "../components/Certificates";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import logo from "../../public/shubhazone-logo.png";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);


const words = [
  "Namaste",
  "Hello",
  "Bonjour",
  "Hola",
  "Zdravstvuyte",
  "Konnichiwa",
  "Ciao",
  "Selam",
  "Olá",
  "Anyoung haseyo",
  "Nǐ hǎo"
];

export default function About() {
  const [text] = useTypewriter({
    words: words,
    loop: true,
    delaySpeed: 1000,
    typeSpeed: 80, // speed of typing
    deleteSpeed: 80,
  });

  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.to(".icons", {
        rotate: 730,
        duration: 3,
        ease: "bounce.in",
      });
    }
  }, []);

  return (
    <div className="container">
      <title>About|Shubham Chavan</title>

      {/* hero section */}
      <div className="flex flex-col items-center mb-12 text-center text-4xl md:text-6xl lg:text-8xl">
        <h1 className="font-thin mt-24 px-8 mb-6 flex items-center justify-center space-x-2">
          GOOD THINGS
          <Image
            src={logo}
            alt="Icon"
            className="icons hidden sm:inline w-16 h-16 md:w-20 md:h-20 group-hover:scale-110"
          />
          HAPPEN
        </h1>
        <p className="karla mb-6">WHEN YOU SAY</p>
        <p className="text-orange-500 text-5xl font-extrabold karla lg:text-7xl">
          “ {text} ”
        </p>
      </div>

      {/* about section */}

      <div className="max-w-7xl w-full px-4 md:px-8 mx-auto mt-14">
        <h1 className="text-right text-4xl md:text-4xl font-small lg:text-5xl">About</h1>
        <div className="h-48 border-r border-black mt-4"></div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-14">
          <Image
            src={myimg}
            alt="shubham chavan"
            className="col-span-2 h-[480px] md:h-[650px] object-cover transition-all duration-500 ease-in-out rounded-2xl mt-8 bg-gray-100 grayscale-100 hover:grayscale-0"
            priority
          />

          <div className="col-span-1 lg:col-span-2 h-full min-h-[500px] lg:min-h-[300px] rounded-2xl pl-2 md:p-8">
            <div className="lg:text-lg ">
              <div className="mb-6">
                {/* information section */}

                <div className="content ">
                  <div className="key-point ">
                    <h3 className="mb-2 text-2xl lg:text-3xl rubik-scribble text-gray-800">
                      Basic Information -
                    </h3>
                    <p className="text-lg noto-sans text-1xl lg:text-1xl text-gray-700">
                      <span className="font-extrabold  text-gray-800">
                        Shubham Chavan{" "}
                      </span>
                      is a dedicated and innovative{" "}
                      <span className="font-extrabold  text-gray-800">
                        {" "}
                        web-developer{" "}
                      </span>
                      based in India 🇮🇳. He specializes in crafting
                      sophisticated web applications using Next.js and React.js.
                    </p>
                  </div>
                  <br />

                  <div className="key-point ">
                    <h3 className="mb-2 text-2xl lg:text-3xl rubik-scribble text-gray-800">
                      Journey Starts-
                    </h3>
                    <p className="text-lg noto-sans text-1xl lg:text-1xl text-gray-700">
                      Shubham’s journey began with a Bachelor’s Degree in
                      <span className="font-extrabold  text-gray-800">
                        {" "}
                        Computer Science
                      </span>{" "}
                      from the University of Amravati, completed in 2019. It was
                      during this time that he discovered his passion for coding
                      and creating impactful
                      <span className="font-extrabold text-gray-800">
                        {" "}
                        software solutions.
                      </span>
                    </p>
                  </div>
                  <br />

                  <div className="key-point">
                    <h3 className="mb-2 text-2xl lg:text-3xl rubik-scribble text-gray-800">
                      Expertise-
                    </h3>
                    <p className="text-lg noto-sans text-1xl lg:text-1xl text-gray-700">
                      Shubham’s expertise lies in crafting responsive and
                      scalable web applications using cutting-edge technologies.
                      He favors
                      <span className="font-extrabold  text-gray-800">
                        {" "}
                        Next.js{" "}
                      </span>
                      for its exceptional server-side rendering capabilities and
                      utilizes
                      <span className="font-extrabold  text-gray-800">
                        {" "}
                        React.js{" "}
                      </span>
                      for its modular and reusable component-based architecture,
                      enabling him to develop applications that are performant
                      and highly maintainable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-black">
        <Experience />
        <Certificates />
      </div>
    </div>
  );
}
