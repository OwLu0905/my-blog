"use client";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function Home() {
  const { setTheme } = useTheme();
  return (
    <main className="max-w-[1440px] mx-auto px-8 py-6">
      test
      <h1 className="text-3xl text-accent dark:text-accent">32132</h1>
    </main>
  );
}
