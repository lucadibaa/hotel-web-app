const handleErrors = err => {
    let errors = { firstName: '', lastName: '', email: '', password: '' }

    // duplicate error code
    if (err.code === 11000) {
        errors.email = "Utente già registrato"
        return errors
    }

    // validation errors
    if (err.message.includes('User validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message
        })
    }

    return errors
}

export default handleErrors
