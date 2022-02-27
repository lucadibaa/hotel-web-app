import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../../redux/userActions"
import useWindowSize from "../../utils/useWindowSize"

const ProfileInfo = ({ reservations }) => {
    const [isHidden, setIsHidden] = useState(true)
    const dispatch = useDispatch()

    const { user } = useSelector(state => state.user)
    const { width } = useWindowSize()

    const data = {
        nights: 0,
        total: 0
    }

    reservations?.forEach(r => {
        data.nights += r.nights
        data.total += r.total
    })

    return (
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
    )
}

export default ProfileInfo
