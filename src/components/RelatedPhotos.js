import React, { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRelatedPhoto } from '../store/RelatedPhotos/RelatedPhotosAction'
import RelatedPhotosItem from './RelatedPhotosItem'


function RelatedPhotos({ collectionId }) {

    const dispatch = useDispatch()
    const relatedPhotos = useSelector(state => state.relatedPhoto.items)

    const getRelatedPhotos = useCallback(() => {
        const collections = collectionId ? collectionId.results.map(item => item.id) : null
        if (collections) {
            for (let collection of collections) {
                dispatch(getRelatedPhoto(collection))
            }
        }

    }, [dispatch, collectionId])


    useEffect(() => {
        getRelatedPhotos()
    }, [getRelatedPhotos])


    return (
        <RelatedPhotosItem relatedPhotos={relatedPhotos} />
    )
}

export default RelatedPhotos;