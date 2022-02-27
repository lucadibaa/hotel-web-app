import Head from "next/head"
import Layout from "../components/layout/Layout"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../redux/userActions"
import useWindowSize from "../utils/useWindowSize"
import { useEffect, useState } from "react"
import { ChevronDownIcon, ChevronUpIcon, CreditCardIcon, SearchIcon, UserGroupIcon, UsersIcon } from "@heroicons/react/outline"
import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi"
import { BiEuro } from "react-icons/bi"
import Register from "../components/reservations/Register"
import Login from "../components/reservations/Login"
import { useRouter } from "next/router"
import api from "../api/axios"
import requests from "../api/requests"
import { useNotification } from '../components/assets/notifications/NotificationProvider'
import moment from "moment"
import Image from "next/image"
import { capitalize } from "../utils/functions"

export const getServerSideProps = async ({ query: { reservationId: id } }) => {
    try {
        const res = id && await api.get(`/reservations/${id}`)

        return {
            props: {
                reservation: res?.data.reservation || null,
            }
        }
    } catch (err) {
        const error = err?.response?.data?.message
        console.log(error)

        return {
            props: {
                error
            }
        }
    }
}

const Reservations = ({ reservation, error }) => {

    const dispatch = useDispatch()
    const dispatchNotification = useNotification()

    const { user } = useSelector(state => state.user)
    const router = useRouter()
    const { reservationId } = router.query

    const { width } = useWindowSize()

    const [isHidden, setIsHidden] = useState(true)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [search, setSearch] = useState('')
    const [reservations, setReservations] = useState([])

    const handleSubmit = e => {
        e.preventDefault()
        if (!search.match(/^[0-9a-fA-F]{24}$/)) return dispatchNotification({ type: "WARNING", message: 'Invalid reservation id' })
        router.replace({
            pathname: '/reservations',
            query: {
                reservationId: search
            }
        })
    }

    useEffect(() => {
        const getReservationsByUserId = async () => {
            try {
                const res = await api.get(requests.getReservationsByUserId)
                setReservations(res?.data.reservations)
            } catch (err) {
                console.log(err)
            }
        }
        Object.entries(user).length > 0 && getReservationsByUserId()
    }, [user])

    const data = {
        nights: 0,
        total: 0
    }
    reservations?.forEach(r => {
        data.nights += r.nights
        data.total += r.total
    })

    console.log(reservation)

    return (
        <Layout noBanner>
            <Head>
                <title>Gold Arc Hotel | Reservations</title>
            </Head>

            <main className="mt-24 max-w-[90%] mx-auto min-h-[60vh] flex justify-between pb-10 sm:mt-0 sm:pt-4 sm:flex-col-reverse">

                <section>
                    {
                        Object.keys(user).length > 0 ?
                            <div>
                                <h2 className="text-2xl text-left mt-14 mb-6 font-Sofia tracking-wider font-light text-asphalt uppercase lg:mt-10 lg:mb-4 md:my-3">Your Reservations</h2>
                                <div className="flex flex-col gap-4">
                                    {
                                        reservations?.map(r => (
                                            <div key={r._id} className="bg-white border rounded shadow p-3 text-asphalt ">
                                                <div className="flex items-center justify-between text-sm">
                                                    <span className="tracking-wide">Reservation N°</span>
                                                    <span className="text-[13px]">{r._id}</span>
                                                </div>

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
                                        ))
                                    }
                                </div>
                            </div>
                            :
                            <div>
                                <h2 className="text-2xl text-left mt-14 mb-6 font-Sofia tracking-wider font-light text-asphalt uppercase lg:mt-10 lg:mb-4 md:my-3">Find Your Reservation</h2>
                                <form className="relative" onSubmit={handleSubmit}>
                                    <input className="text-gray-600 focus:outline-none focus:border focus:border-ecru w-full h-10 pl-2 border border-gray-300 rounded text-sm" type="text" placeholder="Enter your reservation id" onChange={e => setSearch(e.target.value)} value={search} />
                                    <button type="submit" className="px-1.5 text-asphalt absolute right-1.5 top-0 bottom-0 m-auto cursor-pointer">
                                        <SearchIcon className="h-5" />
                                    </button>
                                </form>
                                <div className="mt-5">
                                    {
                                        reservation ?
                                            <div className="bg-white border rounded shadow p-3 text-asphalt ">
                                                <div className="flex items-center justify-between text-sm">
                                                    <span className="tracking-wide">Reservation N°</span>
                                                    <span className="text-[13px]">{reservation._id}</span>
                                                </div>

                                                <hr className="bg-jungle/10 h-0.5 m-2.5 sm:m-2" />

                                                <div className="flex">
                                                    <div className="relative w-44 h-28 overflow-hidden">
                                                        <Image
                                                            src={'https://res.cloudinary.com/drpbnvds9/image/upload/v1643291972/hotel%20web%20app/rooms%20list/banner_gpixcx.jpg'}
                                                            alt={reservation.roomSlug}
                                                            layout="fill"
                                                            objectFit="cover"
                                                            className="rounded"
                                                        />
                                                    </div>
                                                    <div className="flex flex-col gap-1.5 grow px-4">

                                                        <h3 className="font-PlayfairDisplay font-semibold tracking-wide text-camel">{capitalize(reservation.roomSlug.replaceAll("-", " "))} </h3>

                                                        <div className="flex items-center justify-between text-sm">
                                                            <div className="flex items-center">
                                                                <UserGroupIcon className="h-4 mr-2" />
                                                                <span>N° of Guests</span>
                                                            </div>
                                                            <span>{reservation.guestsNumber}</span>
                                                        </div>

                                                        <div className="flex items-center justify-between text-sm">
                                                            <div className="flex items-center">
                                                                <UserGroupIcon className="h-4 mr-2" />
                                                                <span>N° of Nights</span>
                                                            </div>
                                                            <span>{reservation.nights}</span>
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
                                                        <span>{moment(reservation.arrival).format('ddd DD, MMM YYYY')}</span>
                                                    </div>

                                                    <div className="flex items-center justify-between text-sm">
                                                        <div className="flex items-center">
                                                            <GiAirplaneDeparture className="text-base mr-3" />
                                                            <span>Departure</span>
                                                        </div>
                                                        <span>{moment(reservation.departure).format('ddd DD, MMM YYYY')}</span>
                                                    </div>

                                                </div>

                                                <hr className="bg-jungle/10 h-0.5 m-2.5 sm:m-2" />

                                                <div className="flex flex-col gap-1.5">

                                                    <div className="flex items-center justify-between text-sm">
                                                        <div className="flex items-center">
                                                            <CreditCardIcon className="h-4 mr-3" />
                                                            <span>Payment</span>
                                                        </div>
                                                        <span>{reservation.payment}</span>
                                                    </div>

                                                    <div className="flex items-center justify-between text-sm">
                                                        <div className="flex items-center">
                                                            <BiEuro className="text-base mr-3" />
                                                            <span>Total</span>
                                                        </div>
                                                        <span>{reservation.total} €</span>
                                                    </div>

                                                </div>

                                            </div>
                                            :
                                            reservationId &&
                                            <div>
                                                no reservation match that id
                                            </div>
                                    }
                                </div>
                            </div>
                    }
                </section>

                <section>
                    {
                        Object.keys(user).length > 0 ?
                            <>
                                <div className={`h-auto pb-5 mb-3 bg-camel/30 rounded-sm w-80 lg:w-2/3 lg:mx-auto sm:w-11/12 ${isHidden && width < 639 && 'h-10 pb-0'}`}>
                                    <section>
                                        <div className={`flex justify-between items-end pb-3`}>
                                            <h2 className={`pl-5 pt-3 text-lg font-Sofia tracking-wider text-asphalt xl:text-base`}>PROFILE INFO</h2>
                                            <div className={`hidden sm:block`} onClick={() => setIsHidden(!isHidden)}>
                                                {
                                                    isHidden ?
                                                        <ChevronDownIcon className="text-asphalt h-5 mr-3.5" />
                                                        :
                                                        <ChevronUpIcon className="text-asphalt h-5 mr-3.5" />
                                                }
                                            </div>
                                        </div>
                                    </section>
                                    {
                                        ((!isHidden && width < 639) || width > 639) &&
                                        <>
                                            <hr className="bg-jungle/20 h-0.5 mx-4" />

                                            <section className="mt-4 px-5 space-y-4 sm:space-y-2 sm:mt-2">
                                                <div className="space-y-1">
                                                    <div className="flex justify-between text-sm font-light">
                                                        <span>Name:</span>
                                                        <span>{user.firstName}</span>
                                                    </div>
                                                    <div className="flex justify-between text-sm font-light">
                                                        <span>Surname:</span>
                                                        <span>{user.lastName}</span>
                                                    </div>
                                                    <div className="flex justify-between text-sm font-light">
                                                        <span>Email:</span>
                                                        <span>{user.email}</span>
                                                    </div>
                                                </div>
                                            </section>

                                            <hr className="bg-jungle/20 h-0.5 mx-4 my-5 sm:my-2" />

                                            <section className="px-5 space-y-4 sm:space-y-2">
                                                <div className="space-y-1">
                                                    <div className="flex justify-between text-sm font-light">
                                                        <span>Number of reservations:</span>
                                                        <span>{reservations?.length}</span>
                                                    </div>
                                                    <div className="flex justify-between text-sm font-light">
                                                        <span>Nights spent at the hotel:</span>
                                                        <span>{data.nights}</span>
                                                    </div>
                                                    <div className="flex justify-between text-sm font-light">
                                                        <span>Total spent:</span>
                                                        <span>{data.total} €</span>
                                                    </div>
                                                </div>
                                            </section>
                                        </>
                                    }
                                </div>
                                <div className="w-full flex justify-end sm:pr-3">
                                    <button onClick={() => dispatch(logout())} className="text-sm rounded font-light tracking-wider px-3.5 py-2 transition-all border border-gray-700/30 hover:border-gray-700/50 bg-gray-300/20 hover:bg-gray-300/40">
                                        Logout
                                    </button>
                                </div>
                            </>
                            :
                            <section className="h-auto bg-camel/30 rounded-sm w-80 text-sm p-5 lg:w-2/3 lg:mx-auto sm:w-11/12">
                                <div className="flex flex-col space-y-3">
                                    <h6>Login for faster booking and reservations management</h6>
                                    <button onClick={() => setIsModalOpen('login')} type="button" className="self-end text-sm rounded font-light tracking-wider text-snow px-5 py-2 transition-all border border-jungle/30 hover:border-jungle/60 bg-moss/70 hover:bg-moss/60">
                                        Login
                                    </button>
                                </div>
                                <hr className="bg-jungle/20 h-0.5 mx-2 my-5 sm:my-2" />
                                <p>Having an account offer easy managing or cancelling your bookings and simplify future bookings.</p>
                            </section>
                    }
                </section>
            </main>
            <Register isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
            <Login isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        </Layout>
    )
}

export default Reservations