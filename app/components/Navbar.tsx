"use client";

import logo from "../../public/logo1.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { HomeIcon } from '@radix-ui/react-icons';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileMenu } from "./MobileMenu";

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
    href: "/portfolio",
  },
];

export function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="max-w-7xl mx-auto px-4 md:px-8 py-5  bg-white z-10 grid grid-cols-12">
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
                     {item.icon && <item.icon className="inline-block w-4 h-4 mr-2" />}
                    {item.name}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex items-center justify-end md:col-span-3 col-span-6">
        <Button className="hidden sm:flex" asChild>
          <a href="mailto:imshubhamchavan@gmail.com">Contact Me</a>
        </Button>
         <div className="sm:hidden">
          <MobileMenu />
        </div> 
      </div>
    </nav>
  );
}