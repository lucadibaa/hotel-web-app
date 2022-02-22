import { XIcon } from "@heroicons/react/solid"
import { Form, Formik } from "formik"
import { useDispatch } from "react-redux"
import { register } from "../../redux/userActions"
import TextField from "../assets/formik/TextField"
import { registerSchema } from "../assets/formik/validators"

const Register = ({ isModalOpen, setIsModalOpen }) => {

    const dispatch = useDispatch()

    if (isModalOpen !== 'register') return null

    const handleSubmit = async values => {
        await dispatch(register(values))
            .then(res => res === 'success' && setIsModalOpen(false))
    }

    const inputStyle = "text-gray-600 focus:outline-none focus:border focus:border-ecru w-full h-10 pl-2 border border-gray-300 rounded"
    const labelStyle = "ml-0.5 text-asphalt tracking-wide"

    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password: '',
            }}
            validationSchema={registerSchema}
            onSubmit={values => handleSubmit(values)}
        >
            {({ values }) => (
                <div className="backdrop-filter backdrop-blur-[2px] bg-jungle/50 absolute inset-0 z-50 flex justify-center items-center">
                    <div className="bg-snow rounded overflow-hidden shadow-xl transform align-middle w-1/2">
                        <div className="py-3 px-4 text-asphalt">
                            <div className="flex justify-between mb-1">
                                <div className="font-Sofia font-light text-xl tracking-wide">REGISTER</div>
                                <button onClick={() => setIsModalOpen(false)} className="rounded-full p-1 transition hover:bg-asphalt/10 active:bg-asphalt/20">
                                    <XIcon className="h-5 text-asphalt" />
                                </button>
                            </div>
                            <span className="text-sm">Register for faster booking and reservations management</span>
                        </div>
                        <Form className="space-y-4 text-asphalt bg-base px-4 flex flex-col py-3 justify-center">
                            <div className="flex flex-wrap -mx-2 md:space-y-4 space-y-0 mb-2">
                                <div className="md:w-full px-2 w-1/2">
                                    <TextField inputClasses={inputStyle} labelClasses={labelStyle} label="Name" name="firstName" type="text" />
                                </div>
                                <div className="md:w-full px-2 w-1/2">
                                    <TextField inputClasses={inputStyle} labelClasses={labelStyle} label="Surname" name="lastName" type="text" />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-2 md:space-y-4 space-y-0 pb-2">
                                <div className="md:w-full px-2 w-1/2">
                                    <TextField inputClasses={inputStyle} labelClasses={labelStyle} label="Email" name="email" type="email" />
                                </div>
                                <div className="md:w-full px-2 w-1/2">
                                    <TextField inputClasses={inputStyle} labelClasses={labelStyle} label="Password" name="password" type="password" />
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-sm">Already have an account ? <span onClick={() => setIsModalOpen('login')} className="text-ultramarine cursor-pointer transition hover:border-b-2 hover:border-b-ecru">Login</span> </p>
                                <button type="submit" className="self-end text-sm rounded font-light tracking-wider text-asphalt px-5 py-2 transition-all border border-ecru/80 hover:border-ecru bg-ecru/50 hover:bg-ecru/60">
                                    Register
                                </button>
                            </div>
                        </Form>
                    </div>
                </div>
            )}
        </Formik>
    )
}

export default Register
