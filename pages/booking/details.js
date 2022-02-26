import { Form, Formik } from "formik"
import Head from "next/head"
import Stepper from "../../components/booking/Stepper"
import Layout from "../../components/layout/Layout"
import { bookingSchema } from "../../components/assets/formik/validators"
import ContactInfo from "../../components/booking/ContactInfo"
import CreateAccount from "../../components/booking/CreateAccount"
import Policies from "../../components/booking/Policies"
import PaymentOptions from "../../components/booking/PaymentOptions"
import Acknowledgement from "../../components/booking/Acknowledgement"
import { useRouter } from 'next/router'
import InfoSection from "../../components/booking/InfoSection"
import moment from "moment"
import { toAmerican } from "../../utils/functions"
import { useDispatch, useSelector } from "react-redux"
import api from "../../api/axios"
import requests from "../../api/requests"
import { useNotification } from "../../components/assets/notifications/NotificationProvider"
import { clear } from "../../redux/bookingSlice"

const Details = () => {

    const dispatchNotification = useNotification()

    const dispatch = useDispatch()
    const router = useRouter()
    const { arrival, departure, nights, guests } = router.query
    const { user } = useSelector(state => state.user)
    const { room, total } = useSelector(state => state.booking)

    const handleClick = () => {
        router.replace({
            pathname: '/booking',
            query: {
                arrival,
                departure,
                nights,
                guests
            }
        })
    }

    const handleSubmit = async values => {
        if (values.password) {
            // dispatch register
            dispatchNotification({ type: 'SUCCESS', message: 'User registered successfully' })
        }

        try {
            await api.post(requests.generateReservation, { ...values, ...router.query, total, arrival, departure, roomSlug: room.slug })
            dispatchNotification({ type: 'SUCCESS', message: 'Reservation successfully created' })
            dispatch(clear())

            if (values.payment === 'hotel') {
                router.push('confirmation')
            } else {
                // redirect to stripe payment
            }
        } catch (err) {
            dispatchNotification({ type: 'ERROR', message: `${err.message} Please try again Later.` })
        }
    }

    return (
        <Layout noBanner>
            <Head>
                <title>Gold Arc Hotel | Booking</title>
            </Head>

            <main className="mt-24 max-w-[75%] mx-auto pb-20 flex gap-6 2xl:max-w-[85%] 2xl:gap-4 xl:mt-20 lg:flex-col-reverse lg:max-w-[90%] sm:mt-4">

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
                    {({ values, setFieldValue }) => (
                        <div className="flex-[3] lg:flex-none">
                            <Form className="space-y-3">

                                <section className="bg-white h-32 border-b shadow-sm">
                                    <h2 className="pl-5 py-1.5 text-2xl font-Sofia tracking-wide text-asphalt mb-2">Guest Details</h2>
                                    <Stepper active={2} />
                                </section>

                                <ContactInfo setFieldValue={setFieldValue} />

                                {Object.keys(user).length === 0 && <CreateAccount />}

                                <Policies />

                                <PaymentOptions />

                                <Acknowledgement />

                                <section className="flex items-center justify-between">
                                    <button onClick={handleClick} type="button" className="text-sm rounded font-light tracking-wid text-jungle px-4 py-2 transition-all border border-jungle/30 hover:border-jungle/60 bg-white">
                                        Previous Step
                                </button>
                                    <button type="submit" className="text-sm rounded tracking-wider text-asphalt px-5 py-2 transition-all border border-ecru hover:border-jungle/20 bg-ecru/40 hover:bg-ecru/90">
                                        Complete Booking
                                    </button>
                                </section>

                            </Form>
                        </div>
                    )}
                </Formik>

                {/* Right */}
                <InfoSection startDate={moment(toAmerican(arrival))} endDate={moment(toAmerican(departure))} guests={guests} />

            </main>
        </Layout>
    )
}

export default Details
