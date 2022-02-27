import { ExclamationCircleIcon } from "@heroicons/react/solid"
import { useEffect, useState } from "react"

const TextField = ({ label, labelClasses, inputClasses, ...props }) => {
    const [error, setError] = useState(props.error)

    useEffect(() => {
        setError(props.error)
    }, [props.error])

    return (
        <>
            <div>
                <label className={labelClasses} htmlFor={props.name}>{label}</label>
                <div className="relative flex flex-col">
                    <input autoComplete="off" className={inputClasses} {...props} placeholder={label.split('*')[0]} style={{ border: !props.disabled && error && '1px solid #EA5234', WebkitAppearance: !props.disabled && error && 'none' }} />
                    {!props.disabled && error && props.type !== 'date' && <ExclamationCircleIcon className="h-5 absolute right-2 top-1/2 transform -translate-y-1/2 text-error-light" />}
                    {
                        error && !props.disabled && <span className="text-error ml-0.5 text-xs font-medium absolute top-full">{error}</span>
                    }
                </div>
            </div>
        </>
    )
}

export default TextField
