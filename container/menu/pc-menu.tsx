import React from "react";

// const MenubarPc = () => {
//   return (
//     <div>
//
//       <ul className="flex">
//         <li>Home</li>
//         <li>About Us</li>
//         <li>Research</li>
//         <li>Publication</li>
//         <li>Data</li>
//       </ul>
//
//     </div>
//   );
// };

// export default MenubarPc;

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";

//         <li>Home</li>
//         <li>About Us</li>
//         <li>Research</li>
//         <li>Publication</li>
//         <li>Data</li>
const menuTree = [
  { title: "Home", link: "/", children: [] },
  {
    title: "About",
    link: "/",
    children: [
      { title: "Group Member", link: "/" },
      { title: "Former Graduate Students", link: "/" },
      { title: "Former Postdocs", link: "/" },
    ],
  },
  { title: "Research", link: "/", children: [{ title: "Home1", link: "/" }] },
  {
    title: "Publication",
    link: "/",
    children: [{ title: "Home1", link: "/" }],
  },
  { title: "Data", link: "/", children: [{ title: "Home1", link: "/" }] },
];

export function MenubarPc() {
  const menuMap = menuTree.map((m, idx) => {
    return (
      <MenubarMenu key={m.title}>
        {m.children.length > 0 ? (
          <MenubarTrigger className="text-lg">{m.title}</MenubarTrigger>
        ) : (
          <MenubarTrigger
            className="text-lg"
            onClick={(e) => {
              e.currentTarget.dataset["state"] = "closed";
            }}
          >
            <Link href="/">{m.title}</Link>
          </MenubarTrigger>
        )}

        {m.children.length > 0 ? (
          <MenubarContent>
            {m.children.map((c, cid) => {
              return (
                <MenubarItem key={c.title}>
                  <Link href={c.link + `#${c.title}-${cid}`}>{c.title}</Link>
                </MenubarItem>
              );
            })}
          </MenubarContent>
        ) : null}
      </MenubarMenu>
    );
  });
  return <Menubar className=" border-0">{menuMap}</Menubar>;
}
