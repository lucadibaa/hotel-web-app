import Head from "next/head"
import Image from "next/image"
import Layout from "../../components/layout/Layout"
import { TemplateIcon, UsersIcon } from '@heroicons/react/outline'
import { GiBathtub, GiForkKnifeSpoon } from 'react-icons/gi'
import { IoBedOutline, IoTvOutline } from 'react-icons/io5'
import { MdCoffeeMaker, MdPets } from 'react-icons/md'
import { useRouter } from "next/router"
import api from "../../api/axios"
import { useEffect } from "react"

export const getServerSideProps = async ({ params: { slug } }) => {
    const res = await api.get(`/rooms/${slug}`)

    return {
        props: {
            room: res?.data.room || {},
        }
    }
}

const RoomPage = ({ room: { name, image, guests, price, info } }) => {

    const router = useRouter()

    if (!name) {
        typeof window !== 'undefined' && router.replace('/rooms')
        return null
    }

    const handleClick = () => {
        router.push({
            pathname: '/booking',
            query: {
                room: name
            }
        })
    }

    return (
        <Layout>
            <Head>
                <title>Gold Arc Hotel | {name}</title>
            </Head>

            <section>
                <div className="relative w-screen h-[89vh] overflow-hidden">
                    <Image
                        src={image}
                        alt={name}
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            </section>

            <main className="mt-8 max-w-[90%] mx-auto space-y-24 pb-20">
                <section className="space-y-10">
                    <h2 className="font-PlayfairDisplay text-center text-3xl font-medium uppercase italic tracking-wider text-camel">{name}</h2>
                    <p className="w-3/4 text-center mx-auto font-light text-asphalt"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis quidem voluptatem facere similique cumque ducimus ut amet inventore, perspiciatis iusto quos corporis quo magni sint aperiam doloremque fugiat neque vel mollitia aspernatur, id ullam. Dolore consectetur qui repellendus maiores quidem quia numquam nemo quos est rem quibusdam perferendis eius esse dignissimos vitae autem.</p>
                </section>

                <section className="flex text-asphalt gap-32 lg:gap-0 md:flex-col md:gap-10">
                    <div className="flex-1 space-y-3 lg:flex-[1.8] md:flex-none">
                        <span className="text-xl tracking-wider border-b-2 border-ecru">ROOM DETAILS</span>
                        <div className="flex items-start justify-between text-sm md:justify-start md:space-x-16 sm:flex-col sm:space-x-0 sm:space-y-2">
                            <div className="space-y-3">
                                <div className="flex items-center tracking-wide">
                                    <IoBedOutline className="text-2xl mr-2" />
                                    <span>{info?.bed}</span>
                                </div>
                                <div className="flex items-center tracking-wide">
                                    <UsersIcon className="h-6 mr-2" />
                                    <span>{guests}</span>
                                </div>
                                <div className="flex items-center tracking-wide">
                                    <TemplateIcon className="h-6 mr-2" />
                                    <span>{info?.sqmts} sqm</span>
                                </div>
                                <div className={`flex items-center tracking-wide ${!info?.pets && 'hidden'}`}>
                                    <MdPets className="text-2xl mr-2" />
                                    <span>Pets allowed</span>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center tracking-wide">
                                    <IoTvOutline className="text-2xl mr-2" />
                                    <span>LED TV with international channels</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 space-y-3">
                        <span className="text-xl tracking-wider border-b-2 border-ecru">HIGHLIGHTS</span>
                        <div className="flex items-start justify-between text-sm md:justify-start md:space-x-16 sm:flex-col sm:space-x-0 sm:space-y-3">
                            <div className="space-y-3">
                                <div className={`flex items-center tracking-wide ${!info?.bathtub && 'hidden'}`}>
                                    <GiBathtub className="text-2xl mr-2" />
                                    <span>Marble bathroom with bathtub</span>
                                </div>
                                <div className={`flex items-center tracking-wide ${!info?.breakfast && 'hidden'}`}>
                                    <GiForkKnifeSpoon className="text-2xl mr-2" />
                                    <span>Breakfast Included</span>
                                </div>
                                <div className="flex items-center tracking-wide">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 mr-2" viewBox="0 0 40 40">
                                        <path fill="none" stroke="#000000" strokeWidth="1.002" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M9.4 10.2h21v21.2h-21zm-7-1.8l6.9 1.7v21.4l-6.9 1.7zm3.5 23.7V9.4M9.3 26l-6.9 1.1m6.9-6.5H2.4m6.9-5.5l-6.9-.9m34.9 19l-7-1.8V10.1l7-1.8zM33.8 9.4v22.7m-3.5-16.6l7-1.1m-7 6.6l7-.1m-7 5.5l7 .9"></path>
                                        <g fill="#000000">
                                            <ellipse cx="25.6" cy="16.9" rx="2" ry="2"></ellipse>
                                            <path d="M28.6 25.7l-5.7-6-1.5 1.5 4.5 4.5h-1.4l-6.4-6.6-6.7 6.6"></path>
                                        </g>
                                    </svg>
                                    <span>{info?.view}</span>
                                </div>
                                <div className={`flex items-center tracking-wide ${!info?.coffeeMachine && 'hidden'}`}>
                                    <MdCoffeeMaker className="text-2xl mr-2" />
                                    <span>Espresso Coffee Machine</span>
                                </div>
                            </div>

                            <div className="space-y-3">
                            </div>
                        </div>
                    </div>
                </section>

                <section className="flex justify-between text-asphalt items-end">
                    <div className="flex flex-col space-y-2">
                        <span className="text-lg tracking-wider border-b border-ecru">ROOM RATE</span>
                        <div className="flex flex-col text-lg">
                            <span>€ {price}</span>
                            <span className="text-xs font-light mb-0.5">per night</span>
                            <span className="text-xs font-light">Including Taxes & Fees</span>
                        </div>
                    </div>
                    <div className="flex justify-between xl:justify-end sm:justify-start">
                        <button onClick={handleClick} className="text-sm h-12 rounded font-light tracking-wider px-5 py-2 transition-all border border-ecru/30 hover:border-ecru bg-ecru/20 hover:bg-ecru/30">
                            Book Now
                        </button>
                    </div>
                </section>

            </main>

        </Layout>
    )
}

export default RoomPage
