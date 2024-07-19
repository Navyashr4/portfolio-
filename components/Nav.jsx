"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Projects",
    path: "/work",
  },
  {
    name: "About me",
    path: "/resume",
  },
  {
    name: "Get in touch",
    path: "/contact",
  },
];

const Nav = () => {
  const pathname = usePathname();
    {/**TODO CUTE HOVER EFFECT LIKE JIACHENG DID FOR FUN */}
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`capitalize font-light text-xl transition-all tracking-tight ${link.path === pathname ? " text-white" : "text-white/45 hover:text-white"}`}
          >
            {link.name}<span className="text-accent">.</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
