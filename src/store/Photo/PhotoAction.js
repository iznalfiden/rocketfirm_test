import { toJson } from "unsplash-js"
import {unsplash} from "../config"


export function getSinglePhoto(id) {
    return dispatch => {
        dispatch(getPhotoBegin());
        return unsplash.photos.getPhoto(id)
            .then(toJson)
            .then(json => {
                dispatch(getPhotoSuccess(json))
            })
            .catch(error => dispatch(getPhotoFailure(error)));
    }
}

export const GET_PHOTO_BEGIN = 'GET_PHOTO_BEGIN';
export const GET_PHOTO_SUCCESS = 'GET_PHOTO_SUCCESS';
export const GET_PHOTO_FAILURE = 'GET_PHOTO_FAILURE';

export const getPhotoBegin = () => ({
    type: GET_PHOTO_BEGIN
})

export const getPhotoSuccess = photo=> ({
    type: GET_PHOTO_SUCCESS,
    photo
})

export const getPhotoFailure = error => ({
    type: GET_PHOTO_FAILURE,
    error
})