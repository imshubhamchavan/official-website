import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { EnvelopeClosedIcon, LinkedInLogoIcon,PersonIcon } from "@radix-ui/react-icons";

export default function Hireme() {
  return (
    <div className="flex flex-col items-center justify-center bg-white h-screen relative overflow-hidden">
      <div className="flex space-x-4"></div>
      <h1 className="text-6xl font-normal mt-8 mb-20">
        Looking for a Frontend Developer?
      </h1>
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button
            variant="outline"
            className="noto-sans-mono px-6 py-4 z-10 mt-10 rounded-full text-lg border-black hover:text-white hover:bg-black"
          ><span><a href="mailto:imshubhamchavan@gmail.com">GET IN TOUCH</a></span>
            
          </Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/shubhamzone.png" />
            <AvatarFallback><PersonIcon/></AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">Shubham Chavan</h4>
            <div className="text-sm flex mt-4">
              <EnvelopeClosedIcon className="mr-3" /><a href="mailto:imshubhamchavan@gmail.com">iamshubhamchavan@gmail.com</a>
            </div>
            <div className="text-sm flex mt-8">
              <LinkedInLogoIcon className="mr-3" /><a href="https://www.linkedin.com/in/shubham--chavan/">Shubham Chavan | LinkedIn</a>
            </div>
          </div>
        </div>
      </HoverCardContent>
      </HoverCard>
      <h1 className="w-full text-7xl font-extrabold text-gray-200 sm:text-8xl lg:text-12xl text-center absolute bottom-0 z-0 overflow-hidden">
        Hire Me
      </h1>
    </div>
  );
}
