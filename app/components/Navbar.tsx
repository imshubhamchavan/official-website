"use client";

import logo from "../../public/logo1.png";
import Image from "next/image";
import { Button } from "../../components/ui/moving-border";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  EnvelopeClosedIcon,
  HomeIcon,
  Link1Icon,
  LinkedInLogoIcon,
  PersonIcon,
  ArrowTopRightIcon,
} from "@radix-ui/react-icons";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileMenu } from "./MobileMenu";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export const navigationItems = [
  {
    name: "Home",
    href: "/",
    icon: HomeIcon,
  },
  {
    name: "Guestbook",
    href: "/guestbook",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "About",
    href: "/about",
  },
];

export function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="max-w-7xl mx-auto px-4 md:px-8 py-5  bg-transparent z-10 grid grid-cols-12">
      <div className="col-span-6 flex md:col-span-3">
        <Link href="/">
          <Image
            src={logo} // Path to your logo image
            alt="Logo"
            width={200} // Adjust width according to your logo size
            height={200} // Adjust height according to your logo size
            className="h-15 w-40"
          />
        </Link>
      </div>

      <div className="hidden sm:flex justify-center items-center col-span-6">
        <NavigationMenu>
          <NavigationMenuList>
            {navigationItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    active={pathname === item.href}
                    className={navigationMenuTriggerStyle()}
                  >
                    {item.icon && (
                      <item.icon className="inline-block w-4 h-4 mr-2" />
                    )}
                    {item.name}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex  items-center justify-end md:col-span-3 col-span-6">
        <HoverCard>
          <HoverCardTrigger asChild>
          <a href="/contact">
            <Button
              borderRadius="2rem"
              className="hidden md:flex bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 "
            >
              <span className="relative text-1xl z-10">
                
                  {" "}
                  <span className="relative z-10 flex items-center mx-4 my-2">
                    Contact <div className="bg-black border-2px border rounded-xl justify-center items-center ml-3"><ArrowTopRightIcon className="m-1 text-white font-bold" /></div>
                  </span>
                
              </span>
                </Button></a>
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
                  <a href="https://flowcv.com/resume/ssw2v8kt0u">Resume</a>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>

        <div className="sm:hidden">
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}
