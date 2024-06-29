"use client";
import Image from "next/image";
import myimg from "../../public/me2.jpg";
import aboutimg from "../../public/aboutimg.jpg";
import Experience from "../components/experience";
import Certificates from "../components/Certificates";
import logo from "../../public/shubhazone-logo.png";
import { StickyScroll } from "../../components/ui/sticky-scroll-reveal";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { HelloText } from "../components/HelloText";

// sticky scroll reveal data

const content = [
  {
    title: "Basic Information -",
    description:
      "Shubham Chavan is a dedicated and innovative web developer based in India 🇮🇳. He specializes in crafting sophisticated web applications using Next.js and React.js, focusing on creating seamless user experiences and efficient, scalable codebases. His expertise spans front-end development, component-based architecture, and performance optimization, ensuring high-quality web solutions.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={myimg}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Journey Starts-",
    description:
      "Shubham Chavan embarked on his journey by earning a Bachelor's Degree in Computer Science from the University of Amravati, graduating in 2019 with a strong foundation in programming and software development. During his undergraduate studies, he honed his skills in coding and discovered a passion for creating impactful software solutions. This educational background equipped him with the knowledge and expertise to excel in web development, particularly in leveraging technologies like Next.js and React.js to build sophisticated and user-centric applications.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={aboutimg}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function About() {
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
    <div>
      <div className="container">
        <title>About|Shubham Chavan</title>

        {/* hero section */}
        <div className="flex flex-col items-center mb-12 text-center text-4xl md:text-6xl lg:text-8xl">
          <h1 className="font-thin mt-24 px-8 mb-6 flex items-center justify-center space-x-2">
            GOOD THINGS{" "}
            <Image
              src={logo}
              alt="Icon"
              className="icons hidden sm:inline w-16 h-16 md:w-20 md:h-20 group-hover:scale-110"
            />
            HAPPEN
          </h1>
          <p className="karla mb-6">WHEN YOU SAY</p>
          <HelloText />
        </div>

        {/* about section */}

        <div className=" w-full mx-auto mt-14">
          <h1 className="text-right text-4xl md:text-4xl font-small lg:text-5xl">
            About
          </h1>
          <div className="h-28 sm:h-48 border-r border-black mt-4"></div>

          

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
                        <span className="font-extrabold  text-purple-500">
                          Shubham Chavan{" "}
                        </span>
                        is a dedicated and innovative{" "}
                        <span className="font-extrabold  text-orange-500">
                          {" "}
                          web-developer{" "}
                        </span>
                        based in India 🇮🇳. He specializes in crafting
                        sophisticated web applications using Next.js and
                        React.js.
                      </p>
                    </div>
                    <br />

                    <div className="key-point ">
                      <h3 className="mb-2 text-2xl lg:text-3xl rubik-scribble text-gray-800">
                        Journey Starts-
                      </h3>
                      <p className="text-lg noto-sans text-1xl lg:text-1xl text-gray-700">
                        Shubham’s journey began with a Bachelor’s Degree in
                        <span className="font-extrabold  text-purple-500">
                          {" "}
                          Computer Science
                        </span>{" "}
                        from the University of Amravati, completed in 2019. It
                        was during this time that he discovered his passion for
                        coding and creating impactful
                        <span className="font-extrabold text-orange-500">
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
                        scalable web applications using cutting-edge
                        technologies. He favors
                        <span className="font-extrabold  text-purple-500">
                          {" "}
                          Next.js{" "}
                        </span>
                        for its exceptional server-side rendering capabilities
                        and utilizes
                        <span className="font-extrabold  text-orange-500">
                          {" "}
                          React.js{" "}
                        </span>
                        for its modular and reusable component-based
                        architecture, enabling him to develop applications that
                        are performant and highly maintainable.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-full">
            <StickyScroll content={content} />
          </div> */}
      <div className="w-full bg-black">
        <Experience />
        <Certificates />
      </div>
    </div>
  );
}
