import Image from "next/image";
import { ProjectsCard } from "../lib/interface";
import { client } from "../lib/sanity";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import Hireme from "./Hireme";




async function getData() {
  const query = `*[_type == 'project'] | order(_createdAt desc) [0...2] {
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

export async function FavoriteProjects() {
  const data: ProjectsCard[] = await getData();

  console.log(data);
  return (
    <div  className="scroll-end md:p-2">
    <div className="max-w-7xl w-full px-4 md:px-8 mx-auto mt-8 mb-8">
    <div className="flex space-x-8 flex-col mb-24">
        <h1 className="content text-6xl lg:text-8xl font-thin text-white ml-5 mt-28">
          Recent Projects
        </h1>
        <div className="mt-8  text-left border-t border-r border-x-white border-y-white">
            <div className=" w-2/3 lg:w-1/2">
        <p className="cinzel-about text-2xl mt-8 text-gray-300 ">Here are some of my recent projects that showcase my skills and
        expertise as a frontend developer.</p></div>
</div>
      </div>
    <div className="py-12 grid md:grid-cols-2 gap-16 md:gap-8 lg:gap-24 grid-cols-1 ">
          {data.map((item) => (
            <a
              href={item.link}
              key={item._id}
              className="group block"
              target="_blank"
            >
              <h2 className="text-2xl md:text-4xl lg:text-4xl font-thin  text-gray-100 mb-8">
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
                
                <p className="mt-1 text-gray-400 line-clamp-3 cinzel-about mb-6">
                  {item.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.tags.map((tagItem, index) => (
                    <span
                      className="inline-flex source-code-pro font-normal text-white ring-white items-center rounded-md bg-primary/10 px-3 py-1.5 text-xs sm:text-sm  text-primary ring-2 ring-inset ring-primary/20"
                      key={index}
                    >
                      {tagItem}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      <div className="text-center">
        {" "}
        <Link href="/projects" passHref>
        <Button  className=" px-6 py-4 z-10 mt-10 rounded-full text-sm bg-black text-white border-white  hover:text-black hover:bg-white" title="other projects" variant="outline">
          {" "}
          <h1 className="">See More</h1>
          
          <ChevronRightIcon className="h-4 w-4" />
        </Button></Link>
        <h2 className="text-gray-500 font-normal mt-6 mb-8">take a look at my other projects</h2>
      </div>
    </div>
    </div>
  );
}
