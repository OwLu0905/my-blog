"use client";
import { MenubarPc } from "@/container/menu/pc-menu";
import { ModeToggle } from "../theme/theme-mode-toggle";
import { cn } from "@/lib/utils";
import { Toggle } from "../ui/toggle";
import { MenuIcon, SearchIcon } from "lucide-react";
import MobileMenu from "@/container/menu/mobile-menu";
import { Dialog, DialogTrigger } from "../custom/ui/dialog";

const LabName = "Multi-Scale Flow Physics \n & \n Computation Lab";

export function Header() {
  return (
    <header
      className={cn(
        "sticky top-0 bg-background dark:bg-background flex flex-col md:flex-row items-center justify-center md:justify-around px-4 py-2 md:py-4"
      )}
    >
      <div className="cursor-pointer md:hidden flex items-center absolute top-5 left-2">
        <Dialog>
          <DialogTrigger asChild>
            <MenuIcon className="h-5 w-5" />
          </DialogTrigger>
          <MobileMenu />
        </Dialog>
      </div>
      <div className="flex items-center justify-end md:hidden absolute top-2.5 right-2">
        <Toggle>
          <SearchIcon className="h-4 w-4" />
        </Toggle>
        <ModeToggle />
      </div>
      <div className="flex flex-col md:flex-row items-center gap-2">
        <div className="text-4xl font-bold py-1 px-6 bg-clip-text text-transparent bg-gradient-to-r from-[#9CECFB] opacity-80 via-[#65C7F7] to-[#0052D4]">
          LAB
        </div>
        <h1 className="font-bold text-xs sm:text-md lg:text-lg bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#65C7F7] break-words text-center">
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
