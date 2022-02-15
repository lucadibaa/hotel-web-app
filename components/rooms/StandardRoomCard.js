import Image from "next/image"
import { StarIcon, TemplateIcon, UsersIcon } from '@heroicons/react/outline'
import { GiForkKnifeSpoon } from 'react-icons/gi'
import { IoBedOutline } from 'react-icons/io5'
import Link from "next/link"

const StandardRoomCard = ({ name, img, bed, guests, breakfast, sqmts, ratings, price }) => {
    return (
        <Link href="/room" passHref>
            <div className="flex w-full bg-white border border-gray-100 rounded-lg shadow-sm p-2 cursor-pointer group md:w-full sm:flex-col">
                <div className="relative rounded-l w-96 h-64 flex-1 overflow-hidden xl:flex-[1.2] lg:h-52 md:flex-[1.9] sm:flex-none sm:w-full sm:h-48 sm:rounded-t sm:rounded-bl-none">
                    <Image
                        src={img}
                        alt={name}
                        layout="fill"
                        objectFit="cover"
                        // objectPosition="right"
                        className="rounded-l sm:rounded-t sm:rounded-bl-none"
                    />
                </div>
                <div className="flex-[2] flex px-8 py-4 border-y-2 border-r-2 rounded-r md:flex-col md:px-4 md:py-2 sm:rounded-b sm:rounded-tr-none sm:border-x-2 sm:border-t-0 sm:space-y-2">
                    <div className="flex-1 flex flex-col justify-between lg:flex-[1.6] md:flex-[3] sm:space-y-2.5">
                        <div className="text-camel text-xl font-PlayfairDisplay font-semibold italic tracking-wide">
                            {name}
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center text-asphalt tracking-wide text-sm">
                                <IoBedOutline className="text-xl mr-2" />
                                <span>{bed}</span>
                            </div>
                            <div className="flex items-center text-asphalt tracking-wide text-sm">
                                <UsersIcon className="h-5 mr-2" />
                                <span>{guests}</span>
                            </div>
                            {
                                breakfast &&
                                <div className="flex items-center text-asphalt tracking-wide text-sm">
                                    <GiForkKnifeSpoon className="text-xl mr-2" />
                                    <span>Breakfast Included</span>
                                </div>
                            }
                            <div className="flex items-center text-asphalt tracking-wide text-sm">
                                <TemplateIcon className="h-5 mr-2" />
                                <span>{sqmts} sqm</span>
                            </div>
                        </div>
                        <div className="text-sm text-gray-700 lg:hidden">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        </div>
                        <div className="hidden lg:block sm:hidden" />
                    </div>
                    <div className="flex-1 flex flex-col items-end justify-between md:flex-row">
                        <div className="flex items-center text-camel tracking-wider">
                            <StarIcon className="h-6 mr-2 w-3/4" />
                            <span>{ratings}</span>
                        </div>
                        <div className="flex flex-col items-end text-sm text-asphalt md:text-xs">
                            Starting From
                        <span className="text-lg tracking-wide md:text-base">{price} € / Night</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default StandardRoomCard
