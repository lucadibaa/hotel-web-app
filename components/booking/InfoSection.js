import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline"
import moment from "moment"
import { useState } from "react"
import useWindowSize from '../../utils/useWindowSize'

const InfoSection = ({ startDate, endDate, guests }) => {

    const room = { price: 80 }

    const { width } = useWindowSize()

    const [isHidden, setIsHidden] = useState(true)

    return (
        <div className={`flex-[1.1] h-full bg-camel/30 rounded-sm 2xl:flex-[1.2] lg:flex-none lg:w-2/3 lg:mx-auto sm:w-11/12 ${isHidden && width < 639 && 'h-10'}`}>
            <section>
                <div className={`flex justify-between items-end ${isHidden && width < 639 && 'pb-3'}`}>
                    <h2 className={`pl-5 pt-3 text-lg font-Sofia tracking-wider text-asphalt xl:text-base`}>YOUR STAY</h2>
                    <div className={`hidden sm:block`} onClick={() => setIsHidden(!isHidden)}>
                        {
                            isHidden ?
                                <ChevronDownIcon className="text-asphalt h-5 mr-3.5" />
                                :
                                <ChevronUpIcon className="text-asphalt h-5 mr-3.5" />
                        }
                    </div>
                </div>
                {
                    ((!isHidden && width < 639) || width > 639) &&
                    <div className="text-sm flex my-2 px-5 space-x-10 xl:flex-col xl:space-x-0 xl:space-y-1.5 lg:flex-row lg:space-x-24 lg:space-y-0 sm:justify-between sm:space-x-0">
                        <div className={`flex flex-col ${startDate ? 'visible' : 'invisible'}`}>
                            <span className="font-medium xl:font-normal">Check In</span>
                            <span className="font-light">{moment(startDate).format('ddd DD, MMM YYYY')}</span>
                        </div>
                        <div className={`flex flex-col ${endDate ? 'visible' : 'invisible'}`}>
                            <span className="font-medium xl:font-normal">Check Out</span>
                            <span className="font-light">{moment(endDate).format('ddd DD, MMM YYYY')}</span>
                        </div>
                    </div>
                }
            </section>
            {
                ((!isHidden && width < 639) || width > 639) &&
                <>
                    <hr className="bg-jungle/20 h-0.5 mx-4" />

                    <section className="mt-4 px-5 space-y-4 sm:space-y-2 sm:mt-2">
                        <div className="space-y-1">
                            <div className="flex justify-between text-[13px] font-light">
                                <span>Number of Guests:</span>
                                <span>{guests}</span>
                            </div>
                            <div className="flex justify-between text-[13px] font-light">
                                <span>Total Nights:</span>
                                <span>{endDate?.diff(startDate, 'days') || '...'}</span>
                            </div>
                        </div>
                        {
                            room &&
                            <div className="space-y-1">
                                <div className="flex justify-between text-[13px] font-light xl:flex-col xl:leading-3 lg:leading-normal lg:flex-row">
                                    <span>Room:</span>
                                    <span className="border-b border-moss cursor-pointer xl:self-end xl:mb-1 lg:mb-0">Historic Garden Room</span>
                                </div>
                                <div className="flex justify-between text-[13px] font-light">
                                    <span>Room Rate:</span>
                                    <div className="flex flex-col items-end">
                                        <span>€ {room.price}</span>
                                        <span className="text-[10px]">per night</span>
                                    </div>
                                </div>
                            </div>
                        }
                    </section>

                    <hr className="bg-jungle/20 h-0.5 mx-4 my-5 sm:my-2" />

                    <section className="px-5 mb-5 sm:mb-2">
                        <div className="flex justify-between text-lg xl:text-base">
                            <span>TOTAL:</span>
                            <span>€ {room.price * endDate?.diff(startDate, 'days') || '0.00'}</span>
                        </div>
                    </section>
                </>
            }
        </div>
    )
}

export default InfoSection
