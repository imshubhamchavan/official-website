import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  EnvelopeClosedIcon,
  LinkedInLogoIcon,
  Link1Icon,
  PersonIcon,
} from "@radix-ui/react-icons";

export default function Hireme() {
  return (
    <div className="relative overflow-hidden bg-white h-screen flex flex-col items-center justify-center ">
      <div className="flex space-x-4"></div>
      <h1 className="text-4xl sm:text-3xl lg:text-7xl font-normal mt-8 mb-20">
        Looking for a Frontend Developer?
      </h1>
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button
            variant="outline"
            className="relative overflow-hidden px-6 py-5 z-10 mt-10 rounded-full text-lg border-black hover:text-white group"
          >
            <span className="relative z-10">
              <a href="mailto:imshubhamchavan@gmail.com">GET IN TOUCH</a>
            </span>
            <span className="absolute inset-0 bg-black transition-all duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0"></span>
          </Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="flex justify-between space-x-4">
            <Avatar>
              <AvatarImage src="https://github.com/shubhamzone.png" />
              <AvatarFallback>
                <PersonIcon />
              </AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">Shubham Chavan</h4>

              <div className="text-sm flex mt-4">
                <EnvelopeClosedIcon className="mr-3" />
                <a href="mailto:imshubhamchavan@gmail.com">
                  iamshubhamchavan@gmail.com
                </a>
              </div>
              <div className="text-sm flex mt-8">
                <LinkedInLogoIcon className="mr-3" />
                <a href="https://www.linkedin.com/in/shubham--chavan/">
                  Shubham Chavan | LinkedIn
                </a>
              </div>
              <div className="text-sm flex mt-4">
                <Link1Icon className="mr-3" />
                <a href="https://flowcv.com/resume/ssw2v8kt0u">
                  Resume
                </a>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
      <h1 className="absolute bottom-0 z-0 w-full text-center text-7xl font-extrabold text-gray-200 md:text-8xl lg:text-12xl">
        Hire Me
      </h1>
    </div>
  );
}
