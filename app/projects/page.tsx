import { client } from "../lib/sanity";
import { ProjectsCard } from "../lib/interface";
import Image from "next/image";
import { ContainerScroll } from "../../components/ui/container-scroll-animation";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

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
      <section className="flex flex-col items-center mb-12 text-center ">
        <p className="ribes text-4xl md:text-6xl lg:text-12xl">Explore</p>
        <h1 className="ribes-mono mt-4 text-4xl md:text-6xl px-8 mb-6 flex items-center justify-center space-x-2">
          my diverse range of projects
        </h1>
      </section>
      <div className="tilt-left">
      <VelocityScroll
      text="   Showcasing my expertise in web development. Proficient in
            building dynamic web applications using Next.js, React.js, Javasript, Typescript etc..."
      default_velocity={2}
      className="bg-purple-400 font-display text-center ribes-mono text-2xl tracking-[-0.02em] drop-shadow-sm text-white dark:text-white md:text-3xl md:leading-[5rem]"
    />

      </div>
      <div className="max-w-7xl w-full px-4 md:px-8 mx-auto mt-14">
        <h1 className="text-right text-4xl md:text-4xl ribes-mono  lg:text-5xl">
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
                      <h1 className="ribes text-left text-2xl md:text-4xl lg:text-8xl font-thin mb-8 text-black dark:text-white">
                      {item.title}<br />
                        <span className=" mt-12 text-1xl md:text-2xl font-normal text-gray-800 line-clamp-3 ribes-mono">
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
