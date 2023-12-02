import Container from "@/components/layout/container";
import MemberCard from "@/container/member-card";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Multi-Scale Flow Physics & Computation Lab",
  description: "About  | Multi-Scale Flow Physics & Computation Lab",
};

export default function Page() {
  return (
    <Container as="section">
      <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-4 lg:grid-cols-2">
        {[1, 2, 3, 4].map((i) => {
          return (
            <li key={i} className="group">
              <div className="mx-auto overflow-hidden shadow-md md:max-w-2xl">
                <div className="md:flex">
                  <div className="flex items-center md:shrink-0">
                    <MemberCard />
                  </div>
                  <div className="p-2 sm:p-4">
                    <div className="pb-1 pt-2 text-lg font-semibold uppercase tracking-wide text-foreground underline decoration-primary decoration-4 underline-offset-4 md:no-underline md:decoration-transparent md:group-hover:underline md:group-hover:decoration-primary md:group-hover:transition-all md:group-hover:duration-300">
                      MEMBER NAME
                    </div>

                    <div className="mb-2 text-sm font-thin tracking-wide">
                      M.S., Graduate Institute of Environmental Engineering,
                      National Taiwan University, 2014
                    </div>
                    <div className="mt-1 text-sm leading-tight hover:underline">
                      Eamil：example@ntu.edu.tw
                    </div>
                    <p className="mt-1 text-sm text-foreground">
                      Research：Computational Fluid Dynamics.
                    </p>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </Container>
  );
}
