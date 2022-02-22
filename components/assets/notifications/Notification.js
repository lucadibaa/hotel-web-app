import { CheckCircleIcon, ExclamationCircleIcon, XCircleIcon } from "@heroicons/react/outline"
import { useEffect, useState } from "react"

const Notification = (props) => {
    const [width, setWidth] = useState(100)
    const [intervalId, setIntervalId] = useState(null)
    const [exit, setExit] = useState(false)

    const startTimer = () => {
        const id = setInterval(() => {
            setWidth(prev => {
                if (prev > 0) {
                    return prev - 0.5
                }
                clearInterval(id)
                return prev
            })
        }, 15)                                        // notificationDuration: 15 * (100 / 0.5) = 4000ms => 4s
        setIntervalId(id)
    }

    const pauseTimer = () => {
        clearInterval(intervalId)
    }

    const handleClose = () => {
        pauseTimer()
        setExit(true)
        setTimeout(() => {
            // remove state and component from the dom
            props.dispatch({
                type: "REMOVE_NOTIFICATION",
                payload: {
                    id: props.id
                }
            })
        }, 350);
    }

    useEffect(() => {
        width === 0 && handleClose()
        // eslint-disable-next-line
    }, [width])

    useEffect(() => {
        startTimer()
    }, [])

    return (
        <div
            onMouseEnter={pauseTimer}
            onMouseLeave={startTimer}
            className={`
                overflow-hidden w-max shadow-xl rounded-md mb-5 pr-5 leading-normal animate-slideLeft
                ${props.type === 'SUCCESS' ? 'bg-green-100 text-green-800' : (props.type === 'ERROR' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700')}
                ${exit ? 'animate-slideRight' : ''}
            `}
        >
            <div className="px-3.5 py-2.5 flex items-center font-medium">
                {props.type === 'SUCCESS' ? <CheckCircleIcon className="h-5 mr-2" /> : (props.type === 'ERROR' ? <XCircleIcon className="h-5 mr-2" /> : <ExclamationCircleIcon className="h-5 mr-2" />)}
                <p>{props.message}</p>
            </div>
            <div
                className={`h-1 ${props.type === 'SUCCESS' ? 'bg-green-500' : (props.type === 'ERROR' ? 'bg-red-600' : 'bg-yellow-500')}`}
                style={{ width: `${width}%` }}
            />
        </div>
    )
}

export default Notification
