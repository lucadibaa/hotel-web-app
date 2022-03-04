import api from "../../api/axios"
import requests from "../../api/requests"

export const getRooms = async () => {
    const { data } = await api.get(requests.getRooms)
    return data?.rooms
}

export const getRoomBySlug = async slug => {
    const { data } = await api.get(`/rooms/${slug}`)
    return data?.room
}
