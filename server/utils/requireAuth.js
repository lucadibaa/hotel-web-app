import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import api from "../../api/axios"
import requests from "../../api/requests"

const requireAuth = (WrappedComponent, requireAdmin) => {
    return props => {
        const Router = useRouter()
        const [isVerified, setIsVerified] = useState(false)

        useEffect(async () => {

            const isLoggedIn = localStorage.getItem('isLoggedIn')

            if (isLoggedIn) {
                try {
                    const res = await api.get(requests.getToken)

                    if (res.data.access_token && (requireAdmin ? res.data.user.role === 'admin' : true)) {
                        setIsVerified(true)
                    } else {
                        setIsVerified(false)
                        Router.replace("/")
                    }
                } catch (err) {
                    console.log(err)
                    Router.replace("/")
                    return localStorage.removeItem('isLoggedIn')
                }
            } else {
                Router.replace("/")

            }
        }, [])

        if (isVerified === true) {
            return <WrappedComponent {...props} />
        } else if (isVerified === 'na') {
            return <div>Not allowed</div>
        } else {
            // loader
            return null
        }

    }
}

export default requireAuth
