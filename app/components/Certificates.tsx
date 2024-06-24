import Certificate from "../../public/meta certificate.png";
import metalogo from "../../public/meta.png";
import Image from "next/image";

export default function Certificates() {
  return (
    <div className=" relative overflow-hidden bg-white flex flex-col items-center">
      <div className="grid space-x-4 "></div>
      <h1 className="text-4xl sm:text-3xl lg:text-8xl text-gray-300 font-semibold mt-24 mb-20">
        CERTIFICATES
      </h1>
      <div className="">
        <a
          href="https://coursera.org/share/b816c049f3652ba851d4b55e242003dd"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center"
        >
          <Image
            src={Certificate}
            alt="React Basic by Meta"
            className="w-80 h-50   md:w-[250px] md:h-[200px] lg:w-[450px] lg:h-[400px] hover:w-[650px] object-contain flex flex-col items-center"
          />
          <h1 className="text-lg sm:text-sm lg:text-lg font-semibold text-gray-800 mb-4">
            React Basics By{" "}
            <Image
              src={metalogo}
              alt="Meta Logo"
              className="inline-block h-6 w-auto mr-2 ml-4"
            />
            <span className="text-blue-500 font-bold">Meta</span>(2024)
          </h1>
          <p className="text-gray-700 font-normal">Grade Achieved: 90%</p>
        </a>
      </div>
    </div>
  );
}
