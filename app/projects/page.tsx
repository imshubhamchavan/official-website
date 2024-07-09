import { client } from "../lib/sanity";
import { ProjectsCard } from "../lib/interface";
import Image from "next/image";
import { ContainerScroll } from "../../components/ui/container-scroll-animation";

async function getData() {
  const query = `*[_type == 'project'] | order(_createdAt desc) {
        title,
          _id,
          link,
          description,
          tags,
          "imageUrl": image.asset->url
        
    }`;

  const data = await client.fetch(query, {}, { next: { revalidate: 30 } });

  return data;
}

export default async function ProjectsPage() {
  const data: ProjectsCard[] = await getData();
  return (
    <div className="mt-20">
      <title>Projects|Shubham Chavan</title>
      <section className="flex flex-col items-center mb-12 text-center text-4xl md:text-6xl lg:text-8xl">
        <p className="karla ">Explore</p>
        <h1 className="font-thin  px-8 mb-6 flex items-center justify-center space-x-2">
          my diverse range of projects
        </h1>
      </section>
      <div className="bg-purple-500 text-center py-1 word-travel-container">
        <div className="word-travel">
          <h1 className="text-1xl lg:text-2xl text-white">
            Showcasing my expertise in{" "}
            <span className="font-bold">web development</span>. Proficient in
            building dynamic web applications using{" "}
            <span className="font-bold">Next.js</span>,{" "}
            <span className="font-bold">React.js</span>,{" "}
            <span className="font-bold">JavaScript</span>,{" "}
            <span className="font-bold">TypeScript</span>, and styling with{" "}
            <span className="font-bold">Tailwind CSS</span> and{" "}
            <span className="font-bold">SCSS</span>.
            
          </h1>
          
        </div>
      </div>
      <div className="max-w-7xl w-full px-4 md:px-8 mx-auto mt-14">
        <h1 className="text-right text-4xl md:text-4xl rubik-scribble-thin  lg:text-5xl">
          Selected
        </h1>
        <h1 className="text-right text-4xl md:text-4xl cinzel lg:text-5xl">
          Works
        </h1>
        <div className="h-28 sm:h-48 border-r border-black mt-4"></div>
        <p className=" noto-sans text-gray-500 mb-4 text-center"></p>
        <section className=" w-full  mx-auto">
          <div className=" grid md:grid-cols-1 gap-16 md:gap-8 lg:gap-28 grid-cols-1 ">
            {data.map((item) => (
              <a
                href={item.link}
                key={item._id}
                className="group block"
                target="_blank"
              >
                
                <ContainerScroll
                  titleComponent={
                    <>
                      <h1 className="cinzel-about text-left text-2xl md:text-4xl lg:text-8xl font-thin mb-8 text-black dark:text-white">
                      &#10147; {item.title}<br />
                        <span className=" mt-12 text-1xl md:text-2xl font-normal text-gray-800 line-clamp-3 cinzel-about">
                        {item.description}
                        </span>
                        {item.tags.map((tagItem, index) => (
                        <span
                          className=" inline-flex source-code-pro font-semibold items-center rounded-lg bg-gray-100 px-3 py-1.5 text-xs sm:text-sm  text-black ring-2 ring-outline ring-white"
                          key={index}
                        >
                          {tagItem}
                        </span>
                      ))}
                      </h1>
                    </>
                  }
                >
                  <Image
                    src={item.imageUrl}
                    alt="hero"
                    height={720}
                    width={1400}
                    className="mx-auto rounded-2xl object-cover h-full object-left-top mt-12"
                    draggable={false}
                  />
                  
                </ContainerScroll>
               
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
