import Image from "next/image"
import { StarIcon, TemplateIcon, UsersIcon } from '@heroicons/react/outline'
import { GiForkKnifeSpoon } from 'react-icons/gi'
import { IoBedOutline } from 'react-icons/io5'
import Link from "next/link"

const SuiteCard = ({ name, img, bed, guests, breakfast, sqmts, ratings, price }) => {
    return (
        <div className="w-full flex even:justify-end group">
            <div className="relative rounded w-3/4 h-[70vh]">
                <Image
                    src={img}
                    alt={name}
                    layout="fill"
                    objectFit="cover"
                    // objectPosition="right"
                    className="rounded"
                />
                <div className="absolute top-0 bottom-0 my-auto transform right-0 translate-x-1/2 group-even:left-0 group-even:-translate-x-1/2 flex px-8 py-4 w-2/5 h-96 bg-white shadow">
                    <div className="flex-1 flex flex-col justify-between">
                        <div className="flex items-center justify-between">
                            <div className="text-camel text-xl font-PlayfairDisplay font-semibold italic tracking-wide">
                                {name}
                            </div>
                            <div className="flex items-center text-camel tracking-wider">
                                <StarIcon className="h-6 mr-2 w-3/4" />
                                <span>{ratings}</span>
                            </div>
                        </div>
                        <div className="text-sm text-gray-700 pr-6">
                            Located on the 1st and 2nd floors of the old wing, these ample-sized rooms varying in size from 21sqm to 28sqm, with double or twin beds, have superb views of the amazing Sintra Mountains. With a fully equipped bathroom including bathtub or walk-in shower, the Deluxe Rooms also offer other amenities for you to enjoy in the comfort your room.
                        </div>
                        <div className="flex items-end justify-between">
                            <div className="space-y-2 mb-2">
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
                        </div>
                        <div className="flex items-end justify-between">
                            <Link href="/room" passHref>
                                <button className="text-sm rounded font-light tracking-wider text-asphalt px-5 py-2 transition-all border border-ecru/30 hover:border-ecru bg-ecru/20 hover:bg-ecru/30">
                                    Book Now
                                </button>
                            </Link>
                            <div className="flex flex-col items-end text-sm text-asphalt">
                                Starting From
                                <span className="text-lg tracking-wide">{price} € / Night</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SuiteCard
