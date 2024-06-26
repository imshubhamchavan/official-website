import { client } from "../lib/sanity";
import { ProjectsCard } from "../lib/interface";
import Image from "next/image";

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
      <section className="flex flex-col items-center mb-12 text-center text-5xl md:text-6xl lg:text-8xl">
        <p className="karla ">Explore</p>
        <h1 className="font-thin  px-8 mb-6 flex items-center justify-center space-x-2">
          my diverse range of projects
        </h1>
      </section>
      <div className="bg-purple-500 text-center py-1">
        <div className="text-2xl lg:text-2xl text-white">
          {" "}
          Showcasing my expertise in{" "}
          <span className="font-bold">web development</span>. Using modern
          technologies such as <span className="font-bold">Next.js</span>,
          Tailwind CSS, and more.
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
        <section className="max-w-7xl w-full px-4 md:px-8 mx-auto">
          <div className="py-12 grid md:grid-cols-1 gap-16 md:gap-8 lg:gap-28 grid-cols-1 ">
            {data.map((item) => (
              <a
                href={item.link}
                key={item._id}
                className="group block"
                target="_blank"
              ><h2 className="text-2xl md:text-4xl lg:text-8xl font-thin mb-8">
              &#10147; {item.title}
            </h2>
                <div className="aspect-w-12 aspect-h-8 overflow-hidden rounded-2xl relative  shadow-xl">
                  <Image
                    src={item.imageUrl}
                    alt="Image Description"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-2xl"
                  />
                </div>
                <div className="mt-4">
                  
                  <p className="mt-1 text-1xl md:text-2xl font-semibold line-clamp-3 cinzel-about">
                    {item.description}
                  </p>
                  <div className="border-b border-gray-400 p-4">
                  <div className="mt-3 flex flex-wrap gap-2 ">
                    {item.tags.map((tagItem, index) => (
                      <span
                        className=" inline-flex source-code-pro font-semibold items-center rounded-lg bg-gray-100 px-3 py-1.5 text-xs sm:text-sm  text-purple-500 ring-2 ring-outline ring-white"
                        key={index}
                      >
                        {tagItem}
                      </span>
                    ))}
                  </div></div>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
