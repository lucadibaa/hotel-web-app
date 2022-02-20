import { Schema, models, model } from 'mongoose'
import { isEmail } from 'validator'

const userSchema = new Schema({
    firstName: {
        type: String,
        trim: true,
        required: [true, 'Inserisci il tuo nome'],
    },
    lastName: {
        type: String,
        trim: true,
        required: [true, 'Inserisci il tuo cognome'],
    },
    email: {
        type: String,
        lowercase: true,
        trim: true,
        unique: true,
        validate: [isEmail, "Inserisci un'email valida"],
        required: [true, 'Inserisci la tua email'],
    },
    password: {
        type: String,
        minlength: [6, 'La password deve avere almeno 6 caratteri'],
        required: [true, 'Inserisci una password'],
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user',
        required: true,
    }
}, { timestamps: true })

export default models.User || model('User', userSchema)
