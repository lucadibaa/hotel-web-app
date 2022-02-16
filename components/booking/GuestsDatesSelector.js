import { useState } from "react"
import { DateRangePicker } from "react-dates"
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'

const GuestsDatesSelector = ({ datesRange, setDatesRange, guests, setGuests }) => {

    const [focus, setFocus] = useState(null)

    return (
        <div className="flex justify-evenly items-center w-full md:flex-col-reverse md:items-start md:px-3 md:gap-1.5 sm:items-center">
            <div className="flex items-center gap-3 md:self-end sm:self-center" >
                <select className="select 2xl:h-9 2xl:py-0" onChange={e => setGuests(e.target.value)}>
                    <option className="option" selected={guests === '' ? true : false} value="" disabled>Guests</option>
                    <option className="option" selected={guests === '1' ? true : false} value="1">1 Adult</option>
                    <option className="option" selected={guests === '2' ? true : false} value="2">2 Adults</option>
                    <option className="option" selected={guests === '3' ? true : false} value="3">3 Adults</option>
                    <option className="option" selected={guests === '4' ? true : false} value="4">4 Adults</option>
                    <option className="option" selected={guests === '5' ? true : false} value="5">5 Adults</option>
                    <option className="option" selected={guests === '6' ? true : false} value="6">6 Adults</option>
                </select>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 text-camel" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            </div>
            <div className="flex justify-center">
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
        </div >
    )
}

export default GuestsDatesSelector
