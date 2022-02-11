import { Form, Formik } from "formik"
import Head from "next/head"
import Stepper from "../../components/booking/Stepper"
import Layout from "../../components/layout/Layout"
import { bookingSchema } from "../../components/formik/validators"
import ContactInfo from "../../components/booking/ContactInfo"
import CreateAccount from "../../components/booking/CreateAccount"
import Policies from "../../components/booking/Policies"
import PaymentOptions from "../../components/booking/PaymentOptions"
import Acknowledgement from "../../components/booking/Acknowledgement"
import Link from "next/link"
import { useRouter } from 'next/router'

const Details = () => {

    const router = useRouter()

    const handleSubmit = values => {
        console.log(values)
        if (values.payment === 'hotel') {
            router.push('confirmation')
        } else {
            // redirect to stripe payment
        }
    }

    return (
        <Layout noBanner>
            <Head>
                <title>Gold Arc Hotel | Booking</title>
            </Head>

            <main className="mt-24 max-w-[75%] mx-auto pb-20 flex gap-6">

                {/* Left */}
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        cell: '',
                        email: '',
                        password: '',
                        requests: '',
                        payment: 'hotel',
                        newsletter: false,
                        privacy: false,
                        booking: false,
                    }}
                    validationSchema={bookingSchema}
                    onSubmit={values => handleSubmit(values)}
                >
                    <div className="w-3/4">
                        <Form className="space-y-3">

                            <section className="bg-white h-32 border-b shadow-sm">
                                <h2 className="pl-5 py-1.5 text-2xl font-Sofia tracking-wide text-asphalt mb-2">Guest Details</h2>
                                <Stepper active={2} />
                            </section>

                            <ContactInfo />

                            <CreateAccount />

                            <Policies />

                            <PaymentOptions />

                            <Acknowledgement />

                            <section className="flex items-center justify-between">
                                <Link href="/booking">
                                    <button type="button" className="text-sm rounded font-light tracking-wid text-jungle px-4 py-2 transition-all border border-jungle/30 hover:border-jungle/60 bg-white">
                                        Previous Step
                                    </button>
                                </Link>
                                <button type="submit" className="text-sm rounded tracking-wider text-asphalt px-5 py-2 transition-all border border-ecru hover:border-jungle/20 bg-ecru/40 hover:bg-ecru/90">
                                    Complete Booking
                                </button>
                            </section>

                        </Form>
                    </div>
                </Formik>

                {/* Right */}
                <div className="w-1/4 h-96 bg-red-900 rounded-sm">
                    <section>
                        {/* Reservation Info */}
                        info
                    </section>
                </div>

            </main>
        </Layout>
    )
}

export default Details
