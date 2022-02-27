import Head from "next/head"
import Layout from "../components/layout/Layout"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { SearchIcon } from "@heroicons/react/outline"
import Register from "../components/reservations/Register"
import Login from "../components/reservations/Login"
import { useRouter } from "next/router"
import api from "../api/axios"
import requests from "../api/requests"
import { useNotification } from '../components/assets/notifications/NotificationProvider'
import ReservationCard from "../components/reservations/ReservationCard"
import LoginInfo from "../components/reservations/LoginInfo"
import ProfileInfo from "../components/reservations/ProfileInfo"

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

    const dispatchNotification = useNotification()

    const { user } = useSelector(state => state.user)
    const router = useRouter()
    const { reservationId } = router.query

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
        router.replace('/reservations')

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
                                            <ReservationCard key={r._id} r={r} />
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
                                            <ReservationCard r={reservation} />
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
                            <ProfileInfo reservations={reservations} />
                            :
                            <LoginInfo setIsModalOpen={setIsModalOpen} />
                    }
                </section>
            </main>
            <Register isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
            <Login isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        </Layout>
    )
}

export default Reservations
