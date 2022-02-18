import Head from "next/head"
import Layout from "../../components/layout/Layout"
import GuestsDatesSelector from "../../components/booking/GuestsDatesSelector"
import Stepper from "../../components/booking/Stepper"
import Filters from "../../components/booking/Filters"
import RoomCard from "../../components/booking/RoomCard"
import { useState } from "react"
import moment from "moment"
import { useRouter } from "next/router"
import { toAmerican } from "../../utils/functions"
import InfoSection from "../../components/booking/InfoSection"

const Booking = () => {

    const rooms = [
        {
            name: 'Historic Garden Room',
            img: 'https://res.cloudinary.com/drpbnvds9/image/upload/v1643291972/hotel%20web%20app/rooms%20list/banner_gpixcx.jpg',
            bed: 'Double Bed',
            guests: 'For Couples | Up to 2 Guests',
            breakfast: true,
            sqmts: '24',
            ratings: '4.5',
            price: '80'
        },
        {
            name: 'Historic Ocean Room',
            img: 'https://res.cloudinary.com/drpbnvds9/image/upload/v1643824852/hotel%20web%20app/rooms%20list/historic-ocean_xntkek.jpg',
            bed: '2 Double Beds',
            guests: 'Up to 4 Guests',
            breakfast: false,
            ratings: '4.8',
            sqmts: '35',
            price: '130'
        },
    ]

    const router = useRouter()
    const { arrival, departure, guests: qGuests, room } = router.query

    const [guests, setGuests] = useState(qGuests || '2')
    const [searchInput, setSearchInput] = useState(room || '')

    const [datesRange, setDatesRange] = useState({
        startDate: arrival ? moment(toAmerican(arrival)) : moment(),
        endDate: departure ? moment(toAmerican(departure)) : moment().add(2, 'days')
    })

    return (
        <Layout noBanner>
            <Head>
                <title>Gold Arc Hotel | Booking</title>
            </Head>

            <main className="mt-24 max-w-[75%] mx-auto pb-20 flex gap-6 2xl:max-w-[85%] 2xl:gap-4 xl:mt-20 lg:flex-col-reverse lg:max-w-[90%] sm:mt-4">

                {/* Left */}
                <div className="flex-[3] space-y-3 lg:flex-none">
                    <section className="w-full bg-white h-16 font-Sofia border-b shadow-sm flex items-center justify-evenly md:h-24">
                        <GuestsDatesSelector datesRange={datesRange} setDatesRange={setDatesRange} guests={guests} setGuests={setGuests} />
                    </section>

                    <section className="bg-white h-28 border-b shadow-sm">
                        <h2 className="pl-5 py-1.5 text-xl font-Sofia tracking-wide text-asphalt">Select a Room</h2>
                        <Stepper active={1} />
                    </section>

                    <section className="bg-white h-16 border-b shadow-sm flex items-center justify-end space-x-10 pr-10 sm:px-2 sm:space-x-8">
                        <Filters searchInput={searchInput} setSearchInput={setSearchInput} />
                    </section>

                    <section className="pt-2 sm:pt-0.5">
                        <div className="flex flex-wrap gap-2">
                            {
                                rooms?.filter(r => r.name.toLowerCase().includes(searchInput.toLowerCase())).map(r => (
                                    <RoomCard key={r.price} name={r.name} img={r.img} bed={r.bed} guests={r.guests} breakfast={r.breakfast} sqmts={r.sqmts} price={r.price} selectedGuests={guests} datesRange={datesRange} />
                                ))
                            }
                        </div>
                    </section>

                </div>

                {/* Right */}
                <InfoSection startDate={datesRange.startDate} endDate={datesRange.endDate} guests={guests} />

            </main>

        </Layout>
    )
}

export default Booking
