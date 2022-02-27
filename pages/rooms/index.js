import Head from "next/head"
import api from "../../api/axios"
import { useState } from "react"
import requests from "../../api/requests"
import Layout from "../../components/layout/Layout"
import Banner from "../../components/rooms/Banner"
import DatePicker from "../../components/rooms/DatePicker"
import StandardRoomCard from "../../components/rooms/StandardRoomCard"
import SuiteCard from "../../components/rooms/SuiteCard"
import SuperiorRoomCard from "../../components/rooms/SuperiorRoomCard"

export const getStaticProps = async () => {
    const res = await api.get(requests.getRooms)

    return {
        props: {
            rooms: res?.data.rooms || [],
        }
    }
}

const Rooms = ({ rooms }) => {
    const [show, setShow] = useState(false)
    const [isHidden, setIsHidden] = useState(false)

    return (
        <Layout>
            <Head>
                <title>Gold Arc Hotel | Rooms & Suits</title>
            </Head>


            <Banner />
            <DatePicker show={show} setShow={setShow} isHidden={isHidden} setIsHidden={setIsHidden} rooms={rooms} />

            <main className={`mt-5 max-w-[90%] mx-auto space-y-24 pb-20 lg:space-y-12 transition ${show && 'pt-14 xl:pt-10 lg:pt-[105px] md:pt-[92px]'} ${!isHidden && show ? 'sm:pt-40' : 'sm:pt-0'}`}>
                <section>
                    <h2 className="text-3xl text-center mt-14 mb-6 font-Sofia tracking-wider font-light text-asphalt lg:mt-10 lg:mb-4 md:text-2xl md:my-3">STANDARD ROOMS</h2>
                    <p className="text-lg w-11/12 text-center mx-auto mb-10 font-Sofia tracking-wider font-light text-asphalt leading-[31px] lg:leading-normal lg:mb-8">Fresh & elegant sanctuary with refined luxury. In the Historic Wing, be treated to fresh and elegant guest rooms furnished with custom dark wood, crisp white bedding, boudoir pillows, a warm paint palette accented by a bold fuchsia pink and platinum silver headboard.</p>
                    <div className="flex flex-wrap gap-4 xl:gap-3 lg:gap-2">
                        {
                            rooms?.filter(r => r.type === 'standard').map(r => (
                                <StandardRoomCard key={r._id} name={r.name} slug={r.slug} img={r.image} guests={r.guests} price={r.price} info={r.info} />
                            ))
                        }
                    </div>
                </section>

                <section>
                    <h2 className="text-3xl text-center my-6 font-Sofia tracking-wider font-light text-asphalt md:text-2xl md:my-3">SUPERIOR ROOMS</h2>
                    <p className="text-lg w-11/12 text-center mx-auto font-Sofia tracking-wider font-light text-asphalt leading-[31px] lg:leading-normal">Fresh & elegant sanctuary with refined luxury. In the Historic Wing, be treated to fresh and elegant guest rooms furnished with custom dark wood, crisp white bedding, boudoir pillows, a warm paint palette accented by a bold fuchsia pink and platinum silver headboard.</p>
                    <div className="flex flex-wrap gap-x-6 gap-y-24 mt-52 lg:mt-32 lg:gap-x-3 md:mt-20 sm:mt-5 sm:gap-x-0 sm:gap-y-4">
                        {
                            rooms?.filter(r => r.type === 'superior').map(r => (
                                <SuperiorRoomCard key={r._id} name={r.name} slug={r.slug} img={r.image} guests={r.guests} price={r.price} info={r.info} />
                            ))
                        }
                    </div>
                </section>

                <section>
                    <h2 className="text-3xl text-center my-6 font-Sofia tracking-wider font-light text-asphalt md:text-2xl md:my-3">SUITES</h2>
                    <p className="text-lg w-11/12 text-center mx-auto mb-10 font-Sofia tracking-wider font-light text-asphalt leading-[31px] lg:leading-normal lg:mb-8">Fresh & elegant sanctuary with refined luxury. In the Historic Wing, be treated to fresh and elegant guest rooms furnished with custom dark wood, crisp white bedding, boudoir pillows, a warm paint palette accented by a bold fuchsia pink and platinum silver headboard.</p>
                    <div className="flex flex-wrap gap-20 lg:gap-16 sm:gap-64 sm:mb-52">
                        {
                            rooms?.filter(r => r.type === 'suite').map(r => (
                                <SuiteCard key={r._id} name={r.name} slug={r.slug} img={r.image} guests={r.guests} price={r.price} info={r.info} />
                            ))
                        }
                    </div>
                </section>
            </main>
        </Layout>
    )
}

export default Rooms
