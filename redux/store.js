import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import bookingReducer from './bookingSlice'

export default configureStore({
    reducer: {
        user: userReducer,
        booking: bookingReducer
    }
})
