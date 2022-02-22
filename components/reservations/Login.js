import { XIcon } from "@heroicons/react/solid"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { login } from "../../redux/userActions"
import TextField from "../assets/formik/TextField"

const Login = ({ isModalOpen, setIsModalOpen, noRegister }) => {

    const { errors } = useSelector(state => state.user)
    const dispatch = useDispatch()

    const [userData, setUserData] = useState({ _email: '', _password: '' })
    const [dataErrors, setDataErrors] = useState({
        _email: errors?.email,
        _password: errors?.password,
    })

    useEffect(() => {
        setDataErrors({
            _email: errors?.email,
            _password: errors?.password,
        })
    }, [errors])

    if (isModalOpen !== 'login') return null

    const { _email, _password } = userData

    const handleInput = e => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]: value })
        setDataErrors({ ...dataErrors, [name]: '' })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        const newUserData = {
            email: userData._email,
            password: userData._password,
        }
        await dispatch(login(newUserData))
            .then(res => res === 'success' && setIsModalOpen(false))
    }

    const inputStyle = "text-gray-600 focus:outline-none focus:border focus:border-ecru w-full h-10 pl-2 border border-gray-300 rounded"
    const labelStyle = "ml-0.5 text-asphalt tracking-wide"

    return (
        <div className="backdrop-filter backdrop-blur-[2px] bg-jungle/50 absolute inset-0 z-50 flex justify-center items-center">
            <div className="bg-snow rounded overflow-hidden shadow-xl transform align-middle w-1/2">
                <div className="py-3 px-4 text-asphalt">
                    <div className="flex justify-between mb-1">
                        <div className="font-Sofia font-light text-xl tracking-wide">LOGIN</div>
                        <button onClick={() => setIsModalOpen(false)} type="button" className="rounded-full p-1 transition hover:bg-asphalt/10 active:bg-asphalt/20">
                            <XIcon className="h-5 text-asphalt" />
                        </button>
                    </div>
                    <span className="text-sm">Login for faster booking and reservations management</span>
                </div>
                <div className="space-y-4 text-asphalt bg-base px-4 flex flex-col py-3 justify-center">
                    <div className="flex flex-wrap -mx-2 md:space-y-4 space-y-0 pb-2">
                        <div className="md:w-full px-2 w-1/2">
                            <TextField onChange={e => handleInput(e)} value={_email} error={dataErrors?._email} inputClasses={inputStyle} labelClasses={labelStyle} label="Email" name="_email" type="email" customform={'true'} />
                        </div>
                        <div className="md:w-full px-2 w-1/2">
                            <TextField onChange={e => handleInput(e)} value={_password} error={dataErrors?._password} inputClasses={inputStyle} labelClasses={labelStyle} label="Password" name="_password" type="password" customform={'true'} />
                        </div>
                    </div>
                    <div className={`flex ${noRegister ? 'justify-end' : 'justify-between'}`}>
                        {!noRegister && <p className="text-sm">Not registered yet ? <span onClick={() => setIsModalOpen('register')} className="text-ultramarine cursor-pointer transition hover:border-b-2 hover:border-b-ecru">Register Now</span> </p>}
                        <button onClick={e => handleSubmit(e)} className="self-end text-sm rounded font-light tracking-wider text-asphalt px-5 py-2 transition-all border border-ecru/80 hover:border-ecru bg-ecru/50 hover:bg-ecru/60">
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
