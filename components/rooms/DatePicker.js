import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline"
import moment from "moment"
import Link from "next/link"
import { useRouter } from "next/router"
import { useCallback, useEffect, useState } from "react"
import { DateRangePicker } from "react-dates"
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import useWindowSize from "../../utils/useWindowSize"

const DatePicker = ({ show, setShow, isHidden, setIsHidden, rooms }) => {

    const router = useRouter()
    const { width } = useWindowSize()

    const [datesRange, setDatesRange] = useState({
        startDate: null,
        endDate: null
    })

    const [focus, setFocus] = useState(null)

    const navbarTransition = useCallback(() => {
        const x = width > 1279 ? 200 : width > 767 ? 215 : width > 639 ? 230 : 280
        if (window.scrollY > x) {
            setShow(true)
        } else {
            setShow(false)
        }
    }, [setShow])

    useEffect(() => {
        window.addEventListener('scroll', navbarTransition)
        return () => window.removeEventListener('scroll', navbarTransition)
    }, [navbarTransition])

    const [guests, setGuests] = useState('')
    const [selectedRoom, setSelectedRoom] = useState('')

    const handleClick = () => {
        let query = {}
        query.arrival = datesRange.startDate ? moment(datesRange.startDate).format('DD-MM-YYYY') : undefined
        query.departure = datesRange.endDate ? moment(datesRange.endDate).format('DD-MM-YYYY') : undefined
        query.nights = datesRange.endDate?.diff(datesRange.startDate, 'days') || undefined
        query.guests = guests || undefined
        query.room = selectedRoom || undefined

        router.push({
            pathname: '/booking',
            query
        })
    }

    return isHidden && width < 639 ?
        <div className="fixed top-0 right-2 bg-white px-1 rounded-b z-40" onClick={() => setIsHidden(false)}>
            <ChevronDownIcon className="h-5 text-asphalt" />
        </div>
        :
        <div className={`w-full h-16 bg-white font-Sofia shadow flex items-center justify-between px-[2%] lg:flex-col lg:h-32 lg:px-[6%] md:h-[6.5rem] md:py-1 sm:h-44 sm:space-y-1.5 sm:py-2 ${show && 'fixed top-20 z-40 xl:top-16 md:top-12 sm:top-0'}`}>
            <div className="flex-1 flex items-center w-full gap-8 sm:flex-col sm:gap-1.5">
                <div className="sm:self-start sm:flex-[1.5] flex items-center sm:w-full justify-between">
                    <select className="select" defaultValue="" onChange={e => setSelectedRoom(e.target.value)}>
                        <option className="option" value="" disabled>Select Room</option>
                        {
                            rooms?.map(r => (
                                <option className="option" key={r._id} value={r.name}>{r.name}</option>
                            ))
                        }
                    </select>
                    <div className={`hidden sm:flex items-center space-x-1.5 ${!show && 'sm:hidden'}`} onClick={() => setIsHidden(true)}>
                        <span className="text-xs">Hide:</span>
                        <ChevronUpIcon className="h-4 text-asphalt" />
                    </div>
                </div>
                <select className="flex-[1.5] select sm:self-end" onChange={e => setGuests(e.target.value)} defaultValue="">
                    <option className="option" value="" disabled>Guests</option>
                    <option className="option" value="1">1 Adult Per Room</option>
                    <option className="option" value="2">2 Adults Per Room</option>
                    <option className="option" value="3">3 Adults Per Room</option>
                    <option className="option" value="4">4 Adults Per Room</option>
                    <option className="option" value="5">5 Adults Per Room</option>
                    <option className="option" value="6">6 Adults Per Room</option>
                </select>
            </div>
            <div className="flex items-center justify-between w-full flex-[1.05] sm:flex-col">
                <div className="flex-[1.5] flex justify-center lg:justify-start">
                    <DateRangePicker
                        startDate={datesRange.startDate}
                        startDateId="your_unique_start_date_id"
                        endDate={datesRange.endDate}
                        displayFormat="DD MMM YYYY"
                        endDateId="your_unique_end_date_id"
                        onDatesChange={({ startDate, endDate }) => setDatesRange({ startDate, endDate })}
                        focusedInput={focus}
                        onFocusChange={focus => setFocus(focus)}
                        minimumNights={2}
                        endDatePlaceholderText="Check Out"
                        startDatePlaceholderText="Check In"
                        customArrowIcon={
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 text-camel" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        }
                    />
                </div>
                <div className="flex-[.6] flex justify-end">
                    <button onClick={handleClick} className="w-full rounded font-light tracking-wider text-asphalt px-5 py-2 transition-all border border-ecru/30 hover:border-ecru bg-ecru/20 hover:bg-ecru/30 sm:py-1 sm:px-4">
                        Book Now
                    </button>
                </div>
            </div>
        </div>

}

export default DatePicker
