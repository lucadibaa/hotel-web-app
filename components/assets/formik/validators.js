import * as yup from 'yup'

export const bookingSchema = yup.object().shape({
    firstName: yup.string().required('Required'),
    lastName: yup.string().required('Required'),
    cell: yup.string().matches(/^[0-9]+$/, "Cell number is invalid"),
    email: yup.string().email('Invalid Email').required('Required'),
    password: yup.string().min(6, 'Password must be at least 6 characters long'),
    requests: yup.string().max(300, 'max 300 characters'),
    payment: yup.string(),
    newsletter: yup.boolean(),
    privacy: yup.bool().oneOf([true], 'Required'),
    booking: yup.bool().oneOf([true], 'Required'),
})

export const registerSchema = yup.object().shape({
    firstName: yup.string().required('Required'),
    lastName: yup.string().required('Required'),
    email: yup.string().email('Invalid Email').required('Required'),
    password: yup.string().min(6, 'Password must be at least 6 characters long').required('Required'),
})

export const loginSchema = yup.object().shape({
    email: yup.string().email('Invalid Email').required('Required'),
    password: yup.string().min(6, 'Password must be at least 6 characters long').required('Required'),
})
