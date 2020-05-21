import { toJson } from "unsplash-js";
import {unsplash} from "../config"


export function getRelatedPhoto(collection) {
    return dispatch => {
        dispatch(getRelatedBegin())
        return unsplash.collections.getCollectionPhotos(collection)
            .then(toJson)
            .then(json => {
                dispatch(getRelatedSuccess(json))
            })
            .catch(error => dispatch(getRelatedFailure(error)))
    }
}

export const GET_RELATED_BEGIN = "GET_RELATED_BEGIN";
export const GET_RELATED_SUCCESS = "GET_RELATED_SUCCESS";
export const GET_RELATED_FAILURE = "GET_RELATED_FAILURE";

export const getRelatedBegin = () => ({
    type: GET_RELATED_BEGIN,
})

export const getRelatedSuccess = relatedPhoto => ({
    type: GET_RELATED_SUCCESS,
    relatedPhoto
})


export const getRelatedFailure = relatedError => ({
    type: GET_RELATED_FAILURE,
    relatedError
})