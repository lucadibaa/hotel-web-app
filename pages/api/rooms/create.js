import slugify from 'slugify'
import dbConnect from '../../../server/dbConnect'
import { isAdmin, requireSignin } from '../../../server/middlewares'
import Room from '../../../server/models/Room'

const create = async (req, res) => {
    const { method } = req

    await dbConnect()

    if (method !== 'POST') {
        res.status(400).json({ success: false, message: 'Only POST requests are allowed.' })
    }

    const { name, description, image, guests, price, discount, type, info, reviews } = req.body

    try {
        const newRoom = new Room({
            name,
            description,
            image,
            guests,
            price,
            discount,
            type,
            info,
            reviews,
            slug: slugify(name, { lower: true })
        })

        newRoom.save((err, post) => {
            if (err) return res.status(400).json({ err })
            if (post) {
                return res.status(201).json({ success: true, messagge: 'Room successfully created', id: newRoom._id })
            }
        })
    } catch (err) {
        res.status(500).json(err)
    }
}

export default requireSignin(isAdmin(create))
