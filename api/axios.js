import axios from 'axios'

const api = axios.create({
    baseURL: process.env.NODE_ENV === 'development' ? "http://localhost:3000/api" : "https://goldarc-hotel.vercel.app/api",
    headers: {
        'Content-Type': 'application/json'
    }
})

export default api
