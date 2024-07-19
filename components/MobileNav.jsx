"use client"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { usePathname } from "next/navigation"
import Link from "next/link"
import {CiMenuFries} from "react-icons/ci"

const links = [
    {
        name: "Home", 
        path: "/"
    }, 
    {
        name: "Projects", 
        path: "/work"
    }, 
    {
        name: "About me", 
        path: "/resume"
    }, 
    {
        name: "Get in touch", 
        path: "/contact"
    }, 
]

const MobileNav = () => {
    const pathname = usePathname();

    return ( 
        <Sheet>
            <SheetTrigger className = "flex justify-center items-center">
                <CiMenuFries className = "text-[32px] text-accent"/>
            </SheetTrigger>
            <SheetContent className="border-none">
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Link href="/">
                        <h1 className="text-xl font-light">
                            Navya Vedachala
                        </h1>
                    </Link>
                </div>
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link, index) => {
                        return(
                            <Link 
                                href={link.path} 
                                key={index} className={`capitalize font-light text-xl transition-all tracking-tight ${link.path === pathname ? " text-white" : "text-white/45 hover:text-white"}`}>
                                {link.name}<span className="text-accent">.</span>
                            </Link>
                        );
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    );
}

export default MobileNav
