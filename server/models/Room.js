import { Schema, models, model } from 'mongoose'

const roomSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'Insert the room name'],
    },
    description: {
        type: String,
        trim: true,
        required: [true, 'Insert the room description'],
    },
    image: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        default: 0
    },
    type: {
        type: String,
        enum: ['standard', 'superior', 'suite'],
        required: true,
    },
    info: {
        type: Object,
        required: true
    },
    reviews: [{
        text: {
            type: String,
            required: true
        },
        stars: {
            type: Number,
            required: true
        },
        userId: {
            type: Schema.Types.ObjectId, ref: 'User'
        },
    }]
}, { timestamps: true })

export default models.Room || model('Room', roomSchema)
