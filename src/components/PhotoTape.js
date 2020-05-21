import React, { useEffect, useCallback} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListPhotos } from '../store/Photos/PhotosAction'
import ListPhotos from './ListPhotos'
import InfiniteScroll from 'react-infinite-scroll-component'

function PhotoTape() {

    const dispatch = useDispatch()
    const photos = useSelector(state => state.photos.items)
    let page = 1

    const getData = useCallback(() => {
        dispatch(getListPhotos(page++))
    }, [dispatch, page])


    useEffect(() => {
        getData()
    }, [getData])


    return (
        <div>
            <InfiniteScroll
                dataLength={photos}
                next={getData}
                hasMore={true}
                style={{overflow: "none", height: "none"}}
            >
                <ListPhotos photos={photos} />
            </InfiniteScroll>
        </div>
    )
}

export default PhotoTape