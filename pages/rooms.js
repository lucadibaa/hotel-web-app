import Head from "next/head"
import { useState } from "react"
import Layout from "../components/layout/Layout"
import Banner from "../components/rooms/Banner"
import DatePicker from "../components/rooms/DatePicker"
import StandardRoomCard from "../components/rooms/StandardRoomCard"
import SuiteCard from "../components/rooms/SuiteCard"
import SuperiorRoomCard from "../components/rooms/SuperiorRoomCard"

const Rooms = () => {
    const [show, setShow] = useState(false)
    const [isHidden, setIsHidden] = useState(false)

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
        <Layout>
            <Head>
                <title>Gold Arc Hotel | Rooms & Suits</title>
            </Head>

            <Banner />
            <DatePicker show={show} setShow={setShow} isHidden={isHidden} setIsHidden={setIsHidden} />

            <main className={`mt-5 max-w-[90%] mx-auto space-y-24 pb-20 lg:space-y-12 transition ${show && 'pt-14 xl:pt-10 lg:pt-[105px] md:pt-[92px]', !isHidden && show ? 'sm:pt-40' : 'sm:pt-0'}`}>
                <section>
                    <h2 className="text-3xl text-center mt-14 mb-6 font-Sofia tracking-wider font-light text-asphalt lg:mt-10 lg:mb-4 md:text-2xl md:my-3">STANDARD ROOMS</h2>
                    <p className="text-lg w-11/12 text-center mx-auto mb-10 font-Sofia tracking-wider font-light text-asphalt leading-[31px] lg:leading-normal lg:mb-8">Fresh & elegant sanctuary with refined luxury. In the Historic Wing, be treated to fresh and elegant guest rooms furnished with custom dark wood, crisp white bedding, boudoir pillows, a warm paint palette accented by a bold fuchsia pink and platinum silver headboard.</p>
                    <div className="flex flex-wrap gap-4 xl:gap-3 lg:gap-2">
                        {
                            rooms.map(r => (
                                <StandardRoomCard key={r.price} name={r.name} img={r.img} bed={r.bed} guests={r.guests} breakfast={r.breakfast} sqmts={r.sqmts} ratings={r.ratings} price={r.price} />
                            ))
                        }
                    </div>
                </section>

                <section>
                    <h2 className="text-3xl text-center my-6 font-Sofia tracking-wider font-light text-asphalt md:text-2xl md:my-3">SUPERIOR ROOMS</h2>
                    <p className="text-lg w-11/12 text-center mx-auto font-Sofia tracking-wider font-light text-asphalt leading-[31px] lg:leading-normal">Fresh & elegant sanctuary with refined luxury. In the Historic Wing, be treated to fresh and elegant guest rooms furnished with custom dark wood, crisp white bedding, boudoir pillows, a warm paint palette accented by a bold fuchsia pink and platinum silver headboard.</p>
                    <div className="flex flex-wrap gap-x-6 gap-y-24 mt-52 lg:mt-32 lg:gap-x-3 md:mt-20 sm:mt-5 sm:gap-x-0 sm:gap-y-4">
                        {
                            rooms.map(r => (
                                <SuperiorRoomCard key={r.price} name={r.name} img={r.img} bed={r.bed} guests={r.guests} breakfast={r.breakfast} sqmts={r.sqmts} ratings={r.ratings} price={r.price} />
                            ))
                        }
                    </div>
                </section>

                <section>
                    <h2 className="text-3xl text-center my-6 font-Sofia tracking-wider font-light text-asphalt md:text-2xl md:my-3">SUITES</h2>
                    <p className="text-lg w-11/12 text-center mx-auto mb-10 font-Sofia tracking-wider font-light text-asphalt leading-[31px] lg:leading-normal lg:mb-8">Fresh & elegant sanctuary with refined luxury. In the Historic Wing, be treated to fresh and elegant guest rooms furnished with custom dark wood, crisp white bedding, boudoir pillows, a warm paint palette accented by a bold fuchsia pink and platinum silver headboard.</p>
                    <div className="flex flex-wrap gap-20 lg:gap-16 sm:gap-64 sm:mb-52">
                        {
                            rooms.map(r => (
                                <SuiteCard key={r.price} name={r.name} img={r.img} bed={r.bed} guests={r.guests} breakfast={r.breakfast} sqmts={r.sqmts} ratings={r.ratings} price={r.price} />
                            ))
                        }
                    </div>
                </section>
            </main>
        </Layout>
    )
}

export default Rooms
