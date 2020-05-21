import {GET_SEARCH_BEGIN, GET_SEARCH_SUCCESS, GET_SEARCH_FAILURE} from '../Search/SearchAction';

const initialState = {
    loading: false,
    items: [],
    error: null,
}

export default function searchReducer(state = initialState, action){
    switch (action.type) {
        case GET_SEARCH_BEGIN:
            return Object.assign({}, state, {
                loading: true,
                error: null
            })
        case GET_SEARCH_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                error: null,
                items: [...state.items, action.searchedPhoto],
                
            })
        case GET_SEARCH_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                error: action.searchedPhoto,
                items: [],
            })
        default: 
            return state
    }
}