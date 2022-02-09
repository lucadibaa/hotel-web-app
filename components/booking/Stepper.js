import { useState } from "react"

const Stepper = () => {

    const [active, setActive] = useState(1)

    return (
        <div className="w-10/12 mx-auto">
            <div className="h-6 flex items-center justify-between">
                <div className={`w-1/2 h-1 flex items-center ${active === 1 ? 'bg-gray-300' : 'bg-asphalt'}`} title={active !== 1 ? "Rooms" : undefined}>
                    <div className={`relative text-white h-6 w-6 rounded-full shadow flex text-xs items-center text-center justify-center ${active === 1 ? 'bg-white' : 'bg-asphalt'}`}>
                        {active === 1 ? <div className="h-3 w-3 bg-asphalt rounded-full" /> : 1}
                        {
                            active === 1 &&
                            <div className="absolute mt-1 left-0 transform whitespace-nowrap -translate-x-[32%]">
                                <div className="relative bg-ecru shadow-lg px-2 py-1 rounded mt-16">
                                    <svg className="absolute top-0 -mt-2 w-full right-0 left-0" width="16px" height="8px" viewBox="0 0 16 8" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                        <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                            <g id="Progress-Bars" transform="translate(-322.000000, -198.000000)" fill="#CFC291">
                                                <g id="Group-4" transform="translate(310.000000, 198.000000)">
                                                    <polygon id="Triangle" points="20 0 28 8 12 8" />
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                    <p className="text-asphalt text-xs font-medium w-10">Rooms</p>
                                </div>
                            </div>
                        }
                    </div>
                </div>
                <div className={`w-1/2 h-1 flex items-center ${active !== 3 ? 'bg-gray-300' : 'bg-asphalt'}`} title={active !== 2 ? "Guests details" : undefined}>
                    <div className={`relative text-white h-6 w-6 rounded-full shadow flex text-xs items-center text-center justify-center ${active === 2 ? 'bg-white' : 'bg-asphalt'}`}>
                        {active === 2 ? <div className="h-3 w-3 bg-asphalt rounded-full" /> : 2}
                        {
                            active === 2 &&
                            <div className="absolute mt-1 left-0 transform whitespace-nowrap -translate-x-[38.5%]">
                                <div className="relative bg-ecru shadow-lg px-2 py-1 rounded mt-16">
                                    <svg className="absolute top-0 -mt-2 w-full right-0 left-0" width="16px" height="8px" viewBox="0 0 16 8" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                        <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                            <g id="Progress-Bars" transform="translate(-322.000000, -198.000000)" fill="#CFC291">
                                                <g id="Group-4" transform="translate(310.000000, 198.000000)">
                                                    <polygon id="Triangle" points="20 0 28 8 12 8" />
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                    <p className="text-asphalt text-xs font-medium">Guests details</p>
                                </div>
                            </div>
                        }
                    </div>
                </div>
                <div className="bg-gray-300 h-1 flex items-center" title={active !== 3 ? "Confirmation" : undefined}>
                    <div className={`relative text-white h-6 w-6 rounded-full shadow flex text-xs items-center text-center justify-center ${active === 3 ? 'bg-white' : 'bg-asphalt'}`}>
                        {active === 3 ? <div className="h-3 w-3 bg-asphalt rounded-full" /> : 3}
                        {
                            active === 3 &&
                            <div className="absolute mt-1 left-0 transform whitespace-nowrap -translate-x-[38%]">
                                <div className="relative bg-ecru shadow-lg px-2 py-1 rounded mt-16">
                                    <svg className="absolute top-0 -mt-2 w-full right-0 left-0" width="16px" height="8px" viewBox="0 0 16 8" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                        <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                            <g id="Progress-Bars" transform="translate(-322.000000, -198.000000)" fill="#CFC291">
                                                <g id="Group-4" transform="translate(310.000000, 198.000000)">
                                                    <polygon id="Triangle" points="20 0 28 8 12 8" />
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                    <p className="text-asphalt text-xs font-medium">Confirmation</p>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stepper
