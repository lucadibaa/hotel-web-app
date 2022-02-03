import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const Service = ({ title, desc, img, btn, link }) => {

    const [transition, setTransition] = useState(false)

    return (
        // <Link href={link} passHref>
        <div onMouseEnter={() => setTransition(true)} onMouseLeave={() => setTransition(false)} className="flex flex-col w-[calc(33%-0.25rem)] bg-white border border-gray-100 rounded-lg shadow-sm p-2 cursor-pointer group lg:w-[calc(50%-0.25rem)] sm:w-full">
            <div className="relative w-full h-[680px] 2xl:h-[560px] xl:h-[400px]">
                <div className="relative rounded-t w-full h-[680px] overflow-hidden transition-all duration-500 group-hover:filter group-hover:brightness-75 2xl:h-[560px] xl:h-[400px]">
                    <Image
                        src={img}
                        alt={title}
                        layout="fill"
                        objectFit="cover"
                        className={`rounded-t ${transition ? 'transition-transform duration-[10000ms] group-hover:transform group-hover:scale-[1.15]' : 'transition-transform transform scale-100'}`}
                    />
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-16 text-white absolute bottom-0 top-0 right-0 left-0 m-auto transition-all duration-300 ${transition ? 'opacity-100' : 'opacity-0'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.8} d="M12 4v16m8-8H4" />
                </svg>
            </div>
            <div className="flex-1 flex flex-col items-center p-7 pb-4 border-x border-b rounded-b 2xl:p-4">
                <div className="text-camel text-xl mb-4 font-Sofia font-light tracking-wider xl:text-lg xl:mb-2">
                    {title}
                </div>
                <div className="leading-7 text-center text-gray-700 px-4 mb-8 2xl:mb-6 xl:text-sm xl:mb-4 xl:px-2">
                    {desc}
                </div>
                <button className="rounded font-light font-Sofia tracking-wider text-lg text-asphalt px-9 py-4 transition-all border border-ecru/40 hover:border-ecru 2xl:text-base 2xl:px-7 2xl:py-3 xl:px-5 xl:py-2">
                    {btn}
                </button>
            </div>
        </div>
        // </Link>
    )
}

export default Service