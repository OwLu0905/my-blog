"use client";
import { MenubarPc } from "@/container/menu/pc-menu";
import { ModeToggle } from "../theme/theme-mode-toggle";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const LabName = "Multi-Scale Flow Physics &\n Computation Lab";
export function Header() {
  return (
    <header
      className={cn(
        "sticky top-0 bg-background dark:bg-background flex items-center justify-center md:justify-around px-4 py-4 shadow-accent shadow-xl"
      )}
    >
      <div className="flex flex-row md:flex-row items-center gap-2">
        {/*<Image
          id="logo"
          src="https://fakeimg.pl/300x100/"
          alt="logo"
          width="200"
          height="60"
          className="object-scale-down"
        /> */}
        <div className="text-4xl font-bold  text-white py-2 px-8 bg-gradient-to-r from-[#9CECFB] opacity-80 via-[#65C7F7] to-[#0052D4]">
          LAB
        </div>
        <h1 className="font-bold text-sm sm:text-md md:text-lg bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#65C7F7]  break-words text-center">
          {LabName}
        </h1>
      </div>
      <nav className="hidden md:flex">
        <MenubarPc />
        <div className="items-end ml-2">
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}
