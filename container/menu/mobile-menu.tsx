"use client";
import { DialogContent } from "@/components/custom/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import React, { Fragment } from "react";

const MobileMenu = () => {
  const LabName = "Multi-Scale Flow Physics \n & \n Computation Lab";
  const tags = Array.from({ length: 10 }).map(
    (_, i, a) => `menu ${i.toString().padStart(4, "0")}`
  );
  return (
    <DialogContent className="">
      <div className="text-4xl font-bold py-1 px-6 bg-clip-text text-transparent bg-gradient-to-r from-[#9CECFB] opacity-80 via-[#65C7F7] to-[#0052D4]">
        LAB
      </div>
      <div className="font-bold text-xs sm:text-md lg:text-lg bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#65C7F7] break-words text-start">
        {LabName}
      </div>
      <ScrollArea className="h-[calc(100vh-8rem)] max-w-48 pt-6">
        <div className="p-4">
          <h4 className="bg-background border-primary border-b-2 mb-4 sticky top-0 text-xl font-medium leading-none">
            Menu 1
          </h4>
          {tags.map((tag) => (
            <Fragment key={tag}>
              <div key={tag} className="my-2 text-base">
                {tag}
              </div>
              <Separator className="my-2" />
            </Fragment>
          ))}
        </div>

        <div className="p-4">
          <h4 className="bg-background border-primary border-b-2 mb-4 sticky top-0 text-xl font-medium leading-none">
            Menu 2
          </h4>
          {tags.map((tag) => (
            <Fragment key={tag}>
              <div key={tag} className="my-2 text-base">
                {tag}
              </div>
              <Separator className="my-2" />
            </Fragment>
          ))}
        </div>

        <div className="p-4">
          <h4 className="bg-background border-primary border-b-2 mb-4 sticky top-0 text-xl font-medium leading-none">
            Menu 3
          </h4>
          {tags.map((tag) => (
            <Fragment key={tag}>
              <div key={tag} className="my-2 text-base">
                {tag}
              </div>
              <Separator className="my-2" />
            </Fragment>
          ))}
        </div>
      </ScrollArea>
    </DialogContent>
  );
};

export default MobileMenu;
