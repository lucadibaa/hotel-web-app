import api from "../../api/axios"
import requests from "../../api/requests"

export const getRooms = async () => {
    try {
        const { data } = await api.get(requests.getRooms)
        return data?.rooms
    } catch (err) {
        console.log(err)
    }
}

export const getRoomBySlug = async slug => {
    const { data } = await api.get(`/rooms/${slug}`)
    return data?.room
}
