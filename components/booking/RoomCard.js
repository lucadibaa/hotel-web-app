import Image from "next/image"
import { TemplateIcon, UsersIcon } from '@heroicons/react/outline'
import { GiForkKnifeSpoon } from 'react-icons/gi'
import { IoBedOutline } from 'react-icons/io5'
import { MdCoffeeMaker, MdPets } from 'react-icons/md'
import { useRouter } from "next/router"
import moment from "moment"
import { selectRoom, selectArrival, selectDeparture, calcTotal } from "../../redux/bookingSlice"
import { useDispatch, useSelector } from "react-redux"

const RoomCard = ({ room, name, img, bed, guests, breakfast, sqmts, price, selectedGuests, datesRange }) => {

    const router = useRouter()
    const dispatch = useDispatch()
    const { room: selectedRoom } = useSelector(state => state.booking)

    const { startDate, endDate } = datesRange

    const handleClick = () => {
        if (startDate && endDate && selectedGuests) {
            dispatch(selectArrival(moment(startDate).format('YYYY-MM-DD')))
            dispatch(selectDeparture(moment(endDate).format('YYYY-MM-DD')))
            dispatch(selectRoom(room))
            dispatch(calcTotal(endDate?.diff(startDate, 'days')))
            router.push({
                pathname: '/booking/details',
                query: {
                    arrival: moment(startDate).format('DD-MM-YYYY'),
                    departure: moment(endDate).format('DD-MM-YYYY'),
                    nights: endDate.diff(startDate, 'days'),
                    guests: selectedGuests
                }
            })
        } else {
            alert('Please select a valid date range')
        }
    }

    return (
        <div className="flex w-full bg-white border border-gray-100 text-asphalt rounded-lg shadow-sm p-3 group xl:p-2 sm:flex-col sm:space-y-2.5">
            <div className="space-y-5">
                <div className="relative rounded-sm w-72 h-40 overflow-hidden xl:w-64 sm:w-full">
                    <Image
                        src={img}
                        alt={name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-l"
                    />
                </div>
                <div className="space-y-2 sm:hidden">
                    <div className="flex items-center tracking-wide text-xs">
                        <IoBedOutline className="text-lg mr-2" />
                        <span>{bed}</span>
                    </div>
                    <div className="flex items-center tracking-wide text-xs">
                        <UsersIcon className="h-5 mr-2" />
                        <span>{guests}</span>
                    </div>
                    {
                        breakfast &&
                        <div className="flex items-center tracking-wide text-xs">
                            <GiForkKnifeSpoon className="text-lg mr-2" />
                            <span>Breakfast Included</span>
                        </div>
                    }
                    <div className="flex items-center tracking-wide text-xs">
                        <TemplateIcon className="h-5 mr-2" />
                        <span>{sqmts} sqm</span>
                    </div>
                    <div className="flex items-center tracking-wide text-xs">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 mr-2" viewBox="0 0 40 40">
                            <path fill="none" stroke="#000000" strokeWidth="1.002" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M9.4 10.2h21v21.2h-21zm-7-1.8l6.9 1.7v21.4l-6.9 1.7zm3.5 23.7V9.4M9.3 26l-6.9 1.1m6.9-6.5H2.4m6.9-5.5l-6.9-.9m34.9 19l-7-1.8V10.1l7-1.8zM33.8 9.4v22.7m-3.5-16.6l7-1.1m-7 6.6l7-.1m-7 5.5l7 .9"></path>
                            <g fill="#000000">
                                <ellipse cx="25.6" cy="16.9" rx="2" ry="2"></ellipse>
                                <path d="M28.6 25.7l-5.7-6-1.5 1.5 4.5 4.5h-1.4l-6.4-6.6-6.7 6.6"></path>
                            </g>
                        </svg>
                        <span>Ocean View</span>
                    </div>
                    <div className="flex items-center tracking-wide text-xs">
                        <MdCoffeeMaker className="text-lg mr-2" />
                        <span>Espresso Coffee Machine</span>
                    </div>
                    <div className="flex items-center tracking-wide text-xs">
                        <MdPets className="text-lg mr-2" />
                        <span>Pets allowed</span>
                    </div>
                </div>
            </div>
            <div className="flex-[2] flex px-8 xl:px-4 sm:px-2">
                <div className="flex-1 flex flex-col justify-between">
                    <div className="mb-4">
                        <div className="mb-1 text-camel text-xl font-PlayfairDisplay font-semibold italic tracking-wide sm:mb-0.5">
                            {name}
                        </div>
                        <span className="text-[15px]">Garden Suite</span>
                        <div className="text-[13px] mt-4 space-y-2.5 sm:mt-1.5">
                            <span>Sleeps 4 | 2 King | {sqmts} m²</span>
                            <div className="w-2/3 sm:w-full">This unique suite overlooks Baie Longue with an alfresco dining area for breakfasts with a view.</div>
                            <ul className="list-inside list-disc">
                                <li>Private infinity pool</li>
                                <li>Private infinity pool</li>
                                <li>Private infinity pool</li>
                            </ul>
                            <div>
                                <span className="mb-0.5 border-b border-ecru cursor-pointer">Room details</span>
                            </div>
                        </div>
                    </div>

                    <hr />

                    <div className="mt-3 space-y-5 xl:space-y-3 sm:space-y-0">
                        <div className="flex justify-between">
                            <span className="xl:text-sm">ROOM RATE</span>
                            <div className="flex flex-col items-end">
                                <span>€ {price * endDate?.diff(startDate, 'days') || '...'}</span>
                                <span className="text-xs font-light mb-0.5">Total for {endDate?.diff(startDate, 'days') || '...'} nights</span>
                                <span className="text-xs font-light">Including Taxes & Fees</span>
                            </div>
                        </div>
                        <div className="flex justify-between xl:justify-end sm:justify-start">
                            <span className="text-[13px] w-2/3 2xl:truncate 2xl:whitespace-normal 2xl:h-10 xl:hidden">Enjoy a blissful night&apos;s sleep in St Martin and wake up to paradise each morning.</span>
                            <button onClick={handleClick} className="text-sm rounded font-light tracking-wider text-asphalt px-5 py-2 transition-all border border-ecru/30 hover:border-ecru bg-ecru/20 hover:bg-ecru/30">
                                {selectedRoom?._id === room._id ? 'Keep Room' : 'Book Now'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default RoomCard
