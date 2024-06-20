import Image from "next/image";
import myimg from "../../public/me2.jpg";
import Experience from "../components/experience";

export default function About() {
  return (
    <div>
      <title>About|Shubham Chavan</title>
      <div className="max-w-7xl w-full px-4 md:px-8 mx-auto mt-14">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-14">
          <Image
            src={myimg}
            alt="shubham chavan"
            className="col-span-2 h-[700px] object-cover animate-slide-in rounded-2xl mt-8 bg-gray-100 "
            priority
          />
          <div className="col-span-1 lg:col-span-2 h-full min-h-[500px] lg:min-h-[300px] rounded-2xl p-8">
            <h1 className="text-2xl lg:text-4xl rubik-scribble-regular text-gray-600 mb-4">
              About
            </h1>
            <div className="lg:text-lg noto-sans-mono">
              <div className="mb-6">
                <p className="animate-slide-in-right mt-12">
                  Shubham is a dedicated and innovative web developer based in
                  India 🇮🇳, with professional experience. He specializes in
                  crafting sophisticated web applications using{" "}
                  <span className="source-code-pro text-blue-500">
                    Next.js{" "}
                  </span>{" "}
                  and
                  <span className="source-code-pro text-blue-500">
                    {" "}
                    React.js
                  </span>
                  . Shubham’s journey began with a Bachelor’s Degree in Computer
                  Science from the University of Amravati, completed in 2019,
                  where he discovered his passion for coding and creating
                  impactful software solutions. His expertise lies in crafting
                  responsive and scalable web applications using cutting-edge
                  technologies. He favors Next.js for its exceptional
                  server-side rendering capabilities. Additionally, React.js,
                  with its modular and reusable component-based architecture,
                  enables him to develop applications that are not only
                  performant but also highly maintainable.
                </p>
              </div>

              <div className="mb-6">
                <p className="animate-slide-in">
                  A passionate advocate of open-source software, Shubham
                  actively contributes to several prominent projects. Engaging
                  in these initiatives has allowed him to collaborate with
                  talented developers worldwide, refining his coding prowess and
                  adhering to best practices. His overarching mission is to
                  leverage his technical acumen and creativity to engineer
                  innovative and user-centric web solutions that address
                  real-world challenges. Driven by a passion for using
                  technology to effect positive change, Shubham continually
                  seeks opportunities to expand his knowledge and skills,
                  committed to making a meaningful impact in the realm of web
                  development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-black">
        <Experience />
      </div>
    </div>
  );
}
