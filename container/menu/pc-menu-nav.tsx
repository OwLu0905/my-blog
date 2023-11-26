"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

function onNavChange() {
  setTimeout(() => {
    const triggers = document.querySelectorAll(
      '.submenu-trigger[data-state="open"]'
    );
    if (triggers.length === 0) return;

    const firstTrigger = triggers[0] as HTMLElement;
    const viewports = document.getElementsByClassName("submenu-viewport");

    if (viewports.length > 0) {
      const viewport = viewports[0] as HTMLElement;
      viewport.style.left = `${firstTrigger.offsetLeft}px`;
      // viewport.style.width = "fit-content";
      viewport.style.setProperty(
        "--radix-navigation-menu-viewport-width",
        "20rem"
      );
    }
  });
}

// BUG: https://github.com/shadcn-ui/ui/issues/1510
export function NavigationMenuDemo() {
  return (
    <NavigationMenu className="border-0">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-secondary">
            Getting started
          </NavigationMenuTrigger>
          <NavigationMenuContent className="absolute top-full">
            <li>
              <NavigationMenuLink href="/">123124</NavigationMenuLink>
            </li>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="">Components</NavigationMenuTrigger>
          <NavigationMenuContent className="p-20 m-0 gap-5 absolute top-full">
            <NavigationMenuLink>1123123</NavigationMenuLink>
            <NavigationMenuLink>1123123</NavigationMenuLink>
            <NavigationMenuLink>1123123</NavigationMenuLink>
            <NavigationMenuLink>1123123</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
