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
      {/* Desktop (1440px+) */}
      <div className="hidden desktop:flex flex-col desktop:flex-row gap-[0.5vw] p-[1vw] h-[100vh]">
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
        <div className="flex flex-col gap-[0.5vw] w-[37vw]">
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

      {/* Tablet (810px - 1439px) */}
      <div className='hidden tablet:flex desktop:hidden flex-row gap-[1vw] p-[2vw]'>
        <div className="w-[38%] flex flex-col gap-[1vw]">
          <TechStacks />
          <Projects />
          <Services />  
          <Testimonials />
          <Social />
        </div>
        <div className="w-[60%] flex flex-col gap-[1vw]">
          <Statistics />
          <Hero />
          <Workflow />
          <Clients />
          <Contact />
        </div>
      </div>

      {/* Mobile (809px dan kichik) */}
      <div className="flex mobile:flex tablet:hidden desktop:hidden flex-col px-[3vw] gap-[2vh]">
        <Hero />
        <Statistics />
        <Clients />
        <TechStacks />
        <Projects />
        <Services />
        <Testimonials />
        <Workflow />
        <Social />
        <Contact />
      </div>
    </Layout>
  )
}

export default Home
