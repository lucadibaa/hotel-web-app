import { InformationCircleIcon } from "@heroicons/react/outline"
import TextField from "../assets/formik/TextField"

const CreateAccount = () => {

    const inputStyle = "text-gray-600 focus:outline-none focus:border focus:border-ecru w-full h-10 pl-2 border border-gray-300 rounded text-sm"
    const labelStyle = "ml-0.5 text-sm"

    return (
        <section className="px-5 pb-5 bg-white border-b shadow-sm text-asphalt sm:px-3">
            <h2 className="pt-1.5 text-lg font-Sofia mb-1 tracking-wide">Create an Account</h2>
            <div className="flex items-center mb-3">
                <InformationCircleIcon className="h-5 mr-1.5 xl:self-start sm:h-7" />
                <span className="text-[13px] sm:text-xs">Having an account offer easy managing or cancelling your bookings and simplify future bookings.</span>
            </div>

            <div className="flex flex-wrap items-center -mx-2 mt-4 px-4">
                <div className="px-2 w-1/2">
                    <div className="text-sm w-2/3 h-10 pl-2 2xl:w-full sm:text-xs sm:pl-0">To create your account simply add a secure password in the following input field</div>
                </div>
                <div className="px-6 w-1/2 sm:px-4">
                    <TextField inputClasses={inputStyle} labelClasses={labelStyle} label="Passoword" name="password" type="password" />
                </div>
            </div>
        </section>
    )
}

export default CreateAccount
