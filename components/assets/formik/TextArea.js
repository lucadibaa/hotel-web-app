import { ErrorMessage, useField } from "formik"
import { ExclamationCircleIcon } from "@heroicons/react/solid"


const TextArea = ({ textareaStyle, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <div className={`${props.inline && "flex items-center"} ${props.checkbox && 'justify-between'}`}>
      <div className="relative flex flex-col">
        <textarea className={textareaStyle} {...field} {...props} placeholder={props.placeholder} style={{ border: meta.touched && meta.error && '1px solid #EA5234', WebkitAppearance: meta.touched && meta.error && 'none' }} />
        {meta.touched && meta.error && <ExclamationCircleIcon className="h-5 absolute right-2 top-4 text-error-light" />}
        <ErrorMessage component="span" name={field.name} className="text-error text-xs font-medium ml-0.5 absolute top-full" />
      </div>
    </div>
  )
}

export default TextArea
