import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout/Layout'

const Spa = () => {
    return (
        <Layout woFooter>
            <Head>
                <title>Gold Arc Hotel | Spa</title>
            </Head>
            <div className="relative max-w-screen h-screen">
                <div className="text-platinum absolute font-Sofia font-light tracking-wide top-1/4 left-[15%] z-40 text-5xl">
                    Opening Soon !
                </div>
                <Image
                    src="https://res.cloudinary.com/drpbnvds9/image/upload/v1643135475/hotel%20web%20app/services/spa/spa_bg_fdeokw.jpg"
                    layout="fill"
                />
            </div>
        </Layout>
    )
}

export default Spa