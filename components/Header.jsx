import Link from "next/link"
import { Button } from "./ui/button"
import MobileNav from "./MobileNav"

// components 
import Nav from "./Nav"

const Header = () => {
  return (
    <header className="sticky top-0 bg-black bg-opacity-50 backdrop-blur-md z-50 py-8 xl:py-12 text-white px-8 lg:px-16">
        <div className="mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <h1 className="text-xl font-light">
              Navya Vedachala
            </h1>
          </Link>

          {/* desktop nav and hire me button*/}
          <div className="hidden lg:flex items-center gap-8">
            <Nav />
          </div>

          {/* mobile nav*/}
          <div className="lg:hidden">
            <MobileNav />
          </div>

        </div>
    </header>
  )
}

export default Header

