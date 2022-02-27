import Head from "next/head"
import Layout from "../../components/layout/Layout"
import GuestsDatesSelector from "../../components/booking/GuestsDatesSelector"
import Stepper from "../../components/booking/Stepper"
import Filters from "../../components/booking/Filters"
import RoomCard from "../../components/booking/RoomCard"
import { useEffect, useState } from "react"
import moment from "moment"
import { useRouter } from "next/router"
import { toAmerican } from "../../utils/functions"
import InfoSection from "../../components/booking/InfoSection"
import api from "../../api/axios"

export const getServerSideProps = async ({ query: { arrival, departure } }) => {

    try {
        const res = await api.get(`/rooms/availables?arrival=${arrival}&departure=${departure}`)

        return {
            props: {
                rooms: res.data?.availableRooms
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

const Booking = ({ rooms }) => {
    const router = useRouter()
    const { arrival, departure, guests: qGuests, room } = router.query

    const [guests, setGuests] = useState(qGuests || '2')
    const [searchInput, setSearchInput] = useState(room || '')

    const [datesRange, setDatesRange] = useState({
        startDate: arrival ? moment(toAmerican(arrival)) : moment(),
        endDate: departure ? moment(toAmerican(departure)) : moment().add(2, 'days')
    })

    useEffect(() => {
        // if (moment(datesRange.startDate).format('DD-MM-YYYY').isValid() && moment(datesRange.endDate).format('DD-MM-YYYY').isValid())
        router.replace({
            pathname: '/booking',
            query: {
                arrival: moment(datesRange.startDate).format('DD-MM-YYYY'),
                departure: moment(datesRange.endDate).format('DD-MM-YYYY'),
            }
        })
    }, [datesRange])

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
                                    <RoomCard key={r._id} room={r} name={r.name} slug={r.slug} img={r.image} guests={r.guests} price={r.price} info={r.info} selectedGuests={guests} datesRange={datesRange} />
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
