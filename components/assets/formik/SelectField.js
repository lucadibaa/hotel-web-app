import { ExclamationCircleIcon } from "@heroicons/react/solid"
import { ErrorMessage, useField } from "formik"

const SelectField = ({ label, labelClasses, inputClasses, options, ...props }) => {
    const [field, meta] = useField(props)

    return (
        <>
            <div className={`${props.inline && "flex items-center"} ${props.checkbox && 'justify-between'}`}>
                <label className={labelClasses} htmlFor={field.name}>{label}</label>
                <div className="relative flex flex-col">
                    <select className={inputClasses} {...field} {...props} placeholder={label} style={{ border: !props.disabled && meta.touched && meta.error && '1px solid var(--color-state-error-light)', WebkitAppearance: !props.disabled && meta.touched && meta.error && 'none' }}>
                        {
                            options?.map(o => (
                                <option disabled={!o.value} className={!o.value ? 'bg-gray-200 text-gray-500' : undefined} key={o.key} value={o.value}>{o.key}</option>
                            ))
                        }
                    </select>
                    {!props.disabled && meta.touched && meta.error && <ExclamationCircleIcon className="h-5 text-xs absolute top-1/2 transform -translate-y-1/2 right-2 text-state-error-light" />}
                    {
                        !props.disabled &&
                        <ErrorMessage component="span" name={field.name} className="text-state-error text-xs font-semibold ml-0.5 top-full absolute" />
                    }
                </div>
            </div>
        </>
    )
}

export default SelectField
