import Head from "next/head"
import Layout from "../components/layout/Layout"
import GuestsDatesSelector from "../components/booking/GuestsDatesSelector"
import Stepper from "../components/booking/Stepper"
import Filters from "../components/booking/Filters"
import RoomCard from "../components/booking/RoomCard"

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

    return (
        <Layout noBanner>
            <Head>
                <title>Gold Arc Hotel | Booking</title>
            </Head>

            <main className="mt-24 max-w-[75%] mx-auto pb-20 flex gap-6">

                {/* Left */}
                <div className="w-3/4 space-y-3">
                    <section className="w-full bg-white h-16 font-Sofia border-b shadow-sm flex items-center justify-evenly">
                        <GuestsDatesSelector />
                    </section>

                    <section className="bg-white h-28 border-b shadow-sm">
                        <h2 className="pl-5 py-1.5 text-xl font-Sofia tracking-wide text-asphalt">Select a Room</h2>
                        <Stepper />
                    </section>

                    <section className="bg-white h-16 border-b shadow-sm flex items-center justify-end space-x-10 pr-10">
                        <Filters />
                    </section>

                    <section className="pt-2">
                        <div className="flex flex-wrap gap-2">
                            {
                                rooms.map(r => (
                                    <RoomCard key={r.price} name={r.name} img={r.img} bed={r.bed} guests={r.guests} breakfast={r.breakfast} sqmts={r.sqmts} ratings={r.ratings} price={r.price} />
                                ))
                            }
                        </div>
                    </section>

                </div>

                {/* Right */}
                <div className="w-1/4 h-96 bg-red-900 rounded-sm">
                    <section>
                        {/* Reservation Info */}
                        info
                    </section>
                </div>

            </main>

        </Layout>
    )
}

export default Booking
