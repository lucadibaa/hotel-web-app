import Head from "next/head"
import Layout from "../../components/layout/Layout"
import Stepper from "../../components/booking/Stepper"
import { useRouter } from "next/router"
import { capitalize } from "../../utils/functions"
import { LockClosedIcon } from "@heroicons/react/solid"
import api from "../../api/axios"
import { useDispatch, useSelector } from "react-redux"
import requests from "../../api/requests"
import { clear } from "../../redux/bookingSlice"
import { useNotification } from "../../components/assets/notifications/NotificationProvider"

const Confirmation = () => {

    const dispatchNotification = useNotification()
    const dispatch = useDispatch()
    const router = useRouter()
    const { total } = useSelector(state => state.booking)
    const { firstName, lastName, email, cell, requests: preferences, payment, arrival, departure, nights, guests, roomSlug } = router.query

    const handleClick = () => {
        router.push({
            pathname: '/booking/details',
            query: router.query
        })
    }

    const handleConfirm = async () => {
        try {
            const res = await api.post(requests.generateReservation, { ...router.query, total })
            dispatchNotification({ type: 'SUCCESS', message: 'Reservation successfully created' })
            dispatch(clear())

            if (payment === 'hotel') {
                router.push({
                    pathname: 'success',
                    query: {
                        reservationId: res.data?.id
                    }
                })
            } else {
                // redirect to stripe payment
            }
        } catch (err) {
            dispatchNotification({ type: 'ERROR', message: `${err.message} Please try again Later.` })
        }
    }

    return (
        <Layout noBanner>
            <Head>
                <title>Gold Arc Hotel | Booking</title>
            </Head>

            <main className="mt-24 max-w-[75%] mx-auto pb-16 flex flex-col gap-6">

                <section className="bg-white w-full h-32 border-b shadow-sm">
                    <h2 className="pl-5 py-1.5 text-2xl font-Sofia tracking-wide text-asphalt mb-2">Booking details</h2>
                    <Stepper active={3} />
                </section>

                <section className="bg-white w-full border-b shadow rounded p-3">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-Sofia tracking-wide text-asphalt">GUEST INFO</h2>
                    </div>
                    <div className="w-1/2 mt-2 space-y-0.5">
                        <div className="flex justify-between">
                            <span className="font-medium xl:font-normal">First Name:</span>
                            <span className="xl:font-light">{firstName}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium xl:font-normal">Last Name:</span>
                            <span className="xl:font-light">{lastName}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium xl:font-normal">Email:</span>
                            <span className="xl:font-light">{email}</span>
                        </div>
                        <div className={`flex justify-between ${!cell && 'hidden'}`}>
                            <span className="font-medium xl:font-normal">Cell Phone:</span>
                            <span className="xl:font-light">{cell}</span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                        <h2 className="text-xl font-Sofia tracking-wide text-asphalt">BOOKING INFO</h2>
                    </div>
                    <div className="w-1/2 mt-2 space-y-0.5">
                        <div className="flex justify-between">
                            <span className="font-medium xl:font-normal">Check In:</span>
                            <span className="xl:font-light">{arrival?.replaceAll("-", "/")}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium xl:font-normal">Check Out:</span>
                            <span className="xl:font-light">{departure?.replaceAll("-", "/")}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium xl:font-normal">Room:</span>
                            <span className="xl:font-light">{capitalize(roomSlug?.replaceAll("-", " "))}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium xl:font-normal">N° of Nights:</span>
                            <span className="xl:font-light">{nights}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium xl:font-normal">N° of Guests:</span>
                            <span className="xl:font-light">{guests}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium xl:font-normal">Payment:</span>
                            <span className="xl:font-light">{capitalize(payment)}</span>
                        </div>
                        <div className={`flex flex-col  ${!preferences && 'hidden'}`}>
                            <span className="font-medium xl:font-normal">Requests:</span>
                            <span className="xl:font-light w-full p-1.5 border rounded">{preferences}</span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                        <h2 className="text-xl font-Sofia tracking-wide text-asphalt">PAYMENT INFO</h2>
                    </div>
                    <div className="w-1/2 mt-2 space-y-0.5">
                        <div className="flex justify-between">
                            <span className="font-medium xl:font-normal">Type of Payment:</span>
                            <span className="xl:font-light">{capitalize(payment)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium xl:font-normal">Total:</span>
                            <span className="xl:font-light">{total} €</span>
                        </div>
                    </div>
                </section>

                <section className="flex items-center justify-between">
                    <button onClick={handleClick} type="button" className="text-sm rounded font-light tracking-wid text-jungle px-4 py-2 transition-all border border-jungle/30 hover:border-jungle/60 bg-white">
                        Previous Step
                    </button>
                    <button onClick={handleConfirm} type="button" className="flex items-center font-medium text-sm rounded tracking-wider text-asphalt px-5 py-2 transition-all border border-ecru hover:border-jungle/20 bg-ecru/40 hover:bg-ecru/90">
                        <LockClosedIcon className="h-4 mr-1.5" />
                        {payment === 'hotel' ? 'Confirm' : 'Proceed to Payment'}
                    </button>
                </section>

            </main>
        </Layout>
    )
}

export default Confirmation
