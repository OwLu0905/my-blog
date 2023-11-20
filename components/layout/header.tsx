"use client";
import { useTheme } from "next-themes";
import { ModeToggle } from "../theme/theme-mode-toggle";

export function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-6">
      <div>Hamburber</div>
      <div className="items-end">
        <ModeToggle />
      </div>
    </header>
  );
}
