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
      <section className="max-w-3xl w-full px-4 md:px-8 mx-auto">
      <h1 className="text-6xl lg:text-6xl rubik-scribble text-gray-800 text-center">
        Projects
      </h1>
      <p className="text-1xl lg:text-1xl noto-sans text-gray-500  mt-6 mb-4 text-center">
        Explore my diverse range of projects showcasing my expertise in web
        development, including responsive design, dynamic web applications, and
        creative solutions. Each project highlights my skills in modern
        technologies such as Next.js, Tailwind CSS, and more.
      </p></section>
      <section className="max-w-7xl w-full px-4 md:px-8 mx-auto">
        <div className="py-12 grid md:grid-cols-3 gap-2 sm:gap-6 md:gap-8 lg:gap-12 grid-cols-1 ">
          {data.map((item) => (
            <a
              href={item.link}
              key={item._id}
              className="group block"
              target="_blank"
            >
              <div className="aspect-w-12 aspect-h-8 overflow-hidden rounded-2xl relative  shadow-xl">
                <Image
                  src={item.imageUrl}
                  alt="Image Description"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-2xl"
                />
              </div>
              <div className="mt-4">
                <h2 className="font-medium text-lg hover:underline rubik-scribble text-gray-800">
                  {item.title}
                </h2>
                <p className="mt-1 text-muted-foreground line-clamp-3 cinzel-about">
                  {item.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.tags.map((tagItem, index) => (
                    <span
                      className="inline-flex source-code-pro font-semibold items-center rounded-md bg-primary/10 px-3 py-1.5 text-xs sm:text-sm  text-primary ring-2 ring-inset ring-primary/20"
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
      </section>
    </div>
  );
}
