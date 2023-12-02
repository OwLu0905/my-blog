"use client";
import React from "react";

import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import Link from "next/link";
import { menuTree } from "@/utils/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function MenubarPc() {
  const pathname = usePathname();
  const menuMap = menuTree.map((m) => {
    return (
      <Link key={m.title} href={m.link}>
        <MenubarMenu>
          <MenubarTrigger
            className={cn(
              "text-lg hover:text-primary/80 active:text-primary/80",
              pathname.toLowerCase() === m.link.toLowerCase()
                ? "text-yellow-500 active:text-yellow-500 focus:text-yellow-500"
                : "text-primary dark:text-white/60"
            )}
            onClick={(e) => {
              e.currentTarget.dataset["state"] = "closed";
            }}
          >
            {m.title}
          </MenubarTrigger>
        </MenubarMenu>
      </Link>
    );
  });
  return <Menubar className=" border-0">{menuMap}</Menubar>;
}

{
  /* m.children.length > 0 ? (
          <MenubarContent>
            {m.children.map((c, cid) => {
              return (
                <MenubarItem key={c?.title}>
                  <Link href={c.link + `#${c.title}-${cid}`}>{c.title}</Link>
                </MenubarItem>
              );
            })}
          </MenubarContent>
        ) : null */
}
