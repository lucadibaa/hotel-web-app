import moment from "moment"
import Image from "next/image"
import { CreditCardIcon, UserGroupIcon } from "@heroicons/react/outline"
import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi"
import { BiEuro } from "react-icons/bi"
import { useSelector } from "react-redux"
import { capitalize } from "../../utils/functions"

const ReservationCard = ({ r }) => {

    const { user } = useSelector(state => state.user)

    return (
        <div className="bg-white border rounded shadow p-3 text-asphalt ">
            <div className="flex items-center justify-between text-sm">
                <span className="tracking-wide">Reservation N°</span>
                <span className="text-[13px]">{r._id}</span>
            </div>

            {
                Object.keys(user).length === 0 &&
                <>
                    <hr className="bg-jungle/10 h-0.5 m-2.5 sm:m-2" />

                    <div className="flex flex-col gap-1">
                        <h4 className="text-sm">GUEST INFO</h4>

                        <div className="flex justify-between mx-3">

                            <div className="flex flex-col text-sm tracking-wide">
                                <span>First Name</span>
                                <span>Last Name</span>
                                <span>Email</span>
                            </div>

                            <div className="flex flex-col text-sm">
                                <span>{r.guest?.firstName}</span>
                                <span>{r.guest?.lastName}</span>
                                <span>{r.guest?.email}</span>
                            </div>

                        </div>
                    </div>
                </>
            }

            <hr className="bg-jungle/10 h-0.5 m-2.5 sm:m-2" />

            <div className="flex">
                <div className="relative w-44 h-28 overflow-hidden">
                    <Image
                        src={'https://res.cloudinary.com/drpbnvds9/image/upload/v1643291972/hotel%20web%20app/rooms%20list/banner_gpixcx.jpg'}
                        alt={r.roomSlug}
                        layout="fill"
                        objectFit="cover"
                        className="rounded"
                    />
                </div>
                <div className="flex flex-col gap-1.5 grow px-4">

                    <h3 className="font-PlayfairDisplay font-semibold tracking-wide text-camel">{capitalize(r.roomSlug.replaceAll("-", " "))} </h3>

                    <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center">
                            <UserGroupIcon className="h-4 mr-2" />
                            <span>N° of Guests</span>
                        </div>
                        <span>{r.guestsNumber}</span>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center">
                            <UserGroupIcon className="h-4 mr-2" />
                            <span>N° of Nights</span>
                        </div>
                        <span>{r.nights}</span>
                    </div>

                </div>
            </div>

            <hr className="bg-jungle/10 h-0.5 m-2.5 sm:m-2" />

            <div className="flex flex-col gap-1.5">

                <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                        <GiAirplaneArrival className="text-base mr-3" />
                        <span>Arrival</span>
                    </div>
                    <span>{moment(r.arrival).format('ddd DD, MMM YYYY')}</span>
                </div>

                <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                        <GiAirplaneDeparture className="text-base mr-3" />
                        <span>Departure</span>
                    </div>
                    <span>{moment(r.departure).format('ddd DD, MMM YYYY')}</span>
                </div>

            </div>

            <hr className="bg-jungle/10 h-0.5 m-2.5 sm:m-2" />

            <div className="flex flex-col gap-1.5">

                <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                        <CreditCardIcon className="h-4 mr-3" />
                        <span>Payment</span>
                    </div>
                    <span>{r.payment}</span>
                </div>

                <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                        <BiEuro className="text-base mr-3" />
                        <span>Total</span>
                    </div>
                    <span>{r.total} €</span>
                </div>

            </div>

        </div>
    )
}

export default ReservationCard
