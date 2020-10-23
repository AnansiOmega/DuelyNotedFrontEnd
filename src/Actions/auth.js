export const fetchUserSuccess = (payload) => {
    return {
        type: 'FETCH_USER_SUCCESS',
        payload
    }
}

export const logoutSuccess = () => {
    return {
        type: 'LOGOUT_SUCCESS'
    }
}

export const currentUser = (payload) => {
    return{
        type: 'CURRENT_USER',
        payload
    }
}