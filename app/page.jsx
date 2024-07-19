import {Button} from "@/components/ui/button"
import {FiDownload} from "react-icons/fi"

// components 
import Social from "@/components/Socials"
import Photo from "@/components/Photo"
import Stats from "@/components/Stats"
import Intro from "@/components/Intro"

const Home = () => {
  return (
    <section className="h-full px-8 lg:px-16">
      <div className="mx-auto h-full"> 
        <Intro />
      </div>
    </section>
  )
}

export default Home

