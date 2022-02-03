import Head from "next/head"
import { useState } from "react"
import Layout from "../components/layout/Layout"
import Banner from "../components/rooms/Banner"
import DatePicker from "../components/rooms/DatePicker"
import StandardRoomCard from "../components/rooms/StandardRoomCard"
import SuperiorRoomCard from "../components/rooms/SuperiorRoomCard"

const Rooms = () => {
    const [show, setShow] = useState(false)

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
        }
    ]

    return (
        <Layout>
            <Head>
                <title>Gold Arc Hotel | Rooms & Suits</title>
            </Head>

            <Banner />
            <DatePicker show={show} setShow={setShow} />

            <main className={`mt-5 max-w-[90%] mx-auto space-y-24 pb-20 ${show && 'pt-16'}`}>
                <section>
                    <h2 className="text-3xl text-center my-6 font-Sofia tracking-wider font-light text-asphalt md:text-2xl md:my-3">HISTORIC WING</h2>
                    <p className="text-lg w-11/12 text-center mx-auto mb-10 font-Sofia tracking-wider font-light text-asphalt leading-[31px]">Fresh & elegant sanctuary with refined luxury. In the Historic Wing, be treated to fresh and elegant guest rooms furnished with custom dark wood, crisp white bedding, boudoir pillows, a warm paint palette accented by a bold fuchsia pink and platinum silver headboard.</p>
                    <div className="flex flex-wrap gap-4 xl:gap-3 lg:gap-2">
                        {
                            rooms.map(r => (
                                <StandardRoomCard key={r.price} name={r.name} img={r.img} bed={r.bed} guests={r.guests} breakfast={r.breakfast} sqmts={r.sqmts} ratings={r.ratings} price={r.price} />
                            ))
                        }
                    </div>
                </section>

                <section>
                    <h2 className="text-3xl text-center my-6 font-Sofia tracking-wider font-light text-asphalt md:text-2xl md:my-3">HISTORIC WING</h2>
                    <p className="text-lg w-11/12 text-center mx-auto mb-10 font-Sofia tracking-wider font-light text-asphalt leading-[31px]">Fresh & elegant sanctuary with refined luxury. In the Historic Wing, be treated to fresh and elegant guest rooms furnished with custom dark wood, crisp white bedding, boudoir pillows, a warm paint palette accented by a bold fuchsia pink and platinum silver headboard.</p>
                    <div className="flex flex-wrap gap-20">
                        {
                            rooms.map(r => (
                                <SuperiorRoomCard key={r.price} name={r.name} img={r.img} bed={r.bed} guests={r.guests} breakfast={r.breakfast} sqmts={r.sqmts} ratings={r.ratings} price={r.price} />
                            ))
                        }
                    </div>
                </section>
            </main>
        </Layout>
    )
}

export default Rooms
