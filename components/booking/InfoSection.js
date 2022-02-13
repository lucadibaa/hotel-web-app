import moment from "moment"

const InfoSection = ({ startDate, endDate, guests }) => {

    const room = { price: 80 }

    return (
        <div className="w-1/4 h-full bg-camel/30 rounded-sm">
            <section>
                <h2 className="pl-5 pt-3 text-lg font-Sofia tracking-wider text-asphalt">YOUR STAY</h2>
                <div className="text-sm flex space-x-14 my-2 px-5">
                    <div className={`flex flex-col ${startDate ? 'visible' : 'invisible'}`}>
                        <span className="font-medium">Check In</span>
                        <span className="font-light">{moment(startDate).format('ddd DD, MMM YYYY')}</span>
                    </div>
                    <div className={`flex flex-col ${endDate ? 'visible' : 'invisible'}`}>
                        <span className="font-medium">Check Out</span>
                        <span className="font-light">{moment(endDate).format('ddd DD, MMM YYYY')}</span>
                    </div>
                </div>
            </section>

            <hr className="bg-jungle/20 h-0.5 mx-4" />

            <section className="mt-4 px-5 space-y-4">
                <div className="space-y-1">
                    <div className="flex justify-between text-[13px] font-light">
                        <span>Number of Guests:</span>
                        <span>{guests}</span>
                    </div>
                    <div className="flex justify-between text-[13px] font-light">
                        <span>Total Nights:</span>
                        <span>{endDate?.diff(startDate, 'days') || '...'}</span>
                    </div>
                </div>
                {
                    room &&
                    <div className="space-y-1">
                        <div className="flex justify-between text-[13px] font-light">
                            <span>Room:</span>
                            <span className="border-b border-moss cursor-pointer">Historic Garden Room</span>
                        </div>
                        <div className="flex justify-between text-[13px] font-light">
                            <span>Room Rate:</span>
                            <div className="flex flex-col items-end">
                                <span>€ {room.price}</span>
                                <span className="text-[10px]">per night</span>
                            </div>
                        </div>
                    </div>
                }
            </section>

            <hr className="bg-jungle/20 h-0.5 mx-4 my-5" />

            <section className="px-5 mb-5">
                <div className="flex justify-between text-lg">
                    <span>Total:</span>
                    <span>€ {room.price * endDate?.diff(startDate, 'days') || '0.00'}</span>
                </div>
            </section>
        </div>
    )
}

export default InfoSection
