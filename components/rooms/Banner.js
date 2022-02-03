import Image from "next/image"

const Banner = () => {
    return (
        <div className="relative h-[40vh] w-screen">
            <Image src="https://res.cloudinary.com/drpbnvds9/image/upload/v1643291972/hotel%20web%20app/rooms%20list/banner_gpixcx.jpg" className="bg-bottom" layout="fill" objectFit="cover" objectPosition="0 41%" />
        </div>
    )
}

export default Banner
