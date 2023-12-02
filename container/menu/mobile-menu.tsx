"use client";
import { DialogContent } from "@/components/custom/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";
import Image from "next/image";

import { menuTree } from "@/utils/constants";

import Link from "next/link";
import { DialogClose } from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const MobileMenu = () => {
  const pathname = usePathname();
  const LabName = "Multi-Scale Flow Physics &\nComputation Lab";

  return (
    <DialogContent className="w-full ">
      <Link
        href="/"
        className="bg-gradient-to-r from-[#9CECFB] via-[#65C7F7] to-[#0052D4] bg-clip-text py-1 text-4xl font-bold text-transparent opacity-80 sm:px-2"
      >
        LAB
      </Link>
      <div className="sm:text-md break-words bg-gradient-to-r from-primary to-[#65C7F7] bg-clip-text py-2 text-start text-xs font-bold text-transparent lg:text-lg">
        {LabName}
      </div>
      <ScrollArea className="h-[calc(100vh-8rem)] pt-6">
        <nav className="">
          <ul className="grid grid-cols-12 gap-2">
            {menuTree.map((m) => {
              return (
                <Card className="group col-span-6 rounded-xl" key={m.title}>
                  <DialogClose asChild>
                    <Link href={m.link} className="relative w-full">
                      <h4
                        className={cn(
                          "duratoin-300 absolute left-4 top-0 w-auto text-sm  font-bold transition-all ease-linear group-hover:mx-auto group-hover:text-xl",
                          pathname.toLowerCase() === m.link.toLowerCase()
                            ? "text-[#65C7F7] focus:text-[#65C7F7] active:text-[#65C7F7] dark:text-[#65C7F7]"
                            : "text-gray-500/60 dark:text-white/60",
                        )}
                      >
                        {m.title}
                      </h4>
                      <Image
                        className="mx-auto block w-auto object-fill py-8 transition-transform duration-200 ease-linear group-hover:scale-125 group-hover:opacity-30"
                        src={`/menu-assets/${m.title}.png`}
                        alt={m.title}
                        width={"160"}
                        height={"60"}
                        quality={50}
                      />
                    </Link>
                  </DialogClose>
                </Card>
              );
            })}
          </ul>
        </nav>
        {/* <div className="p-4">
          <h4 className="bg-background border-primary border-b-2 mb-4 sticky top-0 text-xl font-medium leading-none">
            Menu 1
          </h4>
          {menuTree.map((m) => (
            <Fragment key={m.title}>
              <div className="my-2 text-base">{m.title}</div>
              <Separator className="my-2" />
            </Fragment>
          ))}
        </div>

        <div className="p-4">
          <h4 className="bg-background border-primary border-b-2 mb-4 sticky top-0 text-xl font-medium leading-none">
            Menu 2
          </h4>
        </div>

        <div className="p-4">
          <h4 className="bg-background border-primary border-b-2 mb-4 sticky top-0 text-xl font-medium leading-none">
            Menu 3
          </h4>
        </div>
      */}
      </ScrollArea>
    </DialogContent>
  );
};

export default MobileMenu;
