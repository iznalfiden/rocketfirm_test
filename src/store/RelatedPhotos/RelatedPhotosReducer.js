import { GET_RELATED_BEGIN, GET_RELATED_SUCCESS, GET_RELATED_FAILURE } from './RelatedPhotosAction';

const initialState = {
    items: [],
    error: null,
    loading: false
}

export default function searchReducer(state = initialState, action) {
    switch (action.type) {
        case GET_RELATED_BEGIN:
            return Object.assign({}, state, {
                loading: true,
                error: null
            })
        case GET_RELATED_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                error: null,
                items: [...state.items, action.relatedPhoto],

            })
        case GET_RELATED_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                error: action.error,
                items: [],
            })
        default:
            return state
    }
}