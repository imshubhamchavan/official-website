import Certificate from "../../public/meta certificate.png";
import metalogo from "../../public/meta.png";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";
import Link from "next/link";
import { WavyBackground } from "../../components/ui/wavy-background";

export default function Certificates() {
  return (
    
    <div className=" relative overflow-hidden bg-white flex flex-col items-center">
      <div className="grid space-x-4 "></div>
      
      <h1 className="text-4xl sm:text-3xl lg:text-9xl ribes mt-24 mb-20">
      CERTIFICATES
        </h1>
        <div className="mt-8  text-left border-t border-r border-x-black border-y-black"><div className=" w-2/3 lg:w-1/2"></div></div>

      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white mb-4"
          >
            React Basics By{" "}
            <Image
              src={metalogo}
              alt="Meta Logo"
              className="inline-block h-6 w-auto mr-2 ml-4"
            />
            <span className="text-blue-500 font-bold">Meta</span>(2024)
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            Grade Achieved: 90%
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src={Certificate}
              height="2000"
              width="1000"
              className="h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl mx-auto"
              alt="React Basic by Meta"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              as={Link}
              href="https://coursera.org/share/b816c049f3652ba851d4b55e242003dd"
              target="__blank"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              View Certificate →
            </CardItem>
            <a
              href="https://coursera.org/share/b816c049f3652ba851d4b55e242003dd"
              target="_blank"
              rel="noopener noreferrer"
             
            >
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-blue-500 dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Checkout
              </CardItem>
            </a>
          </div>
        </CardBody>
      </CardContainer>

      {/* <div className="">
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
          <h1 className="text-lg sm:text-sm lg:text-lg font-semibold text-gray-800 mb-">
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
      </div> */}
    </div>
  );
}
