import Link from "next/link"
import { Button } from "./ui/button"
import MobileNav from "./MobileNav"

// components 
import Nav from "./Nav"

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white px-8">
        <div className="mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <h1 className="text-2xl font-light">
              Navya Vedachala<span className="text-accent">.</span>
            </h1>
          </Link>

          {/* desktop nav and hire me button*/}
          <div className="hidden md:flex items-center gap-8">
            <Nav />
          </div>

          {/* mobile nav*/}
          <div className="md:hidden">
            <MobileNav />
          </div>

        </div>
    </header>
  )
}

export default Header

