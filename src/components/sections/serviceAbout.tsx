import { author } from '@/assets'
import Image from 'next/image'

const ServiceAbout = () => {
    return (
      <section className="bg-primary w-full py-[1.2vw] -rounded-[17px]  overflow-hidden relative shadow-lg rounded-[1vw]">
        <div className="px-[1vw] py-[1vw]">
          <Image
            src={author}
            alt="Author"
            objectFit="cover"
            className="mx-auto mb-[0.5vw] w-[6vw] h-[6vw] shadow-lg rounded-[1vw]"
         />
          <h2 className="text-bold text-white flex justify-center text-[1.2vw] mb-[1vw]">Zoyidjon Nasretdinov</h2>
          <div className="flex justify-center">
            <a
              href="#"
              className="btn text-[0.8vw] border border-textSecondary text-textSecondary px-[1vw] py-[0.5vw] rounded-[0.5vw] hover:bg-textSecondary hover:text-primary transition-colors duration-300"
            >
              About me
            </a>
          </div>
        </div>
      </section>
    )
}

export default ServiceAbout