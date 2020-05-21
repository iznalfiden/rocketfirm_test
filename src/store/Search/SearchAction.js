import { toJson } from "unsplash-js";
import { unsplash } from "../config"


export function getSearchPhoto(query) {
    return dispatch => {
        dispatch(getSearchBegin())
        return unsplash.search.photos(query, 1, 15, { orientation: "portrait" })
            .then(toJson)
            .then(json => {
                dispatch(getSearchSuccess(json))
            })
            .catch(error => dispatch(getSearchFailure(error)))
    }
}

export const GET_SEARCH_BEGIN = "GET_SEARCH_BEGIN";
export const GET_SEARCH_SUCCESS = "GET_SEARCH_SUCCESS";
export const GET_SEARCH_FAILURE = "GET_SEARCH_FAILURE";

export const getSearchBegin = () => ({
    type: GET_SEARCH_BEGIN,
})

export const getSearchSuccess = searchedPhoto => ({
    type: GET_SEARCH_SUCCESS,
    searchedPhoto
})


export const getSearchFailure = searchError => ({
    type: GET_SEARCH_FAILURE,
    searchError
})