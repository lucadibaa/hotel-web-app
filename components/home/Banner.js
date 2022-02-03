import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, EffectFade } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import "swiper/css/effect-fade"

SwiperCore.use([Autoplay, EffectFade])

const Banner = () => {

    const videoRef = useRef(null)

    return (
        <Swiper
            effect="fade"
            allowTouchMove={false}
            centeredSlides={true}
            slidesPerView={1}
            autoplay={{
                "delay": 13000,
                "disableOnInteraction": false
            }
            }
            loop={true}
            preventInteractionOnTransition={true}
        >
            <SwiperSlide>
                <div className="relative h-screen w-screen">
                    <div className="absolute bottom-1/2 right-40 max-w-xs z-40 xl:right-12 lg:right-0 lg:w-60 lg:top-1/4 sm:top-3/4">
                        <div className="text-white">
                            <div className="font-PlayfairDisplay text-[40px] tracking-wider font-medium mb-2 xl:text-4xl lg:text-3xl md:text-2xl">RESORT</div>
                            <div className="fonst-Sofia text-xl tracking-widest leading-[32px] font-light lg:text-lg md:text-base">DISCOVER AN ICON OF LUXURY & REFINEMENT IN HAWAII</div>
                        </div>
                    </div>
                    <Image src="https://res.cloudinary.com/drpbnvds9/image/upload/v1642948087/hotel%20web%20app/banner/pexels-elina-sazonova-1838554_fov7uy.jpg" layout="fill" objectFit="cover" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative h-screen w-screen">
                    <Image src="https://res.cloudinary.com/drpbnvds9/image/upload/v1642948080/hotel%20web%20app/banner/the-anam-J9O3WcJ5N74-unsplash_jxky6r.jpg" layout="fill" objectFit="cover" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                {({ isActive }) => {
                    if (isActive) {
                        videoRef.current.play()
                    }

                    return (
                        <div className="relative h-full w-full">
                            <div className="absolute top-1/2 right-16 max-w-sm z-40 lg:w-80 md:w-64 sm:w-52">
                                <div className="p-6 backdrop-filter backdrop-blur-xl backdrop-opacity-50 border border-platinum rounded shadow space-y-4 lg:p-4">
                                    <div className="text-platinum font-Sofia font-light text-lg uppercase tracking-wider leading-6 2xl:text-base md:text-sm sm:text-xs sm:tracking-widest">
                                        Our beachfron luxory hotel encapsulates extraordinary experiences, effortlessly weaving moder comfort, indigenous accents and redifined luxury.
                                    </div>
                                    <div className="flex justify-end">
                                        <button className="rounded font-light font-Sofia tracking-wider text-lg text-platinum px-9 py-4 transition-all border border-ecru hover:border-camel 2xl:text-base 2xl:px-7 2xl:py-3 xl:px-5 xl:py-2 md:text-sm">
                                            Book Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <video ref={videoRef} muted className="h-screen w-screen object-cover">
                                <source src="https://res.cloudinary.com/drpbnvds9/video/upload/v1642948200/hotel%20web%20app/banner/video_ppxj9u.mp4" type="video/mp4" />
                            </video>
                        </div>
                    )
                }}
            </SwiperSlide>
        </Swiper >

    )
}

export default Banner
