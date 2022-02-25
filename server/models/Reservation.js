import { Schema, models, model } from 'mongoose'

const reservationSchema = new Schema({
    arrival: {
        type: Date,
        required: true,
    },
    departure: {
        type: Date,
        required: true,
    },
    nights: {
        type: Number,
        required: true,
    },
    guestId: {
        type: Schema.Types.ObjectId, ref: 'User'
    },
    guest: {
        firstName: { type: String },
        lastName: { type: String },
        email: { type: String },
    },
    guestsNumber: {
        type: Number,
        required: true,
    },
    payment: {
        type: String,
        required: true,
    },
    total: {
        type: Number,
        required: true,
    },
    roomSlug: {
        type: String,
        required: true
    }
}, { timestamps: true })

export default models.Reservation || model('Reservation', reservationSchema)
