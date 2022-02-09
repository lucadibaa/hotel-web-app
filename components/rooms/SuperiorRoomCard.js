import Image from "next/image"
import { StarIcon, TemplateIcon, UsersIcon } from '@heroicons/react/outline'
import { GiForkKnifeSpoon } from 'react-icons/gi'
import { IoBedOutline } from 'react-icons/io5'
import Link from "next/link"

const SuperiorRoomCard = ({ name, img, bed, guests, breakfast, sqmts, ratings, price }) => {
    return (
        <Link href="/room">
            <div className="flex flex-col w-[calc(50%-0.75rem)] h-full bg-white border border-gray-100 rounded-lg shadow-sm p-2 cursor-pointer group even:-mt-40">
                <div className="relative rounded-t w-full h-[480px] overflow-hidden">
                    <Image
                        src={img}
                        alt={name}
                        layout="fill"
                        objectFit="cover"
                        // objectPosition="right"
                        className="rounded-t"
                    />
                </div>
                <div className="flex px-8 py-4 h-64 border-x-2 border-b-2 rounded-b">
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
        </Link>
    )
}

export default SuperiorRoomCard
