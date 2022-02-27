import Head from "next/head"
import Layout from "../../components/layout/Layout"
import Stepper from "../../components/booking/Stepper"
import { useRouter } from "next/router"

const Confirmation = () => {
    const router = useRouter()
    const { reservationId } = router.query

    return (
        <Layout noBanner>
            <Head>
                <title>Gold Arc Hotel | Booking</title>
            </Head>

            <main className="mt-24 max-w-[75%] h-[calc(60vh-6rem)] mx-auto pb-20 flex flex-col gap-6">

                <section className="bg-white w-full h-32 border-b shadow-sm">
                    <h2 className="pl-5 py-1.5 text-2xl font-Sofia tracking-wide text-asphalt mb-2">Reservation has been successfully created!</h2>
                    <Stepper active={3} />
                </section>

                <section>
                    <div className="w-1/2 flex justify-between">
                        <span>Your reservation id is:</span>
                        <span>{reservationId}</span>
                    </div>
                </section>

            </main>
        </Layout>
    )
}

export default Confirmation
