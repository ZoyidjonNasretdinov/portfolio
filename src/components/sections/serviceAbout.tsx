import { author } from '@/assets'
import Image from 'next/image'

const ServiceAbout = () => {
    return (
      <section className="bg-primary w-full rounded-[17px] h-[200px]  overflow-hidden relative shadow-lg">
        <div className="px-6 py-4">
          <Image
            src={author}
            alt="Author"
            width={80}
            height={80}
            objectFit="cover"
            className="rounded-[10px] mx-auto mb-2"
         />
          <h2 className="text-xl text-bold text-white flex justify-center mb-4">Zoyidjon Nasretdinov</h2>
          <div className="flex justify-center">
            <a
              href="#"
              className="btn border border-textSecondary text-textSecondary px-4 py-2 rounded-[5px] hover:bg-textSecondary hover:text-primary transition-colors duration-300"
            >
              About me
            </a>
          </div>
        </div>
      </section>
    )
}

export default ServiceAbout