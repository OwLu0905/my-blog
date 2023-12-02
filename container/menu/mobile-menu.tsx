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
      <div className="text-4xl font-bold py-1 px-6 bg-clip-text text-transparent bg-gradient-to-r from-[#9CECFB] opacity-80 via-[#65C7F7] to-[#0052D4]">
        LAB
      </div>
      <div className="font-bold text-xs sm:text-md lg:text-lg bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#65C7F7] break-words text-start">
        {LabName}
      </div>
      <ScrollArea className="h-[calc(100vh-8rem)] pt-6">
        <nav className="">
          <ul className="grid grid-cols-12 gap-2">
            {menuTree.map((m) => {
              return (
                <Card className="col-span-6 group rounded-xl" key={m.title}>
                  <DialogClose asChild>
                    <Link href={m.link} className="relative w-full">
                      <h4
                        className={cn(
                          "absolute top-0 w-auto left-4 text-sm font-bold  group-hover:text-xl group-hover:mx-auto transition-all duratoin-300 ease-linear",
                          pathname.toLowerCase() === m.link.toLowerCase()
                            ? "text-yellow-500"
                            : "text-primary dark:text-white/60"
                        )}
                      >
                        {m.title}
                      </h4>
                      <Image
                        className="object-fill group-hover:opacity-30 py-8 mx-auto group-hover:scale-125 transition-transform duration-200 ease-linear w-auto block"
                        src={`/menu/${m.title}.png`}
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
