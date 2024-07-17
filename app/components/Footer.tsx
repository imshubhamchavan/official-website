"use client";

import Link from "next/link";
import { navigationItems } from "./Navbar";
import React from "react";


const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="my-12 text-center ribes">
       <ul className="flex flex-wrap justify-center mb-4">
        {navigationItems.map((item, index) => (
          <div key={index} className="px-5 py-2">
            <Link href={item.href} className="text-muted-foreground">
              {item.name}
            </Link>
          </div>
        ))}
      </ul> 

      <a className="noto-sans-mono text-extrasmall md:text-normal text-muted-foreground opacity-80 hover:opacity-100" href="https://github.com/imshubhamchavan/">
      Copyright &copy; {currentYear} | Shubham Chavan
      </a>
    </footer>
  );
}