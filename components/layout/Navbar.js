import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const Navbar = () => {
    const [show, setShow] = useState(false)

    const router = useRouter()

    const isActive = route => {
        if (route === router.pathname) {
            return 'active'
        } else {
            return ''
        }
    }

    const navbarTransition = () => {
        if (window.scrollY > 100) {
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
        <div className={`fixed top-0 flex items-center w-screen py-5 px-4 z-50 transition duration-300 ease-in-out sm:hidden ${show ? 'bg-white shadow text-gray-800 h-20 xl:h-16 md:h-12' : 'text-white bg-transparent h-32 xl:h-24 lg:h-20 md:h-16'}`}>
            <div className="relative flex items-center w-full font-semibold text-lg gap-64 2xl:gap-32 xl:text-base lg:gap-24 lg:font-normal md:gap-8">
                <div className="flex justify-center items-center flex-1 space-x-48 2xl:space-x-32 xl:space-x-24 lg:space-x-16 md:space-x-10">
                    <Link href="/" passHref>
                        <div className={`nav-link ${isActive('/')}`}>Home</div>
                    </Link>
                    {/* <Link href="/rooms"> */}
                    <div className={`nav-link ${isActive('/rooms')}`}>Rooms</div>
                    {/* </Link> */}
                    {/* <Link href="/spa"> */}
                    <div className={`nav-link ${isActive('/spa')}`}>Spa</div>
                    {/* </Link> */}
                </div>
                <div className="flex justify-center items-center flex-1 space-x-48 2xl:space-x-32 xl:space-x-24 lg:space-x-16 md:space-x-8">
                    {/* <Link href="/services"> */}
                    <div className={`nav-link ${isActive('/services')}`}>Services</div>
                    {/* </Link> */}
                    {/* <Link href="/contacts"> */}
                    <div className={`nav-link ${isActive('/contacts')}`}>Contact Us</div>
                    {/* </Link> */}
                    {/* <Link href="/login"> */}
                    <div className={`nav-link ${isActive('/login')}`}>Login</div>
                    {/* </Link> */}
                    {/* <Link href="/dashboard">
                        <div className={`nav-link ${isActive('/dashboard')}`}>Dashboard</div>
                    </Link> */}
                    {/* <Link href="/reservations">
                        <div className={`nav-link ${isActive('/reservations')}`}>My Reservations</div>
                    </Link> */}
                </div>
                <Link href="/">
                    {
                        show ?
                            <img src="https://i.ibb.co/WFj4ZpH/gold-Arc-no-Text.png" className="absolute top-0 bottom-0 right-0 left-0 m-auto w-[3.5rem] cursor-pointer xl:w-12 md:w-8" alt="" />
                            :
                            <div className="absolute top-3 right-0 left-0 mx-auto w-32 cursor-pointer xl:w-24 xl:top-0 lg:w-20 lg:-top-2 md:w-16">
                                <Image src="https://res.cloudinary.com/drpbnvds9/image/upload/v1642946642/hotel%20web%20app/logos/goldArc_logo_light_x3y3fs.png" width="128" height="128" alt="logo" />
                            </div>
                    }
                </Link>
            </div>
        </div>
    )
}

export default Navbar
