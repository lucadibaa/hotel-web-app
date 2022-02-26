import { createSlice } from '@reduxjs/toolkit'

export const bookingSlice = createSlice({
    name: 'booking',
    initialState: {
        room: null,
        total: null,
        arrival: null,
        departure: null,
    },
    reducers: {
        selectRoom: (state, { payload }) => {
            state.room = payload
        },
        selectArrival: (state, { payload }) => {
            state.arrival = payload
        },
        selectDeparture: (state, { payload }) => {
            state.departure = payload
        },
        calcTotal: (state, { payload }) => {
            state.total = state.room?.price * payload || null
        },
        clear: (state) => {
            state.total = null
            state.arrival = null
            state.room = null
            state.departure = null
        },
    }
})

export const { selectRoom, selectArrival, selectDeparture, calcTotal, clear } = bookingSlice.actions
export default bookingSlice.reducer
