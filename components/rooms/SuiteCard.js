import Image from "next/image"
import { StarIcon, TemplateIcon, UsersIcon } from '@heroicons/react/outline'
import { GiForkKnifeSpoon } from 'react-icons/gi'
import { IoBedOutline } from 'react-icons/io5'
import Link from "next/link"

const SuiteCard = ({ name, slug, img, guests, price, info }) => {
    return (
        <div className="w-full flex even:justify-end group">
            <div className="relative rounded w-3/4 h-[70vh] xl:h-[60vh] lg:h-[50vh] md:h-[40vh] sm:w-full">
                <Image
                    src={img}
                    alt={name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded"
                />
                <div className="absolute top-0 bottom-0 my-auto transform right-0 translate-x-1/2 group-even:left-0 group-even:-translate-x-1/2 flex px-8 py-4 w-2/5 h-96 bg-white shadow 2xl:px-6 xl:w-3/5 lg:w-4/6 lg:h-[357px] md:h-80 sm:left-0 sm:right-0 sm:mx-auto sm:translate-x-0 sm:group-even:-translate-x-0 sm:bottom-0 sm:translate-y-2/3 sm:w-4/5">
                    <div className="flex-1 flex flex-col justify-between space-y-2.5">
                        <div className="flex items-center justify-between">
                            <div className="text-camel text-xl font-PlayfairDisplay font-semibold italic tracking-wide">
                                {name}
                            </div>
                            <div className="flex items-center text-camel tracking-wider lg:hidden">
                                <StarIcon className="h-6 mr-2 w-3/4" />
                                <span>4</span>
                            </div>
                        </div>
                        <div className="text-sm text-gray-700 pr-6 truncate whitespace-normal my-2.5">
                            {/* split text by dot and select a portion based on the screen width */}
                            Located on the 1st and 2nd floors of the old wing, these ample-sized rooms varying in size from 21sqm to 28sqm, with double or twin beds, have superb views of the amazing Sintra Mountains. With a fully equipped bathroom including bathtub or walk-in shower, the Deluxe Rooms also offer other amenities for you to enjoy in the comfort your room.
                        </div>
                        <div className="flex items-end justify-between">
                            <div className="space-y-2 mb-2">
                                <div className="flex items-center text-asphalt tracking-wide text-sm sm:text-xs">
                                    <IoBedOutline className="text-xl mr-2" />
                                    <span>{info?.bed}</span>
                                </div>
                                <div className="flex items-center text-asphalt tracking-wide text-sm sm:text-xs">
                                    <UsersIcon className="h-5 mr-2" />
                                    <span>{guests}</span>
                                </div>
                                {
                                    info?.breakfast &&
                                    <div className="flex items-center text-asphalt tracking-wide text-sm sm:text-xs">
                                        <GiForkKnifeSpoon className="text-xl mr-2" />
                                        <span>Breakfast Included</span>
                                    </div>
                                }
                                <div className="flex items-center text-asphalt tracking-wide text-sm sm:text-xs">
                                    <TemplateIcon className="h-5 mr-2" />
                                    <span>{info?.sqmts} sqm</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-end justify-between">
                            <Link href={`/rooms/${slug}`} passHref>
                                <button className="text-sm rounded font-light tracking-wider text-asphalt px-5 py-2 transition-all border border-ecru/30 hover:border-ecru bg-ecru/20 hover:bg-ecru/30 sm:px-4 sm:py-1.5 sm:tracking-normal">
                                    Book Now
                                </button>
                            </Link>
                            <div className="flex flex-col items-end text-sm text-asphalt md:text-xs sm:text-[11px]">
                                Starting From
                                <span className="text-lg tracking-wide md:text-base sm:text-[15px]">{price} € / Night</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SuiteCard
