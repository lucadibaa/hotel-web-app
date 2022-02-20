import { XIcon } from "@heroicons/react/solid"
import { Form, Formik } from "formik"
import { useDispatch, useSelector } from "react-redux"
import { login } from "../../redux/userActions"
import TextField from "../formik/TextField"
import { loginSchema } from "../formik/validators"

const Login = ({ isModalOpen, setIsModalOpen }) => {

    const dispatch = useDispatch()
    const { errors } = useSelector(state => state.user)

    if (isModalOpen !== 'login') return null

    const handleSubmit = async values => {
        await dispatch(login(values))
            .then(res => res === 'success' && setIsModalOpen(false))
    }

    const inputStyle = "text-gray-600 focus:outline-none focus:border focus:border-ecru w-full h-10 pl-2 border border-gray-300 rounded"
    const labelStyle = "ml-0.5 text-asphalt tracking-wide"

    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            validationSchema={loginSchema}
            onSubmit={values => handleSubmit(values)}
        >
            {({ values }) => (
                <div className="backdrop-filter backdrop-blur-[2px] bg-jungle/50 absolute inset-0 z-50 flex justify-center items-center">
                    <div className="bg-snow rounded overflow-hidden shadow-xl transform align-middle w-1/2">
                        <div className="py-3 px-4 text-asphalt">
                            <div className="flex justify-between mb-1">
                                <div className="font-Sofia font-light text-xl tracking-wide">LOGIN</div>
                                <button onClick={() => setIsModalOpen(false)} className="rounded-full p-1 transition hover:bg-asphalt/10 active:bg-asphalt/20">
                                    <XIcon className="h-5 text-asphalt" />
                                </button>
                            </div>
                            <span className="text-sm">Login for faster booking and reservations management</span>
                        </div>
                        <Form className="space-y-4 text-asphalt bg-base px-4 flex flex-col py-3 justify-center">
                            <div className="flex flex-wrap -mx-2 md:space-y-4 space-y-0 pb-2">
                                <div className="md:w-full px-2 w-1/2">
                                    <TextField inputClasses={inputStyle} error={errors?.email} labelClasses={labelStyle} label="Email" name="email" type="email" />
                                </div>
                                <div className="md:w-full px-2 w-1/2">
                                    <TextField inputClasses={inputStyle} error={errors?.password} labelClasses={labelStyle} label="Password" name="password" type="password" />
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-sm">Not registered yet ? <span onClick={() => setIsModalOpen('register')} className="text-ultramarine cursor-pointer transition hover:border-b-2 hover:border-b-ecru">Register Now</span> </p>
                                <button type="submit" className="self-end text-sm rounded font-light tracking-wider text-asphalt px-5 py-2 transition-all border border-ecru/80 hover:border-ecru bg-ecru/50 hover:bg-ecru/60">
                                    Login
                                </button>
                            </div>
                        </Form>
                    </div>
                </div>
            )}
        </Formik>
    )
}

export default Login
