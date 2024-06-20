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
    <div>
    <div className="max-w-7xl w-full px-4 md:px-8 mx-auto mt-8 mb-8">
      <div className="py-10 grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 grid-cols-1 mt-8">
        {data.map((item) => (
          <a
            href={item.link}
            key={item._id}
            className="group block"
            target="_blank"
          >
            <h2 className="font-normal text-1xl lg:text-2xl hover:underline rubik-scribble text-center text-gray-100">
              {item.title}
            </h2>
            <div className="aspect-w-16 aspect-h-12 overflow-hidden rounded-2xl relative shadow-md mt-3">
              <Image
                src={item.imageUrl}
                alt="Image Description"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-2xl p-12"
              />
            </div>
            <div className="mt-4">
              <p className="mt-1 text-gray-200 line-clamp-3 cinzel-about">
                {item.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2 ">
                {item.tags.map((tagItem, index) => (
                  <span
                    className="inline-flex source-code-pro font-semibold items-center rounded-md bg-primary/10 px-3 py-1.5 text-xs sm:text-sm text-white text-primary ring-2 ring-inset ring-primary/20"
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
        <Button  className="px-6 py-4 z-10 mt-10 rounded-full text-sm border-black hover:text-white hover:bg-black" title="other projects" variant="outline">
          {" "}
          See More
          <ChevronRightIcon className="h-4 w-4" />
        </Button></Link>
        <h2 className="text-gray-500 font-normal mt-2">take a look at my other projects</h2>
      </div>
    </div>{""}
    <Hireme/>
    </div>
  );
}
