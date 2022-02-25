import moment from 'moment'
import dbConnect from '../../../server/dbConnect'
import Reservation from '../../../server/models/Reservation'
import User from '../../../server/models/User'
import { toAmerican } from '../../../utils/functions'

export default async (req, res) => {
    const { method } = req

    await dbConnect()

    switch (method) {
        case 'POST':
            await generate(req, res)
            break
        default:
            res.status(400).json({ success: false })
            break
    }
}

const generate = async (req, res) => {
    try {
        const { firstName, lastName, email, arrival, departure, nights, guests, payment, total, roomSlug } = req.body


        const user = await User.findOne({ email })

        let guestId
        let guest
        if (user) {
            guestId = user._id
        } else {
            guest = {
                firstName, lastName, email
            }
        }

        const newReservation = new Reservation({ arrival: moment(toAmerican(arrival)), departure: moment(toAmerican(departure)), nights, guestId, guest, guestsNumber: guests, payment, total, roomSlug })

        await newReservation.save((err, newReservation) => {
            if (err) return res.status(400).json({ err });
            if (newReservation) {
                return res.status(201).json({ success: true, message: 'Reservation successfully created!', id: newReservation._id })
            }
        })
    } catch (err) {
        console.log(err)
        res.status(400).json({ err })
    }
}
