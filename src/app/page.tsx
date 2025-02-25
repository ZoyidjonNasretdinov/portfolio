import { Layout } from '@/components'
import Hero from '@/components/sections/hero'
import Projects from '@/components/sections/projects'
import Statistics from '@/components/sections/stats'
import TechStacks from '@/components/sections/tech'
import Testimonials from '@/components/sections/testimonials'
import Services from '@/components/sections/services'
import Clients from '@/components/sections/clients'
import Workflow from '@/components/sections/workflow'
import Contact from '@/components/sections/contact'
import Social from '@/components/sections/social'

const Home = () => {
  return (
    <Layout>
      {/* Ustunlar uchun container */}
      <div className="flex flex-col md:flex-row gap-[0.5vw] p-[1vw]">
        {/* Birinchi ustun */}
        <div className="flex flex-col gap-[0.5vw] w-[25vw]">
          <TechStacks />
          <Projects />
          <Services />
        </div>

        {/* Ikkinchi ustun */}
        <div className="flex flex-col gap-[0.5vw] w-[35vw]">
          <Statistics />
          <Hero />
          <Clients />
        </div>

        {/* Uchinchi ustun */}
        <div className="flex flex-col gap-[0.5vw] w-[40vw]">
          {/* Yuqori qator */}
          <div className="flex flex-row gap-[0.5vw]">
            <Testimonials />
            <Workflow />
          </div>

          {/* Pastki qator */}
          <div className="flex flex-row gap-[0.5vw]">
            <Social />
            <Contact />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
