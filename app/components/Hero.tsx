import React from "react";
import myimg from "../../public/me2.jpg";
import Image from "next/image";

export function Hero() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="col-span-1 lg:col-span-2 h-full bg-gray-100 min-h-[500px] lg:min-h-[300px] rounded-2xl p-8">
        <h1 className="text-3xl sm:text-3xl lg:text-6xl font-medium">SHUBHAM CHAVAN</h1>
        <h1 className="text-2xl sm:text-2xl lg:text-4xl text-blue-500 font-normal mt-3">
          Web Developer
        </h1>
        <h1 className="text-1xl sm:text-1xl lg:text-2xl font-normal text-left text-muted-foreground mt-3 ">
          Hello! I am Shubham Chavan, a dedicated and innovative web developer
          based in INDIA. With a passion for creating seamless and efficient web
          applications, I specialize in delivering high-quality, user-friendly
          solutions that meet the unique needs of my clients.
        </h1>

        <a
          href="mailto:imshubhamchavan@gmail.com"
          className="relative inline-block text-lg group mt-5"
        >
          <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className="relative">Get in Touch!</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </a>
      </div>

      <Image
        src={myimg}
        alt="Jan marshal"
        className="col-span-1 h-[500px] object-cover rounded-2xl bg-gray-100"
        priority
      />
    </div>
  );
}
