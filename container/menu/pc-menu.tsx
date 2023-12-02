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
      <Link
        key={m.title}
        href={m.link}
        className={cn(
          "flex h-full items-center text-foreground/60 transition-colors hover:text-foreground/80",
          pathname.toLowerCase() === m.link.toLowerCase()
            ? "text-[#65C7F7] focus:text-[#65C7F7] active:text-[#65C7F7] dark:text-[#65C7F7]"
            : "text-gray-500/60 dark:text-white/60",
        )}
      >
        <h4>{m.title}</h4>
      </Link>
    );
  });
  return (
    <Menubar className="space-x-6 border-0 text-sm font-medium">
      {menuMap}
    </Menubar>
  );
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
