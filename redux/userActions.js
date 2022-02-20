import api from "../api/axios"
import requests from "../api/requests"
import Cookie from "js-cookie"
import { registerRequest, registerSuccess, registerFailure, loginRequest, loginSuccess, loginFailure, logoutRequest } from "./userSlice"

export const register = userData => {
    return async dispatch => {

        dispatch(registerRequest())

        try {
            const res = await api.post(requests.register, userData)
            if (res.status === 201) {
                const data = res.data

                await dispatch(registerSuccess({ ...data.user, access_token: data.access_token }))

                Cookie.set('refresh_token', data.refresh_token, {
                    path: 'api/auth/accessToken',
                    expires: 7
                })

                localStorage.setItem('isLoggedIn', true)
                return 'success'
            }
        } catch (err) {
            console.log(err)
            const errors = err.response?.data.errors
            await dispatch(registerFailure(errors))
            return 'failure'
        }
    }
}

export const login = userData => {
    return async dispatch => {

        dispatch(loginRequest())

        try {
            const res = await api.post(requests.login, userData)
            if (res.status === 201) {
                const data = res.data

                await dispatch(loginSuccess({ ...data.user, access_token: data.access_token }))

                Cookie.set('refresh_token', data.refresh_token, {
                    path: 'api/auth/accessToken',
                    expires: 7
                })

                Cookie.set('access_token', data.access_token, {
                    path: 'api/auth/accessToken',
                    expires: 1
                })

                localStorage.setItem('isLoggedIn', true)
                return 'success'
            }
        } catch (err) {
            console.log(err)
            const errors = err.response?.data.errors
            await dispatch(loginFailure(errors))
            return 'failure'
        }
    }
}

export const isTokenValid = () => {
    return async dispatch => {

        const isLoggedIn = localStorage.getItem('isLoggedIn')
        if (isLoggedIn) {
            try {
                const res = await api.get(requests.getToken)
                if (res.status === 201) {
                    const data = res.data

                    await dispatch(loginSuccess({ ...data.user, access_token: data.access_token }))

                    Cookie.set('access_token', data.access_token, {
                        path: 'api/auth/accessToken',
                        expires: 1
                    })
                }
            } catch (err) {
                console.log(err)
                Cookie.remove('refresh_token', { path: 'api/auth/accessToken' })
                await dispatch(logout())
                return localStorage.removeItem('isLoggedIn')
            }
        }
    }
}

export const logout = () => {
    return async dispatch => {

        Cookie.remove('refresh_token', { path: 'api/auth/accessToken' })

        localStorage.removeItem('isLoggedIn')

        await dispatch(logoutRequest())
    }
}
