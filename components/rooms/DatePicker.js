import Link from "next/link"
import { useEffect, useState } from "react"
import { DateRangePicker } from "react-dates"
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'

const DatePicker = ({ show, setShow }) => {

    const [datesRange, setDatesRange] = useState({
        startDate: null,
        endDate: null
    })

    const [focus, setFocus] = useState(null)

    const navbarTransition = () => {
        if (window.scrollY > 290) {
            setShow(true)
        } else {
            setShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', navbarTransition)
        return () => window.removeEventListener('scroll', navbarTransition)
    }, [])

    return (
        <div className={`w-full h-16 bg-white font-Sofia shadow flex items-center justify-between px-[2%] ${show && 'fixed top-20 z-40'}`}>
            <div className="flex-[2] flex gap-8">
                <select className="flex-[2] select">
                    <option className="option" value="" selected disabled>Select Room</option>
                    <option className="option" value="Historic Garden Room">Historic Garden Room</option>
                    <option className="option" value="Historic Ocean Room">Historic Ocean Room</option>
                </select>
                <select className="flex-[1.5] select">
                    <option className="option" value="" selected disabled>Guests</option>
                    <option className="option" value="1">1 Adult Per Room</option>
                    <option className="option" value="2">2 Adults Per Room</option>
                    <option className="option" value="3">3 Adults Per Room</option>
                    <option className="option" value="4">4 Adults Per Room</option>
                    <option className="option" value="5">5 Adults Per Room</option>
                    <option className="option" value="6">6 Adults Per Room</option>
                </select>
            </div>
            <div className="flex-[1.5] flex justify-center">
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
                {/* <Link href="/booking"> */}
                <button className="w-full rounded font-light tracking-wider text-asphalt px-5 py-2 transition-all border border-ecru/30 hover:border-ecru bg-ecru/20 hover:bg-ecru/30">
                    Book Now
                </button>
                {/* </Link> */}
            </div>
        </div>
    )
}

export default DatePicker
