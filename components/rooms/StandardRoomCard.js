import Image from "next/image"
import { StarIcon, TemplateIcon, UsersIcon } from '@heroicons/react/outline'
import { GiForkKnifeSpoon } from 'react-icons/gi'
import { IoBedOutline } from 'react-icons/io5'
import Link from "next/link"

const StandardRoomCard = ({ name, img, bed, guests, breakfast, sqmts, ratings, price }) => {
    return (
        <Link href="/room">
            <div className="flex w-full bg-white border border-gray-100 rounded-lg shadow-sm p-2 cursor-pointer group md:w-full sm:flex-col">
                <div className="relative rounded-l w-96 h-64 flex-1 overflow-hidden">
                    <Image
                        src={img}
                        alt={name}
                        layout="fill"
                        objectFit="cover"
                        // objectPosition="right"
                        className="rounded-l"
                    />
                </div>
                <div className="flex-[2] flex px-8 py-4 border-y-2 border-r-2 rounded-r">
                    <div className="flex-1 flex flex-col justify-between">
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
                        <div className="text-sm text-gray-700">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </div>
                    </div>
                    <div className="flex-1 flex flex-col items-end justify-between">
                        <div className="flex items-center text-camel tracking-wider">
                            <StarIcon className="h-6 mr-2 w-3/4" />
                            <span>{ratings}</span>
                        </div>
                        <div className="flex flex-col items-end text-sm text-asphalt">
                            Starting From
                        <span className="text-lg tracking-wide">{price} € / Night</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link >
    )
}

export default StandardRoomCard
