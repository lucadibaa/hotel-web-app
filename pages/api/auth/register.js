import dbConnect from '../../../server/dbConnect'
import User from '../../../server/models/User'
import { createAccessToken, createRefreshToken } from '../../../server/utils/generateToken'
import handleErrors from '../../../server/utils/handleErrors'
const bcrypt = require('bcrypt')

export default async (req, res) => {
    const { method } = req

    await dbConnect()

    switch (method) {
        case 'POST':
            await register(req, res)
            break
        default:
            res.status(400).json({ success: false })
            break
    }
}

const register = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body

        const hashedPsw = password.length > 5 ? await bcrypt.hash(password, 10) : password

        const newUser = new User({ firstName, lastName, email, password: hashedPsw })

        const savedUser = await newUser.save()

        const access_token = createAccessToken({ id: newUser._id, role: newUser.role })
        const refresh_token = createRefreshToken({ id: newUser._id, role: newUser.role })

        const { password: saved_password, __v, createdAt, updatedAt, ...others } = savedUser._doc

        res.status(201).json({ message: 'User registered successfully!', access_token, refresh_token, user: { ...others } })
    } catch (err) {
        const errors = handleErrors(err)
        res.status(400).json({ errors })
    }
}
