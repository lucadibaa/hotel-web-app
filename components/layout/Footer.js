import Image from "next/image"

const Footer = () => {
    return (
        <div className="h-[40vh] bg-jungle flex flex-col">
            <div className="flex h-full sm:flex-col">
                <div className="relative h-48 w-48 top-0 bottom-0 right-0 left-0 m-auto mx-12 lg:h-40 lg:w-40 lg:mx-6 sm:hidden">
                    <Image
                        src="https://res.cloudinary.com/drpbnvds9/image/upload/v1642946642/hotel%20web%20app/logos/goldArc_logo_light_x3y3fs.png"
                        layout="fill"
                        alt="logo"
                    />
                </div>
                <div className="grow h-full">

                </div>
                <div className="flex flex-col justify-center space-y-6">
                    <div className="flex-1 flex items-end justify-center text-platinum font-Sofia tracking-wider font-light text-lg">
                        Follow us on our socials.
                    </div>
                    <div className="flex-1 h-full flex items-start px-12 space-x-5 sm:justify-center">
                        <div className="p-4 rounded-full border border-camel cursor-pointer hover:border-ecru text-camel hover:text-ecru transition duration-300 lg:p-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </div>
                        <div className="p-4 rounded-full border border-camel cursor-pointer hover:border-ecru text-camel hover:text-ecru transition duration-300 lg:p-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                        </div>
                        <div className="p-4 rounded-full border border-camel cursor-pointer hover:border-ecru text-camel hover:text-ecru transition duration-300 lg:p-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center text-sm text-platinum font-light p-4 mt-4">
                © 2022 Copyright: Luca Di Bari
            </div>
        </div>
    )
}

export default Footer
