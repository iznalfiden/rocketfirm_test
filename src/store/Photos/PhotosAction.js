import { toJson } from "unsplash-js"
import {unsplash} from "../config"

export function getListPhotos(count) {
    
    return dispatch => {
        dispatch(getPhotosBegin());
        return unsplash.photos.listPhotos(count, 15, "latest")
            .then(toJson)
            .then(json => {
                return dispatch(getPhotosSuccess(json))
            })
            .catch(error => dispatch(getPhotosFailure(error)));
    }
}

export const GET_PHOTOS_BEGIN = 'GET_PHOTOS_BEGIN';
export const GET_PHOTOS_SUCCESS = 'GET_PHOTOS_SUCCESS';
export const GET_PHOTOS_FAILURE = 'GET_PHOTOS_FAILURE';

export const getPhotosBegin = () => ({
    type: GET_PHOTOS_BEGIN
})

export const getPhotosSuccess = photos => ({
    type: GET_PHOTOS_SUCCESS,
    photos
})

export const getPhotosFailure = error => ({
    type: GET_PHOTOS_FAILURE,
    error
})