import Image from "next/image"
import { useState } from "react"

const ExploreNearby = ({ title, desc, img }) => {

    const [transition, setTransition] = useState(false)

    return (
        <div onMouseEnter={() => setTransition(true)} onMouseLeave={() => setTransition(false)} className="flex w-[calc(50%-0.5rem)] bg-white border border-gray-100 rounded-lg shadow-sm p-2 cursor-pointer group md:w-full sm:flex-col">
            <div className="relative rounded-l w-96 h-64 flex-1 overflow-hidden transition-all duration-1000 group-hover:filter group-hover:brightness-75 xl:h-60 lg:h-40 md:h-52 sm:flex-none sm:w-full sm:h-52 sm:rounded-t sm:rounded-bl-none">
                <Image
                    src={img}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="left"
                    className={`rounded-l sm:rounded-t sm:rounded-bl-none ${transition ? 'transition-transform duration-[12000ms] group-hover:transform group-hover:scale-[1.15]' : 'transition-transform transform scale-100'}`}
                />
            </div>
            <div className="flex-1 flex flex-col items-center justify-evenly p-7 border-y-2 border-r-2 rounded-r xl:p-5 lg:py-2 lg:px-4 md:p-7 sm:flex-none sm:h-40 sm:py-4 sm:rounded-b sm:rounded-tr-none sm:border-x-2 sm:border-t-0">
                <div className="text-camel text-xl font-PlayfairDisplay font-semibold italic transition-all duration-[900ms] ease-in-out group-hover:transform group-hover:-translate-y-5 xl:text-lg lg:text-sm lg:group-hover:-translate-y-1.5 md:text-lg">
                    {title}
                </div>
                <div className="text-sm text-gray-700 px-4 transition-all duration-[900ms] ease-in-out group-hover:transform group-hover:-translate-y-5 xl:px-0 lg:text-xs lg:group-hover:-translate-y-1.5 md:text-sm">
                    {desc}
                </div>
            </div>
        </div>
    )
}

export default ExploreNearby