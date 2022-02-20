import dbConnect from '../../../server/dbConnect'
import User from '../../../server/models/User'
import handleErrors from '../../../server/utils/handleErrors'
import { createAccessToken, createRefreshToken } from '../../../server/utils/generateToken'
const bcrypt = require('bcrypt')

export default async (req, res) => {
    const { method } = req

    await dbConnect()

    switch (method) {
        case 'POST':
            await login(req, res)
            break
        default:
            res.status(400).json({ success: false })
            break
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await User.findOne({ email })
        if (!user) return res.status(400).json({ errors: { email: 'Questo utente non esiste' } })

        const decryptedPassword = await bcrypt.compare(password, user.password)
        if (!decryptedPassword) return res.status(400).json({ errors: { password: "Credenziali non corrette!" } })

        const access_token = createAccessToken({ id: user._id, role: user._doc.role })
        const refresh_token = createRefreshToken({ id: user._id, role: user._doc.role })

        const { password: saved_password, __v, createdAt, updatedAt, ...others } = user._doc

        res.status(201).json({ message: 'User logged in successfully!', access_token, refresh_token, user: { ...others } })
    } catch (err) {
        console.log(err)
        const errors = handleErrors(err)
        res.status(400).json({ errors })
    }
}
