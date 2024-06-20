export default function Experience() {
  return (
    <div className="flex flex-col">
      <h1 className="text-6xl lg:text-6xl rubik-scribble text-white mt-28 ml-12">
        Professional Experience
      </h1>
      <div className="mt-4 w-2/3 lg:w-1/2 text-left ml-12">
        <p className="noto-sans text-gray-300 font-bold">
          Take a look at my professional journey.
        </p>
      </div>
      <div className="max-w-3xl mx-auto p-6">
        {/* experience section */}
        <div className="mb-32 mt-32 items-center">
          <h1 className="text-2xl sm:text-2xl lg:text-3xl text-gray-50 font-bold rubik">
            1. Front-End Developer
          </h1>
          <h3 className="text-muted-foreground mb-6 ml-8">xyz Company</h3>
          <ul className="list-disc list-inside mt-4 text-lg noto-sans text-gray-300">
            <li>
              Developed and maintained web applications with React.js and
              Next.js.
            </li>
            <li>Collaborated with teams to design and launch new features.</li>
            <li>Ensured technical feasibility of UI/UX designs.</li>
            <li>Optimized applications for speed and scalability.</li>
            <li>Provided constructive feedback in code reviews.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
