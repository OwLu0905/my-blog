"use client";
import { MenubarPc } from "@/container/menu/pc-menu";
import { ModeToggle } from "../theme/theme-mode-toggle";
import { cn } from "@/lib/utils";
import { Toggle } from "../ui/toggle";
import { MenuIcon, SearchIcon } from "lucide-react";
import MobileMenu from "@/container/menu/mobile-menu";
import { Dialog, DialogTrigger } from "../custom/ui/dialog";
import Link from "next/link";

const LabName = "Multi-Scale Flow Physics \n & \n Computation Lab";

export function Header() {
  return (
    <header
      className={cn(
        "sticky top-0 flex flex-col items-center justify-center bg-background px-4 py-1 dark:bg-background md:flex-row md:justify-around md:py-2",
      )}
    >
      <div className="absolute left-2 top-5 flex cursor-pointer items-center md:hidden">
        <Dialog>
          <DialogTrigger asChild>
            <MenuIcon className="h-5 w-5" />
          </DialogTrigger>
          <MobileMenu />
        </Dialog>
      </div>
      <div className="absolute right-2 top-2.5 flex items-center justify-end md:hidden">
        <Toggle>
          <SearchIcon className="h-4 w-4" />
        </Toggle>
        <ModeToggle />
      </div>
      <Link href="/" className="flex flex-col items-center gap-2 md:flex-row">
        <div className="bg-gradient-to-r from-[#9CECFB] via-[#65C7F7] to-[#0052D4] bg-clip-text px-6 py-1 text-4xl font-bold text-transparent opacity-80">
          LAB
        </div>
        <h1 className="sm:text-md break-words bg-gradient-to-r from-primary to-[#65C7F7] bg-clip-text text-center text-xs font-bold text-transparent lg:text-lg">
          {LabName}
        </h1>
      </Link>
      <nav className="hidden md:flex">
        <MenubarPc />
        <div className="ml-2 items-end">
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}
