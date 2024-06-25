import React from "react";

export default function Contact() {
  return (
    <div>
      <div className="flex flex-col items-center mb-12 text-center text-5xl md:text-6xl lg:text-8xl">
        <h1 className="font-thin mt-24 px-8 mb-6 flex items-center justify-center space-x-2">
          LET’S WORK
        </h1>
        <p className="karla mb-6 "> TOGETHER</p>
      </div>
      <div className="max-w-6xl w-full px-4 md:px-12 mx-auto">
        <p className="mt-2 text-2xl text-center font-extralight ">
          I am eager to leverage my{" "}
          <span className="font-bold">
            {" "}
            skills and expertise in the web development
          </span>{" "}
          industry to contribute to innovative projects and collaborate with
          forward-thinking teams.
        </p>
      </div>
      <div className="max-w-7xl w-full px-4 md:px-8 mx-auto mt-14">
        <h1 className="text-right text-4xl md:text-4xl font-small lg:text-5xl">
          Contact Me
        </h1>

        <div className="h-28 sm:h-48 border-r flex justify-center items-center border-black mt-4"></div>
      </div>
      <div className="max-w-7xl w-full px-4 md:px-8 mx-auto mt-14 text-5xl md:text-6xl lg:text-6xl">
        <p className="font-thin mt-24 px-8 mb-6 text-left space-x-2">
          Professional Inquiries
        </p>
        <p className="font-thin text-center">&</p>
        <h1 className="karla mb-6 text-right">Casual Inquiries</h1>
      </div>

      <div className="max-w-7xl w-full px-4 md:px-8 mx-auto mt-32 text-center text-2xl md:text-2xl lg:text-3xl cinzel-about">
        {" "}
       
        <h1 className="mb-4">
          For Professional Inquiries and Job Offers {" "}
          <span className="text-orange-500 "> 
            <a href="mailto:imshubhamchavan@gmail.com"> 
              imshubhamchavan@gmail.com
            </a>
          </span>
        </h1>
        <h1>
          For Collaborations and Casual Inquiries {" "}
          <span className="text-purple-500 ">
            <a href="mailto:shubhuchavan599@gmail.com">
              shubhuchavan599@gmail.com
            </a>{" "}
          </span>
        </h1>
      </div>
    </div>
  );
}
