const Policies = () => {
    return (
        <section className="bg-white border-b shadow-sm p-5">
            <h2 className="text-lg font-Sofia tracking-wide mb-2">POLICIES</h2>
            <div className="text-sm flex space-x-6 mb-3">
                <div className="flex flex-col">
                    <span className="font-medium">Check In</span>
                    <span className="font-light">After 1:00 PM</span>
                </div>
                <div className="flex flex-col">
                    <span className="font-medium">Check Out</span>
                    <span className="font-light">Before 11:00 AM</span>
                </div>
            </div>
            <div className="text-sm tracking-wide mb-3">
                <div className="uppercase mb-2">Historic Garden Room</div>
                <div className="text-xs font-light flex flex-col space-y-1 mb-3">
                    <span>Guarantee Policy</span>
                    <span>A credit card guarantee is required at time of booking unless otherwise stated in the rate description.</span>
                </div>
                <div className="text-xs font-light flex flex-col space-y-1">
                    <span>Cancel Policy</span>
                    <span>Cancel by 12PM local time 21 days prior to arrival or pay 1 room night plus tax.</span>
                </div>
            </div>
            <div>
                <span className="text-xs font-light mb-0.5 border-b border-ecru cursor-pointer">View Full Policy</span>
            </div>
        </section>
    )
}

export default Policies
