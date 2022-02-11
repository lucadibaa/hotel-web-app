import CheckField from "../formik/CheckField";

const PaymentOptions = () => {

    const labelStyle = "ml-0.5 text-sm"

    return (
        <section className="bg-white border-b shadow-sm p-5">
            <h2 className="text-lg font-Sofia tracking-wide mb-5">PAYMENT OPTIONS</h2>
            <div role="group" className="flex flex-col -mx-2 mb-2 space-y-2">
                <div className="px-2 w-1/2">
                    <CheckField labelClasses={labelStyle, 'text-base'} label="PAY AT THE HOTEL" name="payment" value="hotel" type="radio" />
                </div>
                <div className="px-2 w-1/2">
                    <CheckField labelClasses={labelStyle, 'text-base'} label="PAY ONLINE" name="payment" value="online" type="radio" />
                </div>
            </div>
        </section>
    )
}

export default PaymentOptions
