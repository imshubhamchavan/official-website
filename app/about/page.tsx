import Image from "next/image";
import myimg from "../../public/me2.jpg";
import Experience from "../components/experience";
import Certificates from "../components/Certificates";

export default function About() {
  return (
    <div className="">
      <title>About|Shubham Chavan</title>
      <h1 className="text-6xl lg:text-8xl rubik-scribble text-center text-gray-300 mt-12">
        About me !
      </h1>
      <div className="max-w-7xl w-full px-4 md:px-8 mx-auto mt-14">
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
                    <h3 className="mb-2 text-2xl lg:text-3xl rubik-scribble text-gray-800">Basic Information -</h3>
                    <p className="text-lg noto-sans text-1xl lg:text-1xl text-gray-700">
                    <span className="font-extrabold  text-gray-800">Shubham Chavan </span>is a dedicated and innovative <span className="font-extrabold  text-gray-800"> web-developer </span>
                      based in India 🇮🇳. He specializes in crafting
                      sophisticated web applications using Next.js and React.js.
                    </p>
                  </div><br />

                  <div className="key-point ">
                    <h3 className="mb-2 text-2xl lg:text-3xl rubik-scribble text-gray-800">Journey Starts-</h3>
                    <p className="text-lg noto-sans text-1xl lg:text-1xl text-gray-700">
                      Shubham’s journey began with a Bachelor’s Degree in 
                      <span className="font-extrabold  text-gray-800"> Computer Science</span> from the University of Amravati,
                      completed in 2019. It was during this time that he
                      discovered his passion for coding and creating impactful<span className="font-extrabold text-gray-800"> software solutions.</span>
                      
                    </p>
                  </div><br />

                  <div className="key-point">
                    <h3 className="mb-2 text-2xl lg:text-3xl rubik-scribble text-gray-800">Expertise-</h3>
                    <p className="text-lg noto-sans text-1xl lg:text-1xl text-gray-700">
                      Shubham’s expertise lies in crafting responsive and
                      scalable web applications using cutting-edge technologies.
                      He favors<span className="font-extrabold  text-gray-800"> Next.js </span>for its exceptional server-side
                      rendering capabilities and utilizes<span className="font-extrabold  text-gray-800"> React.js </span>for its
                      modular and reusable component-based architecture,
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
        <Certificates/>
      </div>
    </div>
  );
}
