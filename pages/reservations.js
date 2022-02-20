import Head from "next/head"
import Layout from "../components/layout/Layout"
import { useDispatch, useSelector } from "react-redux"
import { logout, register } from "../redux/userActions"
import useWindowSize from "../utils/useWindowSize"
import { useState } from "react"
import { ChevronDownIcon, ChevronUpIcon, SearchIcon } from "@heroicons/react/outline"
import Register from "../components/reservations/Register"
import Login from "../components/reservations/Login"

const Reservations = () => {

    const dispatch = useDispatch()

    const { user } = useSelector(state => state.user)

    const { width } = useWindowSize()

    const [isHidden, setIsHidden] = useState(true)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()
        // call api + swallow routing
    }

    return (
        <Layout noBanner>
            <Head>
                <title>Gold Arc Hotel | Reservations</title>
            </Head>

            <main className="mt-24 max-w-[90%] mx-auto h-[calc(60vh-6rem)] flex justify-between pb-10">

                <section className="w-1/3">
                    {
                        Object.keys(user).length > 0 ?
                            <div>
                                <h2 className="text-2xl text-left mt-14 mb-6 font-Sofia tracking-wider font-light text-asphalt uppercase lg:mt-10 lg:mb-4 md:my-3">Your Reservations</h2>
                                <div>
                                    {/* reservations list */}
                                </div>
                            </div>
                            :
                            <div>
                                <h2 className="text-2xl text-left mt-14 mb-6 font-Sofia tracking-wider font-light text-asphalt uppercase lg:mt-10 lg:mb-4 md:my-3">Find Your Reservation</h2>
                                <form className="relative" onSubmit={handleSubmit}>
                                    <input className="text-gray-600 focus:outline-none focus:border focus:border-ecru w-full h-10 pl-2 border border-gray-300 rounded text-sm" type="text" placeholder="Enter your reservation id" />
                                    <button type="submit" className="px-1.5 text-asphalt absolute right-1.5 top-0 bottom-0 m-auto cursor-pointer">
                                        <SearchIcon className="h-5" />
                                    </button>
                                </form>
                                <div>
                                    {/* reservation box */}
                                </div>
                            </div>
                    }
                </section>

                <section className="">
                    {
                        Object.keys(user).length > 0 ?
                            <>
                                <div className={`h-auto pb-5 mb-3 bg-camel/30 rounded-sm w-80 lg:w-2/3 lg:mx-auto sm:w-11/12 ${isHidden && width < 639 && 'h-10'}`}>
                                    <section>
                                        <div className={`flex justify-between items-end ${isHidden && width < 639 && 'pb-3'}`}>
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
                                                        <span>3</span>
                                                    </div>
                                                    <div className="flex justify-between text-sm font-light">
                                                        <span>Nights spent at the hotel:</span>
                                                        <span>12</span>
                                                    </div>
                                                    <div className="flex justify-between text-sm font-light">
                                                        <span>Total spent:</span>
                                                        <span>859 €</span>
                                                    </div>
                                                </div>
                                            </section>
                                        </>
                                    }
                                </div>
                                <div className="w-full flex justify-end">
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