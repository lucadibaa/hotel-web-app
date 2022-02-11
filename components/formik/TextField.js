import { ExclamationCircleIcon } from "@heroicons/react/solid"
import { ErrorMessage, useField } from "formik"

const TextField = ({ label, labelClasses, inputClasses, ...props }) => {
    const [field, meta] = useField(props)

    return (
        <>
            <div>
                <label className={labelClasses} htmlFor={field.name}>{label}</label>
                <div className="relative flex flex-col">
                    <input autoComplete="off" className={inputClasses} {...field} {...props} placeholder={label.split('*')[0]} style={{ border: !props.disabled && meta.touched && meta.error && '1px solid #EA5234', WebkitAppearance: !props.disabled && meta.touched && meta.error && 'none' }} />
                    {!props.disabled && meta.touched && meta.error && props.type !== 'date' && <ExclamationCircleIcon className="h-5 absolute right-2 top-1/2 transform -translate-y-1/2 text-error-light" />}
                    {
                        !props.disabled && meta.touched &&
                        <ErrorMessage component="span" name={field.name} className="text-error ml-0.5 text-xs font-medium absolute top-full" />
                    }
                </div>
            </div>
        </>
    )
}

export default TextField
