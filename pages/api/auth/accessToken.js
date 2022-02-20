import dbConnect from '../../../server/dbConnect'
import User from '../../../server/models/User'
import jwt from 'jsonwebtoken'
import { createAccessToken } from '../../../server/utils/generateToken'

export default async (req, res) => {

    await dbConnect()

    try {
        const rf_token = req.cookies.refresh_token
        if (!rf_token) return res.status(400).json({ error: 'Please login.' })

        const resp = jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET)
        if (!resp) return res.status(400).json({ error: 'Your token is incorrect or has expired.' })

        const user = await User.findById(resp.id)
        if (!user) return res.status(400).json({ error: 'user does not exist.' })

        const access_token = createAccessToken({ id: user._id, role: user._doc.role })

        const { password: saved_password, __v, createdAt, updatedAt, ...others } = user._doc

        res.status(201).json({ access_token, user: { ...others } })

    } catch (err) {
        return res.status(500).json({ err: err.message })
    }
}