import dbConnect from '../../../server/dbConnect'
import { requireSignin } from '../../../server/middlewares'
import Reservation from '../../../server/models/Reservation'

const getReservations = async (req, res) => {
    const { method } = req

    await dbConnect()

    if (method !== 'GET') {
        res.status(400).json({ success: false, message: 'Only GET requests are allowed.' })
    }

    try {
        const reservations = await Reservation.find()
        res.status(200).json({ success: true, reservations })
    } catch (err) {
        console.log(err)
        res.status(400).json({ err })
    }
}

export default requireSignin(isAdmin(getReservations))
