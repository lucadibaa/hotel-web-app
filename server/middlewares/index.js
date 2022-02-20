import { verify } from 'jsonwebtoken'
import User from '../models/User'

export const requireSignin = handler => {
    return async (req, res) => {

        let token

        if (req.cookies && req.cookies.access_token) {
            token = req.cookies.access_token
        } else return res.status(401).json({ message: 'Log in to get access!' })

        try {
            const { id } = verify(token, process.env.ACCESS_TOKEN_SECRET)

            const currentUser = await User.findById(id)

            if (!currentUser) return res.status(401).json({ message: 'The user belonging to this token no longer exist.' })

            req.user = currentUser

            return handler(req, res)

        } catch (err) {
            res.status(500).json({ err })
        }
    }
}

export const isAdmin = handler => {
    return async (req, res) => {
        if (req.user.role !== 'admin') return res.status(403).json({ success: false, message: 'You do not have permission to perform this action' })

        return handler(req, res)
    }
}
