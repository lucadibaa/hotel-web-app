import CheckField from "../formik/CheckField"

const Acknowledgement = () => {
    return (
        <section className="bg-white border-b shadow-sm p-5">
            <h2 className="text-lg font-Sofia tracking-wide mb-4">ACKNOWLEDGEMENT</h2>
            <div className="flex flex-col -mx-2 mb-2 space-y-3">
                <div className="px-2 w-full space-x-5 flex items-center">
                    <CheckField labelClasses={'text-sm ml-4'} label="I would like to receive newsletters and special offers by email." name="newsletter" type="checkbox" />
                </div>
                <div className="px-2 w-full space-x-5 flex items-center">
                    <CheckField labelClasses={'text-sm ml-1'} label="* I agree with the Privacy Terms." name="privacy" type="checkbox" />
                    <span className="text-xs font-light mb-0.5 border-b border-ecru cursor-pointer">Privacy Policy</span>
                </div>
                <div className="px-2 w-full space-x-5 flex items-center">
                    <CheckField labelClasses={'text-sm ml-1'} label="* I agree with the Booking Conditions." name="booking" type="checkbox" />
                    <span className="text-xs font-light mb-0.5 border-b border-ecru cursor-pointer">Terms & Conditions</span>
                </div>
            </div>
        </section>
    )
}

export default Acknowledgement
