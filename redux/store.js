import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import bookingReducer from './bookingSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'booking',
    storage
}

const store = configureStore({
    reducer: {
        user: userReducer,
        booking: persistReducer(persistConfig, bookingReducer)
    }
})

const persistor = persistStore(store)

export { store, persistor }
