import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Header } from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Multi-Scale Flow Physics & Computation Lab",
  description: "Multi-Scale Flow Physics & Computation Lab",
};

type RootLayoutProps = {
  children: React.ReactNode;
};
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="min-h-screen py-6 bg-accent dark:bg-background">
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
