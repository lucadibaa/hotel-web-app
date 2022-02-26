import moment from 'moment'
import dbConnect from '../../../server/dbConnect'
import Reservation from '../../../server/models/Reservation'
import Room from '../../../server/models/Room'
import { toAmerican } from '../../../utils/functions'

const getAvailableRooms = async (req, res) => {
    const { method, query: { arrival, departure } } = req

    await dbConnect()

    if (method !== 'GET') {
        res.status(400).json({ success: false, message: 'Only GET requests are allowed.' })
    }

    if (!moment(toAmerican(arrival)).isValid() || !moment(toAmerican(departure)).isValid()) return res.status(400).json({ success: false, message: 'Invalid dates' })

    if (moment().startOf('day').diff(moment(toAmerican(arrival))) > 0 || moment().startOf('day').diff(moment(toAmerican(arrival))) > 0) return res.status(400).json({ success: false, message: "You're living in the past!" })

    if (moment(toAmerican(departure)).diff(moment(toAmerican(arrival)), 'days') < 2) return res.status(400).json({ success: false, message: 'Arrival should be before departure or min 2 nights' })

    try {
        const reservations = await Reservation.find({
            $and: [
                { arrival: { $lt: moment(toAmerican(departure)).toDate() } },
                { departure: { $gt: moment(toAmerican(arrival)).toDate() } },
            ]
        })

        const rooms = await Room.find()

        const availableRooms = rooms?.filter(room => {
            return !reservations?.some(r => r.roomSlug === room.slug)
        })

        res.status(200).json({ success: true, availableRooms })
    } catch (err) {
        console.log(err)
        res.status(400).json({ success: false, err })
    }
}

export default getAvailableRooms
