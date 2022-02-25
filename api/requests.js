const requests = {
    // auth
    register: '/auth/register',
    login: '/auth/login',
    getToken: '/auth/accessToken',
    // reservations
    getReservationsByUserId: '/reservations/getReservationsByUserId',
    generateReservation: '/reservations/generate',
    // rooms
    getRooms: '/rooms'
}

export default requests
