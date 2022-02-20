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
        type: String,
        required: () => !this.guestId,
    },
    guestsNumber: {
        type: Number,
        required: true,
    },
    payment: {
        enum: ['hotel', 'online'],
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    roomId: {
        type: Schema.Types.ObjectId, ref: 'Room'
    }
}, { timestamps: true })

export default models.Reservation || model('Reservation', reservationSchema)
