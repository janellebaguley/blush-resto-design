const initialState = {
    user: {},
    isLoggedIn: false,
    isRegistered: false
}

const GET_USER = 'GET_USER'
const REGISTER_USER = 'REGISTER_USER'
const CLEAR_USER = 'CLEAR_USER'

export function getUser(userObj){
    return {
        type: GET_USER,
        payload: userObj
    }
}

export function registerUser(user){
    return {
        type: REGISTER_USER,
        payload: user
    }
}

export function clearUser(){
    return {
        type: CLEAR_USER,
        payload: {}
    }
}

export default function reducer(state = initialState, action){
    const {type, payload} = action

    switch(type){
        case GET_USER:
            return {...state, user: payload}
        case REGISTER_USER:
            return {...state, user: payload, isRegistered: true, user: payload, isLoggedIn: true}
        case CLEAR_USER:
            return {...state, user: payload}
        default:
            return state
    }
}