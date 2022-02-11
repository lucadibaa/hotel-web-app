import Head from "next/head"
import Layout from "../../components/layout/Layout"
import Stepper from "../../components/booking/Stepper"

const Confirmation = () => {
    return (
        <Layout noBanner>
            <Head>
                <title>Gold Arc Hotel | Booking</title>
            </Head>

            <main className="mt-24 max-w-[75%] mx-auto pb-20 flex gap-6">

                <section className="bg-white w-full h-32 border-b shadow-sm">
                    <h2 className="pl-5 py-1.5 text-2xl font-Sofia tracking-wide text-asphalt mb-2">Reservation has been successfully done!</h2>
                    <Stepper active={3} />
                </section>

            </main>
        </Layout>
    )
}

export default Confirmation
