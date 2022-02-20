import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {},
        errors: {},
        loading: false
    },
    reducers: {
        // register
        registerRequest: (state) => {
            state.loading = true
            state.errors = {}
        },
        registerSuccess: (state, { payload }) => {
            state.user = payload
            state.loading = false
        },
        registerFailure: (state, { payload }) => {
            state.errors = payload
            state.loading = false
        },
        // login
        loginRequest: (state) => {
            state.loading = true
            state.errors = {}
        },
        loginSuccess: (state, { payload }) => {
            state.user = payload
            state.loading = false
        },
        loginFailure: (state, { payload }) => {
            state.errors = payload
            state.loading = false
        },
        // logout
        logoutRequest: (state) => {
            state.user = {}
            state.errors = {}
            state.loading = false
        }
    }
})

export const { registerRequest, registerSuccess, registerFailure, loginRequest, loginSuccess, loginFailure, logoutRequest } = userSlice.actions
export default userSlice.reducer
