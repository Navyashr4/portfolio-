// components 
import Intro from "@/components/Intro"
import ProjectGrid from "@/components/ProjectGrid"
import Footer from "@/components/Footer"

const Home = () => {
  return (
    <section className="h-full px-8 lg:px-16 relative">
      <div className="mx-auto h-full"> 
        <Intro />
        <ProjectGrid />
        <div className='border border-white w-full absolute left-0'></div>
        <Footer />
      </div>
    </section>
  )
}

export default Home

