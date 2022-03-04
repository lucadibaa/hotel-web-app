import dbConnect from '../../../server/dbConnect'
import Room from '../../../server/models/Room'

const getRooms = async (req, res) => {
    const { method } = req

    await dbConnect()

    if (method !== 'GET') {
        res.status(400).json({ success: false, message: 'Only GET requests are allowed.' })
    }

    try {
        const rooms = await Room.find()

        res.status(200).json({ success: true, rooms })
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

export default getRooms
