import { ErrorMessage, useField } from "formik"

const CheckField = ({ label, labelClasses, ...props }) => {
    const [field, meta] = useField(props)

    return (
        <>
            <div className="flex items-center top-1/2 space-x-2">
                <div className="relative flex flex-col">
                    <input autoComplete="off" {...field} {...props} />
                    {
                        !props.disabled && meta.touched &&
                        <ErrorMessage component="span" name={field.name} className="text-red-500 ml-0.5 text-xs font-medium absolute top-full" />
                    }
                </div>
                <label className={labelClasses} htmlFor={field.name}>{label}</label>
            </div>
        </>
    )
}

export default CheckField
