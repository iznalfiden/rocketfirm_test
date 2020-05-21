import { GET_PHOTO_BEGIN, GET_PHOTO_SUCCESS, GET_PHOTO_FAILURE } from './PhotoAction';

const initialState = {
    loading: false,
    items: [],
    error: null,


}

export function photoReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PHOTO_BEGIN:
            return Object.assign({}, state, {
                loading: true,
                error: null
            })
        case GET_PHOTO_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                error: null,
                items: action.photo,

            })
        case GET_PHOTO_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                error: action.error,
                items: [],
            })
        default:
            return state
    }
}

export default photoReducer;