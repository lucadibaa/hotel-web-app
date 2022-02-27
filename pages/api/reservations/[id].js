import dbConnect from '../../../server/dbConnect'
import User from '../../../server/models/User'
import Reservation from '../../../server/models/Reservation'

const getReservationById = async (req, res) => {
    const { method, query: { id } } = req

    await dbConnect()

    if (method !== 'GET') {
        res.status(400).json({ success: false, message: 'Only GET requests are allowed.' })
    }

    try {

        if (id.match(/^[0-9a-fA-F]{24}$/)) {
            const reservation = await Reservation.findById(id)

            if (reservation?.guestId) {

                const { firstName, lastName, email } = await User.findById(reservation.guestId)

                reservation.guest = { firstName, lastName, email }
            }

            res.status(200).json({ success: true, reservation })
        } else {
            res.status(400).json({ message: 'Invalid id' })
        }
    } catch (err) {
        console.log(err)
        res.status(400).json({ err })
    }
}

export default getReservationById
