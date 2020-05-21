import { GET_PHOTOS_BEGIN, GET_PHOTOS_SUCCESS, GET_PHOTOS_FAILURE } from './PhotosAction';

const initialState = {
    loading: false,
    items: [],
    error: null
}


export default function searchReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PHOTOS_BEGIN:
            return Object.assign({}, state, {
                loading: true,
                error: null
            })

        case GET_PHOTOS_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                error: null,
                items: [...state.items, action.photos],
                
            })
        case GET_PHOTOS_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                error: action.error,
                items: [],
            })
        default:
            return state
    }
}
