import dbConnect from '../../../server/dbConnect'
import Room from '../../../server/models/Room'

const getRoomBySlug = async (req, res) => {
    const { method, query: { slug } } = req

    await dbConnect()

    if (method !== 'GET') {
        res.status(400).json({ success: false, message: 'Only GET requests are allowed.' })
    }

    try {
        const room = await Room.findOne({ slug })

        res.status(200).json({ success: true, room })
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

export default getRoomBySlug
