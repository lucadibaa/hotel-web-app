import TextArea from "../formik/TextArea"
import TextField from "../formik/TextField"

const ContactInfo = () => {

    const user = false

    const textareaStyle = "w-full p-2 mt-1.5 mb-0.5 focus:outline-none focus:border focus:border-ecru border border-gray-300 rounded resize-none text-sm"
    const inputStyle = "text-gray-600 focus:outline-none focus:border focus:border-ecru w-full h-10 pl-2 border border-gray-300 rounded text-sm"
    const labelStyle = "ml-0.5 text-sm"

    return (
        <section className="bg-white border-b shadow-sm p-5">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-Sofia tracking-wide text-asphalt">CONTACT INFO</h2>
                {
                    user ?
                        'avatar set profile info' // see ryanair
                        :
                        <button type="button" className="text-sm rounded font-light tracking-wider text-asphalt px-5 py-2 transition-all border border-ecru/30 hover:border-ecru bg-ecru/20 hover:bg-ecru/30">
                            Login
                        </button>
                }
            </div>

            <div className="space-y-4 bg-base px-4 flex flex-col py-3 justify-center">
                <div className="flex flex-wrap -mx-2 mb-2">
                    <div className="px-6 w-1/2">
                        <TextField inputClasses={inputStyle} labelClasses={labelStyle} label="Name*" name="firstName" type="text" />
                    </div>
                    <div className="px-6 w-1/2">
                        <TextField inputClasses={inputStyle} labelClasses={labelStyle} label="Surname*" name="lastName" type="text" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-2 pb-2">
                    <div className="px-6 w-1/2">
                        <TextField inputClasses={inputStyle} labelClasses={labelStyle} label="Email*" name="email" type="email" />
                    </div>
                    <div className="px-6 w-1/2">
                        <TextField inputClasses={inputStyle} labelClasses={labelStyle} label="Cell Phone" name="cell" type="text" />
                    </div>
                </div>
            </div>

            <div className="px-8">
                <h2 className="font-light font-Sofia tracking-wide text-asphalt">ADDITIONAL DETAILS AND PREFERENCES</h2>
                <div>
                    <TextArea name="requests" placeholder="Please note your requests or special needs" textareaStyle={textareaStyle} rows="8" />
                </div>
            </div>
        </section>
    )
}

export default ContactInfo
