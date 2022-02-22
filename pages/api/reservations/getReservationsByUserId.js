import dbConnect from '../../../server/dbConnect'
import { requireSignin } from '../../../server/middlewares'
import Reservation from '../../../server/models/Reservation'

const getReservationsByUserId = async (req, res) => {
    const { method } = req

    await dbConnect()

    if (method !== 'GET') {
        res.status(400).json({ success: false, message: 'Only GET requests are allowed.' })
    }

    try {
        const reservations = await Reservation.find({ guestId: req.user._id })
        res.status(200).json({ success: true, reservations })
    } catch (err) {
        console.log(err)
        res.status(400).json({ success: false, err })
    }
}

export default requireSignin(getReservationsByUserId)
